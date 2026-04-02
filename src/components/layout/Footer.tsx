import { profile } from "@/data/portfolio";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/40 py-10 backdrop-blur dark:bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
            {profile.name}
          </span>
          <span className="text-xs text-zinc-600 dark:text-zinc-400">
            {year} • {profile.title} • Bangalore, India
          </span>
        </div>

        <div className="flex flex-wrap gap-3 text-sm font-medium">
          <a className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50" href="#projects">
            Projects
          </a>
          <a className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50" href="#experience">
            Experience
          </a>
          <a className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

