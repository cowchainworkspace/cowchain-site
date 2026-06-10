"use client";

import poster from "@/assets/homepage/thumbnail.png";
import { useEffect, useRef } from "react";

const Video = ({ className }) => {
  const vidRef = useRef();

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;

    // With preload="none", play() triggers the actual download. Defer it until
    // after the page has loaded so the lightweight poster is the LCP and the
    // video bytes don't compete with the initial render.
    const start = () => {
      v.play().catch(() => {});
    };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
      return () => window.removeEventListener("load", start);
    }
  }, []);

  return (
    <video
      className={className}
      ref={vidRef}
      id="bg_vid"
      playsInline
      muted
      loop
      src={"/homepage/video.mp4"}
      preload="none"
      poster={poster.src}
    />
  );
};

export default Video;
