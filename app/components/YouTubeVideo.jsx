import React from 'react';
import {useMediaQuery} from 'react-responsive';

const MobileVideo = ({playVideo}) => {
  const embedUrl = `https://www.youtube.com/embed/TUeHBWEZr0A`;
  return (
    <div className="w-full h-full mx-auto">
      <div className="relative rounded-lg" cursor-pointer>
        <img className='relative' src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/youtube_thumbnail.jpg?v=1712992484" alt="Youtube Video"></img>
        <img className='absolute top-[50%] left-[50%]' src="/youtube_icon.png" />
        {/* <iframe
          className="rounded-lg w-full h-60"
          src={embedUrl}
          frameborder="0"
          allowfullscreen
        ></iframe> */}
      </div>
    </div>
  );
};

const DesktopVideo = ({playVideo}) => {
  const embedUrl = `https://www.youtube.com/embed/TUeHBWEZr0A`;
  return (
    <div className="w-4/5 mx-auto">
      <div className="relative rounded-2xl p-10 cursor-pointer">
        <img onClick={()=> playVideo() } className='relative' src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/youtube_thumbnail.jpg?v=1712992484" alt="Youtube Video"></img>
        <img className='absolute top-[50%] left-[50%]' src="/youtube_icon.png" />
        {/* <iframe
          title="YouTube Video"
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          src={embedUrl}
          allowFullScreen
        ></iframe> */}
      </div>
    </div>
  );
};

const YouTubeVideo = () => {
  //const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const embedUrl = `https://www.youtube.com/embed/TUeHBWEZr0A`;
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const isSmall = useMediaQuery({maxWidth: 640});

  const playVideo =()=>{
    window.open(embedUrl,"_blank")
  }

  return (
    <div>
      {isLargeScreen && <DesktopVideo playVideo={playVideo}></DesktopVideo>}
      {isSmall && <MobileVideo playVideo={playVideo}></MobileVideo>}
    </div>
  );
};

export default YouTubeVideo;
