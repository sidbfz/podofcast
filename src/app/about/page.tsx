import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Hero Title Section */}
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
            <span className="text-black">About</span>
            <br />
            <span className="text-[#CD4631]">Pod of Cast</span>
          </h1>
          <p className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6] mb-10 max-w-[766px] mx-auto">
            We&apos;re passionate about creating meaningful conversations that inspire, educate, and entertain.
            Join our growing community of curious minds exploring ideas that matter.
          </p>
          
          {/* Buttons */}
          <div className="flex items-center justify-center gap-5">
            <button className="px-9 py-5 bg-[#F7EDE8] border-2 border-black rounded-lg text-[14px] font-bold text-black hover:bg-black hover:text-white transition-colors">
              BECOME SPONSOR
            </button>
            <button className="px-9 py-5 bg-black border-2 border-black rounded-lg text-[14px] font-bold text-white hover:bg-[#CD4631] hover:border-[#CD4631] transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Decorative Star Bottom Right */}
        <div className="absolute right-0 bottom-[60px] w-[120px] h-[120px]">
          <Image
            src="/icons/Vector 4-1.png"
            alt="Star decoration"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Stats Cards - Positioned to overlap between sections */}
      <div className="container mx-auto px-[140px] relative z-20 -mt-[117px]">
        <div className="flex gap-5 justify-center">
          {/* Card 1 - 76K */}
          <div className="w-[373px] h-[235px] bg-white border-[1.5px] border-black rounded-lg shadow-[6px_6px_0px_#CD4631] flex items-center justify-center">
            <div className="text-center">
              <p className="text-[59.3px] font-bold leading-[1.2] tracking-[-1.186px]">
                <span className="text-[#CD4631]">76</span>
                <span className="text-black">K</span>
              </p>
              <p className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6]">
                Community Members
              </p>
            </div>
          </div>

          {/* Card 2 - 128K */}
          <div className="w-[373px] h-[235px] bg-white border-[1.5px] border-black rounded-lg shadow-[6px_6px_0px_#CD4631] flex items-center justify-center">
            <div className="text-center">
              <p className="text-[59.3px] font-bold leading-[1.2] tracking-[-1.186px]">
                <span className="text-[#CD4631]">128</span>
                <span className="text-black">K</span>
              </p>
              <p className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6]">
                Podcast Subscribers
              </p>
            </div>
          </div>

          {/* Card 3 - 59K */}
          <div className="w-[373px] h-[235px] bg-white border-[1.5px] border-black rounded-lg shadow-[6px_6px_0px_#CD4631] flex items-center justify-center">
            <div className="text-center">
              <p className="text-[59.3px] font-bold leading-[1.2] tracking-[-1.186px]">
                <span className="text-[#CD4631]">59</span>
                <span className="text-black">K</span>
              </p>
              <p className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6]">
                Daily Listeners
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Our Listeners Say Section */}
      <section className="relative bg-white pt-[140px] pb-[140px]">
        <div className="container mx-auto px-[140px]">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-[59.3px] font-bold text-black leading-[1.2] tracking-[-1.186px] mb-5">
              What <span className="text-black">our listeners say</span>
            </h2>
            <p className="text-[22.65px] font-medium text-[#4D4D4D] leading-[1.6]">
              Their experience throughout every platform
            </p>
          </div>

          {/* Microphone Image */}
          <div className="relative w-full h-[640px] rounded-lg overflow-hidden mb-20">
            <Image
              src="/images/about-microphone.png"
              alt="Podcast microphone"
              fill
              className="object-cover"
            />
          </div>

          {/* Sparkle Decoration */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[930px] w-[120px] h-[120px] rotate-180">
            <Image
              src="/icons/Sparkle.png"
              alt="Sparkle decoration"
              fill
              className="object-contain"
            />
          </div>

          {/* About and History */}
          <div className="text-center mb-16">
            <h3 className="text-[36.65px] font-bold text-black leading-[1.4] tracking-[-0.733px]">
              About and History
            </h3>
          </div>

          {/* Two Column Text */}
          <div className="grid grid-cols-2 gap-20 mb-16">
            <div className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6]">
              <p className="mb-4">
                Every week we bring you <span className="font-bold text-black">thought-provoking</span> conversations with experts, creators, and everyday people with extraordinary stories. Our mission is to spark <span className="font-bold text-black">meaningful dialogue</span>.
              </p>
              <p>
                From technology to wellness, business to creativity,
                we explore topics that help you grow, learn, and see the world differently.
              </p>
            </div>
            <div className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6]">
              <p className="mb-4">
                What started as a passion project has grown into a <span className="font-bold text-black">thriving community</span> of curious minds. We believe in the power of conversation to bridge divides, challenge assumptions, and inspire <span className="font-bold text-black">positive</span> change in people's <span className="font-bold text-black">lives</span>.
              </p>
              <p>
                Join us on this journey of discovery. <span className="underline text-black">Subscribe today</span>
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-black mb-20"></div>

          {/* Founder Section Title */}
          <div className="text-center mb-16">
            <h3 className="text-[36.65px] font-bold text-black leading-[1.4] tracking-[-0.733px]">
              Founder and Main Host
            </h3>
          </div>

          {/* Host Cards */}
          <div className="grid grid-cols-2 gap-5">
            {/* Host 1 - Porter Severus */}
            <div className="bg-white border-2 border-black rounded-lg shadow-[10px_10px_0px_#000] overflow-hidden h-[520px] relative">
              {/* Face decoration */}
              <div className="absolute top-4 right-4 w-[130px] h-[130px]">
                <Image
                  src="/icons/Face 1.png"
                  alt="Face decoration"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex h-full">
                {/* Avatar */}
                <div className="w-[275px] h-[488px] m-4 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/host-porter.png"
                    alt="Porter Severus"
                    fill
                    className="object-cover object-[-250px_center]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-end p-4 pb-8">
                  <div className="mb-5">
                    <p className="text-[14px] font-medium text-black mb-1.5">Host 1</p>
                    <h4 className="text-[36.65px] font-bold text-black leading-none tracking-[-0.733px]">
                      Porter<br/>Severus
                    </h4>
                  </div>
                  <p className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6] mb-5 max-w-[259px]">
                    Award-winning journalist with 10+ years of experience in media. Passionate about uncovering stories that matter.
                  </p>
                  
                  {/* Social Links */}
                  <div className="border-t border-black pt-2.5 flex items-center justify-end gap-5">
                    <span className="text-[12px] font-bold text-[#4D4D4D]">follow me:</span>
                    <div className="flex gap-2.5">
                      <Link href="#">
                        <Image src="/icons/tiktok.png" alt="TikTok" width={20} height={20} />
                      </Link>
                      <Link href="#">
                        <Image src="/icons/twitter.png" alt="Twitter" width={20} height={20} />
                      </Link>
                      <Link href="#">
                        <Image src="/icons/instagram.png" alt="Instagram" width={20} height={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Host 2 - Marques Keith */}
            <div className="bg-white border-2 border-black rounded-lg shadow-[10px_10px_0px_#000] overflow-hidden h-[520px] relative">
              {/* Star decoration */}
              <div className="absolute top-4 right-4 w-[130px] h-[130px]">
                <Image
                  src="/icons/Star.png"
                  alt="Star decoration"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex h-full">
                {/* Avatar */}
                <div className="w-[275px] h-[488px] m-4 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/host-marques.png"
                    alt="Marques Keith"
                    fill
                    className="object-cover object-[-250px_center]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-end p-4 pb-8">
                  <div className="mb-5">
                    <p className="text-[14px] font-medium text-black mb-1.5">Host 2</p>
                    <h4 className="text-[36.65px] font-bold text-black leading-none tracking-[-0.733px]">
                      Marques<br/>Keith
                    </h4>
                  </div>
                  <p className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6] mb-5 max-w-[259px]">
                    Tech enthusiast and storyteller. Loves exploring the intersection of innovation and everyday life.
                  </p>
                  
                  {/* Social Links */}
                  <div className="border-t border-black pt-2.5 flex items-center justify-end gap-5">
                    <span className="text-[12px] font-bold text-[#4D4D4D]">follow me:</span>
                    <div className="flex gap-2.5">
                      <Link href="#">
                        <Image src="/icons/tiktok.png" alt="TikTok" width={20} height={20} />
                      </Link>
                      <Link href="#">
                        <Image src="/icons/twitter.png" alt="Twitter" width={20} height={20} />
                      </Link>
                      <Link href="#">
                        <Image src="/icons/instagram.png" alt="Instagram" width={20} height={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sponsor Section */}
      <section className="relative bg-[#F7EDE8] py-[140px] overflow-hidden">
        {/* Sparkle decoration */}
        <div className="absolute left-[calc(25%+100px)] top-[100px] w-[74px] h-[74px]">
          <Image
            src="/icons/Sparkle.png"
            alt="Sparkle decoration"
            fill
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-[140px]">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-[59.3px] font-bold text-black leading-[1.2] tracking-[-1.186px] mb-5 italic">
              Our Sponsor
            </h2>
            <p className="text-[22.65px] font-medium text-[#4D4D4D] leading-[1.6]">
              Our current official sponsor
            </p>
          </div>
        </div>

        {/* Sponsor Cards - Infinite Scroll */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-5 animate-scroll pl-[140px]">
            {/* First set of cards */}
            {/* Google Podcasts */}
            <div className="min-w-[420px] h-[220px] bg-white border-[1.5px] border-black rounded-xl px-8 py-6 flex flex-col items-center justify-center shrink-0">
              <div className="flex flex-col items-center gap-4 mb-4">
                {/* Google Podcasts SVG Logo */}
                <div className="flex items-center gap-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 4V10" stroke="#0066D9" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M20 30V36" stroke="#34A853" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M20 16V24" stroke="#4285F4" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M12 12V18" stroke="#FAB908" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M12 24V28" stroke="#FAB908" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M28 14V18" stroke="#EA4335" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M28 24V28" stroke="#EA4335" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M4 18V22" stroke="#34A853" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M36 18V22" stroke="#0066D9" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[22px] font-medium text-black">Google Podcasts</span>
                </div>
                <div className="w-[320px] h-[1px] bg-black"></div>
              </div>
              <p className="text-[13px] font-medium text-[#4D4D4D] leading-[1.6] text-center max-w-[380px]">
                Quis dictum cursus faucibus mattis <span className="text-black font-semibold">dignissim</span>. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.
              </p>
            </div>

            {/* Spotify */}
            <div className="min-w-[420px] h-[220px] bg-white border-[1.5px] border-black rounded-xl px-8 py-6 flex flex-col items-center justify-center shrink-0">
              <div className="flex flex-col items-center gap-4 mb-4">
                {/* Spotify SVG Logo */}
                <div className="flex items-center gap-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#1DB954"/>
                    <path d="M28.5 18.5C23.5 15.5 15 15.5 10 17.5" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M27 22.5C22.5 20 16 20 11.5 21.5" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M25.5 26.5C21.5 24.5 17 24.5 13 25.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[22px] font-medium text-black">Spotify<sup className="text-[10px]">®</sup></span>
                </div>
                <div className="w-[320px] h-[1px] bg-black"></div>
              </div>
              <p className="text-[13px] font-medium text-[#4D4D4D] leading-[1.6] text-center max-w-[380px]">
                Quis dictum cursus faucibus mattis <span className="text-black font-semibold">dignissim</span>. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.
              </p>
            </div>

            {/* YouTube */}
            <div className="min-w-[420px] h-[220px] bg-white border-[1.5px] border-black rounded-xl px-8 py-6 flex flex-col items-center justify-center shrink-0">
              <div className="flex flex-col items-center gap-4 mb-4">
                {/* YouTube SVG Logo */}
                <div className="flex items-center gap-3">
                  <svg width="50" height="35" viewBox="0 0 50 35" fill="none">
                    <rect x="2" y="2" width="46" height="31" rx="8" fill="#FF0000"/>
                    <path d="M20 10L32 17.5L20 25V10Z" fill="white"/>
                  </svg>
                  <span className="text-[22px] font-medium text-black">YouTube</span>
                </div>
                <div className="w-[320px] h-[1px] bg-black"></div>
              </div>
              <p className="text-[13px] font-medium text-[#4D4D4D] leading-[1.6] text-center max-w-[380px]">
                Quis dictum cursus faucibus mattis <span className="text-black font-semibold">dignissim</span>. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.
              </p>
            </div>

            {/* Duplicate set for infinite scroll */}
            {/* Google Podcasts */}
            <div className="min-w-[420px] h-[220px] bg-white border-[1.5px] border-black rounded-xl px-8 py-6 flex flex-col items-center justify-center shrink-0">
              <div className="flex flex-col items-center gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 4V10" stroke="#0066D9" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M20 30V36" stroke="#34A853" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M20 16V24" stroke="#4285F4" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M12 12V18" stroke="#FAB908" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M12 24V28" stroke="#FAB908" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M28 14V18" stroke="#EA4335" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M28 24V28" stroke="#EA4335" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M4 18V22" stroke="#34A853" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M36 18V22" stroke="#0066D9" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[22px] font-medium text-black">Google Podcasts</span>
                </div>
                <div className="w-[320px] h-[1px] bg-black"></div>
              </div>
              <p className="text-[13px] font-medium text-[#4D4D4D] leading-[1.6] text-center max-w-[380px]">
                Quis dictum cursus faucibus mattis <span className="text-black font-semibold">dignissim</span>. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.
              </p>
            </div>

            {/* Spotify */}
            <div className="min-w-[420px] h-[220px] bg-white border-[1.5px] border-black rounded-xl px-8 py-6 flex flex-col items-center justify-center shrink-0">
              <div className="flex flex-col items-center gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#1DB954"/>
                    <path d="M28.5 18.5C23.5 15.5 15 15.5 10 17.5" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M27 22.5C22.5 20 16 20 11.5 21.5" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M25.5 26.5C21.5 24.5 17 24.5 13 25.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[22px] font-medium text-black">Spotify<sup className="text-[10px]">®</sup></span>
                </div>
                <div className="w-[320px] h-[1px] bg-black"></div>
              </div>
              <p className="text-[13px] font-medium text-[#4D4D4D] leading-[1.6] text-center max-w-[380px]">
                Quis dictum cursus faucibus mattis <span className="text-black font-semibold">dignissim</span>. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.
              </p>
            </div>

            {/* YouTube */}
            <div className="min-w-[420px] h-[220px] bg-white border-[1.5px] border-black rounded-xl px-8 py-6 flex flex-col items-center justify-center shrink-0">
              <div className="flex flex-col items-center gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <svg width="50" height="35" viewBox="0 0 50 35" fill="none">
                    <rect x="2" y="2" width="46" height="31" rx="8" fill="#FF0000"/>
                    <path d="M20 10L32 17.5L20 25V10Z" fill="white"/>
                  </svg>
                  <span className="text-[22px] font-medium text-black">YouTube</span>
                </div>
                <div className="w-[320px] h-[1px] bg-black"></div>
              </div>
              <p className="text-[13px] font-medium text-[#4D4D4D] leading-[1.6] text-center max-w-[380px]">
                Quis dictum cursus faucibus mattis <span className="text-black font-semibold">dignissim</span>. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="relative bg-white py-[140px]">
        {/* Decorative swirl on left */}
        <div className="absolute left-[20px] bottom-[100px] w-[120px] h-[120px]">
          <Image
            src="/icons/Scribble.png"
            alt="Swirl decoration"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Decorative diamonds on right */}
        <div className="absolute right-[140px] top-[200px] w-[50px] h-[80px]">
          <svg width="50" height="80" viewBox="0 0 50 80" fill="none">
            <path d="M25 0L30 15L25 30L20 15L25 0Z" fill="none" stroke="#81ADC8" strokeWidth="1.5"/>
            <path d="M25 50L30 65L25 80L20 65L25 50Z" fill="none" stroke="#CD4631" strokeWidth="1.5"/>
          </svg>
        </div>

        <div className="container mx-auto px-[140px]">
          {/* Section Title */}
          <div className="text-center mb-12">
            {/* Squiggly decoration */}
            <div className="flex justify-center mb-2">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path d="M5 15C10 5 15 15 20 10C25 5 30 15 35 10" stroke="#CD4631" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-[59.3px] font-bold text-black leading-[1.2] tracking-[-1.186px] mb-5 italic">
              Get in touch
            </h2>
            <p className="text-[18px] font-medium text-[#4D4D4D] leading-[1.6]">
              Send your message to us
            </p>
          </div>

          {/* Separator line */}
          <div className="w-full h-[1px] bg-black/20 mb-10"></div>

          {/* Contact Form */}
          <form className="w-full">
            <div className="grid grid-cols-2 gap-5 mb-5">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-black">
                  Full name <span className="text-[#CD4631]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Porter Sev"
                  className="w-full h-14 px-5 border border-black/30 rounded-lg text-[16px] font-medium text-black placeholder:text-black focus:border-[#CD4631] focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-black">
                  Email <span className="text-[#CD4631]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full h-14 px-5 border border-black/30 rounded-lg text-[16px] font-medium text-black placeholder:text-[#4D4D4D] focus:border-[#CD4631] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5">
              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-black">
                  Phone <span className="text-[#CD4631]">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full h-14 px-5 border border-black/30 rounded-lg text-[16px] font-medium text-black placeholder:text-[#4D4D4D] focus:border-[#CD4631] focus:outline-none transition-colors"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-black">
                  Subject <span className="text-[#CD4631]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject..."
                  className="w-full h-14 px-5 border border-black/30 rounded-lg text-[16px] font-medium text-black placeholder:text-[#4D4D4D] focus:border-[#CD4631] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 mb-8">
              <label className="text-[14px] font-medium text-black">
                Message <span className="text-[#CD4631]">*</span>
              </label>
              <textarea
                placeholder="Your message goes here..."
                rows={6}
                className="w-full px-5 py-4 border border-black/30 rounded-lg text-[16px] font-medium text-black placeholder:text-[#4D4D4D] focus:border-[#CD4631] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Row */}
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-medium text-black">
                <span className="text-[#CD4631]">*</span>required
              </p>
              <button
                type="submit"
                className="px-8 py-4 bg-black rounded-lg text-[14px] font-bold text-white tracking-wider hover:bg-[#CD4631] transition-colors"
              >
                SEND MESSAGE
              </button>
              <p className="text-[14px] font-medium text-black text-right">
                Viverra at port<br />accumsan. <span className="text-[#CD4631] underline cursor-pointer">Orci non</span>
              </p>
            </div>
          </form>
        </div>

        {/* Scribble at bottom */}
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[100px] h-[60px]">
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
            <path d="M10 30C20 10 40 50 50 30C60 10 80 50 90 30" stroke="#CD4631" strokeWidth="2" strokeLinecap="round"/>
          </svg>
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
                      src="/images/cover-1.png"
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
