"use client";

import { useState, useEffect } from "react";

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg" />

      {/* Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-12">
          <div className="text-8xl md:text-9xl font-bold gradient-text animate-pulse">
            MH
          </div>
          <div className="text-xl md:text-2xl text-gray-400 mt-4 animate-pulse">
            Portfolio
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          {/* Bar Container */}
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />

            {/* Progress */}
            <div
              className="relative h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
            </div>
          </div>

          {/* Percentage */}
          <div className="text-center">
            <span className="text-2xl font-bold gradient-text">
              {Math.floor(progress)}%
            </span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-8 flex justify-center gap-2">
          <span className="text-gray-400">Loading</span>
          <span className="animate-bounce delay-0">.</span>
          <span className="animate-bounce delay-100">.</span>
          <span className="animate-bounce delay-200">.</span>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary rounded-tl-3xl opacity-30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-secondary rounded-tr-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-accent rounded-bl-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary rounded-br-3xl opacity-30" />
    </div>
  );
}
