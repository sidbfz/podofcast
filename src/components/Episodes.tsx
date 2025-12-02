import Image from "next/image";
import Link from "next/link";

// Platform Icons SVGs
const SpotifyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM8.7 8.7C8.6 8.9 8.3 8.9 8.1 8.8C6.7 7.9 5 7.8 2.9 8.2C2.7 8.3 2.5 8.1 2.5 7.9C2.4 7.7 2.6 7.5 2.8 7.5C5.1 7 7 7.2 8.6 8.2C8.8 8.3 8.8 8.5 8.7 8.7ZM9.4 7.1C9.3 7.3 9 7.4 8.8 7.2C7.2 6.2 4.8 5.9 2.9 6.5C2.7 6.6 2.4 6.4 2.4 6.2C2.3 6 2.5 5.7 2.7 5.7C5 5 7.6 5.4 9.4 6.5C9.6 6.6 9.6 6.9 9.4 7.1ZM9.5 5.4C7.6 4.3 4.4 4.2 2.6 4.7C2.3 4.8 2 4.6 1.9 4.4C1.8 4.1 2 3.8 2.3 3.7C4.4 3.2 7.9 3.3 10 4.6C10.3 4.8 10.4 5.1 10.2 5.4C10 5.6 9.7 5.6 9.5 5.4Z" fill="#1DB954"/>
  </svg>
);

const GooglePodcastIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5.25" y="0" width="1.5" height="3" rx="0.75" fill="#0066D9"/>
    <rect x="5.25" y="9" width="1.5" height="3" rx="0.75" fill="#4285F4"/>
    <rect x="5.25" y="4.5" width="1.5" height="3" rx="0.75" fill="#EA4335"/>
    <rect x="0" y="4.5" width="1.5" height="3" rx="0.75" fill="#FAB908"/>
    <rect x="10.5" y="4.5" width="1.5" height="3" rx="0.75" fill="#34A853"/>
    <rect x="2.625" y="3" width="1.5" height="4.5" rx="0.75" fill="#FAB908"/>
    <rect x="7.875" y="2.25" width="1.5" height="4.5" rx="0.75" fill="#34A853"/>
    <rect x="2.625" y="9" width="1.5" height="1.5" rx="0.75" fill="#EA4335"/>
    <rect x="7.875" y="8.25" width="1.5" height="2.25" rx="0.75" fill="#0066D9"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7 3.2C11.6 2.7 11.2 2.3 10.7 2.2C9.8 2 6 2 6 2C6 2 2.2 2 1.3 2.2C0.8 2.3 0.4 2.7 0.3 3.2C0 4.1 0 6 0 6C0 6 0 7.9 0.3 8.8C0.4 9.3 0.8 9.7 1.3 9.8C2.2 10 6 10 6 10C6 10 9.8 10 10.7 9.8C11.2 9.7 11.6 9.3 11.7 8.8C12 7.9 12 6 12 6C12 6 12 4.1 11.7 3.2ZM4.8 7.8V4.2L7.9 6L4.8 7.8Z" fill="#FF0000"/>
  </svg>
);

const episodes = [
  {
    id: 1,
    episode: "Eps. 6",
    cover: "/images/cover-pandemic.png",
    title: "Pandemic Becoming Endemic",
    description: "Scientists predict COVID-19 will become a permanent part of our lives. We explore what this means for public health.",
    tags: ["covid-19", "health"],
    hosts: ["/images/avatar-luna.png", "/images/avatar-emily.png"],
    isHovered: true,
    slug: "pandemic-becoming-endemic",
  },
  {
    id: 2,
    episode: "Eps. 5",
    cover: "/images/cover-tesla-autopilot.png",
    title: "Tesla Autopilot Controversy",
    description: "Exploring the debate around self-driving technology, safety concerns, and the future of autonomous vehicles.",
    tags: ["automation", "tech"],
    hosts: ["/images/avatar-luna.png", "/images/avatar-emily.png"],
    isHovered: false,
    slug: "tesla-autopilot-controversy",
  },
  {
    id: 3,
    episode: "Eps. 4",
    cover: "/images/cover-womensrights.png",
    title: "Women's Rights? Is it alright?",
    description: "A powerful discussion on the progress of gender equality and the challenges that still remain today.",
    tags: ["women's rights"],
    hosts: ["/images/avatar-luna.png", "/images/avatar-emily.png"],
    isHovered: false,
    slug: "womens-rights",
  },
  {
    id: 4,
    episode: "Eps. 3",
    cover: "/images/cover-selfconfidence.png",
    title: "How to Deal with Self–Confidence",
    description: "Expert therapist Krista Gordon shares practical strategies for building lasting self-confidence.",
    tags: ["self-esteem", "health"],
    hosts: ["/images/avatar-luna.png", "/images/avatar-emily.png"],
    isHovered: true,
    slug: "self-confidence",
  },
  {
    id: 5,
    episode: "Eps. 2",
    cover: "/images/cover-socialclass.png",
    title: "Type of Social Classes of People",
    description: "Understanding wealth inequality and how social class shapes opportunities in modern society.",
    tags: ["social class", "wealth"],
    hosts: ["/images/avatar-luna.png", "/images/avatar-emily.png"],
    isHovered: true,
    slug: "social-class",
  },
  {
    id: 6,
    episode: "Eps. 1",
    cover: "/images/cover-perplexed.png",
    title: "Are you a Perplexed Mind Person?",
    description: "Discover what it means to have a perplexed mind and how to find clarity in decision-making.",
    tags: ["mind-behaviour", "health"],
    hosts: ["/images/avatar-luna.png", "/images/avatar-emily.png"],
    isHovered: false,
    slug: "perplexed-mind",
  },
];

// Sparkle SVG decoration
const SparkleDecoration = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 0L33.5 26.5L60 30L33.5 33.5L30 60L26.5 33.5L0 30L26.5 26.5L30 0Z" fill="#CD4631"/>
  </svg>
);

export default function Episodes() {
  return (
    <section className="relative bg-[#F7EDE8] py-[120px]">
      {/* Sparkle decoration - top right */}
      <div className="absolute top-[200px] right-[40px]">
        <Image
          src="/icons/Sparkle.png"
          alt="Sparkle decoration"
          width={180}
          height={180}
        />
      </div>

      <div className="container mx-auto px-[140px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[60px]">
          <h2 className="text-[59.3px] font-bold text-black leading-[1.2] tracking-[-1.186px] mb-5">
            Recent Episodes
          </h2>
          <p className="text-[22.65px] font-medium text-[#4D4D4D]">
            Available on your favorite platform
          </p>
        </div>

        {/* Episodes Grid - 2 columns */}
        <div className="grid grid-cols-2 gap-5">
          {episodes.map((episode) => (
            <Link
              key={episode.id}
              href={`/podcast/${episode.slug}`}
              className={`bg-white border-2 border-black rounded-[12px] overflow-hidden relative ${
                episode.isHovered ? "shadow-[10px_10px_0px_0px_#81ADC8]" : ""
              } hover:shadow-[10px_10px_0px_0px_#81ADC8] transition-shadow`}
            >
              <div className="flex gap-5 p-[14px]">
                {/* Cover Image */}
                <div className="relative w-[166px] h-[166px] rounded-[8px] overflow-hidden shrink-0">
                  <Image
                    src={episode.cover}
                    alt={episode.title}
                    fill
                    className="object-cover"
                  />
                  {/* Platform Icons */}
                  <div className="absolute top-[10px] right-[10px] flex gap-[6px]">
                    <GooglePodcastIcon />
                    <SpotifyIcon />
                    <YouTubeIcon />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-[15px] flex-1">
                  {/* Title Section */}
                  <div className="flex flex-col gap-[4px]">
                    <span className="text-[16px] font-bold text-[#CD4631] leading-[1.6]">
                      {episode.episode}
                    </span>
                    <h3 className="text-[22.65px] font-bold text-black leading-[1.4] tracking-[-0.453px]">
                      {episode.title}
                    </h3>
                  </div>

                  {/* Description Section */}
                  <div className="flex flex-col gap-[10px]">
                    {/* Separator line */}
                    <div className="w-full h-[1px] bg-[#4D4D4D] opacity-20"></div>
                    <p className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6]">
                      {episode.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Tags and Hosted By */}
              <div className="flex justify-between items-center px-[14px] pb-[14px]">
                {/* Tags */}
                <div className="flex gap-[6px]">
                  {episode.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px] text-[12px] font-medium text-[#4D4D4D] leading-[1.6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hosted By */}
                <div className="flex items-center gap-[10px]">
                  <span className="text-[12px] font-bold text-[#4D4D4D] leading-[1.6]">
                    Hosted by:
                  </span>
                  <div className="flex">
                    {episode.hosts.map((host, idx) => (
                      <div
                        key={idx}
                        className="w-[26px] h-[26px] rounded-full border-2 border-white overflow-hidden"
                        style={{ marginLeft: idx > 0 ? "-6px" : "0" }}
                      >
                        <Image
                          src={host}
                          alt="Host"
                          width={26}
                          height={26}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="flex justify-center mt-[60px]">
          <Link href="/podcast/perplexed-mind" className="px-[36px] py-[20px] bg-black border-2 border-black rounded-[8px] text-[14px] font-bold text-white leading-[1.6] hover:bg-[#CD4631] hover:border-[#CD4631] transition-colors">
            BROWSE ALL EPISODES
          </Link>
        </div>
      </div>

      {/* Scribble decoration - bottom right */}
      <div className="absolute bottom-[100px] right-[60px]">
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0C30 0 35 20 30 40C25 60 35 80 30 100C25 120 30 120 30 120" stroke="#CD4631" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Scribble at bottom - bridges to Pricing section */}
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
