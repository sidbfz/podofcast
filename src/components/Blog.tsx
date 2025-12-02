import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    image: "/images/blog-podcast.png",
    category: "PODCAST",
    title: "Setup your own podcast",
    description:
      "Everything you need to know about starting your own podcast, from equipment selection to content planning and audience building strategies...",
    tags: ["business", "startup"],
    date: "Sep 14, 2021",
    highlighted: true,
    slug: "setup-your-own-podcast",
  },
  {
    image: "/images/blog-doodle.png",
    category: "TIPS & TRICK",
    title: "Doodle artwork 101",
    description:
      "Master the art of doodling with these beginner-friendly techniques. Learn how simple sketches can boost creativity and enhance your visual storytelling...",
    tags: ["art", "creative", "tips and trick"],
    date: "Sep 12, 2021",
    highlighted: false,
    slug: "doodle-artwork-101",
  },
];

export default function Blog() {
  return (
    <section className="relative bg-white py-[140px]">
      {/* Decorative Vector - top left */}
      <div className="absolute top-[255px] left-[25px]">
        <Image
          src="/icons/Star 4.png"
          alt=""
          width={185}
          height={184}
          className="rotate-[22deg]"
        />
      </div>



      {/* Decorative Scribble - bottom right */}
      <div className="absolute bottom-[180px] right-[90px]">
        <Image
          src="/icons/Scribble-6.png"
          alt=""
          width={180}
          height={180}
        />
      </div>

      <div className="container mx-auto px-[140px]">
        {/* Title */}
        <div className="text-center mb-[80px]">
          <h2 className="text-[59.3px] font-bold text-black leading-[1.2] tracking-[-1.186px] mb-5">
            Article and News
          </h2>
          <p className="text-[22.65px] font-medium text-[#4D4D4D]">
            News, tips, tricks and more
          </p>
        </div>

        {/* Blog Cards */}
        <div className="flex justify-center gap-[20px]">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/blog/${article.slug}`}
              className={`bg-white rounded-[8px] border-2 border-black overflow-hidden h-[520px] w-[450px] relative flex-shrink-0 ${
                article.highlighted ? "shadow-[10px_10px_0px_0px_#000000]" : ""
              } hover:shadow-[10px_10px_0px_0px_#000000] transition-shadow`}
            >
              {/* Image */}
              <div className="absolute top-[12px] left-[12px] w-[422px] h-[240px] rounded-[8px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="absolute top-[280px] left-[12px] w-[422px] flex flex-col gap-[14px]">
                {/* Category & Title */}
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[14px] font-bold text-[#4D4D4D] leading-[1.6]">
                    {article.category}
                  </p>
                  <h3
                    className={`text-[28px] font-bold leading-[1.4] tracking-[-0.56px] ${
                      article.highlighted ? "text-[#CD4631]" : "text-black"
                    }`}
                  >
                    {article.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6]">
                  {article.description}
                </p>
              </div>

              {/* Footer */}
              <div className="absolute top-[455px] left-[12px] w-[422px] flex flex-col gap-[14px]">
                {/* Separator */}
                <div className="w-full h-[1px] bg-black"></div>

                {/* Tags & Date */}
                <div className="flex items-center justify-between">
                  {/* Tags */}
                  <div className="flex gap-[6px]">
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px] text-[12px] font-medium text-[#4D4D4D] leading-[1.6]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Date */}
                  <span className="text-[12px] font-bold text-[#4D4D4D] leading-[1.6]">
                    {article.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="flex justify-center mt-[100px]">
          <Link href="/blog" className="px-[36px] py-[20px] bg-black border-2 border-black rounded-[8px] text-[14px] font-bold text-white leading-[1.6] hover:bg-[#CD4631] hover:border-[#CD4631] transition-colors">
            BROWSE ALL
          </Link>
        </div>
      </div>

      {/* Scribble at bottom - bridges to CTA section */}
      <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 z-20">
        <Image
          src="/icons/Scribble.png"
          alt="Scribble decoration"
          width={120}
          height={180}
        />
      </div>
    </section>
  );
}
