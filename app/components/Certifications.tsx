"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";

const certs = [
  {
    title: "IBM Full Stack Software Developer",
    issuer: "IBM / Coursera",
    date: "2024",
    desc: "Professional certification covering React, Node.js, Python, Django, Kubernetes, OpenShift, and Microservices architecture.",
    badge: "🏆",
    color: "#3B82F6",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/N043BP7Q1VB4?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2024",
    desc: "Covers networking fundamentals, IP addressing, routing, switching, and basic network security concepts.",
    badge: "🌐",
    color: "#06B6D4",
    link: "https://drive.google.com/file/d/1X0TUoDg-PkNtfED_-vQ5fzwfuoPn_xQ9/view?usp=sharing",
  },
];

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" ref={ref} style={{ padding: "5rem 2rem", background: "rgba(13,27,46,0.4)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="section-label">Certifications</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, marginTop: "0.5rem", marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>
            Verified <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
          {certs.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              style={{
                padding: "1.75rem",
                background: "rgba(13,27,46,0.85)",
                border: `1px solid ${c.color}25`,
                borderRadius: "14px",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              whileHover={{ y: -4 }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `${c.color}60`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = `${c.color}25`)}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: `radial-gradient(circle, ${c.color}0d 0%, transparent 70%)`, pointerEvents: "none" }} />

              <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{c.badge}</div>

              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", color: c.color, letterSpacing: "0.1em", marginBottom: "0.4rem" }}>
                {c.issuer} · {c.date}
              </div>

              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.6rem", lineHeight: 1.4 }}>{c.title}</h3>
              <p style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{c.desc}</p>

              <a href={c.link} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", color: c.color, textDecoration: "none", fontWeight: 600, fontFamily: "JetBrains Mono, monospace" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                View Certificate <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
