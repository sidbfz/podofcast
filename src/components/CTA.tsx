import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative bg-[#EDF3F7] py-[100px] min-h-[816px]">

      {/* Sparkle decorations - left side */}
      <div className="absolute top-[314px] left-[10px]">
        <Image
          src="/icons/Sparkle.png"
          alt=""
          width={171}
          height={171}
        />
      </div>
      <div className="absolute top-[317px] left-[170px]">
        <Image
          src="/icons/Sparkle-1.png"
          alt=""
          width={87}
          height={87}
        />
      </div>
      <div className="absolute top-[305px] left-[137px]">
        <Image
          src="/icons/Sparkle-2.png"
          alt=""
          width={36}
          height={36}
        />
      </div>

      {/* Sparkle decoration - near button */}
      <div className="absolute top-[464px] left-[775px]">
        <Image
          src="/icons/Sparkle-3.png"
          alt=""
          width={120}
          height={120}
        />
      </div>

      {/* Decorative Scribble - bottom right */}
      <div className="absolute top-[477px] right-[100px]">
        <Image
          src="/icons/Scribble-4.png"
          alt=""
          width={200}
          height={200}
        />
      </div>

      {/* Left Phone Mockup - Trending Screen */}
      <div className="absolute left-[60px] top-[310px] w-[340px]">
        <div className="bg-white border-[4px] border-black rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-[22px] font-bold text-black tracking-[-1px]">Trending</h3>
              <p className="text-[12px] font-medium text-[#4D4D4D]">In this week</p>
            </div>
            <Image src="/icons/Search.png" alt="Search" width={22} height={22} />
          </div>
          
          {/* Trending cards with actual images */}
          <div className="flex gap-2 mb-4 overflow-hidden">
            <div className="w-[100px] h-[115px] rounded-[6px] overflow-hidden relative flex-shrink-0 shadow-[4px_6px_0px_0px_#81adc8]">
              <Image
                src="/images/cover-pandemic.png"
                alt="COVID-19 Endemic"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[10px] font-bold text-[#81ADC8]">COVID-19 Endemic</span>
              </div>
            </div>
            <div className="w-[100px] h-[115px] rounded-[6px] overflow-hidden relative flex-shrink-0 shadow-[4px_6px_0px_0px_#81adc8]">
              <Image
                src="/images/cover-womensrights.png"
                alt="Women's Rights"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[10px] font-bold text-[#81ADC8]">Women&apos;s Rights</span>
              </div>
            </div>
            <div className="w-[100px] h-[115px] rounded-[6px] overflow-hidden relative flex-shrink-0 shadow-[4px_6px_0px_0px_#81adc8]">
              <Image
                src="/images/cover-perplexed.png"
                alt="Perplexed Mind"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[10px] font-bold text-[#81ADC8]">Perplexed Mind</span>
              </div>
            </div>
          </div>
          
          <h3 className="text-[14px] font-bold text-black">Recently played</h3>
        </div>
      </div>

      {/* Right Phone Mockup - Now Playing Screen */}
      <div className="absolute right-[60px] top-[100px] w-[380px]">
        <div className="bg-white border-[4px] border-black rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-5">
          <div className="flex justify-between items-center mb-4">
            <Image src="/icons/Arrow - Left Circle.png" alt="Back" width={24} height={24} />
            <span className="text-[14px] font-bold text-[#4D4D4D]">Now Playing</span>
            <Image src="/icons/Bookmark.png" alt="Bookmark" width={24} height={24} />
          </div>
          
          {/* Album Art */}
          <div className="relative w-full h-[280px] rounded-[10px] mb-5 overflow-hidden shadow-[-4px_6px_0px_0px_#81adc8]">
            <Image
              src="/images/cover-selfconfidence.png"
              alt="Self-confidence"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <span className="text-[20px] font-bold text-[#81ADC8]">Self–confidence</span>
            </div>
          </div>
          
          {/* Track Info */}
          <div className="text-center mb-4">
            <p className="text-[11px] font-medium text-[#4D4D4D]">
              Porter Severus • <span className="text-[#CD4631]">Episode 9</span>
            </p>
            <h3 className="text-[18px] font-bold text-black mt-1 leading-[1.3]">
              How to deal with Self–Confidence
            </h3>
          </div>

          {/* Progress bar */}
          <div className="mb-3">
            <div className="flex justify-between text-[9px] text-black mb-1">
              <span>36:29</span>
              <span>59:24</span>
            </div>
            <div className="h-[3px] bg-[#F7EDE8] rounded-full overflow-hidden">
              <div className="h-full w-[60%] bg-[#CD4631] rounded-full"></div>
            </div>
          </div>

          {/* Playback controls */}
          <div className="flex items-center justify-center gap-6">
            <Image src="/icons/backward.png" alt="Backward" width={24} height={24} />
            <div className="w-[50px] h-[50px] bg-[#F7EDE8] rounded-full flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-[6px] h-[16px] bg-[#CD4631] rounded-[2px]"></div>
                <div className="w-[6px] h-[16px] bg-[#CD4631] rounded-[2px]"></div>
              </div>
            </div>
            <Image src="/icons/forward.png" alt="Forward" width={24} height={24} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[140px] relative z-10">
        {/* Center Content */}
        <div className="text-center max-w-[500px] mx-auto pt-[40px]">
          {/* BETA Badge */}
          <div className="inline-block mb-6">
            <span className="bg-[#CD4631] text-white text-[14px] font-bold px-4 py-1.5 rounded-[4px]">
              BETA
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[52px] font-bold text-black leading-[1.15] tracking-[-1.5px] mb-5">
            Available now<br />Pod of Cast App
          </h2>

          {/* Subtitle */}
          <p className="text-[20px] font-medium text-[#4D4D4D] mb-8">
            We just launched our podcast app!
          </p>

          {/* Download Button */}
          <button className="px-[36px] py-[18px] bg-black border-2 border-black rounded-[8px] text-[14px] font-bold text-white leading-[1.6] hover:bg-[#CD4631] hover:border-[#CD4631] transition-colors mb-8">
            DOWNLOAD NOW
          </button>

          {/* Platform Availability */}
          <div className="mt-4">
            <p className="text-[14px] font-medium text-[#4D4D4D] mb-4">
              Content also available on:
            </p>
            <div className="flex justify-center gap-6 items-center">
              <Image
                src="/icons/google podcast-1.png"
                alt="Google Podcast"
                width={100}
                height={24}
              />
              <Image
                src="/icons/spotify-1.png"
                alt="Spotify"
                width={80}
                height={24}
              />
              <Image
                src="/icons/youtube-1.png"
                alt="YouTube"
                width={80}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scribble at bottom - bridges to Footer section */}
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
