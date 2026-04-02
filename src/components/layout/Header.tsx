"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import ProfileImageExpandable from "@/components/profile/ProfileImageExpandable";
import { profile, socialLinks } from "@/data/portfolio";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const brand = useMemo(
    () => `${profile.name.split(" ")[0]} ${profile.name.split(" ").slice(1).join(" ")}`,
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-white/5",
        "bg-white/60 backdrop-blur dark:bg-black/60",
        scrolled ? "shadow-sm" : "",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <ProfileImageExpandable
            alt={`${profile.name} profile`}
            thumbSizes="40px"
            thumbClassName="h-10 w-10 rounded-2xl"
            thumbButtonClassName="bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_60%)]"
          />
          <a href="#top" className="min-w-0">
            <span className="block truncate text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {brand}
            </span>
            <span className="block truncate text-xs text-zinc-600 dark:text-zinc-400">
              {profile.title}
            </span>
          </a>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm backdrop-blur transition hover:bg-white/10 dark:text-zinc-50"
          >
            Hire Me
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={socialLinks.resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-950 backdrop-blur transition dark:text-zinc-50 sm:inline-flex"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-900 backdrop-blur dark:text-zinc-50"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <div className="rounded-2xl border border-white/10 bg-white/70 p-3 backdrop-blur dark:bg-black/70">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-900 hover:bg-white/10 dark:text-zinc-50"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white"
                >
                  Hire Me
                </a>
                <a
                  href={socialLinks.resumeDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-sm font-semibold text-zinc-950 backdrop-blur dark:text-zinc-50"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

