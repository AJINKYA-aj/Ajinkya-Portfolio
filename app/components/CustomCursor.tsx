"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = x + "px";
        dotRef.current.style.top = y + "px";
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      rx = lerp(rx, x, 0.12);
      ry = lerp(ry, y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => { if (ringRef.current) ringRef.current.style.transform = "translate(-50%,-50%) scale(2)"; };
    const onLeave = () => { if (ringRef.current) ringRef.current.style.transform = "translate(-50%,-50%) scale(1)"; };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button,[data-hover]").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{ position: "fixed", width: 6, height: 6, borderRadius: "50%", background: "#06B6D4", pointerEvents: "none", zIndex: 9999, transform: "translate(-50%,-50%)", transition: "none" }} />
      <div ref={ringRef} style={{ position: "fixed", width: 32, height: 32, borderRadius: "50%", border: "1.5px solid rgba(6,182,212,0.5)", pointerEvents: "none", zIndex: 9998, transform: "translate(-50%,-50%)", transition: "transform 0.2s ease" }} />
    </>
  );
}
