export default function LandingPage() {
  const features = [
    {
      title: "Fast setup",
      description:
        "Launch quickly with a clean, conversion-focused experience built to guide visitors to action.",
    },
    {
      title: "Modern design",
      description:
        "A polished layout with strong hierarchy, soft shadows, and responsive sections that feel premium.",
    },
    {
      title: "Built to convert",
      description:
        "Clear messaging, trust signals, and simple calls to action that keep attention on your offer.",
    },
  ];

  const stats = [
    { value: "10k+", label: "Customers reached" },
    { value: "98%", label: "Satisfaction rate" },
    { value: "24/7", label: "Support coverage" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="text-xl font-bold tracking-tight">YourBrand</div>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-900">
              Features
            </a>
            <a href="#about" className="transition hover:text-slate-900">
              About
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Contact
            </a>
          </nav>
          <button className="rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02]">
            Get Started
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(14,165,233,0.16),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 shadow-sm">
                New launch • Designed for growth
              </div>
              <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                A landing page that makes your product impossible to ignore.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Showcase your offer with a sharp headline, persuasive copy, and a sleek experience that helps turn visitors into customers.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-2xl bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-lg shadow-slate-300 transition hover:scale-[1.02]">
                  Start Free
                </button>
                <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                  Book a Demo
                </button>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="text-2xl font-semibold text-slate-950">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200">
                <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-300">Growth Dashboard</p>
                      <h2 className="mt-1 text-2xl font-semibold">Performance snapshot</h2>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-sm">Live</div>
                  </div>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-white/5 p-5">
                      <p className="text-sm text-slate-300">Monthly revenue</p>
                      <p className="mt-2 text-3xl font-semibold">$48,200</p>
                      <p className="mt-2 text-sm text-emerald-300">+18.4% this month</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-5">
                      <p className="text-sm text-slate-300">New signups</p>
                      <p className="mt-2 text-3xl font-semibold">1,284</p>
                      <p className="mt-2 text-sm text-sky-300">Strong conversion trend</p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl bg-white/5 p-5">
                    <div className="mb-4 flex items-end justify-between">
                      <p className="text-sm text-slate-300">Weekly traffic</p>
                      <p className="text-sm text-slate-400">Updated just now</p>
                    </div>
                    <div className="flex h-40 items-end gap-3">
                      {[35, 58, 42, 76, 64, 88, 72].map((height, i) => (
                        <div key={i} className="flex-1 rounded-t-2xl bg-gradient-to-t from-sky-400 to-indigo-400" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Why teams choose us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Everything you need to present your offer with confidence.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white">
                  {feature.title.charAt(0)}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-slate-50/70">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                About the platform
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Built for ambitious launches, refined for everyday growth.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                This layout combines premium visuals with practical structure so teams can explain their value quickly, establish trust, and move visitors toward the next step without distraction.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium text-slate-500">What you get</p>
              <ul className="mt-6 space-y-4 text-slate-700">
                {[
                  'Clear visual hierarchy for your headline and offer',
                  'High-contrast calls to action that stand out',
                  'Responsive sections that stay polished on every screen',
                  'Reusable content blocks for future marketing experiments',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Ready to launch?
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Give your next product release a page people remember.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Start with a clean, persuasive landing page and adapt it to your brand, messaging, and campaign goals in minutes.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-lg shadow-slate-300 transition hover:scale-[1.02]">
              Launch now
            </button>
            <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
              Talk to sales
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
