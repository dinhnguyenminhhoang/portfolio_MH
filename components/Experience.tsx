'use client'

import { useState } from 'react'

const experiences = [
  {
    year: '2024',
    role: 'Intern Full-Stack Developer',
    company: 'AI Residency FPT Software',
    type: 'Internship',
    description: 'Developed AI-powered applications and worked on machine learning integration projects during the AI Residency program.',
    achievements: [
      'Built full-stack applications using React and Node.js',
      'Integrated AI/ML models into web platforms',
      'Collaborated with senior developers on production projects',
      'Learned best practices in software development'
    ],
    tech: ['React', 'Node.js', 'AI/ML', 'Python']
  },
  {
    year: '2024',
    role: 'Intern Full-Stack Developer',
    company: 'AFFINA',
    type: 'Internship',
    description: 'Contributed to insurance management platform development with focus on frontend and backend integration.',
    achievements: [
      'Developed features for insurance management system',
      'Worked with React and Node.js tech stack',
      'Implemented RESTful APIs and database queries',
      'Participated in code reviews and team meetings'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    year: '2021-2025',
    role: 'Software Engineering Student',
    company: 'FPT Can Tho University',
    type: 'Education',
    description: 'Pursuing Bachelor\'s degree in Software Engineering with focus on full-stack web and mobile development.',
    achievements: [
      'Built multiple full-stack projects including Nova Fashion',
      'Developed V-Booking reservation system',
      'Created React Native mobile applications',
      'Maintained strong academic performance'
    ],
    tech: ['React', 'React Native', 'MongoDB', 'PostgreSQL']
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
            Education
          </h3>
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-8 hover:glow-box transition-all magnetic">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-bold mb-2">Bachelor's Degree in Software Engineering</h4>
              <p className="text-gray-400 mb-2">FPT Can Tho University</p>
              <p className="text-sm text-gray-500">2021 - 2025 (Expected)</p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-400 text-sm">• Focus on Full-Stack Development</p>
                <p className="text-gray-400 text-sm">• Web & Mobile Application Development</p>
                <p className="text-gray-400 text-sm">• Database Management Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
