"use client";

import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import { ExternalLink, Mail, Phone, Send } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<
    | { type: "idle" }
    | { type: "error"; message: string }
    | { type: "success"; message: string }
  >({ type: "idle" });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setResult({ type: "idle" });

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) {
      setResult({ type: "error", message: "Please enter your name." });
      return;
    }
    if (!isValidEmail(email)) {
      setResult({ type: "error", message: "Please enter a valid email." });
      return;
    }
    if (message.length < 10) {
      setResult({
        type: "error",
        message: "Message should be at least 10 characters.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form }),
      });

      if (!res.ok) {
        setResult({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
        return;
      }

      setResult({
        type: "success",
        message:
          "Thanks! Your message was received. (In this demo it's logged server-side; replace API with real email sending when ready.)",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setResult({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
            Contact
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
            Send a message or connect on social. I&apos;m available for enterprise
            SaaS, cloud architecture, and AI-integrated product work.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${socialLinks.email}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-zinc-950 backdrop-blur hover:bg-white/10 dark:text-zinc-50"
            >
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-indigo-500" />
                {socialLinks.email}
              </div>
            </a>
            <a
              href={`tel:${socialLinks.phonePrimary}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-zinc-950 backdrop-blur hover:bg-white/10 dark:text-zinc-50"
            >
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-indigo-500" />
                {socialLinks.phonePrimary} / {socialLinks.phoneSecondary}
              </div>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-zinc-950 backdrop-blur hover:bg-white/10 dark:text-zinc-50"
            >
              <div className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-indigo-500" />
                LinkedIn
              </div>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-zinc-950 backdrop-blur hover:bg-white/10 dark:text-zinc-50"
            >
              <div className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-indigo-500" />
                GitHub
              </div>
            </a>
            <a
              href={socialLinks.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-zinc-950 backdrop-blur hover:bg-white/10 dark:text-zinc-50"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-700 dark:text-indigo-300">
                  ↧
                </span>
                Resume PDF
              </div>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                Name
              </label>
              <input
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 outline-none focus:border-indigo-500/40 dark:text-zinc-50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                Email
              </label>
              <input
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 outline-none focus:border-indigo-500/40 dark:text-zinc-50"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                className="mt-2 min-h-[140px] w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 outline-none focus:border-indigo-500/40 dark:text-zinc-50"
                placeholder="Tell me about your project, timeline, and what you need help with."
              />
            </div>

            {result.type === "error" ? (
              <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-700 dark:text-rose-300">
                {result.message}
              </div>
            ) : null}
            {result.type === "success" ? (
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                {result.message}
              </div>
            ) : null}

            <button
              disabled={submitting}
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

