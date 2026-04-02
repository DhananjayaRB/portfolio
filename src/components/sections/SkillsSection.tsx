import { skills } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
            Skills
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
            Categorized expertise across mobile, backend, cloud/DevOps, databases,
            and integration delivery.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs font-medium text-zinc-700 backdrop-blur dark:text-zinc-300">
          Tip: these skills map directly to the projects below.
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="text-sm font-extrabold text-zinc-950 dark:text-zinc-50">
              {group.title}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur dark:text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

