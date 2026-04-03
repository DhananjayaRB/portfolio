import { Building2, Code2, ShieldCheck, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-2 md:pt-4">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
            About Me
          </h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            {profile.aboutSummary}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-700 backdrop-blur dark:text-zinc-200">
              {profile.location}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-700 backdrop-blur dark:text-zinc-200">
              DOB: {profile.dob}
            </span>
          </div>
        </div>

        <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-md">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <Code2 className="h-5 w-5 text-indigo-500" />
            <div className="mt-2 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Product Engineering
            </div>
            <div className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              End-to-end delivery across mobile/web/cloud
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <Building2 className="h-5 w-5 text-emerald-500" />
            <div className="mt-2 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Enterprise SaaS
            </div>
            <div className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Payroll, Attendance, CRM, and HR workflows
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <ShieldCheck className="h-5 w-5 text-amber-500" />
            <div className="mt-2 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Security & Platform
            </div>
            <div className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              MFA/SSO, SSL, integrations safety
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <Sparkles className="h-5 w-5 text-fuchsia-500" />
            <div className="mt-2 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              AI Integration
            </div>
            <div className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              LLM/agent-style workflows for real products
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

