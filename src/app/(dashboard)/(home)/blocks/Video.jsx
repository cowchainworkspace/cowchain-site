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
      className="mt-[68px] h-auto w-full !max-w-[896px] px-[20px] sm:px-[70px] md:px-[150px] !object-contain"
      id="bg_vid"
      playsInline
      src="/homepage/video.webm"
      muted
      loop
      controls=""
      preload="none"
      poster={poster}
    ></video>
  );
};

export default Video;
