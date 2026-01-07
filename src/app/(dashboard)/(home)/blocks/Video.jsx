"use client";

import poster from "@/assets/homepage/thumbnail.png";
import { useEffect, useRef } from "react";

const Video = ({className}) => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
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
      preload="auto"
      poster={poster}
    />
  );
};

export default Video;
