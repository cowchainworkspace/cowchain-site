"use client";

import { useRef, useEffect } from "react";
import poster from "@/assets/homepage/thumbnail.png";

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
      controls=""
      src={"/homepage/video.mp4"}
      preload="auto"
      poster={poster}
    ></video>
  );
};

export default Video;
