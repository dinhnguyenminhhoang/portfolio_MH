'use client'

import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Marketplace',
    category: 'Full-Stack',
    description: 'A complete marketplace platform with payment integration, real-time updates, and admin dashboard. Serving 10K+ monthly users.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    stats: { users: '10K+', rating: '4.8/5', projects: '50+' }
  },
  {
    id: 2,
    title: 'AI Text Correction',
    category: 'AI/ML',
    description: 'Vietnamese spelling & grammar correction using T5/FLAN-T5 models with LoRA fine-tuning. Processing large datasets with 4GB GPU optimization.',
    tech: ['Python', 'TensorFlow', 'Transformers', 'LoRA', 'FastAPI'],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    stats: { accuracy: '95%', dataset: '1M+', speed: '100ms' }
  },
  {
    id: 3,
    title: 'Mobile E-Commerce Apps',
    category: 'Mobile',
    description: 'Cross-platform mobile applications for flower shop and clothing store with cart management, order tracking, and push notifications.',
    tech: ['React Native', 'Expo', 'Redux', 'Firebase'],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    stats: { downloads: '5K+', rating: '4.7/5', features: '30+' }
  },
  {
    id: 4,
    title: 'E-Learning Platform',
    category: 'Web App',
    description: 'Comprehensive learning management system with progress tracking, interactive admin panel, and user onboarding flow.',
    tech: ['React', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    stats: { students: '2K+', courses: '50+', completion: '85%' }
  },
  {
    id: 5,
    title: 'Chrome Extensions Suite',
    category: 'Browser Extension',
    description: 'Productivity tools for Vietnamese students including calendar management with Google Classroom integration and task management.',
    tech: ['JavaScript', 'Chrome APIs', 'Google APIs', 'React'],
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    stats: { users: '5K+', rating: '4.9/5', installs: '10K+' }
  },
  {
    id: 6,
    title: 'Speech-to-Text System',
    category: 'AI/ML',
    description: 'Real-time Vietnamese speech-to-text using Whisper model with accent recognition and API integration.',
    tech: ['Python', 'Whisper', 'FastAPI', 'WebSocket', 'Docker'],
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    stats: { accuracy: '92%', latency: '<1s', languages: '3' }
  }
]

export default function HorizontalProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const projectWidth = container.offsetWidth
      const newActive = Math.round(scrollLeft / projectWidth)
      setActiveProject(newActive)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToProject = (index: number) => {
    const container = containerRef.current
    if (!container) return
    
    container.scrollTo({
      left: index * container.offsetWidth,
      behavior: 'smooth'
    })
  }

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Scroll horizontally to explore my latest work
          </p>
          <div className="mt-4 text-primary text-sm animate-pulse">
            ← Drag or use arrow keys to navigate →
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="horizontal-scroll-section snap-center flex-shrink-0 flex items-center justify-center px-6"
          >
            <div className="max-w-6xl w-full">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Project Visual */}
                <div className="relative group">
                  <div
                    className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
                    style={{ background: project.image }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity">
                      {project.id}
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button className="px-6 py-3 glass rounded-full hover:glow-box transition-all">
                        View Demo
                      </button>
                      <button className="px-6 py-3 glass rounded-full hover:glow-box transition-all">
                        GitHub
                      </button>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="glass rounded-xl p-4 text-center hover:glow-box transition-all">
                        <div className="text-2xl font-bold gradient-text">{value}</div>
                        <div className="text-xs text-gray-400 mt-1 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-4 py-1 neon-border rounded-full text-sm mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 glass rounded-full text-sm hover:glow-box transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Number */}
                  <div className="pt-6 border-t border-gray-800">
                    <span className="text-6xl font-bold text-white/10">
                      {String(project.id).padStart(2, '0')}
                    </span>
                    <span className="text-gray-600 ml-2">/ {String(projects.length).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-12">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToProject(index)}
            className={`h-2 rounded-full transition-all ${
              activeProject === index 
                ? 'w-12 bg-gradient-to-r from-primary to-secondary' 
                : 'w-2 bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      {activeProject > 0 && (
        <button
          onClick={() => scrollToProject(activeProject - 1)}
          className="fixed left-6 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:glow-box transition-all z-10"
          aria-label="Previous project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      
      {activeProject < projects.length - 1 && (
        <button
          onClick={() => scrollToProject(activeProject + 1)}
          className="fixed right-6 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:glow-box transition-all z-10"
          aria-label="Next project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </section>
  )
}
