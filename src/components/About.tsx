import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-[140px]">

      <div className="container mx-auto px-[140px]">
        {/* Title */}
          {/* Scribble at bottom - bridges to Footer section */}
          <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 z-20">
            <Image
              src="/icons/Scribble.png"
              alt="Scribble decoration"
              width={120}
              height={180}
            />
          </div>
        <h2 className="text-[59.3px] font-bold text-black text-center leading-[1.2] tracking-[-1.186px] mb-20">
          Talk. Listen. Get inspired
          <br />
          by every minute of it.
        </h2>

        {/* Illustrations */}
        <div className="flex justify-between items-start mb-20">
          {/* Left Illustration - Thinking Person */}
          <div className="flex flex-col items-center">
            <div className="w-[275px] h-[275px] relative mb-10">
              <Image
                src="/icons/Group 33511.png"
                alt="Person thinking with question marks"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[16px] font-medium text-black text-center w-[472px]">
              Got questions? We dive deep into the topics that keep you up at night and bring you answers from experts.
            </p>
          </div>

          {/* Right Illustration - Lightbulb Ideas */}
          <div className="flex flex-col items-center">
            <div className="w-[275px] h-[275px] relative mb-10">
              <Image
                src="/icons/ideas.png"
                alt="Lightbulb with ideas"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[16px] font-medium text-black text-center w-[472px]">
              Leave every episode with fresh ideas and new perspectives that spark creativity and inspire action.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="relative bg-[#F7EDE8] rounded-lg px-10 py-10">
          {/* Red Scribble Swirl - Left Side */}
          <div className="absolute -left-[60px] bottom-[20px] w-[120px] h-[120px]">
            <Image
              src="/icons/Vector 4.png"
              alt="Red swirl decoration"
              fill
              className="object-contain"
            />
          </div>
          
          {/* Black Star - Top Right */}
          <div className="absolute -right-[50px] -top-[78px] w-[200px] h-[200px]">
            <Image
              src="/icons/Star 4-1.png"
              alt="Black star decoration"
              fill
              className="object-contain"
            />
          </div>

          {/* Quote Mark */}
          <p className="text-[95.95px] font-bold text-[#CD4631] text-center leading-none tracking-[-1.919px] mt-0">
            "
          </p>

          {/* Quote Text */}
          <p className="text-[36.65px] font-bold text-black text-center leading-[1.4] tracking-[-0.733px] mb-8">
            One of the best daily podcasts that
            <br />
            covers every topic on Spotify.
          </p>

          {/* User Info */}
          <div className="flex items-center justify-center gap-2.5">
            <div className="flex items-center gap-2.5">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image
                  src="/images/avatar-john.png"
                  alt="John Smith"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[14px] font-medium text-black">John Smith,</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Spotify Icon - Green */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="#1DB954"/>
                <path d="M11.5 7.5C9.5 6.5 6.5 6.5 4.5 7.2" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M10.8 9.2C9.2 8.4 7 8.4 5.2 9" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                <path d="M10.2 10.8C8.8 10.2 7.2 10.2 5.8 10.6" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>
              </svg>
              <p className="text-[14px] font-bold text-black">Social Community Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scribble at bottom - bridges to Testimonials section */}
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
