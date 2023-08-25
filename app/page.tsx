import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Less Stories</h1>
        <h2 className="my-6 opacity-90 text-lg ">Now watch more stories with Less Stories</h2>
      </section>
      <section className="flex lg:gap-20  border-b gap-4  p-4 rounded-lg overflow-x-scroll w-[100vw] lg:w-[90%]">

        {
          Data.map((card, id)=>(
            <Link href="/shorts">
              <div key={id} className="  w-[60vw] lg:w-[12vw] flex-shrink-0 rounded-lg " >
                  <img src={card?.image} alt={card?.title} title={card?.title} className="rounded-lg flex-shrink-0  w-[60vw] h-auto lg:w-auto lg:h-[400px]"/>
                  <p className="text-lg mt-2 font-semibold opacity-90">{card.title}</p>
              </div>
              </Link>
          ))
        }
      </section>

     

      <section className="text-center mt-20">
        <h1 className="text-4xl font-bold">New In stories</h1>
        <h2 className="my-6 opacity-90 text-lg ">Now watch more stories with Less Stories</h2>
      </section>
      <section className="flex lg:gap-20  border-b gap-4  p-4 rounded-lg overflow-x-scroll w-[100vw] lg:w-[90%]">

        {
          Data.map((card, id)=>(
            <Link href="/shorts">
              <div key={id} className="  w-[60vw] lg:w-[12vw] flex-shrink-0 rounded-lg " >
                  <img src={card?.image} alt={card?.title} title={card?.title} className="rounded-lg flex-shrink-0  w-[60vw] h-auto lg:w-auto lg:h-[400px]"/>
                  <p className="text-lg mt-2 font-semibold opacity-90">{card.title}</p>
              </div>
              </Link>
          ))
        }
      </section>
    </main>
  );
}

const Data = [
  {
    image:"https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title:"how money is made",
    category: "Finance",
    chart: "featured"
  },
  {
    image:"https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title:"how money is made",
    category: "Finance",
    chart: "featured"
  },
  {
    image:"https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title:"how money is made",
    category: "Finance",
    chart: "featured"
  },
  {
    image:"https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title:"how money is made",
    category: "Finance",
    chart: "featured"
  },
  {
    image:"https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title:"how money is made",
    category: "Finance",
    chart: "featured"
  },
  {
    image:"https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title:"how money is made",
    category: "Finance",
    chart: "featured"
  },
  {
    image:"https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title:"how money is made",
    category: "Finance",
    chart: "featured"
  },
  {
    image:"https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title:"how money is made",
    category: "Finance",
    chart: "featured"
  },
];


