import { techStack } from "@/data/portfolio";

export default function TechStackSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
            Tech Stack Visualization
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
            A quick visual overview of the technologies used across mobile,
            backend systems, cloud infrastructure, and integrations.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-zinc-700 backdrop-blur dark:text-zinc-200">
          Hover cards for visual emphasis
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((t) => (
          <div
            key={t.label}
            className="group rounded-[1.8rem] border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_60%)] ring-1 ring-white/10">
                  <span className="text-sm font-extrabold text-indigo-700 dark:text-indigo-300">
                    {t.short}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-extrabold text-zinc-950 dark:text-zinc-50">
                    {t.label}
                  </div>
                  <div className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    Technology
                  </div>
                </div>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-zinc-700 dark:text-zinc-200 group-hover:inline-flex">
                Used
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

