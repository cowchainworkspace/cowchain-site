"use client";

import { useOpenForm } from "@/hooks/useOpenForm";
import { useEffect, useState } from "react";

/**
 * Sticky mobile call-to-action bar.
 * Appears fixed at the bottom on phones once the user scrolls, and opens the
 * global contact-form modal (same funnel as the on-page "Get in touch" CTA).
 */
export default function MobileCtaBar() {
  const { setOpenForm } = useOpenForm();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[60] md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-white/10 bg-black/90 px-4 py-3 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setOpenForm(true)}
          className="flex w-full items-center justify-center rounded-full bg-white py-3 text-sm font-semibold uppercase tracking-wide text-black active:scale-[0.99]"
        >
          Get in touch
        </button>
      </div>
    </div>
  );
}
