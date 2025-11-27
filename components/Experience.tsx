'use client'

import { useState } from 'react'

const experiences = [
  {
    year: '2025',
    role: 'Frontend Engineer Intern',
    company: 'AFFINA',
    type: 'Internship',
    description: 'Building frontend features using React, Next.js, and Material UI. Developing reusable UI components and implementing responsive layouts.',
    achievements: [
      'Built frontend features using React, Next.js, Material UI (MUI), Zustand, React Query, and Redux',
      'Developed reusable UI components and implemented responsive, accessible layouts',
      'Integrated API data fetching with React Query, improving performance and reducing redundant calls',
      'Collaborated with product/design teams to deliver pixel-perfect UI and enhance user experience'
    ],
    tech: ['React', 'Next.js', 'Material UI', 'Zustand', 'React Query', 'Redux']
  },
  {
    year: '2021',
    role: 'Software Engineering Student',
    company: 'University of Transport and Communications - HCM',
    type: 'Education',
    description: 'Pursuing degree in Computer Science with focus on web development, UI/UX design, and modern frontend technologies.',
    achievements: [
      'Built full-stack e-commerce platform (Nova Fashion) with React, Vite, and Node.js',
      'Developed AFFINA FE Website & Portal using Next.js and modern libraries',
      'Created AI-powered tools: Spell Check (LLM), VocaSumAI Extension, Speech to Text',
      'Earned Google UX Design and Cybersecurity Professional certificates'
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB']
  }
]

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="experience" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My journey in web development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative transition-all duration-500 ${activeIndex === index ? 'scale-105' : 'scale-100'
                  }`}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass rounded-2xl p-8 hover:glow-box transition-all">
                      {/* Header */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs neon-border rounded-full mb-2">
                          {exp.type}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Year Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-32 h-32 rounded-full glass flex items-center justify-center border-4 transition-all ${activeIndex === index
                      ? 'border-primary glow-box scale-110'
                      : 'border-gray-700'
                      }`}>
                      <span className="text-3xl font-bold gradient-text">
                        {exp.year}
                      </span>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10 gradient-text">
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 hover:glow-box transition-all magnetic">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-bold mb-2">Computer Science</h4>
              <p className="text-gray-400 mb-2">University of Transport and Communications</p>
              <p className="text-sm text-gray-500 mb-4">Campus in Ho Chi Minh City</p>
              <p className="text-sm text-gray-500">2021 - Present</p>
            </div>

            <div className="glass rounded-2xl p-8 hover:glow-box transition-all magnetic">
              <div className="text-4xl mb-4">📜</div>
              <h4 className="text-xl font-bold mb-2">Certifications</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Foundations of User Experience (UX) Design</li>
                <li>• Google Cybersecurity Professional Certificate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
