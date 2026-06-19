"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = [
  { name: "Programming", color: "#3B82F6", skills: [{ name: "Python", level: "Advanced" }, { name: "C++", level: "Advanced" }, { name: "JavaScript", level: "Advanced" }, { name: "TypeScript", level: "Intermediate" }, { name: "Java", level: "Intermediate" }] },
  { name: "Web Dev", color: "#06B6D4", skills: [{ name: "React.js", level: "Advanced" }, { name: "Next.js", level: "Intermediate" }, { name: "Node.js", level: "Advanced" }, { name: "Express.js", level: "Advanced" }, { name: "Tailwind CSS", level: "Advanced" }, { name: "HTML / CSS", level: "Advanced" }, { name: "Angular", level: "Intermediate" }] },
  { name: "Databases", color: "#10B981", skills: [{ name: "MongoDB", level: "Advanced" }, { name: "MySQL", level: "Intermediate" }] },
  { name: "AI & ML", color: "#8B5CF6", skills: [{ name: "scikit-learn", level: "Intermediate" }, { name: "Pandas", level: "Advanced" }, { name: "NumPy", level: "Advanced" }, { name: "OpenCV", level: "Intermediate" }, { name: "Streamlit", level: "Intermediate" }, { name: "GenAI / LLMs", level: "Working Knowledge" }, { name: "Prompt Engineering", level: "Intermediate" }] },
  { name: "Tools", color: "#F59E0B", skills: [{ name: "Git / GitHub", level: "Advanced" }, { name: "Docker", level: "Working Knowledge" }, { name: "Postman", level: "Advanced" }, { name: "VS Code", level: "Advanced" }, { name: "REST APIs", level: "Advanced" }] },
];

const levelDots: Record<string, number> = { "Advanced": 3, "Intermediate": 2, "Working Knowledge": 1 };
const levelColor: Record<string, string> = { "Advanced": "#10B981", "Intermediate": "#3B82F6", "Working Knowledge": "#F59E0B" };

export default function Skills() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const cat = categories[active];

  return (
    <section id="skills" ref={ref} style={{ padding: "4rem 1.25rem", background: "rgba(13,27,46,0.4)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="section-label">Skills</span>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, marginTop: "0.5rem", marginBottom: "0.6rem", letterSpacing: "-0.02em" }}>
            Technical <span className="gradient-text">Stack</span>
          </h2>
          <p style={{ color: "#64748b", marginBottom: "1.5rem", fontSize: "0.88rem" }}>Tools and technologies I use to build products.</p>
        </motion.div>

        {/* Legend */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
          {Object.entries(levelColor).map(([level, color]) => (
            <div key={level} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <div style={{ display: "flex", gap: "3px" }}>
                {[0,1,2].map(i => <div key={i} style={{ width: "7px", height: "7px", borderRadius: "50%", background: i < levelDots[level] ? color : "rgba(255,255,255,0.12)" }} />)}
              </div>
              <span style={{ fontSize: "0.72rem", color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>{level}</span>
            </div>
          ))}
        </div>

        {/* Category tabs — scrollable on mobile */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", overflowX: "auto", paddingBottom: "0.25rem", WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
          {categories.map((c, i) => (
            <button key={c.name} onClick={() => setActive(i)}
              style={{
                padding: "0.4rem 0.9rem", borderRadius: "100px", flexShrink: 0,
                border: `1px solid ${active === i ? c.color : "rgba(255,255,255,0.08)"}`,
                background: active === i ? `${c.color}18` : "transparent",
                color: active === i ? c.color : "#64748b",
                cursor: "pointer", fontSize: "0.8rem", fontWeight: 600, transition: "all 0.2s",
              }}>{c.name}</button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: "0.6rem" }}>
          {cat.skills.map((s, i) => {
            const color = levelColor[s.level];
            const dots = levelDots[s.level];
            return (
              <motion.div key={s.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.8rem 1rem", background: "rgba(13,27,46,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", transition: "border-color 0.2s", gap: "0.5rem" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${cat.color}40`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
              >
                <span style={{ fontWeight: 600, fontSize: "0.85rem", minWidth: 0 }}>{s.name}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexShrink: 0 }}>
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[0,1,2].map(j => <div key={j} style={{ width: "6px", height: "6px", borderRadius: "50%", background: j < dots ? color : "rgba(255,255,255,0.1)" }} />)}
                  </div>
                  <span style={{ fontSize: "0.62rem", color, fontFamily: "JetBrains Mono, monospace", whiteSpace: "nowrap" }}>{s.level}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
