"use client";

import { useOpenForm } from "@/hooks/useOpenForm";

/**
 * Inline call-to-action strip placed between page sections.
 * Opens the global contact-form modal (same funnel as the main CTA).
 */
export default function CtaStrip({
  text = "Have a project in mind?",
  buttonLabel = "Get a free quote",
  className = ""
}) {
  const { setOpenForm } = useOpenForm();

  return (
    <section
      className={`relative z-[15] border-b border-t border-b-th-fade border-t-th-fade ${className}`}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-5 py-12 text-center md:flex-row md:justify-between md:px-8 md:py-16 md:text-left lg:px-16">
        <p className="text-2xl font-medium uppercase leading-[1.1] text-white lg:text-[32px]">
          {text}
        </p>
        <button
          type="button"
          onClick={() => setOpenForm(true)}
          className="whitespace-nowrap rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black transition-transform active:scale-[0.99]"
        >
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}
