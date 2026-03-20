'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  ChartNoAxesCombined,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast setup',
    description:
      'Ship a polished launch page in minutes with structured sections that already know how to convert.',
  },
  {
    icon: Sparkles,
    title: 'Modern design',
    description:
      'Blend cinematic gradients, soft glass surfaces, and confident typography into a premium first impression.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to convert',
    description:
      'Guide visitors from awareness to action with trust cues, social proof, and obvious next steps.',
  },
];

const stats = [
  { value: '10k+', label: 'Customers reached' },
  { value: '98%', label: 'Satisfaction rate' },
  { value: '24/7', label: 'Support coverage' },
];

const pillars = [
  'Clear messaging blocks for headline, proof, and CTA',
  'Reusable sections that adapt to launches, waitlists, and product demos',
  'Responsive layout that stays sharp from phone screens to desktop',
  'Visual rhythm designed to keep attention moving down the page',
];

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)] opacity-40" />
      <div className="absolute left-1/2 top-0 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/30">
              <Bot className="h-5 w-5 text-cyan-200" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/80">
                Aetheria
              </p>
              <p className="text-base font-semibold text-white">Engine</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/20"
          >
            Book intro
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-100/90 shadow-glow">
            <Gauge className="h-4 w-4" />
            New launch · Optimized for momentum
          </div>
          <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            A launch page that makes your product feel impossible to ignore.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Turn curiosity into action with a cinematic landing page that blends modern UI, compelling messaging, and conversion-first structure.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-slate-100 transition hover:border-white/30 hover:bg-white/10"
            >
              View overview
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="text-3xl font-semibold text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-white/10 bg-slate-900/90 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-cyan-200/80">Growth dashboard</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Performance snapshot</h2>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Live
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Monthly revenue</p>
                  <p className="mt-3 text-3xl font-semibold text-white">$48,200</p>
                  <p className="mt-2 text-sm text-emerald-300">+18.4% this month</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">New signups</p>
                  <p className="mt-3 text-3xl font-semibold text-white">1,284</p>
                  <p className="mt-2 text-sm text-cyan-300">Strong conversion trend</p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm text-slate-400">Weekly traffic</p>
                  <ChartNoAxesCombined className="h-4 w-4 text-cyan-300" />
                </div>
                <div className="flex h-44 items-end gap-3">
                  {[35, 58, 42, 76, 64, 88, 72].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.6, delay: 0.25 + index * 0.05 }}
                      className="flex-1 rounded-t-[1.25rem] bg-gradient-to-t from-cyan-400 via-sky-300 to-indigo-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
            Why teams choose Aetheria
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Everything you need to launch with confidence and keep the page feeling premium.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 ring-1 ring-cyan-200/20">
                  <Icon className="h-6 w-6 text-cyan-200" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
              About the platform
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Built for ambitious launches, refined for everyday growth.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Aetheria Engine gives founders and growth teams a launch-ready shell for campaigns, demos, and waitlists—so the page looks custom without slowing execution.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              What you get
            </p>
            <ul className="mt-6 space-y-4">
              {pillars.map((item) => (
                <li key={item} className="flex gap-3 text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="rounded-[2.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 via-slate-900 to-slate-900 p-10 text-center shadow-glow md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
            Ready to launch?
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Give your next product release a page people remember.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Start with a striking, conversion-minded foundation and customize the messaging, proof, and calls to action to match your campaign.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:launch@aetheria.engine"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Launch now
            </a>
            <a
              href="mailto:launch@aetheria.engine?subject=Book%20a%20demo"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-slate-100 transition hover:border-white/30 hover:bg-white/10"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
