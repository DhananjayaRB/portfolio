"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";

const Stat = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
        {value}
      </div>
      <div className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
        {label}
      </div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 pb-6 pt-10">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              Tech Lead • Mobile, Web, Cloud, APIs & AI
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {profile.tagline}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
            >
              Contact
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-sm backdrop-blur transition hover:bg-white/10 dark:text-zinc-50"
            >
              View Projects
            </a>

            <a
              href="/api/resume"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-sm backdrop-blur transition hover:bg-white/10 dark:text-zinc-50"
              download
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
              <Mail className="h-4 w-4 text-indigo-500" />
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                Bangalore, India
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                10+ years of delivery
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-[2.25rem] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_55%)] blur-xl" />

          <div className="relative rounded-[2.25rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.4),transparent_55%)] ring-1 ring-white/10">
                <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-300">
                  DRB
                </span>
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {profile.title}
                </div>
                <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  ResolveBiz • Enterprise SaaS
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Stat value="10+" label="Years in production delivery" />
              <Stat value="Azure" label="Cloud architecture & cost focus" />
              <Stat value=".NET" label=".NET Core • ASP.Net Web & Windows Forms" />
              <Stat value="APIs" label="REST • GraphQL • Integrations" />
            </div>

            <motion.div
              className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                Focus Areas
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "Payroll & HR",
                  "CRM & Integrations",
                  ".NET Core / .NET",
                  "REST APIs",
                  "GraphQL APIs",
                  "DSC Integration",
                  "Microservices",
                  "CI/CD",
                  "Kubernetes",
                  "AI Integrations",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-zinc-700 dark:text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

