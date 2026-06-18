"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const milestones = [
  {
    year: "2023",
    title: "Joined VIIT Pune",
    detail: "Started B.Tech in Information Technology at Vishwakarma Institute of Information Technology, Pune. Began building foundations in DSA, OOP, DBMS, OS, and Computer Networks.",
    color: "#3B82F6",
    icon: "🎓",
  },
  {
    year: "2024",
    title: "Built First Full Stack Projects",
    detail: "Shipped AgriBid (agricultural auction platform) and Budget Tracker (AI-powered FinTech app) using React, Node.js, Express.js, and MongoDB. Earned IBM Full Stack and Cisco CCNA certifications.",
    color: "#06B6D4",
    icon: "🚀",
  },
  {
    year: "2025",
    title: "Entered AI / ML Development",
    detail: "Built AI Asana Analyst(Yoga Pose Analysis with Computer Vision), Face Recognition Attendance System, NAV AI Route Generator, and Smart Weather Device. Started exploring Generative AI and LLM-based applications.",
    color: "#8B5CF6",
    icon: "🤖",
  },
  {
    year: "2026 →",
    title: "Final Year · Industry Ready",
    detail: "Final year of B.Tech. Deepening expertise in System Design, GenAI, and scalable backend architecture. Actively seeking Software Engineering and GenAI roles for 2027.",
    color: "#10B981",
    icon: "🎯",
  },
];

export default function Journey() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="journey" ref={ref} style={{ padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="section-label">Journey</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, marginTop: "0.5rem", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            Engineering <span className="gradient-text">Timeline</span>
          </h2>
          <p style={{ color: "#64748b", marginBottom: "3rem", fontSize: "0.9rem" }}>
            From writing first programs to shipping AI-powered products.
          </p>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
          <div style={{ position: "absolute", left: "0.5rem", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, #3B82F6, #06B6D4, #8B5CF6, #10B981, transparent)" }} />

          {milestones.map((m, i) => (
            <motion.div key={m.year}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.15 }}
              style={{ position: "relative", paddingLeft: "2rem", marginBottom: "1.75rem" }}
            >
              <div style={{
                position: "absolute", left: "-1.5rem", top: "1.1rem",
                width: "13px", height: "13px", borderRadius: "50%",
                background: m.color,
                boxShadow: `0 0 14px ${m.color}70`,
                border: "2px solid var(--navy)",
              }} />

              <motion.div
                style={{
                  padding: "1.4rem 1.6rem",
                  background: "rgba(13,27,46,0.85)",
                  border: `1px solid ${m.color}20`,
                  borderRadius: "14px",
                  transition: "border-color 0.2s",
                }}
                whileHover={{ borderColor: `${m.color}50` }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ fontSize: "1.2rem" }}>{m.icon}</span>
                    <span style={{ fontWeight: 700, fontSize: "1rem" }}>{m.title}</span>
                  </div>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", color: m.color, fontWeight: 700 }}>{m.year}</span>
                </div>
                <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.7 }}>{m.detail}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
