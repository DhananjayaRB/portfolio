"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "@/data/portfolio";
import { Filter, Sparkles } from "lucide-react";

const Chip = ({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full border px-4 py-2 text-xs font-semibold backdrop-blur transition",
        active
          ? "border-indigo-500/40 bg-indigo-600/15 text-indigo-700 dark:border-indigo-400/30 dark:text-indigo-300"
          : "border-white/10 bg-white/5 text-zinc-700 hover:bg-white/10 dark:text-zinc-200",
      ].join(" ")}
    >
      {label}
    </button>
  );
};

export default function ProjectsSection() {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
            Projects
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
            A curated set of systems you can filter by category (Payroll, CRM,
            Cloud, AI, Integrations, and more).
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <Filter className="h-5 w-5 text-indigo-500" />
          <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
            Showing{" "}
            <span className="text-indigo-700 dark:text-indigo-300">
              {activeTag}
            </span>{" "}
            • {filtered.length} projects
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        <Chip
          active={activeTag === "All"}
          label="All"
          onClick={() => setActiveTag("All")}
        />
        {allTags.map((tag) => (
          <Chip
            key={tag}
            active={activeTag === tag}
            label={tag}
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </div>

      <motion.div
        className="mt-10 grid gap-5 md:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        {filtered.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: idx * 0.04 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
          >
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_60%)] blur-xl transition group-hover:opacity-100 opacity-90" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
                    {p.title}
                  </h3>
                  {p.year ? (
                    <div className="mt-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                      {p.year}
                    </div>
                  ) : null}
                </div>
                {p.tags.includes("AI") ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    AI
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {p.description}
              </p>

              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-zinc-700 backdrop-blur dark:text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                  Case study: available on request
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}

