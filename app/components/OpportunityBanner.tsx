"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Sparkles, Code2, Brain } from "lucide-react";

const roles = [
  { icon: Code2, label: "Software Engineering", color: "#3B82F6" },
  { icon: Sparkles, label: "Generative AI / LLM", color: "#8B5CF6" },
  { icon: Brain, label: "AI / ML Engineering", color: "#06B6D4" },
  { icon: Briefcase, label: "Full Stack Development", color: "#10B981" },
];

export default function OpportunityBanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} style={{ padding: "0 1.25rem 3.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.07) 0%, rgba(6,182,212,0.05) 100%)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: "14px",
            padding: "1.5rem",
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

          {/* Header */}
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", boxShadow: "0 0 8px #10B981", animation: "pulse-glow 2s infinite", flexShrink: 0 }} />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", color: "#10B981", letterSpacing: "0.15em" }}>CURRENTLY SEEKING</span>
            </div>
            <h3 style={{ fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: 800, marginBottom: "0.3rem" }}>Open to Opportunities</h3>
            <p style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: 1.6 }}>
              Available for internships and full-time roles starting 2027. Focused on Software Engineering and GenAI.
            </p>
          </div>

          {/* Roles grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "0.6rem" }}>
            {roles.map((r, i) => (
              <motion.div key={r.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.07 }}
                style={{
                  display: "flex", alignItems: "center", gap: "0.6rem",
                  padding: "0.65rem 0.9rem",
                  background: `${r.color}0d`,
                  border: `1px solid ${r.color}25`,
                  borderRadius: "10px",
                }}>
                <r.icon size={14} color={r.color} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#cbd5e1", lineHeight: 1.3 }}>{r.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
