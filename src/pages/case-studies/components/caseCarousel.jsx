"use client";

import EmblaCarousel from "./emblaCaseCarousel";
import { cn } from "lib/utils";

export default function CaseStudyCarousel() {
  const SLIDE_COUNT = 6;
  const OPTIONS = { loop: true };
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className={cn("relative")}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
}
