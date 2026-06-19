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

  // Close menu on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0 1.25rem",
          background: scrolled || open ? "rgba(10,25,47,0.97)" : "transparent",
          backdropFilter: scrolled || open ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(59,130,246,0.12)" : "none",
          transition: "all 0.3s ease",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: "60px",
        }}
      >
        <a href="#hero" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "1.1rem", color: "#fff", textDecoration: "none", flexShrink: 0 }}>
          AT<span style={{ color: "#06B6D4" }}>.</span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }} className="nav-desktop">
          {links.map(l => (
            <a key={l.label} href={l.href}
              style={{ color: "#94a3b8", fontSize: "0.85rem", textDecoration: "none", fontWeight: 500, transition: "color 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
              onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}
            >{l.label}</a>
          ))}
          <a href="/resume.pdf" download
            style={{ padding: "0.4rem 1rem", background: "linear-gradient(135deg, #3B82F6, #06B6D4)", borderRadius: "6px", color: "#fff", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none", transition: "opacity 0.2s", whiteSpace: "nowrap" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Resume</a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", top: "60px", left: 0, right: 0, zIndex: 99,
              background: "rgba(10,25,47,0.98)", backdropFilter: "blur(20px)",
              padding: "1.25rem 1.5rem 1.75rem",
              borderBottom: "1px solid rgba(59,130,246,0.15)",
              display: "flex", flexDirection: "column", gap: "0",
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  color: "#e2e8f0", fontSize: "1rem", textDecoration: "none",
                  fontWeight: 500, padding: "0.85rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  display: "block",
                }}
              >{l.label}</motion.a>
            ))}
            <motion.a
              href="/resume.pdf" download
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              style={{
                display: "block", marginTop: "1rem",
                padding: "0.75rem 1.25rem",
                background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                borderRadius: "8px", color: "#fff",
                fontWeight: 700, textDecoration: "none", textAlign: "center",
                fontSize: "0.9rem",
              }}
            >Download Resume</motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop { display: none; }
        .nav-mobile-btn { display: flex; }

        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
