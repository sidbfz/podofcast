"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Pod of Cast has completely transformed how I consume content. The discussions are always insightful and the audio quality is outstanding!",
    name: "Luna lovegood",
    platform: "Spotify",
    avatar: "/images/avatar-luna.png",
    platformIcon: "spotify",
  },
  {
    quote: "I've been a listener for over a year now. The variety of topics and the depth of each episode keeps me coming back every single week.",
    name: "Emily Blunt",
    platform: "Google Podcast",
    avatar: "/images/avatar-emily.png",
    platformIcon: "google",
  },
  {
    quote: "As a fellow podcaster, I'm constantly inspired by the production quality and engaging storytelling. Truly a benchmark for excellence in podcasting.",
    name: "Mia Winters",
    platform: "Apple Podcast",
    avatar: "/images/avatar-mia.png",
    platformIcon: "apple",
  },
];

// Platform icon components
const SpotifyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="8" fill="#1DB954"/>
    <path d="M11.5 7.5C9.5 6.5 6.5 6.5 4.5 7.2" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M10.8 9.2C9.2 8.4 7 8.4 5.2 9" stroke="white" strokeWidth="1" strokeLinecap="round"/>
    <path d="M10.2 10.8C8.8 10.2 7.2 10.2 5.8 10.6" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>
  </svg>
);

const GooglePodcastIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="0" width="2" height="4" rx="1" fill="#0066D9"/>
    <rect x="7" y="12" width="2" height="4" rx="1" fill="#0066D9"/>
    <rect x="7" y="6" width="2" height="4" rx="1" fill="#4285F4"/>
    <rect x="3" y="4" width="2" height="5" rx="1" fill="#EA4335"/>
    <rect x="3" y="10" width="2" height="3" rx="1" fill="#EA4335"/>
    <rect x="11" y="3" width="2" height="4" rx="1" fill="#34A853"/>
    <rect x="11" y="9" width="2" height="5" rx="1" fill="#34A853"/>
    <rect x="0" y="6" width="2" height="4" rx="1" fill="#FAB908"/>
    <rect x="14" y="5" width="2" height="6" rx="1" fill="#FAB908"/>
  </svg>
);

const ApplePodcastIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="applePodcastGradient" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F452FF"/>
        <stop offset="1" stopColor="#832BC1"/>
      </linearGradient>
    </defs>
    <rect width="16" height="16" rx="3.5" fill="url(#applePodcastGradient)"/>
    <circle cx="8" cy="6" r="2" fill="white"/>
    <path d="M5 11C5 9.5 6.5 8.5 8 8.5C9.5 8.5 11 9.5 11 11V13C11 13.5 10.5 14 10 14H6C5.5 14 5 13.5 5 13V11Z" fill="white"/>
  </svg>
);

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case "spotify":
      return <SpotifyIcon />;
    case "google":
      return <GooglePodcastIcon />;
    case "apple":
      return <ApplePodcastIcon />;
    default:
      return null;
  }
};

export default function Testimonials() {
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const cardWidth = 570; // Width of each card
  const gap = 20; // Gap between cards
  const totalOriginalItems = testimonials.length;

  // Create extended array: [last, ...all, first] for seamless infinite loop
  const extendedTestimonials = [
    testimonials[totalOriginalItems - 1], // Clone of last item at start
    ...testimonials,
    testimonials[0], // Clone of first item at end
  ];

  // Start at position 1 (first real item)
  const [currentIndex, setCurrentIndex] = useState(1);

  const getTranslateValue = (index: number) => {
    return -(index * (cardWidth + gap)) + 140; // 140px left padding
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  // Handle the infinite loop jump
  useEffect(() => {
    setTranslateX(getTranslateValue(currentIndex));

    // When we reach the clone at the end, jump to real first item
    if (currentIndex === extendedTestimonials.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 300);
    }
    // When we reach the clone at the start, jump to real last item
    else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalOriginalItems);
      }, 300);
    }
  }, [currentIndex]);

  // Re-enable transition after instant jump
  useEffect(() => {
    if (!isTransitioning) {
      setTranslateX(getTranslateValue(currentIndex));
      // Small delay to allow the instant repositioning before re-enabling transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning, currentIndex]);

  return (
    <section className="relative bg-[#EDF3F7] py-[140px]">
      {/* Sparkle decoration - top left near title */}
      <div className="absolute left-[calc(8.33%+157px)] top-[71px] w-[105px] h-[105px]">
        <Image
          src="/icons/Shining stars.png"
          alt="Sparkle decoration"
          width={105}
          height={105}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <div className="container mx-auto px-[140px]">
        <div className="text-center mb-20">
          <h2 className="text-[59.3px] font-bold text-black leading-[1.2] tracking-[-1.186px] mb-5">
            What our listeners say
          </h2>
          <p className="text-[22.65px] font-medium text-[#4D4D4D]">
            Their experience throughout every platform
          </p>
        </div>
      </div>

      {/* Testimonial Cards - Full Width Carousel */}
      <div className="w-full overflow-visible mb-10">
        <div 
          className="flex gap-5"
          style={{ 
            transform: `translateX(${translateX}px)`,
            transition: isTransitioning ? 'transform 0.4s ease-in-out' : 'none',
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-10 w-[570px] min-w-[570px] h-[360px] flex-shrink-0 flex flex-col"
            >
              {/* Quote Mark */}
              <p className="text-[95.95px] font-bold text-[#CD4631] leading-[0.5] tracking-[-1.919px] mb-4">
                "
              </p>

              {/* Quote Text */}
              <p className="text-[22.65px] font-medium text-black leading-[1.6] flex-grow">
                {testimonial.quote}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-2.5 mt-auto pt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[14px] font-medium text-black">{testimonial.name},</p>
                <div className="flex items-center gap-2">
                  {getPlatformIcon(testimonial.platformIcon)}
                  <p className="text-[14px] font-bold text-black">{testimonial.platform}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="container mx-auto px-[140px]">
        <div className="flex gap-5">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Previous testimonial"
          >
            {/* Left Arrow SVG */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
              <path d="M27 17L20 24L27 31" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Next testimonial"
          >
            {/* Right Arrow SVG */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23" stroke="#CD4631" strokeWidth="2" fill="none"/>
              <path d="M21 17L28 24L21 31" stroke="#CD4631" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Scribble at bottom - bridges to Features section */}
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
