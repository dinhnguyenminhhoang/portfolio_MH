"use client";

import { useState, useEffect } from "react";

export default function GitHubStats() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Simulated stats - replace with real GitHub API data
  const stats = {
    totalRepos: 42,
    totalStars: 156,
    totalForks: 28,
    totalContributions: 847,
    languages: [
      { name: "JavaScript", percentage: 35, color: "#F7DF1E" },
      { name: "TypeScript", percentage: 30, color: "#3178C6" },
      { name: "Python", percentage: 15, color: "#3776AB" },
      { name: "CSS", percentage: 12, color: "#1572B6" },
      { name: "Other", percentage: 8, color: "#858585" },
    ],
  };

  const activities = [
    {
      icon: "🎯",
      title: "Pushed to main",
      repo: "portfolio-next",
      time: "2 hours ago",
    },
    {
      icon: "⭐",
      title: "Starred repository",
      repo: "react-hooks",
      time: "5 hours ago",
    },
    {
      icon: "🔀",
      title: "Merged PR",
      repo: "e-commerce-app",
      time: "1 day ago",
    },
    {
      icon: "💬",
      title: "Commented on issue",
      repo: "learning-platform",
      time: "2 days ago",
    },
  ];

  const contributions = [
    { day: "Mon", count: 12 },
    { day: "Tue", count: 8 },
    { day: "Wed", count: 15 },
    { day: "Thu", count: 10 },
    { day: "Fri", count: 18 },
    { day: "Sat", count: 5 },
    { day: "Sun", count: 3 },
  ];

  return (
    <section id="github" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            GitHub Activity
          </h2>
          <p className="text-gray-400 text-lg">
            My open source contributions and coding activity
          </p>
          <a
            href="https://github.com/dinhnguyenminhhoang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 neon-border rounded-full hover:glow-box transition-all magnetic"
          >
            <span>🐙</span>
            <span>View Full Profile</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: "📁",
              label: "Repositories",
              value: stats.totalRepos,
              suffix: "+",
            },
            {
              icon: "⭐",
              label: "Total Stars",
              value: stats.totalStars,
              suffix: "+",
            },
            {
              icon: "🔀",
              label: "Forks",
              value: stats.totalForks,
              suffix: "+",
            },
            {
              icon: "📊",
              label: "Contributions",
              value: stats.totalContributions,
              suffix: "",
            },
          ].map((stat, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`glass rounded-2xl p-6 text-center hover:glow-box transition-all ${hoveredCard === index ? "scale-105" : ""
                }`}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Language Distribution */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span>💻</span>
              <span>Most Used Languages</span>
            </h3>

            <div className="space-y-4">
              {stats.languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="text-gray-400 text-sm">
                      {lang.percentage}%
                    </span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span>📈</span>
              <span>Recent Activity</span>
            </h3>

            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer"
                >
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <p className="text-gray-300 mb-1">{activity.title}</p>
                    <p className="text-sm text-primary">{activity.repo}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contribution Graph - LINE CHART */}
        <div className="mt-8 glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span>🔥</span>
            <span>Weekly Contributions</span>
          </h3>

          <div className="relative h-48">
            {/* SVG Line Chart */}
            <svg
              className="w-full h-full"
              viewBox="0 0 700 200"
              preserveAspectRatio="none"
            >
              {/* Grid Lines */}
              {[0, 25, 50, 75, 100].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={200 - y * 2}
                  x2="700"
                  y2={200 - y * 2}
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth="1"
                />
              ))}

              {/* Area fill gradient */}
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#ff0080" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ffd700" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f5ff" />
                  <stop offset="50%" stopColor="#ff0080" />
                  <stop offset="100%" stopColor="#ffd700" />
                </linearGradient>
              </defs>

              {/* Area under the line */}
              <path
                d={(() => {
                  const maxCount = Math.max(...contributions.map((d) => d.count));
                  const points = contributions.map((day, i) => {
                    const x = (i / (contributions.length - 1)) * 700;
                    const y = 200 - (day.count / maxCount) * 180;
                    return `${x},${y}`;
                  });
                  return `M 0,200 L ${points.join(' L ')} L 700,200 Z`;
                })()}
                fill="url(#areaGradient)"
                className="animate-pulse"
                style={{ animationDuration: '3s' }}
              />

              {/* Line */}
              <path
                d={(() => {
                  const maxCount = Math.max(...contributions.map((d) => d.count));
                  const points = contributions.map((day, i) => {
                    const x = (i / (contributions.length - 1)) * 700;
                    const y = 200 - (day.count / maxCount) * 180;
                    return `${x},${y}`;
                  });
                  return `M ${points.join(' L ')}`;
                })()}
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-lg"
              />

              {/* Data Points */}
              {contributions.map((day, index) => {
                const maxCount = Math.max(...contributions.map((d) => d.count));
                const x = (index / (contributions.length - 1)) * 700;
                const y = 200 - (day.count / maxCount) * 180;

                return (
                  <g key={index}>
                    {/* Outer glow circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r="8"
                      fill="url(#lineGradient)"
                      opacity="0.3"
                      className="animate-pulse"
                    />
                    {/* Main point */}
                    <circle
                      cx={x}
                      cy={y}
                      r="5"
                      fill="url(#lineGradient)"
                      className="hover:r-7 transition-all cursor-pointer drop-shadow-xl"
                    />
                    {/* Center dot */}
                    <circle
                      cx={x}
                      cy={y}
                      r="2"
                      fill="white"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Day labels and tooltips */}
            <div className="flex justify-between mt-4">
              {contributions.map((day, index) => (
                <div
                  key={index}
                  className="flex-1 text-center group relative cursor-pointer"
                >
                  <span className="text-sm text-gray-400">{day.day}</span>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <div className="glass rounded-lg px-4 py-2 whitespace-nowrap">
                      <div className="text-sm font-bold gradient-text">
                        {day.count} commits
                      </div>
                      <div className="text-xs text-gray-400">{day.day}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub Readme Stats */}
        <div className="mt-8 text-center">
          <div className="inline-block glass rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">GitHub Profile Stats</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <img
                src="https://github-readme-stats.vercel.app/api?username=dinhnguyenminhhoang&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117"
                alt="GitHub Stats"
                className="rounded-xl"
              />
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=dinhnguyenminhhoang&theme=tokyonight&hide_border=true&background=0D1117"
                alt="GitHub Streak"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
}
