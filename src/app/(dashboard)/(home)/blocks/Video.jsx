"use client";

import { useRef, useEffect, useState } from "react";
import poster from "@/assets/homepage/thumbnail.png";

const Video = () => {
  const vidRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, threshold: 0.1 }
    );

    if (vidRef.current) {
      observer.observe(vidRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && vidRef.current) {
      vidRef.current.play();
    }
  }, [isVisible]);

  return (
    <video
      ref={vidRef}
      className="mt-[68px] w-full h-auto"
      id="bg_vid"
      playsInline
      muted
      loop
      controls=""
      preload="none"
      poster={poster}
    >
      <source src="/homepage/video.webm" type="video/webm" />
      <source src="/homepage/video.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
