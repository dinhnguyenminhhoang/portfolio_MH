"use client";

import { useEffect, useState } from "react";

export default function CyberpunkHero() {
  const [glitchText, setGlitchText] = useState("MINH HOÀNG");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Glitch effect
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        const glitched = "MINH HOÀNG"
          .split("")
          .map((char) =>
            Math.random() > 0.7
              ? String.fromCharCode(Math.random() * 94 + 33)
              : char
          )
          .join("");
        setGlitchText(glitched);

        setTimeout(() => setGlitchText("MINH HOÀNG"), 100);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const techStack = [
    "REACT.JS",
    "NEXT.JS",
    "TYPESCRIPT",
    "NODE.JS",
    "AI/ML",
    "NEURAL NETWORKS",
    "WEB3",
    "BLOCKCHAIN",
  ];

  return (
    <section
      id="hero-cyber"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Holographic grid */}
      <div
        className="absolute inset-0"
        style={{
          background: `
          linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px),
          linear-gradient(rgba(255, 0, 128, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 0, 128, 0.05) 1px, transparent 1px)
        `,
          backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
          transform: `perspective(500px) rotateX(60deg) translateZ(-100px) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transformOrigin: "center center",
        }}
      />

      {/* Scan lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(transparent 50%, rgba(0, 245, 255, 0.03) 50%)",
          backgroundSize: "100% 4px",
          animation: "scan 8s linear infinite",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* System Boot Text */}
        <div className="mb-8 text-sm font-mono text-green-400 animate-pulse">
          <div>SYSTEM.BOOT_SEQUENCE_INITIATED...</div>
          <div className="text-primary mt-1">└─ NEURAL_INTERFACE.CONNECTED</div>
        </div>

        {/* Main Title with Glitch */}
        <div className="relative mb-8">
          {/* Glitch layers */}
          <h1
            className="text-7xl md:text-9xl font-bold mb-4 relative"
            style={{
              fontFamily: "monospace",
              textShadow: `
                2px 2px 0 rgba(0, 245, 255, 0.7),
                -2px -2px 0 rgba(255, 0, 128, 0.7),
                0 0 20px rgba(0, 245, 255, 0.5)
              `,
            }}
          >
            <span className="relative inline-block">
              <span className="gradient-text">{glitchText}</span>

              {/* Holographic effect */}
              <span
                className="absolute inset-0 gradient-text opacity-50 blur-sm"
                style={{ transform: "translateZ(10px)" }}
              >
                {glitchText}
              </span>
            </span>
          </h1>

          {/* Scanning line */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70 animate-scan-fast" />
          </div>
        </div>

        {/* Subtitle with typing effect */}
        <div className="mb-12 text-2xl md:text-4xl font-mono">
          <span className="text-gray-400">{"> "}</span>
          <span className="gradient-text animate-pulse">
            FRONTEND.DEVELOPER
          </span>
          <span className="text-primary animate-blink">_</span>
        </div>

        {/* Tech Stack Carousel */}
        <div className="mb-12 overflow-hidden">
          <div className="flex gap-6 animate-scroll-left">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="glass neon-border rounded-xl px-6 py-3 whitespace-nowrap font-mono text-sm hover:glow-box transition-all"
                style={{
                  boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                }}
              >
                <span className="text-primary">[</span>
                <span className="text-white">{tech}</span>
                <span className="text-secondary">]</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Display */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
          {[
            { value: "01+", label: "YEARS_XP", icon: "⚡" },
            { value: "30+", label: "PROJECTS", icon: "🚀" },
            { value: "95%", label: "SUCCESS_RATE", icon: "🎯" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 border border-primary/30 hover:border-primary transition-all group"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold font-mono gradient-text mb-1 group-hover:animate-pulse">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 neon-border rounded-xl font-mono overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>{">"}</span>
              <span>INITIALIZE_PROJECT</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="absolute inset-0 border-2 border-primary animate-pulse opacity-0 group-hover:opacity-100" />
          </button>

          <a
            href="/resume.pdf"
            download="MinhHoang_CV.pdf"
            className="group relative px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl font-mono overflow-hidden hover:shadow-2xl hover:shadow-primary/50 transition-all inline-block"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>{">"}</span>
              <span>DOWNLOAD_CV.exe</span>
            </span>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>
        </div>

        {/* Terminal prompt */}
        <div className="mt-12 text-left max-w-xl mx-auto glass rounded-xl p-4 font-mono text-sm">
          <div className="text-green-400 mb-2">
            <span className="text-primary">user@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-secondary">~</span>
            <span className="text-gray-500">$ </span>
            <span className="animate-pulse">./connect_with_me</span>
          </div>
          <div className="text-gray-500 text-xs space-y-1">
            <div>└─ Initializing connection...</div>
            <div className="text-primary">└─ Status: READY</div>
          </div>
        </div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-primary animate-pulse" />
      <div
        className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-secondary animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-accent animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-primary animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Holographic particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        />
      ))}
    </section>
  );
}
