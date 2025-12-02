import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
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
                <div className="absolute left-[25px] top-[22px] text-[14px] font-bold leading-[0.9] tracking-[-0.56px] font-['Montserrat_Alternates']">
                  <p className="text-[#CD4631] mb-0">POD</p>
                  <p className="text-black mb-0">OF</p>
                  <p className="text-black">CAST</p>
                </div>
              </div>
              <span className="text-[12px] text-[#4D4D4D] font-medium font-['Montserrat_Alternates'] ml-2">©2021.</span>
            </div>
            
            {/* Description */}
            <p className="text-[14px] text-[#4D4D4D] leading-[1.6] max-w-[275px] mt-[40px] mb-[24px] font-medium font-['Montserrat_Alternates']">
              Your go-to destination for insightful conversations and thought-provoking discussions.
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
            <Link href="#" className="text-[16px] text-black leading-[1.6] font-medium font-['Montserrat_Alternates'] hover:text-[#CD4631] transition-colors">
              About
            </Link>
            <Link href="#" className="text-[16px] text-[#CD4631] leading-[1.6] font-medium font-['Montserrat_Alternates']">
              Testimonials
            </Link>
            <Link href="#" className="text-[16px] text-black leading-[1.6] font-medium font-['Montserrat_Alternates'] hover:text-[#CD4631] transition-colors">
              Features
            </Link>
          </div>

          {/* Menu Column 2 */}
          <div className="flex flex-col gap-[20px]">
            <Link href="#" className="text-[16px] text-[#CD4631] leading-[1.6] font-medium font-['Montserrat_Alternates']">
              Episodes
            </Link>
            <Link href="#" className="text-[16px] text-black leading-[1.6] font-medium font-['Montserrat_Alternates'] hover:text-[#CD4631] transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-[16px] text-black leading-[1.6] font-medium font-['Montserrat_Alternates'] hover:text-[#CD4631] transition-colors">
              Blog
            </Link>
          </div>

          {/* Right Section - Platforms */}
          <div className="flex flex-col">
            {/* Listen on platforms */}
            <p className="text-[16px] text-[#4D4D4D] leading-[1.6] font-medium font-['Montserrat_Alternates'] mb-[29px]">
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
            <p className="text-[16px] text-[#4D4D4D] leading-[1.6] font-medium font-['Montserrat_Alternates'] mb-[20px]">
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
            <p className="text-[12px] text-[#4D4D4D] leading-[1.6] font-medium font-['Montserrat_Alternates']">
              ©2022. All Rights Reserved. <span className="text-[#CD4631]">Pod of Cast</span>
            </p>
            <div className="flex items-center gap-[10px] text-[12px] text-[#4D4D4D] leading-[1.6] font-medium font-['Montserrat_Alternates']">
              <Link href="#" className="hover:text-[#CD4631] transition-colors">Terms</Link>
              <span>•</span>
              <Link href="#" className="hover:text-[#CD4631] transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
