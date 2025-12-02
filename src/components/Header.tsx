import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative bg-[#F7EDE8] overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-[140px] py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
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
          </a>

          {/* Menu Items */}
          <div className="flex items-center gap-[60px]">
            <a href="/podcast/perplexed-mind" className="text-[16px] font-bold text-black hover:text-[#CD4631] transition-colors">
              Episodes
            </a>
            <a href="/about" className="text-[16px] font-bold text-black hover:text-[#CD4631] transition-colors">
              About
            </a>
            <a href="/blog" className="text-[16px] font-bold text-black hover:text-[#CD4631] transition-colors">
              Blog
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-5">
            <a href="/podcast/perplexed-mind" className="px-6 py-3 border-2 border-black rounded-lg text-[14px] font-bold text-black hover:bg-black hover:text-white transition-colors">
              RECENT EPISODES
            </a>
            <button className="px-6 py-3 bg-black rounded-lg text-[14px] font-bold text-white shadow-[3px_3px_0px_rgba(0,0,0,0.25)] hover:bg-[#CD4631] transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </nav>

      {/* Decorative Elements */}
      <div className="absolute left-[-304px] top-[70px] w-[630px] h-[592px] opacity-30">
        <Image
          src="/icons/Vector 4.png"
          alt="Swirl decoration"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute right-[60px] top-[235px] w-[155px] h-[216px]">
        <Image
          src="/icons/Group 48095792.png"
          alt="Stars decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-[140px] pt-[80px] pb-[60px] text-center relative z-10">
        <h1 className="text-[96px] font-bold leading-none tracking-[-3.84px] mb-6">
          <span className="text-black">Your Daily</span>
          <br />
          <span className="text-[#CD4631]">Podcast</span>
        </h1>
        <p className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6] mb-10 max-w-[374px] mx-auto">
          We cover all kinds of categories and a weekly special guest.
        </p>
        <button className="px-12 py-6 bg-black rounded-lg text-[14px] font-bold text-white shadow-[6px_6px_0px_rgba(0,0,0,0.25)] hover:bg-[#CD4631] transition-colors">
          SUBSCRIBE
        </button>
      </div>

      {/* Podcast Covers Carousel */}
      <div className="overflow-hidden py-10">
        <div className="flex gap-5 animate-scroll" style={{ width: 'max-content' }}>
          {[
            { cover: '/images/cover-tesla.png', title: 'Tesla Autopilot', color: '#81ADC8', slug: 'tesla-autopilot-controversy' },
            { cover: '/images/cover-selfconfidence.png', title: 'Self–confidence', color: '#81ADC8', slug: 'self-confidence' },
            { cover: '/images/cover-perplexed.png', title: 'Perplexed Mind', color: '#81ADC8', slug: 'perplexed-mind' },
            { cover: '/images/cover-womensrights.png', title: "Women's Rights", color: '#81ADC8', slug: 'womens-rights' },
            { cover: '/images/cover-socialclass.png', title: 'Social Class', color: '#81ADC8', slug: 'social-class' },
            { cover: '/images/cover-tesla.png', title: 'Tesla Autopilot', color: '#81ADC8', slug: 'tesla-autopilot-controversy' },
            { cover: '/images/cover-selfconfidence.png', title: 'Self–confidence', color: '#81ADC8', slug: 'self-confidence' },
            { cover: '/images/cover-perplexed.png', title: 'Perplexed Mind', color: '#81ADC8', slug: 'perplexed-mind' },
          ].map((item, index) => (
            <Link
              key={index}
              href={`/podcast/${item.slug}`}
              className="relative w-[373px] h-[373px] bg-[#E8E8E8] rounded-xl overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <Image
                src={item.cover}
                alt={item.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              {/* Platform Icons */}
              <div className="absolute top-5 right-5 flex gap-2.5 z-10">
                <Image src="/icons/google podcast-1.png" alt="Google Podcast" width={24} height={24} />
                <Image src="/icons/spotify-1.png" alt="Spotify" width={24} height={24} />
                <Image src="/icons/youtube-1.png" alt="YouTube" width={24} height={24} />
              </div>
              {/* Title */}
              <p
                className="absolute bottom-5 left-5 text-[36.65px] font-bold leading-[1.2] tracking-[-2.932px] z-10"
                style={{ color: item.color }}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Supported By Section */}
      <div className="container mx-auto px-[140px] py-10">
        <div className="border-t border-b border-black/20 py-5">
          <div className="flex items-center justify-between">
            <p className="text-[22.65px] font-bold text-black tracking-[-0.453px]">
              Supported by:
            </p>
            <div className="flex items-center gap-[20px]">
              {/* Spotify */}
              <div className="flex items-center justify-center w-[275px] h-[84px] rounded-[8px]">
                <div className="flex items-center gap-[10px]">
                  <svg className="w-[34px] h-[34px]" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 0C7.6109 0 0 7.6109 0 17C0 26.3891 7.6109 34 17 34C26.3891 34 34 26.3891 34 17C34 7.6109 26.3891 0 17 0ZM24.7773 24.5273C24.4523 25.0523 23.7773 25.2148 23.2523 24.8898C19.2773 22.4648 14.2773 21.9398 8.3773 23.2773C7.7773 23.4148 7.1898 23.0398 7.0523 22.4398C6.9148 21.8398 7.2898 21.2523 7.8898 21.1148C14.3648 19.6523 19.9398 20.2523 24.4398 22.9898C24.9648 23.3148 25.1273 24.0023 24.7773 24.5273ZM26.8398 19.8898C26.4273 20.5398 25.5773 20.7398 24.9273 20.3273C20.3773 17.5148 13.4023 16.7148 8.0398 18.3398C7.3148 18.5648 6.5398 18.1523 6.3148 17.4273C6.0898 16.7023 6.5023 15.9273 7.2273 15.7023C13.4023 13.8398 21.0773 14.7273 26.3023 17.9523C26.9523 18.3648 27.1523 19.2398 26.8398 19.8898ZM27.0273 15.0773C21.5148 11.8773 12.5023 11.5773 7.2898 13.1023C6.4273 13.3648 5.5148 12.8773 5.2523 12.0148C4.9898 11.1523 5.4773 10.2398 6.3398 9.9773C12.3398 8.2273 22.3023 8.5773 28.6773 12.2648C29.4523 12.7273 29.7023 13.7273 29.2398 14.5023C28.7773 15.2648 27.7898 15.5273 27.0273 15.0773Z" fill="#1DB954"/>
                  </svg>
                  <span className="text-[22px] font-semibold text-black">Spotify</span>
                </div>
              </div>
              {/* Google Podcasts */}
              <div className="flex items-center justify-center w-[275px] h-[84px] rounded-[8px]">
                <div className="flex items-center gap-[10px]">
                  <svg className="w-[36px] h-[36px]" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15" y="0" width="6" height="9" rx="3" fill="#0066D9"/>
                    <rect x="15" y="27" width="6" height="9" rx="3" fill="#4285F4"/>
                    <rect x="0" y="13.5" width="6" height="9" rx="3" fill="#EA4335"/>
                    <rect x="30" y="13.5" width="6" height="9" rx="3" fill="#34A853"/>
                    <rect x="7.5" y="20.25" width="6" height="9" rx="3" fill="#FAB908"/>
                    <rect x="7.5" y="6.75" width="6" height="9" rx="3" fill="#EA4335"/>
                    <rect x="22.5" y="6.75" width="6" height="9" rx="3" fill="#34A853"/>
                    <rect x="22.5" y="20.25" width="6" height="9" rx="3" fill="#0066D9"/>
                    <rect x="15" y="10.12" width="6" height="15.75" rx="3" fill="#FAB908"/>
                  </svg>
                  <span className="text-[22px] font-medium text-[#5F6368]">Google Podcasts</span>
                </div>
              </div>
              {/* YouTube */}
              <div className="flex items-center justify-center w-[275px] h-[84px] rounded-[8px]">
                <div className="flex items-center gap-[8px]">
                  <svg className="w-[40px] h-[28px]" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.12 4.38C38.66 2.68 37.33 1.33 35.65 0.86C32.52 0 20 0 20 0C20 0 7.48 0 4.35 0.86C2.67 1.33 1.34 2.68 0.88 4.38C0 7.56 0 14.16 0 14.16C0 14.16 0 20.76 0.88 23.94C1.34 25.64 2.67 26.95 4.35 27.42C7.48 28.28 20 28.28 20 28.28C20 28.28 32.52 28.28 35.65 27.42C37.33 26.95 38.66 25.64 39.12 23.94C40 20.76 40 14.16 40 14.16C40 14.16 40 7.56 39.12 4.38Z" fill="#FF0000"/>
                    <path d="M16 20.16V8.16L26.4 14.16L16 20.16Z" fill="white"/>
                  </svg>
                  <span className="text-[22px] font-semibold text-[#282828]">YouTube</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
