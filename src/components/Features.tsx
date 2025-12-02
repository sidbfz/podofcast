import Image from "next/image";

const features = [
  {
    icon: "/icons/Scribble-1.png",
    title: "Topic by Request",
    description: "Dive deep into topics that matter with industry experts and thought leaders sharing their insights.",
  },
  {
    icon: "/icons/Shining stars.png",
    title: "Exclusive Content",
    description: "Get access to bonus episodes, behind-the-scenes content, and extended interviews only for members.",
  },
  {
    icon: "/icons/Face 1.png",
    title: "Join the Community",
    description: "Connect with fellow listeners, share ideas, and be part of our growing podcast community.",
  },
  {
    icon: "/icons/Face 5.png",
    title: "Livestreaming Access",
    description: "Watch live recordings, participate in Q&A sessions, and interact with hosts in real-time.",
  },
  {
    icon: "/icons/Fire.png",
    title: "Exclusive Episodes & Merch",
    description: "Enjoy member-only episodes and get exclusive merchandise delivered to your door.",
  },
  {
    icon: "/icons/Star.png",
    title: "And much more!",
    description: "Early access to new episodes, ad-free listening, and special discounts on live events.",
  },
];

export default function Features() {
  return (
    <section className="relative bg-white py-[140px]">
      <div className="container mx-auto px-[140px]">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-[59.3px] font-bold text-black leading-[1.2] tracking-[-1.186px] mb-5">
            Membership benefits
          </h2>
          <p className="text-[22.65px] font-medium text-[#4D4D4D]">
            Become our sponsor and get all benefits
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-3 gap-x-[120px] gap-y-[80px] mb-20">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-[78px] h-[78px] mb-[30px] relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-[22.65px] font-bold text-black leading-[1.4] tracking-[-0.453px] mb-2.5 w-[373px]">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-[16px] font-medium text-black leading-[1.6] w-[373px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-9 py-5 bg-black border-2 border-black rounded-lg text-[14px] font-bold text-white hover:bg-[#CD4631] hover:border-[#CD4631] transition-colors">
            SEE PRICING
          </button>
        </div>
      </div>

      {/* Scribble at bottom - bridges to Episodes section */}
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
