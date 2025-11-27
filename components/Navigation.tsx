'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // If at the top of page, always show hero as active
      if (window.scrollY < 200) {
        setActiveSection('hero')
        return
      }

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      if (current) setActiveSection(current)
    }

    // Run once on mount to set initial state
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      // Scroll to absolute top for hero/home
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMobileMenuOpen(false) // Close mobile menu after click
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold gradient-text hover:scale-110 transition-transform"
        >
          MH
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all hover:text-primary ${activeSection === item.id ? 'text-primary' : 'text-gray-400'
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/resume.pdf"
            download="MinhHoang_Resume.pdf"
            className="px-4 py-2 glass rounded-full text-sm font-medium hover:glow-box transition-all magnetic flex items-center gap-2"
          >
            <span>📄</span>
            <span>Resume</span>
          </a>
          <a
            href="mailto:minhhoang.detdev@gmail.com"
            className="px-6 py-2 neon-border rounded-full text-sm font-medium hover:glow-box transition-all magnetic"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-black/95 backdrop-blur-xl transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-2xl font-medium transition-all hover:text-primary ${activeSection === item.id ? 'gradient-text scale-110' : 'text-gray-400'
                }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: mobileMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
              }}
            >
              {item.label}
            </button>
          ))}

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-4 w-full max-w-xs mt-8">
            <a
              href="/resume.pdf"
              download="MinhHoang_Resume.pdf"
              className="w-full py-3 glass rounded-full text-center font-medium hover:glow-box transition-all flex items-center justify-center gap-2"
            >
              <span>📄</span>
              <span>Download Resume</span>
            </a>
            <a
              href="mailto:minhhoang.detdev@gmail.com"
              className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-center font-medium hover:shadow-2xl hover:shadow-primary/50 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
