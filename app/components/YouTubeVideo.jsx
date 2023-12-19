import React from 'react';
import {useMediaQuery} from 'react-responsive';

const MobileVideo = () => {
  const embedUrl = `https://www.youtube.com/embed/TUeHBWEZr0A`;

  return (
    <div className="w-full h-full mx-auto">
      <div className="relative rounded-lg">
        <h1 className="text-center mt-0 lg:text-[28px] text-[20px]">
          Demo Header for YouTube Video
        </h1>
        <iframe
          className="rounded-lg w-full h-50"
          src={embedUrl}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

const DesktopVideo = () => {
  const embedUrl = `https://www.youtube.com/embed/TUeHBWEZr0A`;

  return (
    <div className="w-4/5 mx-auto ">
      <div
        className="relative rounded-2xl p-20"
        style={{paddingBottom: '35.25%'}}
      >
        <h1 className="text-center">Demo Header for YouTube Video</h1>
        <iframe
          title="YouTube Video"
          className="absolute top-0 left-0 w-full h-full rounded-2xl p-20"
          src={embedUrl}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const YouTubeVideo = () => {
  //const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const embedUrl = `https://www.youtube.com/embed/TUeHBWEZr0A`;
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const isSmall = useMediaQuery({maxWidth: 640});

  return (
    <div>
      {isLargeScreen && <DesktopVideo></DesktopVideo>}
      {isSmall && <MobileVideo></MobileVideo>}
    </div>
  );
};

export default YouTubeVideo;
