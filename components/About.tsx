'use client'

import { useState } from 'react'

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const highlights = [
    {
      icon: '💼',
      number: '6+',
      label: 'Months Experience',
      color: 'from-primary to-blue-500'
    },
    {
      icon: '🚀',
      number: '5+',
      label: 'Projects Built',
      color: 'from-secondary to-pink-500'
    },
    {
      icon: '⭐',
      number: '2',
      label: 'Internships',
      color: 'from-accent to-yellow-500'
    },
    {
      icon: '🎓',
      number: '2025',
      label: 'Expected Graduation',
      color: 'from-green-400 to-emerald-500'
    }
  ]

  return (
    <section id="about" className="relative min-h-screen flex items-center py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">About Me</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-primary font-semibold">Software Engineering student</span> at
                  FPT Can Tho University, passionate about full-stack development. Currently in my final year,
                  graduating in 2025.
                </p>
                <p>
                  Specializing in <span className="text-secondary font-semibold">React</span>,
                  <span className="text-accent font-semibold"> React Native</span>, and
                  <span className="text-primary font-semibold"> Node.js</span>, I build modern web and mobile
                  applications. I have hands-on experience from internships at AFFINA and FPT Software AI Residency.
                </p>
                <p>
                  My projects include e-commerce platforms like <span className="text-primary font-semibold">Nova Fashion</span>,
                  booking systems like <span className="text-secondary font-semibold">V-Booking</span>,
                  and insurance management platforms. I'm always eager to learn new technologies and tackle challenging problems.
                </p>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="flex flex-wrap gap-3">
              {['React', 'React Native', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 neon-border rounded-full text-sm font-medium hover:glow-box transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-medium hover:shadow-2xl hover:shadow-primary/50 transition-all magnetic"
              >
                View Projects
              </button>
              <a
                href="/resume.pdf"
                className="px-8 py-3 neon-border rounded-full font-medium hover:glow-box transition-all magnetic"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative group glass rounded-2xl p-8 hover:glow-box transition-all duration-300 ${hoveredCard === index ? 'scale-105' : ''
                  }`}
              >
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                {/* Number */}
                <div className={`text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                  {item.number}
                </div>

                {/* Label */}
                <div className="text-gray-400 text-sm">
                  {item.label}
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-300 italic">
            "Code is like humor. When you have to explain it, it's bad."
          </blockquote>
          <p className="mt-4 text-gray-500">— Cory House</p>
        </div>
      </div>
    </section>
  )
}
