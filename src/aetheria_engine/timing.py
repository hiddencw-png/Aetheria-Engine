"""Timing helpers for deterministic fixed-step simulation."""

from __future__ import annotations

from dataclasses import dataclass
import math


@dataclass(slots=True)
class FixedStepClock:
    """Accumulates frame time into deterministic fixed simulation steps.

    The implementation guards against three common engine timing bugs:
    - negative or non-finite frame deltas corrupting the accumulator,
    - giant frame hitches causing an unbounded catch-up spiral, and
    - tiny floating-point residue leaving the clock permanently behind.
    """

    step_seconds: float
    max_frame_delta: float = 0.25
    max_catch_up_steps: int = 8
    _accumulator: float = 0.0

    def __post_init__(self) -> None:
        if self.step_seconds <= 0:
            raise ValueError("step_seconds must be positive")
        if self.max_frame_delta <= 0:
            raise ValueError("max_frame_delta must be positive")
        if self.max_catch_up_steps <= 0:
            raise ValueError("max_catch_up_steps must be positive")

    @property
    def accumulator(self) -> float:
        return self._accumulator

    def consume_frame(self, delta_seconds: float) -> int:
        """Add a frame delta and return how many fixed steps should run."""
        if not math.isfinite(delta_seconds) or delta_seconds <= 0:
            return 0

        clamped_delta = min(delta_seconds, self.max_frame_delta)
        self._accumulator = min(
            self._accumulator + clamped_delta,
            self.step_seconds * self.max_catch_up_steps,
        )

        steps = min(
            int((self._accumulator + 1e-12) // self.step_seconds),
            self.max_catch_up_steps,
        )
        if steps:
            self._accumulator -= steps * self.step_seconds
            if self._accumulator < 1e-12:
                self._accumulator = 0.0
        return steps

    def interpolation_alpha(self) -> float:
        """Return the render interpolation factor in the range [0.0, 1.0)."""
        alpha = self._accumulator / self.step_seconds
        return min(max(alpha, 0.0), 0.999999999999)
