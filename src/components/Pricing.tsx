import Image from "next/image";

const plans = [
  {
    name: "Member",
    description: "Get started with our basic membership and enjoy exclusive content and community access.",
    price: "$9.99",
    period: "/month",
    benefits: [
      { text: "Exclusive Content", bold: false },
      { text: "5% Discount on Merch", bold: false },
      { text: "Join the Community", bold: false },
      { text: "Livestreaming Access", bold: false },
    ],
    highlighted: false,
    popular: false,
  },
  {
    name: "Family",
    description: "Perfect for families and small groups who want premium perks and exclusive benefits.",
    price: "$14.99",
    period: "/month",
    benefits: [
      { text: "Everything in Tier 1", bold: true },
      { text: "Free tickets to Events", bold: false },
      { text: "Limited Edition Merch", bold: false },
      { text: "Promote your Product", bold: false },
      { text: "Request Topic", bold: false },
    ],
    highlighted: true,
    popular: true,
  },
  {
    name: "Official",
    description: "Become an official sponsor and unlock all premium features plus exclusive recognition.",
    price: "$29.99",
    period: "/month",
    benefits: [
      { text: "Everything in Tier 2", bold: true },
      { text: "Exclusive Badge on Livestreaming", bold: false },
      { text: "Become an Official Sponsor", bold: false },
      { text: "Early Access to All Episodes", bold: false },
      { text: "Free Stikers and Merch", bold: false },
    ],
    highlighted: false,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative bg-white py-[140px]">
      {/* Decorative Star - top right behind cards */}
      <div className="absolute top-[275px] right-[calc(16.67%-86px)] z-0">
        <Image
          src="/icons/Star 4.png"
          alt="Star decoration"
          width={200}
          height={200}
        />
      </div>

      {/* Decorative Scribble - bottom left */}
      <div className="absolute bottom-[120px] left-[70px]">
        <Image
          src="/icons/vector-1.png"
          alt="Scribble decoration"
          width={120}
          height={120}
        />
      </div>

      {/* Sparkle decoration - top left near title */}
      <div className="absolute top-[77px] left-[calc(16.67%+95px)]">
        <Image
          src="/icons/Sparkle.png"
          alt="Sparkle decoration"
          width={60}
          height={60}
          className="rotate-180 scale-y-[-1]"
        />
      </div>

      <div className="container mx-auto px-[140px] relative z-10">
        {/* Title */}
        <div className="text-center mb-[80px]">
          <h2 className="text-[59.3px] font-bold text-black leading-[1.2] tracking-[-1.186px] mb-5">
            Become our sponsor
          </h2>
          <p className="text-[22.65px] font-medium text-[#4D4D4D]">
            Get exclusive episodes, merch and more
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-3 gap-[20px]">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col gap-[20px]">
              {/* Price Card */}
              <div
                className={`rounded-[8px] border-[1.5px] h-[357px] w-[373px] relative ${
                  plan.highlighted
                    ? "bg-[#F7EDE8] border-[#CD4631]"
                    : "bg-white border-black"
                }`}
              >
                {/* Star decoration for Official card */}
                {plan.name === "Official" && (
                  <div className="absolute -top-[50px] -right-[50px] z-0">
                    <Image
                      src="/icons/Star 4-1.png"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                )}
                {/* Title Section */}
                <div className="absolute left-[40px] top-[60px] w-[293px]">
                  {/* Plan Name & Popular Badge */}
                  <div className="flex items-center justify-between mb-[20px]">
                    <h3 className="text-[36.65px] font-bold text-black leading-[1.4] tracking-[-0.733px]">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <span className="bg-[#CD4631] text-white text-[12px] font-bold px-[6px] py-[3px] rounded-[4px] whitespace-nowrap">
                        MOST POPULAR
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6]">
                    {plan.description}
                  </p>
                </div>

                {/* Button & Price Row */}
                <div className="absolute left-[40px] top-[265px] w-[293px] flex items-center justify-between">
                  <button className="bg-black border-2 border-black rounded-[8px] px-[36px] py-[20px] text-[14px] font-bold text-white leading-[1.6] hover:bg-[#CD4631] hover:border-[#CD4631] transition-colors">
                    SUBSCRIBE
                  </button>
                  <div className="text-right">
                    <span className="block text-[22.65px] font-bold text-[#CD4631] leading-[1.4] tracking-[-0.453px]">
                      {plan.price}
                    </span>
                    <span className="block text-[14px] text-[#4D4D4D] leading-[1.6]">
                      {plan.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Benefits Card */}
              <div
                className={`rounded-[8px] border-[1.5px] h-[312px] w-[373px] relative overflow-hidden ${
                  plan.highlighted
                    ? "bg-[#F7EDE8] border-[#CD4631]"
                    : "bg-white border-black"
                }`}
              >
                <div className="absolute left-[40px] top-[40px]">
                  <p className="text-[14px] font-bold text-[#4D4D4D] leading-[1.6] mb-[20px] w-[293px]">
                    What&apos;s included:
                  </p>
                  <ul className="flex flex-col gap-[10px]">
                    {plan.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className={`text-[16px] leading-[1.6] text-black w-[293px] ${
                          benefit.bold ? "font-bold" : "font-medium"
                        }`}
                      >
                        • {benefit.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scribble at bottom - bridges to Blog section */}
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
