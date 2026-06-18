"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = [
  {
    name: "Programming", color: "#3B82F6",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "C++", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
    ]
  },
  {
    name: "Web Development", color: "#06B6D4",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML / CSS", level: "Advanced" },
      { name: "Angular", level: "Intermediate" },
    ]
  },
  {
    name: "Databases", color: "#10B981",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
    ]
  },
  {
    name: "AI & Machine Learning", color: "#8B5CF6",
    skills: [
      { name: "scikit-learn", level: "Intermediate" },
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "OpenCV", level: "Intermediate" },
      { name: "Streamlit", level: "Intermediate" },
      { name: "Generative AI / LLMs", level: "Working Knowledge" },
      { name: "Prompt Engineering", level: "Intermediate" },
    ]
  },
  {
    name: "Tools", color: "#F59E0B",
    skills: [
      { name: "Git / GitHub", level: "Advanced" },
      { name: "Docker", level: "Working Knowledge" },
      { name: "Postman", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
    ]
  },
];

const levelDots: Record<string, number> = {
  "Advanced": 3,
  "Intermediate": 2,
  "Working Knowledge": 1,
};

const levelColor: Record<string, string> = {
  "Advanced": "#10B981",
  "Intermediate": "#3B82F6",
  "Working Knowledge": "#F59E0B",
};

export default function Skills() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const cat = categories[active];

  return (
    <section id="skills" ref={ref} style={{ padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="section-label">Skills</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, marginTop: "0.5rem", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            Technical <span className="gradient-text">Stack</span>
          </h2>
          <p style={{ color: "#64748b", marginBottom: "2rem", fontSize: "0.9rem" }}>Tools and technologies I use to build products.</p>
        </motion.div>

        {/* Legend */}
        <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.75rem", flexWrap: "wrap" }}>
          {Object.entries(levelColor).map(([level, color]) => (
            <div key={level} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ display: "flex", gap: "3px" }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: i < levelDots[level] ? color : "rgba(255,255,255,0.12)" }} />
                ))}
              </div>
              <span style={{ fontSize: "0.75rem", color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>{level}</span>
            </div>
          ))}
        </div>

        {/* Category tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
          {categories.map((c, i) => (
            <button key={c.name} onClick={() => setActive(i)}
              style={{
                padding: "0.45rem 1.1rem", borderRadius: "100px",
                border: `1px solid ${active === i ? c.color : "rgba(255,255,255,0.08)"}`,
                background: active === i ? `${c.color}18` : "transparent",
                color: active === i ? c.color : "#64748b",
                cursor: "pointer", fontSize: "0.82rem", fontWeight: 600, transition: "all 0.2s",
              }}>
              {c.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.75rem" }}>
          {cat.skills.map((s, i) => {
            const color = levelColor[s.level];
            const dots = levelDots[s.level];
            return (
              <motion.div key={s.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "0.9rem 1.1rem",
                  background: "rgba(13,27,46,0.8)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "10px", transition: "border-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${cat.color}40`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
              >
                <span style={{ fontWeight: 600, fontSize: "0.88rem" }}>{s.name}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[0,1,2].map(j => (
                      <div key={j} style={{ width: "7px", height: "7px", borderRadius: "50%", background: j < dots ? color : "rgba(255,255,255,0.1)" }} />
                    ))}
                  </div>
                  <span style={{ fontSize: "0.68rem", color, fontFamily: "JetBrains Mono, monospace", whiteSpace: "nowrap" }}>{s.level}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
