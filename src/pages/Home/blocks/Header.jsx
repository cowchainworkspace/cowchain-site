import React, { useEffect, useState } from "react";
import video_bg from "../../../assets/homepage/element-compress.mp4";
import poster from "../../../assets/homepage/thumbnail.png";
import upwork from "../../../assets/homepage/upwork.svg";
import clutch from "../../../assets/homepage/clutch.svg";
import bg_top from "../../../assets/bg/header_top.png";
import bg_top_lg from "../../../assets/bg/header_top_lg.png";
import ModalVideo from "react-modal-video";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [isOpen, setOpen] = useState(false);
  return (
    <section
      className="fullheight overflow-hidden border-b border-b-th-fade"
      id="header"
    >
      <div className="video-wrapper min-h-full">
        <video id="bg_vid" playsInline autoPlay muted loop poster={poster}>
          <source src={video_bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <script>document.getElementById('bg_vid').play();</script>
        <div className="px-default flex flex-col relative pb-8 w-full min-h-full">
          <img
            srcSet={`${bg_top} 360w, ${bg_top} 480w, ${bg_top} 720w, ${bg_top_lg} 1920w`}
            sizes="(max-width: 640px) 100vw, 100vw"
            alt="Photo 1"
            className="absolute top-0 left-0 w-full"
            src={bg_top_lg}
          />
          <h1 className="mt-8 md:mt-16 lg:mt-24 relative">
            COWCHAIN. <br></br> DEVELOPERS OF WEB3
          </h1>
          <div className="mt-auto grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center relative md:gap-x-1">
              <a
                href="https://www.upwork.com/ag/cowchain/"
                rel="nofollow"
                target="_blank"
              >
                <img className="w-12 md:w-16" src={upwork} alt=""></img>
              </a>
              <a
                href="https://clutch.co/profile/cowchain"
                rel="nofollow"
                target="_blank"
              >
                <img className="w-12 md:w-16" src={clutch} alt=""></img>
              </a>
            </div>
            <div className="my-4 flex flex-col gap-y-4 lg:pl-[5vw] xl:pl-[15vw]">
              <h2>We turn your startup ideas into viable Web3 businesses</h2>
              <div className="md:flex md:justify-between md:items-center md:mt-4">
                <div className="flex flex-col gap-y-1">
                  <p className="body1">Mykhailo Adzhoiev</p>
                  <p className="caption">Founder & CTO</p>
                </div>
                <button
                  className="btn-play mt-4 md:mt-0"
                  onClick={() => setOpen(true)}
                >
                  <div className="flex items-center justify-center gap-x-2">
                    <div className="mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                      >
                        <path
                          d="M12 7L-6.52533e-07 13.9282L-4.68497e-08 0.0717964L12 7Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    WATCH INTERVIEW
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          youtube={{
            mute: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            disablekb: 1,
          }}
          autoplay
          start
          isOpen={isOpen}
          videoId="0L38Z9hIi5s"
          ratio={screenWidth > 768 ? "16:9" : "1:1"}
          onClose={() => setOpen(false)}
        />
      </div>
    </section>
  );
};

export default Header;
