"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GitFork, Link2, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      // Formspree integration — replace YOUR_FORM_ID with your Formspree form ID
      // Get a free form at https://formspree.io
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "5rem 2rem 6rem" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="section-label">Contact</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, marginTop: "0.5rem", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            Let's Build Something <span className="gradient-text">Meaningful</span>
          </h2>
          <p style={{ color: "#64748b", marginBottom: "2.5rem", lineHeight: 1.7, fontSize: "0.9rem" }}>
            Open to Software Engineering and GenAI roles. Also happy to collaborate on projects or just talk tech.
          </p>
        </motion.div>

        {status === "success" ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            style={{ padding: "2.5rem", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: "16px" }}>
            <CheckCircle size={44} color="#10B981" style={{ margin: "0 auto 1rem" }} />
            <h3 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.4rem" }}>Message Sent!</h3>
            <p style={{ color: "#64748b", fontSize: "0.88rem" }}>Thanks for reaching out. I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
            style={{ padding: "2.25rem", background: "rgba(13,27,46,0.85)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: "16px", textAlign: "left" }}>

            {status === "error" && (
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", padding: "0.75rem 1rem", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", marginBottom: "1.25rem" }}>
                <AlertCircle size={15} color="#EF4444" />
                <span style={{ fontSize: "0.82rem", color: "#EF4444" }}>
                  Failed to send. Please email directly at{" "}
                  <a href="mailto:tompeajinkya07@gmail.com" style={{ color: "#EF4444", fontWeight: 600 }}>tompeajinkya07@gmail.com</a>
                </span>
              </div>
            )}

            {/* Note about Formspree setup */}
            <div style={{ padding: "0.65rem 1rem", background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: "8px", marginBottom: "1.5rem", fontSize: "0.75rem", color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>
              💡 To activate: replace YOUR_FORM_ID in Contact.tsx with your free{" "}
              <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" style={{ color: "#3B82F6" }}>formspree.io</a> ID
            </div>

            {[
              { key: "name", label: "Name", type: "text", placeholder: "Your name" },
              { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: "1.1rem" }}>
                <label style={{ display: "block", fontSize: "0.8rem", color: "#94a3b8", marginBottom: "0.35rem", fontWeight: 500 }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} value={form[f.key as keyof typeof form]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  style={{ width: "100%", padding: "0.7rem 1rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#f1f5f9", fontSize: "0.88rem", outline: "none", transition: "border-color 0.2s", fontFamily: "inherit" }}
                  onFocus={e => e.target.style.borderColor = "#3B82F6"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
            ))}

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontSize: "0.8rem", color: "#94a3b8", marginBottom: "0.35rem", fontWeight: 500 }}>Message</label>
              <textarea placeholder="Tell me about the opportunity or project..." value={form.message} rows={4}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                style={{ width: "100%", padding: "0.7rem 1rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#f1f5f9", fontSize: "0.88rem", outline: "none", transition: "border-color 0.2s", resize: "vertical", fontFamily: "inherit" }}
                onFocus={e => e.target.style.borderColor = "#3B82F6"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
            </div>

            <button onClick={handleSubmit} disabled={status === "loading"}
              style={{ width: "100%", padding: "0.8rem", background: "linear-gradient(135deg, #3B82F6, #06B6D4)", border: "none", borderRadius: "8px", color: "#fff", fontWeight: 700, fontSize: "0.9rem", cursor: status === "loading" ? "wait" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", opacity: status === "loading" ? 0.7 : 1, transition: "opacity 0.2s" }}>
              {status === "loading" ? "Sending…" : <><Send size={15} /> Send Message</>}
            </button>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
          style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "2.5rem" }}>
          {[
            { icon: GitFork, href: "https://github.com/AJINKYA-aj", label: "GitHub" },
            { icon: Link2, href: "https://www.linkedin.com/in/ajinkyatompe", label: "LinkedIn" },
            { icon: Mail, href: "mailto:tompeajinkya07@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#64748b", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
              onMouseLeave={e => e.currentTarget.style.color = "#64748b"}
            ><Icon size={17} />{label}</a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
