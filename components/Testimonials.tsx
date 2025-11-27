"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    company: "TechStart Inc.",
    avatar: "👩‍💼",
    rating: 5,
    text: "Minh Hoàng delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise is outstanding. Highly recommended!",
    project: "E-Commerce Platform",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Product Manager",
    company: "EduTech Solutions",
    avatar: "👨‍💻",
    rating: 5,
    text: "Working with Hoàng was a pleasure. He transformed our learning platform with modern features and beautiful UI. The project was delivered on time and within budget.",
    project: "Learning Management System",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Founder",
    company: "StyleHub",
    avatar: "👩‍🎨",
    rating: 5,
    text: "The mobile app Hoàng built for our fashion store is amazing! Smooth, fast, and our customers love it. Sales increased by 40% after launch!",
    project: "Mobile E-Commerce App",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    name: "Alex Nguyen",
    role: "CTO",
    company: "AI Innovations",
    avatar: "👨‍🔬",
    rating: 5,
    text: "Impressed by his AI/ML integration skills. The text correction model he implemented works flawlessly. True professional who stays updated with latest tech.",
    project: "AI Text Correction System",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Emily Wilson",
    role: "Marketing Director",
    company: "GrowthCo",
    avatar: "👩‍💼",
    rating: 5,
    text: "Our Chrome extension reached 5K+ users within months thanks to Hoàng's excellent work. Clean code, great UX, and amazing support throughout.",
    project: "Chrome Extension Suite",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-400 text-lg">
            What people say about working with me
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Card */}
            <div className="glass rounded-3xl p-8 md:p-12 glow-box">
              {/* Quote Icon */}
              <div className="text-6xl text-primary/20 mb-6">"</div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-accent">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                {current.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-6">
                {/* Avatar */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-gradient-to-r ${current.color}`}
                >
                  {current.avatar}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {current.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {current.role} at {current.company}
                  </p>
                  <p className="text-primary text-sm mt-1">
                    Project: {current.project}
                  </p>
                </div>

                {/* Project Number */}
                <div className="hidden md:block">
                  <div className="text-5xl font-bold text-white/10">
                    {String(current.id).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 glass rounded-full flex items-center justify-center hover:glow-box transition-all"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 glass rounded-full flex items-center justify-center hover:glow-box transition-all"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-12 bg-gradient-to-r from-primary to-secondary"
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: "😊", value: "50+", label: "Happy Clients" },
            { icon: "⭐", value: "4.9/5", label: "Average Rating" },
            { icon: "🚀", value: "100%", label: "Project Success" },
            { icon: "🔁", value: "85%", label: "Repeat Clients" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center hover:glow-box transition-all"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
