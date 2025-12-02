import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Hero Title Section */}
      <section className="relative bg-[#F7EDE8] min-h-[553px]">
        {/* Decorative Vector Left */}
        <div className="absolute left-[-304px] top-[70px] w-[630px] h-[592px] opacity-30">
          <Image
            src="/icons/Vector 4.png"
            alt="Swirl decoration"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Star decoration */}
        <div className="absolute left-[262px] top-[351px] w-[64px] h-[64px]">
          <Image
            src="/icons/Star 2.png"
            alt="Star decoration"
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
              <Link href="/podcast/perplexed-mind" className="px-6 py-3 border-2 border-black rounded-lg text-[14px] font-bold text-black hover:bg-black hover:text-white transition-colors">
                RECENT EPISODES
              </Link>
              <button className="px-6 py-3 bg-black rounded-lg text-[14px] font-bold text-white shadow-[3px_3px_0px_rgba(0,0,0,0.25)] hover:bg-[#CD4631] transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-[140px] pt-[60px] pb-[60px] text-center relative z-10">
          <h1 className="text-[96px] font-bold leading-none tracking-[-3.84px] mb-6">
            <span className="text-black">Article</span>
            <br />
            <span className="text-black">and </span>
            <span className="text-[#CD4631] italic">News</span>
          </h1>
          <p className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6] mb-10 max-w-[766px] mx-auto">
            Stay updated with the latest news, tips, and insights from the world of podcasting.
            Discover expert advice, industry trends, and creative inspiration.
          </p>
          
          {/* Search Bar */}
          <div className="flex items-center justify-center">
            <div className="w-[570px] h-[74px] bg-white rounded-[8px] border border-black/20 flex items-center px-[40px] gap-[24px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="7" stroke="#4D4D4D" strokeWidth="2"/>
                <path d="M16 16L20 20" stroke="#4D4D4D" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 text-[16px] font-medium text-black placeholder:text-[#4D4D4D] outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="relative bg-white py-[100px]">
        {/* Sparkle Decoration */}
        <div className="absolute left-[575px] top-[14px] w-[120px] h-[120px]">
          <Image
            src="/icons/Sparkle.png"
            alt="Sparkle decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Scribble at bottom */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-75px] w-[150px] h-[150px] opacity-30">
          <Image
            src="/icons/Scribble.png"
            alt="Scribble decoration"
            fill
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-[140px]">
          {/* Section Title */}
          <h2 className="text-[59.3px] font-bold text-black text-center leading-[1.2] tracking-[-1.186px] mb-[80px] italic">
            Latest Posts
          </h2>

          {/* Categories */}
          <div className="flex items-center gap-[80px] mb-[20px]">
            <button className="text-[22px] font-bold text-[#CD4631] underline underline-offset-8 decoration-2">
              All
            </button>
            <button className="text-[22px] font-medium text-[#4D4D4D] hover:text-[#CD4631] transition-colors">
              Business
            </button>
            <button className="text-[22px] font-medium text-[#4D4D4D] hover:text-[#CD4631] transition-colors">
              News
            </button>
            <button className="text-[22px] font-medium text-[#4D4D4D] hover:text-[#CD4631] transition-colors">
              Tips & Trick
            </button>
            <button className="text-[22px] font-medium text-[#4D4D4D] hover:text-[#CD4631] transition-colors">
              Podcast
            </button>
            <button className="text-[22px] font-medium text-[#4D4D4D] hover:text-[#CD4631] transition-colors">
              Productivity
            </button>
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-black/20 mb-[100px]"></div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-2 gap-[20px]">
            {/* Post 1 - Setup Your Own Podcast (hover state with shadow) */}
            <Link href="/blog/setup-your-own-podcast" className="bg-white border-2 border-black rounded-[8px] shadow-[10px_10px_0px_#000000] overflow-hidden cursor-pointer hover:shadow-[14px_14px_0px_#000000] transition-shadow">
              {/* Image */}
              <div className="relative h-[320px] m-[16px] rounded-[8px] overflow-hidden">
                <Image
                  src="/images/blog-setup-podcast.png"
                  alt="Setup Your Own Podcast"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-[16px] pb-[16px]">
                {/* Category & Title */}
                <div className="mb-[20px]">
                  <p className="text-[14px] font-bold text-[#4D4D4D] leading-[1.6] mb-[6px]">
                    PODCAST
                  </p>
                  <h3 className="text-[36.65px] font-bold text-[#CD4631] leading-[1.4] tracking-[-0.733px]">
                    Setup Your Own Podcast
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6] mb-[20px]">
                  Everything you need to know about starting your own podcast, from choosing the right equipment and software to developing your content strategy and growing your audience...
                </p>

                {/* Separator */}
                <div className="w-full h-[1px] bg-black/20 mb-[20px]"></div>

                {/* Tags & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-[6px]">
                    <div className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                      <span className="text-[12px] font-medium text-[#4D4D4D]">business</span>
                    </div>
                    <div className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                      <span className="text-[12px] font-medium text-[#4D4D4D]">podcast</span>
                    </div>
                    <div className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                      <span className="text-[12px] font-medium text-[#4D4D4D]">startup</span>
                    </div>
                  </div>
                  <span className="text-[12px] font-bold text-[#4D4D4D]">Sep 14, 2021</span>
                </div>
              </div>
            </Link>

            {/* Post 2 - Doodle Artwork 101 */}
            <Link href="/blog/doodle-artwork-101" className="bg-white border-2 border-black rounded-[8px] overflow-hidden cursor-pointer hover:shadow-[10px_10px_0px_#000000] transition-shadow">
              {/* Image */}
              <div className="relative h-[320px] m-[16px] rounded-[8px] overflow-hidden">
                <Image
                  src="/images/blog-doodle-artwork.png"
                  alt="Doodle Artwork 101"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-[16px] pb-[16px]">
                {/* Category & Title */}
                <div className="mb-[20px]">
                  <p className="text-[14px] font-bold text-[#4D4D4D] leading-[1.6] mb-[6px]">
                    TIPS & TRICK
                  </p>
                  <h3 className="text-[36.65px] font-bold text-black leading-[1.4] tracking-[-0.733px]">
                    Doodle Artwork 101
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6] mb-[20px]">
                  Master the art of doodling with these beginner-friendly techniques. Learn how simple sketches can boost creativity, reduce stress, and add unique visual elements to your content...
                </p>

                {/* Separator */}
                <div className="w-full h-[1px] bg-black/20 mb-[20px]"></div>

                {/* Tags & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-[6px]">
                    <div className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                      <span className="text-[12px] font-medium text-[#4D4D4D]">art</span>
                    </div>
                    <div className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                      <span className="text-[12px] font-medium text-[#4D4D4D]">tips and trick</span>
                    </div>
                    <div className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                      <span className="text-[12px] font-medium text-[#4D4D4D]">creative</span>
                    </div>
                  </div>
                  <span className="text-[12px] font-bold text-[#4D4D4D]">Sep 12, 2021</span>
                </div>
              </div>
            </Link>

            {/* Post 3 - Mother Nature Taking Over */}
            <Link href="/blog/mother-nature-taking-over" className="bg-white border-2 border-black rounded-[8px] overflow-hidden cursor-pointer hover:shadow-[10px_10px_0px_#000000] transition-shadow">
              {/* Image */}
              <div className="relative h-[320px] m-[16px] rounded-[8px] overflow-hidden">
                <Image
                  src="/images/blog-mother-nature.png"
                  alt="Mother Nature Taking Over"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-[16px] pb-[16px]">
                {/* Category & Title */}
                <div className="mb-[20px]">
                  <p className="text-[14px] font-bold text-[#4D4D4D] leading-[1.6] mb-[6px]">
                    NEWS
                  </p>
                  <h3 className="text-[36.65px] font-bold text-black leading-[1.4] tracking-[-0.733px]">
                    Mother Nature Taking Over
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6] mb-[20px]">
                  Exploring the environmental movement and how nature is reclaiming urban spaces worldwide. From rewilding projects to sustainable living, discover how we can coexist with our planet...
                </p>

                {/* Separator */}
                <div className="w-full h-[1px] bg-black/20 mb-[20px]"></div>

                {/* Tags & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-[6px]">
                    <div className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                      <span className="text-[12px] font-medium text-[#4D4D4D]">news</span>
                    </div>
                    <div className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                      <span className="text-[12px] font-medium text-[#4D4D4D]">nature</span>
                    </div>
                  </div>
                  <span className="text-[12px] font-bold text-[#4D4D4D]">Sep 10, 2021</span>
                </div>
              </div>
            </Link>

            {/* Post 4 - How to Be Productive */}
            <Link href="/blog/how-to-be-productive" className="bg-white border-2 border-black rounded-[8px] overflow-hidden cursor-pointer hover:shadow-[10px_10px_0px_#000000] transition-shadow">
              {/* Image */}
              <div className="relative h-[320px] m-[16px] rounded-[8px] overflow-hidden">
                <Image
                  src="/images/blog-productive.png"
                  alt="How to Be Productive"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-[16px] pb-[16px]">
                {/* Category & Title */}
                <div className="mb-[20px]">
                  <p className="text-[14px] font-bold text-[#4D4D4D] leading-[1.6] mb-[6px]">
                    PRODUCTIVITY
                  </p>
                  <h3 className="text-[36.65px] font-bold text-black leading-[1.4] tracking-[-0.733px]">
                    How to Be Productive
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6] mb-[20px]">
                  Proven strategies and techniques to maximize your productivity and achieve your goals. Learn about time management, focus techniques, and building habits that lead to success...
                </p>

                {/* Separator */}
                <div className="w-full h-[1px] bg-black/20 mb-[20px]"></div>

                {/* Tags & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-[6px]">
                    <div className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                      <span className="text-[12px] font-medium text-[#4D4D4D]">productivity</span>
                    </div>
                    <div className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                      <span className="text-[12px] font-medium text-[#4D4D4D]">mindset</span>
                    </div>
                  </div>
                  <span className="text-[12px] font-bold text-[#4D4D4D]">Sep 8, 2021</span>
                </div>
              </div>
            </Link>
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
              <Link href="/about" className="text-[16px] text-black leading-[1.6] font-medium hover:text-[#CD4631] transition-colors">
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
              <Link href="/podcast/perplexed-mind" className="text-[16px] text-[#CD4631] leading-[1.6] font-medium">
                Episodes
              </Link>
              <Link href="#" className="text-[16px] text-black leading-[1.6] font-medium hover:text-[#CD4631] transition-colors">
                Pricing
              </Link>
              <Link href="/blog" className="text-[16px] text-black leading-[1.6] font-medium hover:text-[#CD4631] transition-colors">
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
