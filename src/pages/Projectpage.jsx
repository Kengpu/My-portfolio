import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CAT, CATEGORY_TABS, PROJECTS_DATA } from "../utils/projectcontent.js";

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState(CAT.ALL);
  const container = useRef();

  const filteredProjects =
    activeTab === CAT.ALL
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === activeTab);

  useGSAP(
    () => {
      // Reveal header
      gsap.from(".header-content", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Reveal Projects or Empty State
      gsap.fromTo(
        ".project-card, .empty-state",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.2)",
          clearProps: "all",
        },
      );
    },
    { dependencies: [activeTab], scope: container },
  );

  return (
    <div
      ref={container}
      className="min-h-screen bg-[#fafafa] font-sans text-[#1a1a1a] pb-32 antialiased overflow-x-hidden"
    >
      {/* Header Section */}
      <header className="header-content pt-24 pb-12 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          My{" "}
          <span className="bg-linear-to-r from-[#a826ff] to-[#ff33f6] bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A showcase of my recent work and digital experiences.
        </p>
      </header>

      {/* Navigation Tabs */}
      <nav className="header-content flex flex-wrap justify-center gap-4 mb-20 px-4">
        {CATEGORY_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 transform active:scale-95 ${
              activeTab === tab
                ? "bg-[#9d00ff] text-white shadow-[0_15px_30px_-5px_rgba(157,0,255,0.3)]"
                : "bg-white border border-gray-100 text-gray-400 hover:text-[#9d00ff] hover:border-[#9d00ff]"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Projects Grid or Empty State */}
      <main className="max-w-7xl mx-auto px-8">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full"
              >
                <div className="aspect-[1.6/1] rounded-t-[2.5rem] overflow-hidden bg-gray-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="px-8 pb-8 pt-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#9d00ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-[14px] leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#f3e8ff] text-[#a826ff] text-[10px] font-bold rounded-lg uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    className="w-fit flex items-center gap-2 bg-[#9d00ff] text-white px-6 py-2.5 rounded-xl font-bold text-sm"
                  >
                    <span className="text-white">View Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* THIS IS THE "COMING SOON" SECTION */
          <div className="empty-state max-w-lg mx-auto text-center py-20 px-10 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Coming Soon
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm currently working on some exciting projects in{" "}
              <span className="text-[#a826ff] font-bold">{activeTab}</span>.
              Check back soon!
            </p>
            <button
              onClick={() => setActiveTab(CAT.ALL)}
              className="text-[#a826ff] font-bold text-sm hover:underline"
            >
              View All Projects
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectPage;
