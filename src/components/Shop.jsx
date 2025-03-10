"use client";
import React, { useState } from "react";
import Image from "next/image";

const Shop = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const youtubeHandler = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <div className="border-y-[4px] border-solid border-[#000000] w-full h-[39px] bg-[#8B8581]"></div>
      <div className='bg-center bg-cover bg-no-repeat h-[900px] relative bg-[url("/assets/images/tv-room.webp")] max-w-[1920px] mx-auto'>
        <div className="max-w-[634px] ml-auto">

          <Image
            src="/assets/images/toons-heading.webp"
            width={555}
            height={155}
            alt="heading"
            className="w-full max-w-[555px] max-md:max-w-[348px] mx-auto pt-[110px] pointer-events-none"
          />
        </div>

        <Image
          src="/assets/images/front-of-tv.webp"
          alt="watching-tv"
          width={668}
          height={524}
          className="w-full max-w-[668px] absolute bottom-0 right-0 z-10"
        />

<div
          onClick={youtubeHandler}
          className="bg-cover bg-center bg-no-repeat max-w-[477px] mt-4 max-xl:left-[44.5%] 2xl:h-[495px] absolute 2xl:top-[60.9%] xl:top-[58%] max-xl:top-[58%] left-[45.8%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
        >
          {!isVideoPlaying ? (
            <Image
              src="/assets/images/video.webp"
              alt="Video Thumbnail"
              width={477}
              height={339}
              className="w-full h-full rounded-3xl object-cover"
            />
          ) : (
            <iframe
              src="https://www.youtube.com/embed/dLKYFu_sMTM?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="max-w-[800px] max-h-[500px] rounded-3xl"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;