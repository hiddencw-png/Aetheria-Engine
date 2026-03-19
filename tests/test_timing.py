import math

import pytest

from aetheria_engine import FixedStepClock


def test_regular_frame_accumulates_into_single_step():
    clock = FixedStepClock(step_seconds=1 / 60)

    assert clock.consume_frame(1 / 120) == 0
    assert clock.consume_frame(1 / 120) == 1
    assert clock.accumulator == pytest.approx(0.0)


def test_negative_and_non_finite_deltas_are_ignored():
    clock = FixedStepClock(step_seconds=0.02)

    assert clock.consume_frame(-0.1) == 0
    assert clock.consume_frame(math.inf) == 0
    assert clock.consume_frame(math.nan) == 0
    assert clock.accumulator == 0.0


def test_large_hitch_is_clamped_to_prevent_spiral_of_death():
    clock = FixedStepClock(step_seconds=0.02, max_frame_delta=0.1, max_catch_up_steps=3)

    assert clock.consume_frame(1.5) == 3
    assert clock.accumulator == pytest.approx(0.0)
    assert clock.interpolation_alpha() == pytest.approx(0.0)


def test_tiny_rounding_residue_does_not_leave_clock_stuck():
    clock = FixedStepClock(step_seconds=0.1, max_frame_delta=1.0)

    assert clock.consume_frame(0.3) == 3
    assert clock.accumulator == pytest.approx(0.0)


def test_invalid_configuration_is_rejected():
    with pytest.raises(ValueError):
        FixedStepClock(step_seconds=0)
    with pytest.raises(ValueError):
        FixedStepClock(step_seconds=0.01, max_frame_delta=0)
    with pytest.raises(ValueError):
        FixedStepClock(step_seconds=0.01, max_catch_up_steps=0)
