import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="p-4 px-8 sticky flex items-center w-screen justify-between">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>

        <div className=" flex  items-center gap-8">
          <Link href="/home" className=" underline  underline-offset-2 p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
          <Link href="/store" className=" underline underline-offset-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
              />
            </svg>
          </Link>
        </div>
      </nav>

      <main className="flex min-h-screen flex-col items-center  p-20">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Less Stories</h1>
          <h2 className="my-6 opacity-90 text-lg ">
            Now watch more stories with Less Stories
          </h2>
        </section>
        <section className="flex lg:gap-20  border-b gap-4  p-4 rounded-lg overflow-x-scroll w-[100vw] lg:w-[90%]">
          {Data.map((card, id) => (
            <Link href="/shorts">
              <div
                key={id}
                className="  w-[60vw] lg:w-[12vw] flex-shrink-0 rounded-lg "
              >
                <img
                  src={card?.image}
                  alt={card?.title}
                  title={card?.title}
                  className="rounded-lg flex-shrink-0  w-[60vw] h-auto lg:w-auto lg:h-[400px]"
                />
                <p className="text-lg mt-2 font-semibold opacity-90">
                  {card.title}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <section className="text-center mt-20">
          <h1 className="text-4xl font-bold">New In stories</h1>
          <h2 className="my-6 opacity-90 text-lg ">
            Now watch more stories with Less Stories
          </h2>
        </section>
        <section className="flex lg:gap-20  border-b gap-4  p-4 rounded-lg overflow-x-scroll w-[100vw] lg:w-[90%]">
          {Data.map((card, id) => (
            <Link href="/shorts">
              <div
                key={id}
                className="  w-[60vw] lg:w-[12vw] flex-shrink-0 rounded-lg "
              >
                <img
                  src={card?.image}
                  alt={card?.title}
                  title={card?.title}
                  className="rounded-lg flex-shrink-0  w-[60vw] h-auto lg:w-auto lg:h-[400px]"
                />
                <p className="text-lg mt-2 font-semibold opacity-90">
                  {card.title}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

const Data = [
  {
    image:
      "https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title: "how money is made",
    category: "Finance",
    chart: "featured",
  },
  {
    image:
      "https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title: "how money is made",
    category: "Finance",
    chart: "featured",
  },
  {
    image:
      "https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title: "how money is made",
    category: "Finance",
    chart: "featured",
  },
  {
    image:
      "https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title: "how money is made",
    category: "Finance",
    chart: "featured",
  },
  {
    image:
      "https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title: "how money is made",
    category: "Finance",
    chart: "featured",
  },
  {
    image:
      "https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title: "how money is made",
    category: "Finance",
    chart: "featured",
  },
  {
    image:
      "https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title: "how money is made",
    category: "Finance",
    chart: "featured",
  },
  {
    image:
      "https://storage.googleapis.com/creators-media/images/web-story-how-money-is-made-f1abc.width-800.format-webp.webp",
    title: "how money is made",
    category: "Finance",
    chart: "featured",
  },
];
