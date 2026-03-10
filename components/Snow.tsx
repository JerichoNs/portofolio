"use client";

import { useEffect } from "react";

export default function Snow() {
  useEffect(() => {
    const canvas = document.getElementById("snow") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const flakes = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 3 + 1,
      d: Math.random() * 1,
    }));

    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.beginPath();

      flakes.forEach((f) => {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      });

      ctx.fill();
      angle += 0.01;

      flakes.forEach((f, i) => {
        f.y += Math.pow(f.d, 2) + 1;
        f.x += Math.sin(angle) * 0.5;

        if (f.y > height) {
          flakes[i] = {
            x: Math.random() * width,
            y: 0,
            r: f.r,
            d: f.d,
          };
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }, []);

  return (
    <canvas
      id="snow"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 999,
      }}
    />
  );
}
