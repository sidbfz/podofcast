import Image from "next/image";
import Link from "next/link";

// Podcast episodes data
const podcastEpisodes: Record<string, {
  slug: string;
  title: string;
  shortTitle: string;
  episode: number;
  description: string;
  shortDescription: string;
  tags: string[];
  coverImage: string;
  date: string;
  duration: string;
  hosts: { name: string; avatar: string }[];
  isFeatured?: boolean;
}> = {
  "pandemic-becoming-endemic": {
    slug: "pandemic-becoming-endemic",
    title: "Pandemic Becoming Endemic",
    shortTitle: "Pandemic",
    episode: 6,
    description: "A Nature survey shows many scientists expect the virus that causes COVID-19 to become endemic, fundamentally changing how we approach public health. In this episode, we explore what living with COVID means for healthcare systems, vaccination strategies, and our daily lives moving forward.",
    shortDescription: "A Nature survey shows many scientists expect the virus that causes COVID-19 to become...",
    tags: ["covid-19", "health"],
    coverImage: "/images/cover-pandemic.png",
    date: "Oct 15, 2021",
    duration: "52 min",
    hosts: [
      { name: "Jane Doe", avatar: "/images/avatar-1.png" },
      { name: "John Smith", avatar: "/images/avatar-2.png" }
    ],
    isFeatured: true
  },
  "tesla-autopilot-controversy": {
    slug: "tesla-autopilot-controversy",
    title: "Tesla Autopilot Controversy",
    shortTitle: "Tesla",
    episode: 5,
    description: "Tesla's vehicles boast 'Full-Self-Driving' (FSD), but current regulations do not allow for fully autonomous driving. We dive into the ongoing debate around self-driving technology, examining safety records, regulatory challenges, and what the future holds for autonomous vehicles.",
    shortDescription: "Tesla's vehicles boast 'Full-Self-Driving' (FSD), but current regulations do not allow for fully...",
    tags: ["automation", "tech"],
    coverImage: "/images/cover-tesla.png",
    date: "Oct 8, 2021",
    duration: "48 min",
    hosts: [
      { name: "Jane Doe", avatar: "/images/avatar-1.png" },
      { name: "John Smith", avatar: "/images/avatar-2.png" }
    ]
  },
  "womens-rights": {
    slug: "womens-rights",
    title: "Women's Rights? Is it alright?",
    shortTitle: "Women's Rights",
    episode: 4,
    description: "A look back at history shows that women have made great strides in the fight for equality, yet significant challenges remain. We discuss the progress made, current struggles, and what needs to change for true gender equality to become a reality worldwide.",
    shortDescription: "A look back at history shows that women have made great strides in the fight for equality...",
    tags: ["women's rights"],
    coverImage: "/images/cover-womensrights.png",
    date: "Oct 1, 2021",
    duration: "44 min",
    hosts: [
      { name: "Jane Doe", avatar: "/images/avatar-1.png" },
      { name: "John Smith", avatar: "/images/avatar-2.png" }
    ]
  },
  "self-confidence": {
    slug: "self-confidence",
    title: "How to Deal with Self–Confidence",
    shortTitle: "Self Confidence",
    episode: 3,
    description: "We have a therapist expert as our guest. Krista Gordon shares her experience on dealing with self-confidence issues, providing practical strategies for overcoming self-doubt, building resilience, and developing a healthier relationship with yourself.",
    shortDescription: "We have a therapist expert as our guest, Krista Gordon shares her experience...",
    tags: ["self-esteem", "health"],
    coverImage: "/images/cover-selfconfidence.png",
    date: "Sep 24, 2021",
    duration: "38 min",
    hosts: [
      { name: "Jane Doe", avatar: "/images/avatar-1.png" },
      { name: "John Smith", avatar: "/images/avatar-2.png" }
    ]
  },
  "social-class": {
    slug: "social-class",
    title: "Type of Social Classes of People",
    shortTitle: "Social Class",
    episode: 2,
    description: "Social class refers to a group of people with similar levels of wealth, influence, and status. We examine how social stratification affects opportunities, relationships, and life outcomes, while exploring ways to bridge the growing divide in modern society.",
    shortDescription: "Social class refers to a group of people with similar levels of wealth, influence, and...",
    tags: ["social class", "wealth"],
    coverImage: "/images/cover-socialclass.png",
    date: "Sep 17, 2021",
    duration: "42 min",
    hosts: [
      { name: "Jane Doe", avatar: "/images/avatar-1.png" },
      { name: "John Smith", avatar: "/images/avatar-2.png" }
    ]
  },
  "perplexed-mind": {
    slug: "perplexed-mind",
    title: "Are you a Perplexed Mind Person?",
    shortTitle: "Perplexed Mind",
    episode: 1,
    description: "Being perplexed means being unable to grasp something clearly or to think logically and decisively. In our debut episode, we explore the psychology of confusion, decision paralysis, and share techniques for finding clarity when your mind feels overwhelmed.",
    shortDescription: "Unable to grasp something clearly or to think logically and decisively about something...",
    tags: ["mind-behaviour", "health"],
    coverImage: "/images/cover-perplexed.png",
    date: "Sep 22, 2021",
    duration: "46 min",
    hosts: [
      { name: "Jane Doe", avatar: "/images/avatar-1.png" },
      { name: "John Smith", avatar: "/images/avatar-2.png" }
    ]
  }
};

// Get all episodes as array for the Latest Episodes section
const allEpisodes = Object.values(podcastEpisodes).sort((a, b) => b.episode - a.episode);

// Default episode
const defaultEpisode = podcastEpisodes["perplexed-mind"];

export default async function PodcastDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = podcastEpisodes[slug] || defaultEpisode;

  return (
    <main className="relative overflow-x-hidden">
      {/* Featured Episode Section */}
      <section className="relative bg-[#F7EDE8] min-h-[824px]">
        {/* Decorative Vector Left */}
        <div className="absolute left-[-304px] top-[70px] w-[630px] h-[592px] opacity-30">
          <Image
            src="/icons/Vector 4.png"
            alt="Swirl decoration"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Decorative Vector Right */}
        <div className="absolute right-[0] top-[234px] w-[120px] h-[167px]">
          <Image
            src="/icons/Group 48095792.png"
            alt="Stars decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Decorative Scribble Bottom Right */}
        <div className="absolute right-[0] bottom-[0] w-[120px] h-[120px]">
          <Image
            src="/icons/Scribble.png"
            alt="Scribble decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="container mx-auto px-[140px] py-6 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-[74px] h-[74px]">
                <Image
                  src="/icons/Ellipse.png"
                  alt="Logo background"
                  width={64}
                  height={64}
                  className="absolute left-0 top-1"
                />
                <div className="absolute left-[35px] top-[31px] text-[14px] font-bold leading-[0.9] tracking-[-0.56px]">
                  <p className="text-[#CD4631] mb-0">POD</p>
                  <p className="text-black">OF</p>
                  <p className="text-black">CAST</p>
                </div>
              </div>
            </Link>

            {/* Menu Items */}
            <div className="flex items-center gap-[60px]">
              <Link href="/podcast/perplexed-mind" className="text-[16px] font-bold text-black hover:text-[#CD4631] transition-colors">
                Episodes
              </Link>
              <Link href="/about" className="text-[16px] font-bold text-black hover:text-[#CD4631] transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-[16px] font-bold text-black hover:text-[#CD4631] transition-colors">
                Blog
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-5">
              <Link href={`/podcast/${allEpisodes[0].slug}`} className="px-6 py-3 border-2 border-black rounded-lg text-[14px] font-bold text-black hover:bg-black hover:text-white transition-colors">
                RECENT EPISODES
              </Link>
              <button className="px-6 py-3 bg-black rounded-lg text-[14px] font-bold text-white shadow-[3px_3px_0px_rgba(0,0,0,0.25)] hover:bg-[#CD4631] transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </nav>

        {/* Featured Episode Content */}
        <div className="container mx-auto px-[140px] pt-[100px] relative z-10">
          <div className="flex gap-[118px]">
            {/* Left Column - Cover Image + Tags */}
            <div className="flex flex-col">
              {/* Cover Image */}
              <div className="w-[472px] h-[472px] rounded-[8px] overflow-hidden relative shadow-[12px_12px_0px_#81ADC8]">
              <Image
                src={episode.coverImage}
                alt={episode.title}
                fill
                className="object-cover"
              />
              {/* Platform Icons */}
              <div className="absolute top-[25px] right-[25px] flex gap-[12px]">
                <div className="w-[30px] h-[30px] bg-white/90 rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="10.5" y="0" width="3" height="5" rx="1.5" fill="#0066D9"/>
                    <rect x="10.5" y="19" width="3" height="5" rx="1.5" fill="#34A853"/>
                    <rect x="10.5" y="9.5" width="3" height="5" rx="1.5" fill="#4285F4"/>
                    <rect x="5" y="5" width="3" height="6" rx="1.5" fill="#FAB908"/>
                    <rect x="5" y="13" width="3" height="6" rx="1.5" fill="#EA4335"/>
                    <rect x="16" y="5" width="3" height="6" rx="1.5" fill="#34A853"/>
                    <rect x="16" y="13" width="3" height="6" rx="1.5" fill="#0066D9"/>
                  </svg>
                </div>
                <div className="w-[30px] h-[30px] bg-[#1DB954] rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM17.521 17.34C17.281 17.699 16.801 17.819 16.441 17.58C13.621 15.84 10.041 15.48 5.88 16.5C5.461 16.62 5.1 16.32 4.98 15.96C4.86 15.54 5.16 15.18 5.52 15.06C10.08 13.92 14.04 14.34 17.22 16.32C17.58 16.5 17.7 16.98 17.521 17.34ZM18.961 14.04C18.66 14.46 18.12 14.64 17.7 14.34C14.46 12.36 9.54 11.76 5.76 12.96C5.28 13.08 4.74 12.84 4.62 12.36C4.5 11.88 4.74 11.34 5.22 11.22C9.6 9.9 15 10.56 18.66 12.84C19.02 13.08 19.2 13.68 18.961 14.04ZM19.081 10.68C15.24 8.4 8.82 8.16 5.16 9.3C4.56 9.48 3.96 9.12 3.78 8.58C3.6 7.98 3.96 7.38 4.5 7.2C8.76 5.88 15.78 6.18 20.22 8.82C20.76 9.12 20.94 9.84 20.64 10.38C20.34 10.86 19.62 11.04 19.081 10.68Z" fill="black"/>
                  </svg>
                </div>
                <div className="w-[30px] h-[30px] bg-[#FF0000] rounded-full flex items-center justify-center">
                  <svg width="18" height="12" viewBox="0 0 24 17" fill="none">
                    <path d="M23.5 2.5C23.2 1.4 22.3 0.5 21.2 0.2C19.4 0 12 0 12 0C12 0 4.6 0 2.8 0.5C1.7 0.8 0.8 1.7 0.5 2.8C0 4.6 0 8.5 0 8.5C0 8.5 0 12.4 0.5 14.2C0.8 15.3 1.7 16.2 2.8 16.5C4.6 17 12 17 12 17C12 17 19.4 17 21.2 16.5C22.3 16.2 23.2 15.3 23.5 14.2C24 12.4 24 8.5 24 8.5C24 8.5 24 4.6 23.5 2.5Z" fill="white"/>
                    <path d="M9.6 12.1L15.8 8.5L9.6 4.9V12.1Z" fill="#FF0000"/>
                  </svg>
                </div>
              </div>
              {/* Title Overlay */}
              <p className="absolute bottom-[25px] left-[25px] text-[46px] font-bold text-[#81ADC8] leading-[1.4] tracking-[-3.71px]">
                {episode.shortTitle}
              </p>
            </div>

              {/* Tags - Below the cover image */}
              <div className="flex items-center gap-[20px] mt-[40px]">
                <span className="text-[14px] font-bold text-black">Tags:</span>
                <div className="flex gap-[6px]">
                  {episode.tags.map((tag) => (
                    <div key={tag} className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                      <span className="text-[12px] font-medium text-[#4D4D4D]">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Episode Details */}
            <div className="flex-1 pt-[17px]">
              {/* Episode Number & Featured Badge */}
              <div className="flex items-center justify-between mb-[16px]">
                <span className="text-[16px] font-bold text-[#CD4631] leading-[1.6]">Episode {episode.episode}</span>
                <div className="px-[6px] py-[3px] border border-[#CD4631] rounded-[4px]">
                  <span className="text-[12px] font-bold text-[#CD4631] tracking-[0.5px]">FEATURED EPISODE</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-[59.3px] font-bold text-black leading-[1.2] tracking-[-1.186px] mb-[23px]">
                {episode.title}
              </h1>

              {/* Separator */}
              <div className="w-full h-[1px] bg-black mb-[20px]"></div>

              {/* Description */}
              <p className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6] mb-[40px]">
                {episode.description}
              </p>

              {/* Host & Date */}
              <div className="flex items-center justify-between mb-[60px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[36px] h-[36px] rounded-full overflow-hidden relative">
                    <Image
                      src={episode.hosts[0].avatar}
                      alt={episode.hosts[0].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[14px] font-medium text-[#4D4D4D]">
                    Hosted by: <span className="font-bold text-black">{episode.hosts[0].name}</span>
                  </span>
                </div>
                <span className="text-[14px] font-medium text-[#4D4D4D]">{episode.date}</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-[20px] mb-[60px]">
                <button className="px-[36px] py-[20px] bg-black border-2 border-black rounded-[8px] text-[14px] font-bold text-white hover:bg-[#CD4631] hover:border-[#CD4631] transition-colors">
                  SUBSCRIBE
                </button>
                <button className="px-[36px] py-[20px] bg-white border-2 border-black rounded-[8px] text-[14px] font-bold text-black hover:bg-black hover:text-white transition-colors flex items-center gap-[10px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  LISTEN NOW <span className="text-[#CD4631]">({episode.duration})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episodes Section */}
      <section className="relative bg-white py-[140px]">
        {/* Sparkle Decoration */}
        <div className="absolute left-[535px] top-[77px] w-[120px] h-[120px]">
          <Image
            src="/icons/Sparkle.png"
            alt="Sparkle decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Scribble Decorations */}
        <div className="absolute left-[172px] bottom-[-100px] w-[328px] h-[328px] opacity-30">
          <Image
            src="/icons/Scribble.png"
            alt="Scribble decoration"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute right-[645px] bottom-[-100px] w-[150px] h-[150px] opacity-30">
          <Image
            src="/icons/Scribble.png"
            alt="Scribble decoration"
            fill
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-[140px]">
          {/* Section Title */}
          <h2 className="text-[59.3px] font-bold text-black text-center leading-[1.2] tracking-[-1.186px] mb-[100px] italic">
            Latest Episode
          </h2>

          {/* Categories */}
          <div className="flex items-center gap-[63px] mb-[20px]">
            <button className="text-[22px] font-bold text-[#CD4631] underline underline-offset-8 decoration-2">
              All
            </button>
            <button className="text-[22px] font-medium text-[#4D4D4D] hover:text-[#CD4631] transition-colors">
              Business
            </button>
            <button className="text-[22px] font-medium text-[#4D4D4D] hover:text-[#CD4631] transition-colors">
              Comedy
            </button>
            <button className="text-[22px] font-medium text-[#4D4D4D] hover:text-[#CD4631] transition-colors">
              Education
            </button>
            <button className="text-[22px] font-medium text-[#4D4D4D] hover:text-[#CD4631] transition-colors">
              Health
            </button>
            <button className="text-[22px] font-medium text-[#4D4D4D] hover:text-[#CD4631] transition-colors">
              News
            </button>
            <button className="text-[22px] font-medium text-[#4D4D4D] hover:text-[#CD4631] transition-colors">
              Tech
            </button>
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-black/20 mb-[100px]"></div>

          {/* Episode Cards Grid */}
          <div className="grid grid-cols-2 gap-[20px]">
            {allEpisodes.map((ep, index) => (
              <Link 
                key={ep.slug}
                href={`/podcast/${ep.slug}`}
                className={`bg-white border-2 border-black rounded-[12px] ${index % 3 === 0 ? 'shadow-[10px_10px_0px_#81ADC8]' : ''} p-[16px] hover:shadow-[14px_14px_0px_#81ADC8] transition-shadow cursor-pointer`}
              >
                <div className="flex gap-[20px] mb-[20px]">
                  {/* Cover */}
                  <div className="w-[166px] h-[166px] rounded-[8px] overflow-hidden relative flex-shrink-0">
                    <Image
                      src={ep.coverImage}
                      alt={ep.shortTitle}
                      fill
                      className="object-cover"
                    />
                    {/* Platform Icons */}
                    <div className="absolute top-[10px] right-[10px] flex gap-[6px]">
                      <div className="w-[12px] h-[12px]">
                        <svg viewBox="0 0 24 24" fill="none">
                          <rect x="10.5" y="0" width="3" height="5" rx="1.5" fill="#0066D9"/>
                          <rect x="10.5" y="19" width="3" height="5" rx="1.5" fill="#34A853"/>
                          <rect x="10.5" y="9.5" width="3" height="5" rx="1.5" fill="#4285F4"/>
                          <rect x="5" y="5" width="3" height="6" rx="1.5" fill="#FAB908"/>
                          <rect x="5" y="13" width="3" height="6" rx="1.5" fill="#EA4335"/>
                          <rect x="16" y="5" width="3" height="6" rx="1.5" fill="#34A853"/>
                          <rect x="16" y="13" width="3" height="6" rx="1.5" fill="#0066D9"/>
                        </svg>
                      </div>
                      <div className="w-[12px] h-[12px]">
                        <svg viewBox="0 0 24 24" fill="#1DB954">
                          <circle cx="12" cy="12" r="12"/>
                        </svg>
                      </div>
                      <div className="w-[12px] h-[12px]">
                        <svg viewBox="0 0 24 17" fill="#FF0000">
                          <rect width="24" height="17" rx="4"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <span className="text-[16px] font-bold text-[#CD4631] leading-[1.6] mb-[4px]">Eps. {ep.episode}</span>
                    <h3 className="text-[22.65px] font-bold text-black leading-[1.4] tracking-[-0.453px] mb-[15px]">
                      {ep.title}
                    </h3>
                    <div className="w-full h-[1px] bg-black/20 mb-[10px]"></div>
                    <p className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6]">
                      {ep.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-[6px]">
                    {ep.tags.map((tag) => (
                      <div key={tag} className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                        <span className="text-[12px] font-medium text-[#4D4D4D]">{tag}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[12px] font-bold text-[#4D4D4D]">Hosted by:</span>
                    <div className="flex -space-x-[6px]">
                      {ep.hosts.map((host, hostIndex) => (
                        <div key={hostIndex} className="w-[26px] h-[26px] rounded-full overflow-hidden relative border-2 border-white">
                          <Image src={host.avatar} alt={host.name} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - App Download */}
      <section className="relative bg-[#EDF3F7] py-[100px] min-h-[650px]">
        {/* Sparkle decorations on left */}
        <div className="absolute left-[30px] top-[280px]">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 5L38 28L65 35L38 42L35 65L32 42L5 35L32 28L35 5Z" stroke="#CD4631" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute left-[95px] top-[360px]">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 3L25 18L42 22.5L25 27L22.5 42L20 27L3 22.5L20 18L22.5 3Z" stroke="#CD4631" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute left-[50px] top-[430px]">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L16 11L26 14L16 17L14 26L12 17L2 14L12 11L14 2Z" stroke="#CD4631" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>

        {/* Scribble decoration at top center */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[-60px] z-20">
          <svg width="50" height="100" viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="25" cy="15" rx="14" ry="10" stroke="black" strokeWidth="2" fill="none"/>
            <path d="M25 25C22 45 24 60 32 80C36 90 28 95 22 85" stroke="#CD4631" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        {/* Sparkle/scribble decorations near button - right side */}
        <div className="absolute right-[calc(50%-200px)] top-[370px]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L22 16L36 20L22 24L20 36L18 24L4 20L18 16L20 4Z" stroke="#CD4631" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute right-[calc(50%-240px)] top-[330px]">
          <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8C10 4 20 4 27 8" stroke="#CD4631" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M6 16C12 12 18 12 24 16" stroke="#CD4631" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        {/* Left - Phone mockup with Music Player UI */}
        <div className="absolute left-[-50px] top-[-80px] w-[320px] h-[640px] z-10" style={{ transform: 'rotate(-8deg)' }}>
          {/* Phone side/edge - pewter blue */}
          <div className="absolute -left-[12px] top-[40px] bottom-[40px] w-[20px] bg-[#81ADC8] rounded-l-[16px]" />
          {/* Phone body */}
          <div className="absolute inset-0 bg-[#1a1a2e] rounded-[40px] border-[6px] border-black overflow-hidden">
            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-4 pb-2">
              <span className="text-white text-[12px] font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><path d="M1 4h2v8H1V4zm4-2h2v10H5V2zm4-2h2v12H9V0zm4 4h2v8h-2V4z"/></svg>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="white"><rect x="0" y="0" width="18" height="12" rx="2" stroke="white" strokeWidth="1" fill="none"/><rect x="18" y="3" width="2" height="6" rx="1" fill="white"/><rect x="2" y="2" width="12" height="8" rx="1" fill="white"/></svg>
              </div>
            </div>
            
            {/* Now Playing Header */}
            <div className="flex items-center justify-between px-6 py-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10L12 16" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-white text-[14px] font-semibold">Now Playing</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="4" cy="10" r="2" fill="white"/><circle cx="10" cy="10" r="2" fill="white"/><circle cx="16" cy="10" r="2" fill="white"/></svg>
            </div>
            
            {/* Album Art */}
            <div className="px-8 py-4">
              <div className="relative w-full aspect-square rounded-[20px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/cover-tesla.png"
                  alt="Now playing cover"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2">
                    <p className="text-white text-[10px] font-medium">EPISODE 42</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Track Info */}
            <div className="px-8 py-2 text-center">
              <h3 className="text-white text-[18px] font-bold mb-1">The Future of Tech</h3>
              <p className="text-gray-400 text-[14px]">Pod of Cast • Season 2</p>
            </div>
            
            {/* Progress Bar */}
            <div className="px-8 py-4">
              <div className="relative h-[4px] bg-gray-600 rounded-full">
                <div className="absolute left-0 top-0 h-full w-[65%] bg-[#CD4631] rounded-full"/>
                <div className="absolute left-[65%] top-1/2 -translate-y-1/2 w-[12px] h-[12px] bg-white rounded-full shadow-lg"/>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-400 text-[11px]">24:32</span>
                <span className="text-gray-400 text-[11px]">37:45</span>
              </div>
            </div>
            
            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-8 px-8 py-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M6 6h2v12H6V6zm10 0l-8 6 8 6V6z"/></svg>
              <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#1a1a2e"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M18 6h-2v12h2V6zM6 18l8-6-8-6v12z"/></svg>
            </div>
            
            {/* Bottom Controls */}
            <div className="flex items-center justify-between px-8 py-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3v14M3 10h14" stroke="gray" strokeWidth="2" strokeLinecap="round"/></svg>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M16 4L4 16" stroke="gray" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
          </div>
        </div>

        {/* Right - Phone mockup with Playlist UI */}
        <div className="absolute right-[-70px] top-[-100px] w-[320px] h-[640px] z-10" style={{ transform: 'rotate(8deg)' }}>
          {/* Phone side/edge - pewter blue */}
          <div className="absolute -right-[12px] top-[40px] bottom-[40px] w-[20px] bg-[#81ADC8] rounded-r-[16px]" />
          {/* Phone body */}
          <div className="absolute inset-0 bg-[#1a1a2e] rounded-[40px] border-[6px] border-black overflow-hidden">
            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-4 pb-2">
              <span className="text-white text-[12px] font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><path d="M1 4h2v8H1V4zm4-2h2v10H5V2zm4-2h2v12H9V0zm4 4h2v8h-2V4z"/></svg>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="white"><rect x="0" y="0" width="18" height="12" rx="2" stroke="white" strokeWidth="1" fill="none"/><rect x="18" y="3" width="2" height="6" rx="1" fill="white"/><rect x="2" y="2" width="12" height="8" rx="1" fill="white"/></svg>
              </div>
            </div>
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10L12 16" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-white text-[14px] font-semibold">Your Library</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="white" strokeWidth="2" fill="none"/><path d="M14 14l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            
            {/* Featured Playlist */}
            <div className="px-5 py-3">
              <div className="relative rounded-[16px] overflow-hidden bg-gradient-to-r from-[#81ADC8] to-[#CD4631] p-4">
                <div className="flex items-center gap-3">
                  <div className="w-[60px] h-[60px] rounded-lg overflow-hidden relative">
                    <Image
                      src="/images/cover-perplexed.png"
                      alt="Daily Mix"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white/70 text-[10px] font-medium">CONTINUE LISTENING</p>
                    <h4 className="text-white text-[14px] font-bold">Daily Mix</h4>
                    <p className="text-white/70 text-[11px]">12 episodes</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Episode List */}
            <div className="px-5 py-2">
              <p className="text-gray-400 text-[12px] font-semibold mb-3">RECENTLY PLAYED</p>
              
              {/* Episode Item 1 - Playing */}
              <div className="flex items-center gap-3 py-2 border-b border-gray-700/50">
                <div className="w-[48px] h-[48px] rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/cover-tesla.png"
                    alt="The Future of Tech"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="flex items-end gap-[2px] h-[16px]">
                      <div className="w-[3px] bg-white rounded-full animate-pulse" style={{height: '60%'}}/>
                      <div className="w-[3px] bg-white rounded-full animate-pulse" style={{height: '100%', animationDelay: '0.2s'}}/>
                      <div className="w-[3px] bg-white rounded-full animate-pulse" style={{height: '40%', animationDelay: '0.4s'}}/>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="text-white text-[13px] font-semibold">The Future of Tech</h5>
                  <p className="text-gray-400 text-[11px]">37:45 • Playing</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#CD4631"><circle cx="8" cy="8" r="8"/></svg>
              </div>
              
              {/* Episode Item 2 */}
              <div className="flex items-center gap-3 py-2 border-b border-gray-700/50">
                <div className="w-[48px] h-[48px] rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/cover-selfconfidence.png"
                    alt="Design Trends 2024"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="text-white text-[13px] font-semibold">Self Confidence</h5>
                  <p className="text-gray-400 text-[11px]">42:18</p>
                </div>
              </div>
              
              {/* Episode Item 3 */}
              <div className="flex items-center gap-3 py-2 border-b border-gray-700/50">
                <div className="w-[48px] h-[48px] rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/cover-womensrights.png"
                    alt="Women's Rights"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="text-white text-[13px] font-semibold">Women&apos;s Rights</h5>
                  <p className="text-gray-400 text-[11px]">28:55</p>
                </div>
              </div>
              
              {/* Episode Item 4 */}
              <div className="flex items-center gap-3 py-2">
                <div className="w-[48px] h-[48px] rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/cover-pandemic.png"
                    alt="Pandemic Stories"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="text-white text-[13px] font-semibold">Pandemic Stories</h5>
                  <p className="text-gray-400 text-[11px]">51:30</p>
                </div>
              </div>
            </div>
            
            {/* Mini Player at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#2a2a3e] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/cover-tesla.png"
                    alt="Now playing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="text-white text-[12px] font-semibold">The Future of Tech</h5>
                  <div className="h-[2px] bg-gray-600 rounded-full mt-1">
                    <div className="h-full w-[65%] bg-[#CD4631] rounded-full"/>
                  </div>
                </div>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="white"><path d="M8 6h4v16H8V6zm8 0h4v16h-4V6z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-[140px] relative z-20">
          <div className="flex items-center justify-center">
            {/* Center - Text Content */}
            <div className="flex flex-col items-center text-center">
              {/* Beta Badge */}
              <div className="px-[12px] py-[6px] border-2 border-[#CD4631] rounded-[4px] mb-[20px]">
                <span className="text-[12px] font-bold text-[#CD4631] tracking-[1px]">BETA</span>
              </div>

              {/* Title */}
              <h2 className="text-[56px] font-bold leading-[1.1] tracking-[-2px] mb-[16px]">
                <span className="text-black">Available now</span>
                <br />
                <span className="text-black">Pod of Cast App</span>
              </h2>

              {/* Subtitle */}
              <p className="text-[20px] font-medium text-[#4D4D4D] leading-[1.6] mb-[32px]">
                We just launched our podcast app!
              </p>

              {/* Download Button */}
              <button className="px-[36px] py-[18px] bg-black border-2 border-black rounded-[8px] text-[14px] font-bold text-white hover:bg-[#CD4631] hover:border-[#CD4631] transition-colors mb-[32px]">
                DOWNLOAD NOW
              </button>

              {/* Available On */}
              <div className="text-center">
                <p className="text-[14px] font-medium text-[#4D4D4D] mb-[12px]">Content also available on:</p>
                <div className="flex items-center justify-center gap-[16px]">
                  {/* Google Podcasts Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10.5" y="0" width="3" height="5" rx="1.5" fill="#0066D9"/>
                    <rect x="10.5" y="19" width="3" height="5" rx="1.5" fill="#34A853"/>
                    <rect x="10.5" y="9.5" width="3" height="5" rx="1.5" fill="#4285F4"/>
                    <rect x="5" y="5" width="3" height="6" rx="1.5" fill="#FAB908"/>
                    <rect x="5" y="13" width="3" height="6" rx="1.5" fill="#EA4335"/>
                    <rect x="16" y="5" width="3" height="6" rx="1.5" fill="#34A853"/>
                    <rect x="16" y="13" width="3" height="6" rx="1.5" fill="#0066D9"/>
                  </svg>
                  {/* Spotify Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#191414"/>
                    <path d="M16.5 10.5C13.5 9 9 9 6 10.5" stroke="#1DB954" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M15.5 13C13 11.8 9.5 11.8 7 13" stroke="#1DB954" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14.5 15.5C12.5 14.5 10 14.5 8 15.5" stroke="#1DB954" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {/* YouTube Icon */}
                  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="28" height="20" rx="5" fill="#FF0000"/>
                    <path d="M11 6L18 10L11 14V6Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white relative">
        {/* Top separator line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E0E0E0]" />
        
        <div className="container mx-auto px-[140px] py-[140px]">
          <div className="flex justify-between">
            {/* Left Section - Logo, Description, Socials */}
            <div className="flex flex-col">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-0">
                <div className="relative w-[74px] h-[74px]">
                  <div className="absolute left-0 top-[4px] w-[64px] h-[64px]">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 4C16.536 4 4 16.536 4 32C4 47.464 16.536 60 32 60" stroke="black" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                  <div className="absolute left-[25px] top-[22px] text-[14px] font-bold leading-[0.9] tracking-[-0.56px]">
                    <p className="text-[#CD4631] mb-0">POD</p>
                    <p className="text-black mb-0">OF</p>
                    <p className="text-black">CAST</p>
                  </div>
                </div>
                <span className="text-[12px] text-[#4D4D4D] font-medium ml-2">©2021.</span>
              </div>
              
              {/* Description */}
              <p className="text-[14px] text-[#4D4D4D] leading-[1.6] max-w-[275px] mt-[40px] mb-[24px] font-medium">
                Your go-to destination for insightful conversations, inspiring stories, and thought-provoking discussions.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-[25px]">
                <Link href="#" aria-label="Twitter">
                  <Image
                    src="/icons/twitter.png"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Image
                    src="/icons/instagram.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="#" aria-label="TikTok">
                  <Image
                    src="/icons/tiktok.png"
                    alt="TikTok"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>

            {/* Menu Column 1 */}
            <div className="flex flex-col gap-[20px]">
              <Link href="#" className="text-[16px] text-black leading-[1.6] font-medium hover:text-[#CD4631] transition-colors">
                About
              </Link>
              <Link href="#" className="text-[16px] text-[#CD4631] leading-[1.6] font-medium">
                Testimonials
              </Link>
              <Link href="#" className="text-[16px] text-black leading-[1.6] font-medium hover:text-[#CD4631] transition-colors">
                Features
              </Link>
            </div>

            {/* Menu Column 2 */}
            <div className="flex flex-col gap-[20px]">
              <Link href="#" className="text-[16px] text-[#CD4631] leading-[1.6] font-medium">
                Episodes
              </Link>
              <Link href="#" className="text-[16px] text-black leading-[1.6] font-medium hover:text-[#CD4631] transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-[16px] text-black leading-[1.6] font-medium hover:text-[#CD4631] transition-colors">
                Blog
              </Link>
            </div>

            {/* Right Section - Platforms */}
            <div className="flex flex-col">
              {/* Listen on platforms */}
              <p className="text-[16px] text-[#4D4D4D] leading-[1.6] font-medium mb-[29px]">
                Listen to episodes on your fav platform:
              </p>
              <div className="flex items-center gap-[50px] mb-[40px]">
                {/* Google Podcasts */}
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/google podcast-1.png"
                    alt="Google Podcasts"
                    width={122}
                    height={22}
                    className="h-[22px] w-auto"
                  />
                </Link>
                {/* Spotify */}
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/spotify-1.png"
                    alt="Spotify"
                    width={80}
                    height={22}
                    className="h-[22px] w-auto"
                  />
                </Link>
                {/* YouTube */}
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/youtube-1.png"
                    alt="YouTube"
                    width={94}
                    height={22}
                    className="h-[22px] w-auto"
                  />
                </Link>
              </div>

              {/* App available on */}
              <p className="text-[16px] text-[#4D4D4D] leading-[1.6] font-medium mb-[20px]">
                App available on:
              </p>
              <div className="flex items-center gap-[20px]">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/app_store.png"
                    alt="App Store"
                    width={36}
                    height={36}
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/google_play.png"
                    alt="Google Play"
                    width={36}
                    height={36}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="container mx-auto px-[140px] pb-[40px]">
          <div className="border-t border-[#E0E0E0] pt-[20px]">
            <div className="flex items-center justify-between">
              <p className="text-[12px] text-[#4D4D4D] leading-[1.6] font-medium">
                ©2022. All Rights Reserved. <span className="text-[#CD4631]">Pod of Cast</span>
              </p>
              <div className="flex items-center gap-[10px] text-[12px] text-[#4D4D4D] leading-[1.6] font-medium">
                <Link href="#" className="hover:text-[#CD4631] transition-colors">Terms</Link>
                <span>•</span>
                <Link href="#" className="hover:text-[#CD4631] transition-colors">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
