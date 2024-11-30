"use client";

import { useRef, useEffect, memo } from "react";
import poster from "@/assets/homepage/thumbnail.png";

const Video = memo(() => {
  const vidRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && vidRef.current) {
          vidRef.current.load();
          vidRef.current.play();
        }
      },
      { root: null, threshold: 0.2 }
    );

    if (vidRef.current) {
      observer.observe(vidRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <video
      ref={vidRef}
      className="mt-[68px]"
      id="bg_vid"
      playsInline
      muted
      loop
      controls=""
      src={"/homepage/video.mp4"}
      preload="none"
      poster={poster}
    ></video>
  );
});

export default Video;
