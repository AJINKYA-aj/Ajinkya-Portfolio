"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, GitFork, Link2, Mail, Download, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const ParticleNetwork = dynamic(() => import("./ParticleNetwork"), { ssr: false });

const headlines = [
  "Engineering Ideas Into Intelligent Systems.",
  "Building Software That Solves Real Problems.",
  "AI, Code & Systems Thinking.",
  "Turning Complex Problems Into Simple Experiences.",
];

const quickFacts = [
  { label: "B.Tech IT · VIIT Pune", icon: "🎓" },
  { label: "CGPA 8.7 / 10", icon: "📊" },
  { label: "IBM Full Stack Certified", icon: "🏆" },
  { label: "Cisco CCNA Certified", icon: "🌐" },
  { label: "2027 Batch", icon: "📅" },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = headlines[idx];
    const i = displayed.length;
    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 38);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2800);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 18);
        return () => clearTimeout(t);
      } else {
        setIdx((idx + 1) % headlines.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, idx]);

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <ParticleNetwork />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 60% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(to top, var(--navy), transparent)", pointerEvents: "none" }} />

      <div style={{
        position: "relative", zIndex: 10,
        width: "100%", maxWidth: "1100px", margin: "0 auto",
        padding: "5rem 1.25rem 3rem",
        display: "flex", alignItems: "center",
        gap: "3rem", flexWrap: "wrap",
        justifyContent: "center",
      }}>

        {/* Photo */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flexShrink: 0, display: "flex", justifyContent: "center", width: "100%" }}
          className="hero-photo-wrapper"
        >
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", inset: "-4px", borderRadius: "50%",
              background: "linear-gradient(135deg, #3B82F6, #06B6D4, #3B82F6)",
              animation: "spin-slow 6s linear infinite", zIndex: 0,
            }} />
            <div style={{ position: "absolute", inset: "2px", borderRadius: "50%", background: "var(--navy)", zIndex: 1 }} />
            <div className="hero-photo" style={{
              position: "relative", zIndex: 2,
              borderRadius: "50%", overflow: "hidden",
              border: "3px solid rgba(6,182,212,0.3)",
            }}>
              <Image src="/avatar.jpg" alt="Ajinkya Tompe" fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, #0D1B2E, #112240)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 800, color: "#3B82F6",
                fontFamily: "JetBrains Mono, monospace", zIndex: -1,
              }}>AT</div>
            </div>

            {/* Floating badges — hidden on small mobile, shown md+ */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }}
              className="hero-badge-bottom"
              style={{
                position: "absolute", bottom: "12px", right: "-8px",
                background: "rgba(13,27,46,0.95)", border: "1px solid rgba(6,182,212,0.4)",
                borderRadius: "50px", padding: "0.35rem 0.75rem",
                fontSize: "0.68rem", fontFamily: "JetBrains Mono, monospace",
                color: "#06B6D4", zIndex: 10, whiteSpace: "nowrap", backdropFilter: "blur(8px)",
              }}>✦ Open to Opportunities</motion.div>

            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
              className="hero-badge-top"
              style={{
                position: "absolute", top: "16px", right: "-8px",
                background: "rgba(13,27,46,0.95)", border: "1px solid rgba(59,130,246,0.4)",
                borderRadius: "50px", padding: "0.35rem 0.75rem",
                fontSize: "0.68rem", fontFamily: "JetBrains Mono, monospace",
                color: "#3B82F6", zIndex: 10, whiteSpace: "nowrap", backdropFilter: "blur(8px)",
              }}>⚡ VIIT Pune · IT</motion.div>
          </div>
        </motion.div>

        {/* Text content */}
        <div style={{ flex: 1, minWidth: "min(280px, 100%)", maxWidth: "560px", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
              <MapPin size={13} color="#06B6D4" />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", color: "#06B6D4", letterSpacing: "0.12em" }}>PUNE, INDIA · AVAILABLE 2027</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            <span style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "#94a3b8", fontWeight: 500 }}>Hi, I'm </span>
            <span style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", fontWeight: 800, color: "#F1F5F9" }}>Ajinkya Tompe</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{ fontSize: "clamp(1.5rem, 4.5vw, 3rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.03em", color: "#F1F5F9", margin: "0.5rem 0 1rem", minHeight: "clamp(3rem, 8vw, 4rem)" }}
          >
            {displayed}<span style={{ color: "#06B6D4", animation: "pulse-glow 1s infinite" }}>|</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            style={{ fontSize: "clamp(0.875rem, 1.8vw, 0.95rem)", color: "#94a3b8", marginBottom: "1.5rem", lineHeight: 1.75 }}>
            Final-year IT student at VIIT Pune building AI-powered applications, full-stack products, and intelligent systems. Seeking Software Engineering and GenAI roles.
          </motion.p>

          {/* Quick Facts */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
            {quickFacts.map((f) => (
              <span key={f.label} style={{
                display: "flex", alignItems: "center", gap: "0.3rem",
                padding: "0.3rem 0.7rem",
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: "100px", fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)", color: "#cbd5e1",
              }}>
                <span style={{ fontSize: "0.75rem" }}>{f.icon}</span>{f.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
            <a href="/resume.pdf" download
              style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.65rem 1.25rem", background: "linear-gradient(135deg, #3B82F6, #06B6D4)", borderRadius: "8px", color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: "clamp(0.8rem, 1.8vw, 0.88rem)", boxShadow: "0 0 24px rgba(59,130,246,0.3)", transition: "opacity 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            ><Download size={14} /> Resume</a>
            <a href="#projects"
              style={{ padding: "0.65rem 1.25rem", border: "1px solid rgba(59,130,246,0.4)", borderRadius: "8px", color: "#e2e8f0", fontWeight: 600, textDecoration: "none", fontSize: "clamp(0.8rem, 1.8vw, 0.88rem)", transition: "all 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#06B6D4"; e.currentTarget.style.color = "#06B6D4"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; e.currentTarget.style.color = "#e2e8f0"; }}
            >View Projects</a>
            <a href="#contact"
              style={{ padding: "0.65rem 1.25rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#94a3b8", fontWeight: 600, textDecoration: "none", fontSize: "clamp(0.8rem, 1.8vw, 0.88rem)", transition: "all 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#94a3b8"; }}
            >Contact Me</a>
          </motion.div>

          {/* Social links */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
            {[
              { icon: GitFork, href: "https://github.com/AJINKYA-aj", label: "GitHub" },
              { icon: Link2, href: "https://www.linkedin.com/in/ajinkyatompe", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tompeajinkya07@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#64748b", textDecoration: "none", fontSize: "0.82rem", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
                onMouseLeave={e => e.currentTarget.style.color = "#64748b"}
              ><Icon size={16} />{label}</a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", color: "#3B82F6", opacity: 0.7 }}>
        <ArrowDown size={20} />
      </motion.div>

      <style>{`
        /* Mobile: stack vertically, center everything, smaller photo */
        .hero-photo-wrapper { width: 100% !important; }
        .hero-photo { width: 200px !important; height: 200px !important; }
        .hero-badge-bottom { display: none !important; }
        .hero-badge-top { display: none !important; }

        @media (min-width: 480px) {
          .hero-photo { width: 240px !important; height: 240px !important; }
          .hero-badge-bottom { display: block !important; }
          .hero-badge-top { display: block !important; }
        }

        @media (min-width: 768px) {
          .hero-photo-wrapper { width: auto !important; }
          .hero-photo { width: 300px !important; height: 300px !important; }
        }

        @media (min-width: 1024px) {
          .hero-photo { width: 360px !important; height: 360px !important; }
        }

        @media (min-width: 1280px) {
          .hero-photo { width: 400px !important; height: 400px !important; }
        }
      `}</style>
    </section>
  );
}
