"use client";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OpportunityBanner from "./components/OpportunityBanner";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Journey from "./components/Journey";
import GitHubStats from "./components/GitHubStats";
import Achievements from "./components/Achievements";
import Extras from "./components/Extras";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const CustomCursor = dynamic(() => import("./components/CustomCursor"), { ssr: false });

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <OpportunityBanner />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Journey />
        <GitHubStats />
        <Achievements />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
