"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "20+" },
  { label: "CGPA", value: "8.7" },
  { label: "Certifications", value: "2" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" ref={ref} style={{ padding: "5rem 2rem", background: "rgba(13,27,46,0.4)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="section-label">About Me</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, marginTop: "0.5rem", marginBottom: "2rem", letterSpacing: "-0.02em" }}>
            The <span className="gradient-text">Engineer</span> Behind the Work
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "start", flexWrap: "wrap" }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
            <p style={{ color: "#94a3b8", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: "1.25rem" }}>
              I am a Final Year Information Technology student at Vishwakarma Institute of Information Technology (VIIT), Pune, with a strong interest in software development, full-stack web applications, and artificial intelligence.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: "1.25rem" }}>
              Over the past few years, I have built projects across web development, machine learning, and problem-solving domains. My experience includes developing full-stack applications using React, Node.js, Express.js, and MongoDB, as well as working on AI-driven projects involving data analysis, predictive models, and generative AI.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: "1.25rem" }}>
              I enjoy turning ideas into practical software solutions and continuously improving my technical skills through hands-on projects, certifications, and self-learning. My focus is on writing clean, maintainable code and understanding how technology can solve real-world problems.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: 1.85, fontSize: "0.95rem" }}>
              Currently seeking opportunities in <span style={{ color: "#06B6D4", fontWeight: 600 }}>Software Engineering</span> and <span style={{ color: "#8B5CF6", fontWeight: 600 }}>Generative AI</span> roles where I can contribute, learn from experienced engineers, and grow as a developer.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", minWidth: "220px" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center", padding: "1.25rem 1rem", background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: "12px" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, background: "linear-gradient(135deg,#3B82F6,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
                <div style={{ color: "#64748b", fontSize: "0.75rem", marginTop: "0.25rem", fontFamily: "JetBrains Mono, monospace" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
