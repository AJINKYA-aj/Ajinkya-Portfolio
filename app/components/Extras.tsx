"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const principles = [
  { num: "01", title: "Build Before Perfect", desc: "Shipping a working v1 teaches more than planning a perfect v10." },
  { num: "02", title: "Learn Relentlessly", desc: "Every project is an opportunity to learn a new tool or concept. Curiosity is the edge." },
  { num: "03", title: "Simplicity Scales", desc: "Complex problems deserve simple solutions. Clarity is a technical virtue." },
  { num: "04", title: "Users First", desc: "Features mean nothing if users can't use them. Start with empathy, end with code." },
  { num: "05", title: "Consistency Beats Intensity", desc: "Building a little every day compounds into mastery faster than sporadic sprints." },
];

const learning = [
  { icon: "🏗️", label: "System Design", desc: "Distributed systems, scalability patterns, trade-offs" },
  { icon: "🧠", label: "Advanced DSA", desc: "Graphs, DP, segment trees, competitive programming" },
  { icon: "✨", label: "Generative AI", desc: "LLMs, prompt engineering, RAG, agent architectures" },
  { icon: "⚙️", label: "Backend Architecture", desc: "Microservices, message queues, API design at scale" },
  { icon: "☁️", label: "Cloud Fundamentals", desc: "AWS basics, containers, CI/CD pipelines" },
  { icon: "🔒", label: "Security Basics", desc: "Auth patterns, OWASP, secure API design" },
];

export default function Extras() {
  const { ref: r1, inView: i1 } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { ref: r2, inView: i2 } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      <section ref={r2} style={{ padding: "4rem 1.25rem", background: "rgba(13,27,46,0.4)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={i2 ? { opacity: 1, y: 0 } : {}}>
            <span className="section-label">Currently Exploring</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, marginTop: "0.5rem", marginBottom: "0.6rem", letterSpacing: "-0.02em" }}>
              What I'm <span className="gradient-text">Learning Now</span>
            </h2>
            <p style={{ color: "#64748b", marginBottom: "2rem", fontSize: "0.88rem" }}>Always building. Always learning.</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))", gap: "0.75rem" }}>
            {learning.map((l, i) => (
              <motion.div key={l.label} initial={{ opacity: 0, scale: 0.96 }} animate={i2 ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i * 0.06 }}
                style={{ display: "flex", gap: "0.8rem", padding: "1rem 1.1rem", background: "rgba(13,27,46,0.8)", border: "1px solid rgba(59,130,246,0.1)", borderRadius: "12px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{l.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.2rem" }}>{l.label}</div>
                  <div style={{ color: "#64748b", fontSize: "0.75rem", lineHeight: 1.5 }}>{l.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={r1} style={{ padding: "4rem 1.25rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={i1 ? { opacity: 1, y: 0 } : {}}>
            <span className="section-label">Philosophy</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, marginTop: "0.5rem", marginBottom: "2rem", letterSpacing: "-0.02em" }}>
              Principles I <span className="gradient-text">Build By</span>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))", gap: "0.75rem" }}>
            {principles.map((p, i) => (
              <motion.div key={p.num} initial={{ opacity: 0, y: 16 }} animate={i1 ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.06 }}
                style={{ padding: "1.1rem 1.25rem", background: "rgba(13,27,46,0.6)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(6,182,212,0.25)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
              >
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "#06B6D4", marginBottom: "0.35rem" }}>{p.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "0.3rem" }}>{p.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
