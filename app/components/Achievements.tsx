"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const achievements = [
  {
    icon: "🏆",
    title: "IBM Full Stack Software Developer",
    sub: "Professional Certificate · IBM / Coursera · 2024",
    color: "#3B82F6",
  },
  {
    icon: "🌐",
    title: "Cisco CCNA Certification",
    sub: "CCNAv7: Introduction to Networks · Cisco Networking Academy · 2024",
    color: "#06B6D4",
  },
  {
    icon: "📊",
    title: "CGPA 8.7 / 10",
    sub: "B.Tech Information Technology · VIIT Pune · 2023–2027",
    color: "#10B981",
  },
  {
    icon: "💻",
    title: "6+ Full Stack Projects",
    sub: "React · Node.js · Next.js · MongoDB · deployed and published",
    color: "#8B5CF6",
  },
  {
    icon: "🤖",
    title: "AI / ML Project Experience",
    sub: "NLP, Computer Vision, Edge AI, Generative AI applications built",
    color: "#F59E0B",
  },
  {
    icon: "🎓",
    title: "Final Year IT Student",
    sub: "Vishwakarma Institute of Information Technology · 2027 Batch",
    color: "#EC4899",
  },
];

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} style={{ padding: "5rem 2rem", background: "rgba(13,27,46,0.4)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="section-label">Achievements</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, marginTop: "0.5rem", marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>
            Verified <span className="gradient-text">Milestones</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
          {achievements.map((a, i) => (
            <motion.div key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
              style={{
                display: "flex", gap: "1rem", alignItems: "flex-start",
                padding: "1.25rem 1.4rem",
                background: "rgba(13,27,46,0.8)",
                border: `1px solid ${a.color}18`,
                borderRadius: "12px",
                transition: "border-color 0.2s",
              }}
              whileHover={{ borderColor: `${a.color}45` }}
            >
              <div style={{
                flexShrink: 0, width: "40px", height: "40px",
                borderRadius: "10px", background: `${a.color}15`,
                border: `1px solid ${a.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.1rem",
              }}>{a.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{a.title}</div>
                <div style={{ color: "#64748b", fontSize: "0.78rem", lineHeight: 1.5 }}>{a.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
