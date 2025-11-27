"use client";

import { useState, useEffect } from "react";

export default function AIStatsDashboard() {
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [neuralActivity, setNeuralActivity] = useState(0);
  const [dataFlow, setDataFlow] = useState(0);

  useEffect(() => {
    // Simulate real-time stats
    const interval = setInterval(() => {
      setCpuUsage(Math.random() * 100);
      setMemoryUsage(Math.random() * 100);
      setNeuralActivity(Math.random() * 100);
      setDataFlow(Math.random() * 100);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: "CPU LOAD",
      value: cpuUsage,
      unit: "%",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
    },
    {
      label: "MEMORY",
      value: memoryUsage,
      unit: "%",
      icon: "💾",
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "NEURAL NET",
      value: neuralActivity,
      unit: "%",
      icon: "🧠",
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "DATA FLOW",
      value: dataFlow,
      unit: "MB/s",
      icon: "📡",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="fixed top-20 right-6 z-40 hidden xl:block">
      <div className="glass rounded-2xl p-4 border border-primary/20">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs font-mono text-gray-400">SYSTEM STATUS</span>
          <span className="ml-auto text-xs text-primary font-mono">
            {new Date().toLocaleTimeString()}
          </span>
        </div>

        {/* Stats */}
        <div className="space-y-3">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              {/* Label */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-gray-400 flex items-center gap-1">
                  <span>{stat.icon}</span>
                  <span>{stat.label}</span>
                </span>
                <span className="font-mono text-primary">
                  {stat.value.toFixed(1)}
                  {stat.unit}
                </span>
              </div>

              {/* Bar */}
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out relative`}
                  style={{ width: `${stat.value}%` }}
                >
                  {/* Pulse effect */}
                  <div className="absolute inset-0 bg-white/30 animate-pulse" />
                  {/* Scan line */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal output */}
        <div className="mt-4 pt-3 border-t border-gray-700">
          <div className="text-xs font-mono space-y-1 text-green-400">
            <div className="flex items-center gap-2">
              <span className="text-primary">$</span>
              <span className="animate-pulse">System Online...</span>
            </div>
            <div className="text-gray-600">└─ All systems operational</div>
          </div>
        </div>

        {/* Scanning animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
        </div>
      </div>
    </div>
  );
}
