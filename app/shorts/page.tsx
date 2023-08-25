"use client";

import { Carousel, IconButton } from "@material-tailwind/react";
import { useRef, useState } from "react";

export default function CarouselCustomArrows() {
  return (
    <div className="flex justify-center items-center  ">
      <div className="w-[100vw] lg:w-[30vw] h-[100vh] lg:h-[90vh] lg:mt-10 flex items-center z-20">
        <Carousel
          className=" lg:rounded-xl"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute top-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {Data.map((card, i) => (
                <>
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
               
                  </> ))}

            </div>
          )}
        >
          {Data.map((card, i) => {
            if (card.type === "image") {
              return (
                <div className="w-full h-full" key={i}>
                 <span className="absolute bottom-6 text-white left-4 font-semibold text-lg">{card.title}</span> 
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                   
                  />
                </div>
              );
            } else {
              return (
                <>
                  
                  <VideoComponenet card={card} i={i} />
                </>
              );
            }
          })}
        </Carousel>
      </div>
    </div>
  );
}

const Data = [
  {
    image:
      "https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title: "how money is made 1",
    category: "Finance",
    chart: "featured",
    type: "image",
  },
  {
    image:
      "https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title: "how money is made 2",
    category: "Finance",
    chart: "featured",
    type: "image",
  },
  {
    image:
      "https://media.nojoto.com/content/media/28517418/2023/07/feed/68ed08e2f7e592ef4a21899dedc13e73/68ed08e2f7e592ef4a21899dedc13e73_default.mp4",
    title: "how money is grown 3",
    category: "Finance",
    chart: "featured",
    type: "video",
  },
  {
    image:
      "https://media.nojoto.com/content/media/28574381/2023/08/feed/84adefd775af962b3c23b5968f69c184/84adefd775af962b3c23b5968f69c184_default.mp4",
    title: "how money is made",
    category: "Finance",
    chart: "featured",
    type: "video",
  },
  {
    image:
      "https://media.nojoto.com/content/media/28574381/2023/08/feed/84adefd775af962b3c23b5968f69c184/84adefd775af962b3c23b5968f69c184_default.mp4",
    title: "how money is made 4",
    category: "Finance",
    chart: "featured",
    type: "video",
  },
  {
    image:
      "https://media.nojoto.com/content/media/28574381/2023/08/feed/84adefd775af962b3c23b5968f69c184/84adefd775af962b3c23b5968f69c184_default.mp4",
    title: "how money is made 5",
    category: "Finance",
    chart: "featured",
    type: "video",
  },
  {
    image:
      "https://media.nojoto.com/content/media/28574381/2023/08/feed/84adefd775af962b3c23b5968f69c184/84adefd775af962b3c23b5968f69c184_default.mp4",
    title: "how money is made 6",
    category: "Finance",
    chart: "featured",
    type: "video",
  },
  {
    image:
      "https://media.nojoto.com/content/media/28574381/2023/08/feed/84adefd775af962b3c23b5968f69c184/84adefd775af962b3c23b5968f69c184_default.mp4",
    title: "how money is made 7",
    category: "Finance",
    chart: "featured",
    type: "video",
  },
  {
    image:
      "https://media.nojoto.com/content/media/28574381/2023/08/feed/84adefd775af962b3c23b5968f69c184/84adefd775af962b3c23b5968f69c184_default.mp4",
    title: "how money is made 8",
    category: "Finance",
    chart: "featured",
    type: "video",
  },
];

interface card {
  image: string;
  title: string;
  category: string;
  chart: string;
  type: string;
}
const VideoComponenet = ({ card, i }: { card: card; i: number }) => {
  const [playing, setplaying] = useState(true);

  return (
    <div className="w-full h-full" key={i}>
        <span className="absolute bottom-6 text-white left-4 font-semibold text-lg">{card.title}</span> 
      <video
        src={card.image}
        autoPlay
        muted
        controls
        className="h-full w-full object-cover"
      />
    </div>
  );
};

{
  /*; */
}



