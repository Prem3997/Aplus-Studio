import React, { useRef, useState } from "react";

const VideoCard = () => {
  const [showControls, setShowControls] = useState(false);
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
    setShowControls(true);
  };
  const handlePauseVideo = () => {
    vidRef.current.pause();
    setShowControls(false);
  };
  return (
    <div className="relative flex flex-col items-center justify-center">
      <video
        width="550"
        height="372"
        className="rounded-[32px] relative"
        ref={vidRef}
        poster="/assets/agency_poster.jpg"
      >
        <source src="./videos/agency.mp4" type="video/mp4" />
      </video>
      {!showControls && (
        <img
          src="/assets/play.png"
          className="cursor-pointer absolute opacity-90 hover:opacity-90 shadow-2xl hover:scale-105"
          onClick={handlePlayVideo}
          alt="Play"
        />
      )}
      {showControls && (
        <img
          src="/assets/pause.png"
          className="cursor-pointer absolute opacity-10 hover:opacity-50"
          onClick={handlePauseVideo}
          alt="Pause"
        />
      )}
    </div>
  );
};

export default VideoCard;
