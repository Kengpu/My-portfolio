import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SKILLS, EDUCATION, EXPERIENCE, CERTIFICATIONS } from '../utils/aboutcontent.js';
import profile from "../assets/photo_2026-03-23_00-41-31.jpg";

// Register ScrollTrigger for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const container = useRef();

  useGSAP(() => {
    // 1. Hero Entrance Animation (Runs on load)
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    
    tl.from(".about-header", { y: 40, opacity: 0 })
      .from(".intro-image", { x: -50, opacity: 0 }, "-=0.6")
      .from(".intro-text", { x: 50, opacity: 0, stagger: 0.2 }, "-=0.8");

    // 2. Skill Progress Bars (Triggered when scrolled into view)
    gsap.utils.toArray(".skill-progress-bar").forEach((bar) => {
      const level = bar.getAttribute("data-level");
      gsap.to(bar, {
        width: level,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 92%",
        }
      });
    });

    // 3. Card Reveal (Unified for Education, Experience, and Certifications)
    gsap.from(".reveal-card", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".reveal-card",
        start: "top 85%",
      },
      // Clear properties after animation so hover transitions work perfectly
      onComplete: () => gsap.set(".reveal-card", { clearProps: "all" })
    });

  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-[#fafafa] font-sans text-[#1a1a1a] pb-32 antialiased overflow-x-hidden">
      
      {/* --- HEADER SECTION --- */}
      <header className="about-header pt-24 pb-12 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          About <span className="bg-linear-to-r from-[#a826ff] to-[#ff33f6] bg-clip-text text-transparent">Me</span>
        </h1>
        {/* <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Passionate developer at CADT, dedicated to building clean, impactful digital experiences.
        </p> */}
      </header>

      <main className="max-w-6xl mx-auto px-8">
        
        {/* --- INTRO SECTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="intro-image relative group">
            <div className="absolute -inset-4 bg-linear-to-tr from-purple-200 to-pink-100 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <img 
              src={profile}
              alt="Workspace" 
              className="relative rounded-[2.5rem] shadow-xl w-full aspect-square object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="intro-text text-4xl font-bold">Hi, I'm <span className="text-[#a826ff]">Keng Puthearith</span></h2>
            <p className="intro-text text-gray-500 leading-relaxed text-lg">
              I’m a developer focused on creating clean, efficient, and user-friendly applications. I enjoy solving complex problems through elegant code.
            </p>
            <div className="pt-4">
              <h3 className="intro-text text-xl font-bold mb-4 italic text-gray-800 tracking-tight">My Strengths</h3>
              <ul className="space-y-3">
                {["Strong Problem Solver", "Team Work", "Modern UI/UX Focus"].map((item, i) => (
                  <li key={i} className="intro-text flex items-center gap-3 text-gray-500 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#a826ff]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-16 underline decoration-purple-100 underline-offset-8">Technical Proficiency</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-xs text-gray-700 uppercase tracking-widest">{skill.name}</span>
                  <span className="font-bold text-sm text-[#a826ff]">{skill.level}</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="skill-progress-bar h-full bg-linear-to-r from-[#a826ff] to-[#ff33f6] rounded-full"
                    data-level={skill.level}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- EDUCATION & EXPERIENCE --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">🎓 Education</h2>
            {EDUCATION.map((edu, i) => (
              <div key={i} className="reveal-card bg-white p-8 rounded-4xl border border-gray-100 shadow-sm mb-6">
                <h3 className="text-lg font-bold text-[#a826ff]">{edu.title}</h3>
                <p className="font-semibold text-gray-800 text-sm mt-1">{edu.school}</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] my-2">{edu.date}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            ))}
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">💼 Experience</h2>
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="reveal-card bg-white p-8 rounded-4xl border border-gray-100 shadow-sm mb-6 group hover:border-[#a826ff]/30 transition-colors">
                <h3 className="text-lg font-bold text-[#a826ff]">{exp.title}</h3>
                <p className="font-semibold text-gray-800 text-sm mt-1">{exp.company}</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] my-2">{exp.date}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </section>
        </div>

        {/* --- CERTIFICATIONS SECTION --- */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Certifications</h2>
            <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] font-bold">Verified Expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATIONS.map((cert, i) => (
              <a 
                key={i} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="reveal-card block bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group no-underline relative overflow-hidden"
              >
                {/* Card Top: Label and Animated Arrow */}
                <div className="flex justify-between items-start mb-8">
                  <div className="px-4 py-1.5 bg-purple-50 text-[#a826ff] rounded-full text-[10px] font-bold uppercase tracking-widest group-hover:bg-[#a826ff] group-hover:text-white transition-colors duration-300">
                    Certificate
                  </div>
                  
                  {/* Styled Arrow Icon */}
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-[#a826ff] transition-all duration-300 shadow-inner">
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-300 transform -group-hover:rotate-90" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>

                {/* Card Main Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] group-hover:text-[#a826ff] transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-[#a826ff] text-xs font-bold tracking-widest uppercase">
                    {cert.issuer} <span className="text-gray-200 mx-2">|</span> {cert.date}
                  </p>
                  <p className="text-gray-400 text-[13px] leading-relaxed mb-6">
                    {cert.desc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {cert.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#f9fafb] text-gray-400 text-[10px] font-bold rounded-lg uppercase tracking-tight group-hover:bg-purple-50 group-hover:text-[#a826ff] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;