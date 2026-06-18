"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GitFork, ExternalLink, X, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Crop Mart",
    tagline: "Agricultural Auction Platform",
    problem: "Farmers lack direct market access, leading to poor pricing and middlemen exploitation.",
    solution: "A transparent digital auction platform where farmers list produce and buyers bid competitively in real-time.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
    features: ["Multi-format auctions", "Farmer & buyer registration", "Real-time bidding system", "Product image management", "Secure transaction flow"],
    impact: "Empowers farmers with fair market pricing and direct buyer connections.",
    github: "https://github.com/AJINKYA-aj/Crop-Mart",
    demo: "#",
    color: "#10B981",
    icon: "🌾",
  },
  {
  id: 2,
  name: "AI Asana Analyst",
  tagline: "Yoga Pose Analysis with Computer Vision",
  problem: "Manual yoga pose correction requires a physical instructor, making it inaccessible and unscalable for remote learners.",
  solution: "Real-time AI system that detects yoga poses using MediaPipe and a Keras model, analyses joint angles against pose rules, and delivers audio feedback — all with an automated MLOps pipeline.",
  tech: ["Python", "MediaPipe", "Keras", "OpenCV", "PostgreSQL", "DVC", "GitHub Actions", "Gemini AI"],
  features: [
    "Real-time pose detection via webcam",
    "Joint angle constraint engine",
    "Audio feedback for corrections",
    "Automated MLOps training pipeline",
    "Gemini AI-powered analysis reports",
    "DVC model versioning",
  ],
  impact: "Enables accessible, instructor-free yoga practice with real-time AI correction and automated model retraining.",
  github: "https://github.com/AJINKYA-aj/AI-Asana-Analyst",
  demo: "#",
  color: "#8B5CF6",
  icon: "🧘",
},

{
    id: 3,
    name: "Budget Tracker",
    tagline: "AI-Powered FinTech Platform",
    problem: "People struggle to track spending patterns and make informed financial decisions.",
    solution: "Full-stack personal finance platform with AI-based receipt scanning, automated categorization, and smart analytics.",
    tech: ["Next.js", "Node.js", "MongoDB", "REST APIs", "Chart.js"],
    features: ["AI receipt scanning", "Auto transaction categorization", "Expense analytics dashboard", "Budget planning tools", "Secure auth & RBAC"],
    impact: "Provides actionable financial insights to help users save more.",
    github: "https://github.com/AJINKYA-aj/Budget-Tracker",
    demo: "#",
    color: "#06B6D4",
    icon: "💰",
  },

  {
    id: 4,
    name: "Face Recognition Attendance",
    tagline: "Automated Attendance System",
    problem: "Manual attendance is time-consuming, error-prone, and easily gamed through proxies.",
    solution: "Automated attendance system using facial recognition with anti-spoofing, encoding unique face signatures for secure identification.",
    tech: ["Python", "face_recognition", "OpenCV", "NumPy", "SQLite"],
    features: ["Real-time face detection", "Anti-spoofing protection", "Automatic attendance marking", "Secure face encoding", "CSV export reports"],
    impact: "Eliminates manual roll-call; prevents proxy attendance completely.",
    github: "https://github.com/AJINKYA-aj/Face-Recognition-Attendance",
    demo: "#",
    color: "#F59E0B",
    icon: "👁️",
  },
 
    {
    id: 5,
    name: "NAV AI Route Generator",
    tagline: "Intelligent Route Optimization",
    problem: "Standard navigation ignores real-time traffic, causing inefficient routing and wasted time.",
    solution: "AI-driven route optimization engine using OpenRouteService API with traffic-aware pathfinding and visual map rendering.",
    tech: ["Python", "Flask", "OpenRouteService", "Folium", "Leaflet.js"],
    features: ["Multiple route alternatives", "Traffic-aware navigation", "Route comparison UI", "Location-based optimization", "Interactive map visualization"],
    impact: "Reduces travel time through intelligent multi-route analysis.",
    github: "https://github.com/AJINKYA-aj/NAV-AI-Route-Generator",
    demo: "#",
    color: "#3B82F6",
    icon: "🗺️",
  },
  
  {
    id: 6,
    name: "Smart Weather Device",
    tagline: "Edge AI Weather System",
    problem: "Generic weather forecasts are inaccurate for hyper-local conditions.",
    solution: "Embedded Edge AI system on ESP32 with DHT11 sensors, heat-index algorithms, and a classification model for local weather prediction.",
    tech: ["ESP32", "Python", "C++", "scikit-learn", "DHT11"],
    features: ["Real-time environment sensing", "Heat index calculation", "ML classification model", "Low-power microcontroller", "Local weather forecast"],
    impact: "Delivers hyper-local weather predictions independent of internet connectivity.",
    github: "https://github.com/AJINKYA-aj/Smart-weather-Device",
    demo: "#",
    color: "#EC4899",
    icon: "🌤️",
  },
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
      onClick={onClose}>
      <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
        style={{ background: "#0D1B2E", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "16px", maxWidth: "640px", width: "100%", maxHeight: "85vh", overflowY: "auto", padding: "2rem" }}
        onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
          <div>
            <span style={{ fontSize: "2.5rem" }}>{project.icon}</span>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginTop: "0.5rem" }}>{project.name}</h3>
            <p style={{ color: project.color, fontSize: "0.85rem", fontFamily: "JetBrains Mono, monospace" }}>{project.tagline}</p>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.06)", border: "none", borderRadius: "8px", color: "#fff", cursor: "pointer", padding: "0.5rem" }}>
            <X size={18} />
          </button>
        </div>
        {[
          { label: "Problem", text: project.problem },
          { label: "Solution", text: project.solution },
          { label: "Impact", text: project.impact },
        ].map(({ label, text }) => (
          <div key={label} style={{ marginBottom: "1.25rem" }}>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", color: project.color, marginBottom: "0.3rem", letterSpacing: "0.1em" }}>{label.toUpperCase()}</div>
            <p style={{ color: "#94a3b8", lineHeight: 1.65, fontSize: "0.9rem" }}>{text}</p>
          </div>
        ))}
        <div style={{ marginBottom: "1.25rem" }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", color: project.color, marginBottom: "0.5rem", letterSpacing: "0.1em" }}>KEY FEATURES</div>
          {project.features.map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
              <ChevronRight size={12} color={project.color} />
              <span style={{ color: "#94a3b8", fontSize: "0.88rem" }}>{f}</span>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", color: project.color, marginBottom: "0.5rem", letterSpacing: "0.1em" }}>TECH STACK</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tech.map(t => (
              <span key={t} style={{ padding: "0.25rem 0.75rem", background: `${project.color}15`, border: `1px solid ${project.color}30`, borderRadius: "100px", fontSize: "0.78rem", color: project.color }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.25rem", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", color: "#e2e8f0", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}>
            <GitFork size={15} /> GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" ref={ref} style={{ padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="section-label">03 · Projects</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p style={{ color: "#64748b", marginBottom: "3rem" }}>Real projects solving real problems — not just tutorial clones.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: `0 20px 40px ${p.color}18` }}
              onClick={() => setSelected(p)}
              style={{ background: "rgba(13,27,46,0.8)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "1.75rem", cursor: "pointer", transition: "border-color 0.2s", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `${p.color}40`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: "100px", height: "100px", background: `radial-gradient(circle, ${p.color}12 0%, transparent 70%)`, borderRadius: "0 14px 0 0" }} />
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{p.icon}</div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", color: p.color, marginBottom: "0.3rem", letterSpacing: "0.08em" }}>{p.tagline}</div>
              <h3 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.6rem" }}>{p.name}</h3>
              <p style={{ color: "#64748b", fontSize: "0.87rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>{p.problem}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                {p.tech.slice(0, 4).map(t => (
                  <span key={t} style={{ padding: "0.2rem 0.6rem", background: `${p.color}12`, borderRadius: "4px", fontSize: "0.72rem", color: p.color, fontFamily: "JetBrains Mono, monospace" }}>{t}</span>
                ))}
                {p.tech.length > 4 && <span style={{ fontSize: "0.72rem", color: "#64748b", padding: "0.2rem 0.4rem" }}>+{p.tech.length - 4}</span>}
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                  style={{ color: "#64748b", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#e2e8f0"}
                  onMouseLeave={e => e.currentTarget.style.color = "#64748b"}
                ><GitFork size={16} /></a>
                <span style={{ color: p.color, fontSize: "0.8rem", fontWeight: 600, marginLeft: "auto" }}>View details →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
