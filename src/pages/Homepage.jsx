import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  homeContent,
  WhatIDoBest,
  TechnologiesTools,
} from "../utils/homecontent.js";
import { PROJECTS_DATA } from "../utils/projectcontent.js";

function Homepage() {
  const container = useRef();
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    // Hero Section Animation
    tl.from(".hero-text", { y: 50, opacity: 0, stagger: 0.2 })
      .from(".hero-btns", { y: 20, opacity: 0 }, "-=0.5");

    // Stats Cards
    gsap.from(".stat-card", {
      scrollTrigger: ".stat-card",
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // "What I Do Best" Cards
    gsap.from(".service-card", {
      scrollTrigger: ".service-card",
      scale: 0.9,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    });

    // Technology Tags
    gsap.from(".tech-tag", {
      scrollTrigger: ".tech-tag",
      opacity: 0,
      x: -20,
      stagger: 0.05,
      duration: 0.5,
    });
  }, { scope: container });

  return (
    <div ref={container} className="w-full flex flex-col items-center justify-center bg-white overflow-x-hidden">

      {/* --- HERO SECTION --- */}
      <div className="text-black flex flex-col justify-center items-center gap-6 sm:gap-10 bg-blue-100/20 p-6 sm:p-10 rounded-xl w-full py-24 sm:py-32">
        <div className="hero-text text-4xl sm:text-6xl md:text-8xl text-center font-bold leading-tight">
          Hello, I'm <br />
          <span className="bg-linear-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
            Keng Puthearith
          </span>
        </div>
        <div className="hero-text w-full sm:w-3/4 md:w-1/2 text-center text-black/60 text-base sm:text-lg md:text-xl">
          A passionate developer and designer creating impactful digital experiences. 
          Currently seeking internship opportunities to grow and contribute.
        </div>
        <div className="hero-btns flex flex-col sm:flex-row gap-4 sm:gap-10 mt-4">
          <Link to="/projects">
            <span className="text-white bg-purple-600 py-3 sm:py-5 px-6 sm:px-8 rounded-3xl inline-block hover:scale-105 transition-transform text-center">
              View Projects
            </span>
          </Link>
          <Link to="/contact">
            <span className="text-purple-600 border-2 py-3 sm:py-5 px-6 sm:px-8 rounded-3xl inline-block hover:bg-purple-50 transition-colors text-center">
              Get in Touch
            </span>
          </Link>
        </div>
      </div>

      {/* --- STATS SECTION --- */}
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center w-full my-10 pb-20">
        {homeContent.map((item) => (
          <div
            key={item.id}
            className="stat-card flex flex-col items-center gap-2 py-5 px-6 sm:px-10 bg-purple-100 rounded-xl text-center text-black w-full sm:w-auto"
          >
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            <div className="text-2xl sm:text-3xl font-bold">{item.value}</div>
            <div className="text-gray-600 text-sm sm:text-base">{item.name}</div>
          </div>
        ))}
      </div>

      {/* --- WHAT I DO BEST --- */}
      <div className="text-black flex flex-col items-center text-3xl sm:text-5xl pb-16 sm:pb-20 px-4 sm:px-10">
        <span className="font-semibold mb-6 sm:mb-10">What I Do Best</span>
        <div className="flex flex-wrap justify-center text-base sm:text-lg gap-4 sm:gap-10">
          {WhatIDoBest.map((item) => (
            <div
              key={item.id}
              className="service-card max-w-xs sm:max-w-sm text-black flex flex-col bg-white shadow-xl p-6 sm:p-8 gap-4 border border-black/20 rounded-xl"
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
              <div className="font-semibold text-lg sm:text-xl">{item.name}</div>
              <div className="text-sm sm:text-base">{item.discription}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- TECHNOLOGIES & TOOLS --- */}
      <div className="text-black pb-16 sm:pb-20 w-full">
        <span className="font-semibold text-3xl sm:text-5xl flex justify-center pb-6 sm:pb-10">Technologies & Tools</span>
        <div className="flex gap-2 sm:gap-5 flex-wrap items-center justify-center px-4 sm:px-10 lg:px-20">
          {TechnologiesTools.map((item) => (
            <div key={item.id} className="tech-tag">
              <div className="bg-blue-100 border-2 border-blue-200 px-4 sm:px-10 py-2 sm:py-5 rounded-4xl hover:bg-blue-200 transition-colors cursor-default text-sm sm:text-base">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FEATURED PROJECTS --- */}
      <div className="text-black w-full px-4 sm:px-10 lg:px-20 pb-16 sm:pb-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 sm:pb-10">
          <span className="font-semibold text-3xl sm:text-5xl mb-4 sm:mb-0">Featured Projects</span>
          <Link to="/projects" className="text-purple-600 font-semibold text-lg sm:text-xl flex items-center gap-2 hover:underline">
            View All <span className="text-2xl">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {featuredProjects.map((project) => (
            <div key={project.id} className="rounded-3xl overflow-hidden shadow-xl border border-black/10 group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full aspect-square object-cover transition-transform group-hover:scale-110 duration-700" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- READY TO WORK TOGETHER --- */}
      <div className="text-black flex flex-col items-center gap-6 sm:gap-10 bg-slate-50 py-16 sm:py-32 w-full px-4 sm:px-10">
        <div className="text-3xl sm:text-6xl font-semibold text-center">
          Ready to Work Together?
        </div>
        <div className="w-full sm:w-3/4 md:w-1/2 text-center text-black/60 text-sm sm:text-lg md:text-base">
          I'm currently seeking internship opportunities where I can contribute, learn, and grow. Let's create something amazing together!
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-4">
          <Link to="/contact">
            <span className="text-white bg-purple-600 py-3 sm:py-5 px-6 sm:px-12 rounded-full font-bold shadow-lg shadow-purple-200/50 hover:brightness-110 transition-all text-center">
              Contact Me →
            </span>
          </Link>
          <Link to="/about">
            <span className="text-purple-600 border-2 border-purple-100 py-3 sm:py-5 px-6 sm:px-12 rounded-full font-bold hover:bg-purple-100/30 transition-colors text-center">
              Learn More
            </span>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Homepage;