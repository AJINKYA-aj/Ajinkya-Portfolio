import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajinkya Tompe — Software Engineer & AI Builder",
  description: "Final-year IT student at VIIT Pune. Building AI-powered systems, full-stack applications, and scalable backends. Open to SWE, AI/ML, and Full Stack roles.",
  keywords: ["Ajinkya Tompe", "Software Engineer", "AI ML Engineer", "Full Stack Developer", "VIIT Pune", "Next.js", "React", "Python"],
  authors: [{ name: "Ajinkya Tompe" }],
  openGraph: {
    title: "Ajinkya Tompe — Software Engineer & AI Builder",
    description: "Engineering Ideas Into Intelligent Systems.",
    type: "website",
    url: "https://ajinkyatompe.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajinkya Tompe — Software Engineer & AI Builder",
    description: "Engineering Ideas Into Intelligent Systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
