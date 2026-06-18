"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 2rem",
        background: scrolled ? "rgba(10,25,47,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(59,130,246,0.12)" : "none",
        transition: "all 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "64px",
      }}
    >
      <a href="#hero" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "2.05rem", color: "#fff", textDecoration: "none" }}>
        AT<span style={{ color: "#06B6D4" }}>.</span>
      </a>

      {/* Desktop nav */}
      <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }} className="desktop-nav">
        {links.map(l => (
          <a key={l.label} href={l.href}
            style={{ color: "#94a3b8", fontSize: "0.85rem", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
            onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}
          >{l.label}</a>
        ))}
        <a href="/resume.pdf" download
          style={{ padding: "0.42rem 1.1rem", background: "linear-gradient(135deg, #3B82F6, #06B6D4)", borderRadius: "6px", color: "#fff", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none", transition: "opacity 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >Resume</a>
      </div>

      <button onClick={() => setOpen(!open)} className="mobile-btn"
        style={{ display: "none", background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "0.25rem" }}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{ position: "fixed", top: 64, left: 0, right: 0, background: "rgba(10,25,47,0.98)", backdropFilter: "blur(20px)", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem", borderBottom: "1px solid rgba(59,130,246,0.12)" }}>
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                style={{ color: "#e2e8f0", fontSize: "1rem", textDecoration: "none", fontWeight: 500 }}>{l.label}</a>
            ))}
            <a href="/resume.pdf" download onClick={() => setOpen(false)}
              style={{ padding: "0.65rem 1.25rem", background: "linear-gradient(135deg, #3B82F6, #06B6D4)", borderRadius: "8px", color: "#fff", fontWeight: 700, textDecoration: "none", textAlign: "center" }}>
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
