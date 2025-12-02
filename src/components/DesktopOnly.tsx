"use client";

import { useEffect, useState } from "react";

export default function DesktopOnly({ children }: { children: React.ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    checkWidth();
    setIsLoading(false);

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (isLoading) {
    return null;
  }

  if (!isDesktop) {
    return (
      <div className="fixed inset-0 bg-[#F7EDE8] flex items-center justify-center p-8 z-[9999]">
        <div className="text-center max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-[#CD4631] rounded-full flex items-center justify-center">
                <div className="text-white text-[12px] font-bold leading-[0.9] tracking-[-0.48px] text-left">
                  <p>POD</p>
                  <p>OF</p>
                  <p>CAST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Icon */}
          <div className="mb-6">
            <svg 
              className="w-16 h-16 mx-auto text-[#4D4D4D]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
          </div>

          {/* Message */}
          <h1 className="text-[32px] font-bold text-black mb-4 leading-tight">
            Desktop Only
          </h1>
          <p className="text-[16px] text-[#4D4D4D] leading-[1.6] mb-6">
            Pod of Cast is optimized for desktop viewing. Please visit us on a device with a screen width of at least 1280px for the best experience.
          </p>

          {/* Current width indicator */}
          <div className="inline-block px-4 py-2 bg-white rounded-lg border-2 border-black">
            <p className="text-[14px] font-medium text-[#4D4D4D]">
              Your screen: <span className="font-bold text-black" id="screen-width"></span>
            </p>
          </div>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                function updateWidth() {
                  document.getElementById('screen-width').textContent = window.innerWidth + 'px';
                }
                updateWidth();
                window.addEventListener('resize', updateWidth);
              `,
            }}
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
