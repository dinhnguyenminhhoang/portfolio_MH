'use client'

import { useState } from 'react'

// Skill level mapping
const SKILL_LEVELS = {
  BEGINNER: { label: 'Beginner', dots: 1, color: 'from-gray-500 to-gray-600' },
  INTERMEDIATE: { label: 'Intermediate', dots: 2, color: 'from-blue-500 to-cyan-500' },
  ADVANCED: { label: 'Advanced', dots: 3, color: 'from-purple-500 to-pink-500' },
  EXPERT: { label: 'Expert', dots: 4, color: 'from-orange-500 to-red-500' },
  MASTER: { label: 'Master', dots: 5, color: 'from-yellow-500 to-amber-500' },
}

type SkillLevel = keyof typeof SKILL_LEVELS

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 'ADVANCED' as SkillLevel },
      { name: 'React Native', level: 'ADVANCED' as SkillLevel },
      { name: 'TypeScript', level: 'INTERMEDIATE' as SkillLevel },
      { name: 'TailwindCSS', level: 'ADVANCED' as SkillLevel },
      { name: 'HTML/CSS', level: 'EXPERT' as SkillLevel },
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 'ADVANCED' as SkillLevel },
      { name: 'Express', level: 'ADVANCED' as SkillLevel },
      { name: 'MongoDB', level: 'ADVANCED' as SkillLevel },
      { name: 'PostgreSQL', level: 'INTERMEDIATE' as SkillLevel },
      { name: 'REST API', level: 'ADVANCED' as SkillLevel },
    ]
  },
  {
    title: 'Mobile',
    icon: '📱',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React Native', level: 'ADVANCED' as SkillLevel },
      { name: 'Expo', level: 'INTERMEDIATE' as SkillLevel },
      { name: 'Mobile UI/UX', level: 'ADVANCED' as SkillLevel },
      { name: 'Cross-Platform', level: 'ADVANCED' as SkillLevel },
    ]
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git/GitHub', level: 'ADVANCED' as SkillLevel },
      { name: 'Docker', level: 'INTERMEDIATE' as SkillLevel },
      { name: 'Firebase', level: 'INTERMEDIATE' as SkillLevel },
      { name: 'JWT Auth', level: 'ADVANCED' as SkillLevel },
    ]
  }
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to bring your ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`group relative px-8 py-4 rounded-2xl font-medium transition-all ${activeCategory === index
                ? 'glass glow-box scale-105'
                : 'glass hover:scale-105'
                }`}
            >
              <span className="text-3xl mr-3">{category.icon}</span>
              <span className={activeCategory === index ? 'gradient-text' : 'text-gray-400'}>
                {category.title}
              </span>

              {activeCategory === index && (
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10 rounded-2xl`} />
              )}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const levelInfo = SKILL_LEVELS[skill.level]

              return (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group glass rounded-2xl p-6 hover:glow-box transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Skill Name & Level Label */}
                  <div className="flex justify-between items-center mb-4">
                    <span className={`font-medium text-lg ${hoveredSkill === skill.name ? 'gradient-text' : 'text-white'}`}>
                      {skill.name}
                    </span>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full glass ${hoveredSkill === skill.name ? 'text-primary' : 'text-gray-400'
                      }`}>
                      {levelInfo.label}
                    </span>
                  </div>

                  {/* Level Dots */}
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`h-3 flex-1 rounded-full transition-all duration-500 ${dotIndex < levelInfo.dots
                          ? `bg-gradient-to-r ${levelInfo.color} shadow-lg`
                          : 'bg-gray-700'
                          }`}
                        style={{
                          transitionDelay: `${dotIndex * 100}ms`,
                          boxShadow: dotIndex < levelInfo.dots && hoveredSkill === skill.name
                            ? '0 0 10px rgba(0, 245, 255, 0.5)'
                            : 'none'
                        }}
                      >
                        {dotIndex < levelInfo.dots && hoveredSkill === skill.name && (
                          <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer rounded-full" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Level Description */}
                  <div className="mt-3 text-xs text-gray-500 text-right">
                    {levelInfo.dots}/5 proficiency
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Tools */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'GitHub', 'Postman', 'Docker',
              'Figma', 'Firebase', 'VS Code', 'Vercel'
            ].map((tool) => (
              <div
                key={tool}
                className="group relative glass rounded-xl px-6 py-3 hover:glow-box transition-all magnetic cursor-default"
              >
                <span className="relative z-10">{tool}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  )
}
