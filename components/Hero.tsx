'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [textIndex, setTextIndex] = useState(0)

  const roles = [
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'React Native Developer',
    'UI/UX Enthusiast'
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 animated-bg" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            animationDelay: '1s',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Greeting */}
        <div className="mb-6 text-reveal">
          <p className="text-primary text-lg md:text-xl font-medium">
            Hello, I'm
          </p>
        </div>

        {/* Name */}
        <div className="mb-6 text-reveal">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text animate-glow">
            Đinh Nguyễn Minh Hoàng
          </h1>
        </div>

        {/* Rotating Role */}
        <div className="mb-8 h-16 flex items-center justify-center text-reveal">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white/90">
            {roles[textIndex]}
          </h2>
        </div>

        {/* Description */}
        <div className="mb-12 text-reveal">
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Frontend Engineer with strong experience in building high-performance, scalable, and responsive
            applications using React, Next.js, and Vite. Skilled in integrating AI models, optimizing UI performance,
            and delivering production-quality features across web & mobile platforms.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6 justify-center text-reveal">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 neon-border rounded-full font-medium overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-medium magnetic hover:shadow-2xl hover:shadow-primary/50 transition-all"
          >
            Get In Touch
          </button>

          <a
            href="/resume.pdf"
            download="MinhHoang_Resume.pdf"
            className="group relative px-8 py-4 glass rounded-full font-medium hover:glow-box transition-all magnetic flex items-center gap-2"
          >
            <span>📄</span>
            <span>Download Resume</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex gap-6 justify-center text-reveal">
          {[
            { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/dinhnguyenminhhoang' },
            { icon: '🐙', label: 'GitHub', href: 'https://github.com/dinhnguyenminhhoang' },
            { icon: '📧', label: 'Email', href: 'mailto:minhhoang.detdev@gmail.com' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-xl hover:glow-box magnetic transition-all"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
