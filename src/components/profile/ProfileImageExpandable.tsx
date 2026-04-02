"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const SRC = "/api/profile-image";

type Props = {
  alt: string;
  thumbSizes: string;
  thumbClassName: string;
  thumbButtonClassName?: string;
  withThumbGradient?: boolean;
};

export default function ProfileImageExpandable({
  alt,
  thumbSizes,
  thumbClassName,
  thumbButtonClassName = "",
  withThumbGradient = false,
}: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className={`relative inline-flex shrink-0 cursor-pointer overflow-hidden p-0 ring-1 ring-white/10 focus:outline-none ${thumbClassName} ${thumbButtonClassName}`}
        aria-label="View larger profile photo"
        aria-haspopup="dialog"
        aria-expanded={lightboxOpen}
      >
        <Image
          src={SRC}
          alt={alt}
          fill
          sizes={thumbSizes}
          className="object-cover"
          priority
        />
        {withThumbGradient ? (
          <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />
        ) : null}
      </button>

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-[1.75rem] shadow-2xl ring-2 ring-white/20 sm:max-w-xl md:max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[min(85vh,820px)] w-full bg-zinc-950/50 dark:bg-zinc-950/80">
              <Image
                src={SRC}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-contain p-2"
                priority
              />
            </div>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/85 text-white ring-1 ring-white/25 backdrop-blur"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
