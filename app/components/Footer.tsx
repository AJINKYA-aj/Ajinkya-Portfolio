"use client";
import { useState, useEffect } from "react";

const quotes = [
  "Every expert was once a beginner who refused to quit.",
  "The best way to predict the future is to build it.",
  "Code creates possibilities.",
  "Small improvements compound into mastery.",
];

export default function Footer() {
  const [q, setQ] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setQ(i => (i + 1) % quotes.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer style={{ borderTop: "1px solid rgba(59,130,246,0.12)", padding: "2.5rem 1.25rem", textAlign: "center" }}>
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(0.72rem, 1.8vw, 0.85rem)", color: "#3B82F6", marginBottom: "1.25rem", transition: "opacity 0.5s", lineHeight: 1.6, maxWidth: "480px", margin: "0 auto 1.25rem" }}>
        &ldquo;{quotes[q]}&rdquo;
      </p>
      <p style={{ color: "#475569", fontSize: "0.78rem" }}>
        Designed & Built by <span style={{ color: "#06B6D4", fontWeight: 600 }}>Ajinkya Tompe</span> · 2025
      </p>
      <p style={{ color: "#334155", fontSize: "0.7rem", marginTop: "0.4rem", fontFamily: "JetBrains Mono, monospace" }}>
        Next.js · TypeScript · Tailwind · Framer Motion
      </p>
    </footer>
  );
}
