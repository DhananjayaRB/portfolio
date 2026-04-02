"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function ExperienceTimeline() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
            Experience Timeline
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
            A year-by-year progression from Xamarin mobile delivery to cloud/DevOps
            leadership and AI-enabled architecture.
          </p>
        </div>
        <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-right backdrop-blur sm:block">
          <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-300">
            Total
          </div>
          <div className="mt-1 text-2xl font-extrabold text-zinc-950 dark:text-zinc-50">
            10+ Years
          </div>
        </div>
      </div>

      <div className="mt-10 relative">
        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/60 via-white/10 to-emerald-500/40 dark:from-indigo-400/50 dark:to-emerald-400/30" />

        <div className="space-y-6">
          {experience.map((item, idx) => (
            <motion.div
              key={`${item.from}-${item.to}-${item.role}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="relative grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur sm:grid-cols-[120px_1fr]"
            >
              <div className="relative">
                <div className="absolute -left-5 top-2 h-10 w-10 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_62%)] ring-1 ring-white/10" />
                <div className="ml-2">
                  <div className="text-sm font-extrabold text-indigo-700 dark:text-indigo-300">
                    {item.from}–{item.to}
                  </div>
                  <div className="mt-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    Role progression
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {item.role}
                </div>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {item.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                {item.achievements?.length ? (
                  <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                      Achievement:
                    </span>{" "}
                    {item.achievements.join(" • ")}
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

