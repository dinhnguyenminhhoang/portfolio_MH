"use client";

import { useEffect, useRef } from "react";

export default function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      connections: Node[];
      pulsePhase: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 2 + 1;
        this.connections = [];
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        if (!canvas) return;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.pulsePhase += 0.05;
      }

      draw() {
        if (!ctx) return;

        const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius * 3
        );
        gradient.addColorStop(0, `rgba(0, 245, 255, ${0.8 * pulse})`);
        gradient.addColorStop(0.5, `rgba(255, 0, 128, ${0.4 * pulse})`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(
          this.x,
          this.y,
          this.radius * (1 + pulse * 0.5),
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(255, 255, 255, ${pulse})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      drawConnections() {
        if (!ctx) return;

        this.connections.forEach((node) => {
          const dx = node.x - this.x;
          const dy = node.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = 1 - distance / 200;
            const pulse =
              (Math.sin(this.pulsePhase) + Math.sin(node.pulsePhase)) / 4 + 0.5;

            // Gradient line
            const gradient = ctx.createLinearGradient(
              this.x,
              this.y,
              node.x,
              node.y
            );
            gradient.addColorStop(
              0,
              `rgba(0, 245, 255, ${opacity * pulse * 0.5})`
            );
            gradient.addColorStop(
              0.5,
              `rgba(255, 0, 128, ${opacity * pulse * 0.3})`
            );
            gradient.addColorStop(
              1,
              `rgba(255, 215, 0, ${opacity * pulse * 0.5})`
            );

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 + pulse;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();

            // Data packets
            if (Math.random() > 0.98) {
              const progress = Math.random();
              const px = this.x + dx * progress;
              const py = this.y + dy * progress;

              ctx.fillStyle = `rgba(0, 245, 255, ${pulse})`;
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fill();

              // Trail
              ctx.shadowBlur = 10;
              ctx.shadowColor = "rgba(0, 245, 255, 0.8)";
              ctx.beginPath();
              ctx.arc(px, py, 1, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        });
      }
    }

    // Create neural network nodes
    const nodes: Node[] = [];
    const nodeCount = 40; // Reduced from 80 for cleaner look

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        new Node(Math.random() * canvas.width, Math.random() * canvas.height)
      );
    }

    // Connect nearby nodes
    nodes.forEach((node) => {
      nodes.forEach((other) => {
        if (node !== other) {
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200 && node.connections.length < 4) {
            node.connections.push(other);
          }
        }
      });
    });

    // Mouse interaction
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Attract nearby nodes
      nodes.forEach((node) => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          node.vx += dx * 0.00005;
          node.vy += dy * 0.00005;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;

      // Fade effect
      ctx.fillStyle = "rgba(10, 10, 10, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw
      nodes.forEach((node) => {
        node.update();
        node.drawConnections();
      });

      nodes.forEach((node) => {
        node.draw();
      });

      // Draw scanning lines
      const scanY = (Date.now() / 20) % canvas.height;
      ctx.strokeStyle = "rgba(0, 245, 255, 0.1)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();

      requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.35 }}
      />
      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          opacity: 0.3,
        }}
      />
    </>
  );
}
