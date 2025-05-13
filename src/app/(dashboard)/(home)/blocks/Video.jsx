"use client";

import poster from "@/assets/homepage/thumbnail.png";
import { useEffect, useRef } from "react";

const Video = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <video
      ref={vidRef}
      className="-mt-[20px]  md:mt-0"
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
