"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GitFork, Star, Users, ExternalLink } from "lucide-react";

interface GitHubData { public_repos: number; followers: number; following: number; name: string; }
interface Repo { name: string; description: string; stargazers_count: number; forks_count: number; language: string; html_url: string; }

const langColors: Record<string, string> = { JavaScript: "#F7DF1E", TypeScript: "#3178C6", Python: "#3776AB", "C++": "#F34B7D", HTML: "#E34F26", CSS: "#1572B6", default: "#64748b" };

export default function GitHubStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [profile, setProfile] = useState<GitHubData | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = "AJINKYA-aj";
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then(r => r.json()),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`).then(r => r.json()),
    ]).then(([p, r]) => {
      setProfile(p);
      setRepos(Array.isArray(r) ? r.filter((repo: Repo) => !repo.name.toLowerCase().includes(username.toLowerCase())) : []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <section ref={ref} style={{ padding: "4rem 1.25rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="section-label">GitHub</span>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, marginTop: "0.5rem", marginBottom: "2rem", letterSpacing: "-0.02em" }}>
            Code <span className="gradient-text">Activity</span>
          </h2>
        </motion.div>

        {loading ? (
          <div style={{ color: "#64748b", fontFamily: "JetBrains Mono, monospace", fontSize: "0.85rem" }}>Loading GitHub data…</div>
        ) : (
          <>
            {profile && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 160px), 1fr))", gap: "0.75rem", marginBottom: "1.75rem" }}>
                {[
                  { label: "Public Repos", value: profile.public_repos, icon: GitFork },
                  { label: "Followers", value: profile.followers, icon: Users },
                  { label: "Following", value: profile.following, icon: Star },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem", background: "rgba(13,27,46,0.85)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: "12px" }}>
                    <Icon size={16} color="#3B82F6" style={{ flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: "clamp(1.2rem, 3vw, 1.4rem)", fontWeight: 800, color: "#F1F5F9" }}>{value}</div>
                      <div style={{ fontSize: "0.68rem", color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>{label}</div>
                    </div>
                  </div>
                ))}
                <a href="https://github.com/AJINKYA-aj" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "1rem", background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: "12px", textDecoration: "none", color: "#3B82F6", fontWeight: 700, fontSize: "0.85rem", transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(59,130,246,0.15)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(59,130,246,0.08)"}
                ><ExternalLink size={15} /> View Profile</a>
              </motion.div>
            )}

            {repos.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "0.75rem" }}>
                {repos.slice(0, 6).map((repo, i) => {
                  const color = langColors[repo.language] || langColors.default;
                  return (
                    <motion.a key={repo.name} href={repo.html_url} target="_blank" rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 + i * 0.05 }}
                      style={{ display: "block", padding: "1.1rem 1.25rem", background: "rgba(13,27,46,0.85)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", textDecoration: "none", transition: "border-color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.35)")}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
                    >
                      <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#F1F5F9", marginBottom: "0.35rem" }}>{repo.name}</div>
                      {repo.description && <p style={{ color: "#64748b", fontSize: "0.75rem", lineHeight: 1.5, marginBottom: "0.65rem" }}>{repo.description.length > 75 ? repo.description.slice(0, 75) + "…" : repo.description}</p>}
                      <div style={{ display: "flex", gap: "0.9rem", alignItems: "center", flexWrap: "wrap" }}>
                        {repo.language && <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color }} /><span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>{repo.language}</span></div>}
                        {repo.stargazers_count > 0 && <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><Star size={11} color="#F59E0B" /><span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>{repo.stargazers_count}</span></div>}
                        {repo.forks_count > 0 && <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><GitFork size={11} color="#64748b" /><span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>{repo.forks_count}</span></div>}
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
