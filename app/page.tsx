"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HorizontalProjects from "@/components/HorizontalProjects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";
import LoadingAnimation from "@/components/LoadingAnimation";
import EasterEgg from "@/components/EasterEgg";
import CyberpunkHero from "@/components/Cyberpunkhero";
import Testimonials from "@/components/Testimonials";
import AIStatsDashboard from "@/components/Aistatsdashboard";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll behavior
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((el) => {
        const speed = el.getAttribute("data-speed") || "0.5";
        const yPos = -(scrolled * parseFloat(speed));
        (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <LoadingAnimation />

      <main ref={mainRef} className="relative">
        {/* Simplified Background */}
        <NeuralNetworkBackground />
        <CustomCursor />
        <Navigation />
        <AIStatsDashboard />

        {/* Cyberpunk Hero - NEW FUTURISTIC HERO! */}
        <CyberpunkHero />

        {/* About Section */}
        <About />

        {/* Projects Section - HORIZONTAL SCROLL */}
        <HorizontalProjects />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        <Testimonials />

        {/* GitHub Stats Section */}
        <GitHubStats />

        {/* Contact Section */}
        <Contact />

        {/* Scroll to Top Button */}
        <ScrollToTop />

        {/* Easter Egg Game */}
        <EasterEgg />
      </main>
    </>
  );
}
