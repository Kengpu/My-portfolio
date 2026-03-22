import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../utils/contactcontent.js';

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1485344567464300635/88KT--6MJiWSi4003tOQQ5Lt--lc19GKSnlzoJVL_uE3BEKv0wB0uCTDQDLjakF_LE3j"; // <-- Replace this

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const container = useRef();

  // GSAP animations
  useGSAP(() => {
    const tl = gsap.timeline({ 
      defaults: { ease: "power2.out", duration: 0.5 },
      onComplete: () => gsap.set(".reveal-item", { clearProps: "all" }) 
    });

    tl.from(".reveal-header", { y: 20, opacity: 0 })
      .from(".reveal-item", { y: 15, opacity: 0, stagger: 0.04 }, "-=0.3")
      .from(".reveal-form", { x: 20, opacity: 0 }, "-=0.4");
  }, { scope: container });

  const handleSubmit = async (e) => {
    e.preventDefault();
    gsap.to(".submit-btn", { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });

    const payload = {
      username: "Contact Form Bot",
      embeds: [
        {
          title: "New Contact Form Submission",
          color: 0xa826ff,
          fields: [
            { name: "Name", value: formData.name || "N/A" },
            { name: "Email", value: formData.email || "N/A" },
            { name: "Message", value: formData.message || "N/A" },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const res = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div ref={container} className="min-h-screen bg-[#fafafa] font-sans text-[#1a1a1a] pb-24 sm:pb-32 antialiased overflow-x-hidden pt-10">
      <header className="reveal-header pt-16 sm:pt-24 pb-8 sm:pb-12 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
          Get In <span className="bg-linear-to-r from-[#a826ff] to-[#ff33f6] bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? Let's work together to create something amazing.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 mt-8">

        <div className="space-y-8 sm:space-y-10">
          
          {/* SOCIAL LINKS */}
          <div className="reveal-item">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white rounded-2xl border border-gray-100 hover:bg-[#a826ff] hover:-translate-y-1 transition-all duration-300 shadow-sm group"
                >
                  <img 
                    src={link.icon} 
                    alt={link.name} 
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-4 sm:space-y-6">
            {CONTACT_INFO.map(info => (
              <div key={info.id} className="reveal-item flex items-center gap-4 sm:gap-5 p-4 sm:p-5 bg-white rounded-2xl sm:rounded-4xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#f5f7ff] group-hover:bg-[#a826ff] rounded-2xl transition-all duration-300">
                  <img 
                    src={info.icon} 
                    alt={info.label} 
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{info.label}</p>
                  <p className="text-sm sm:text-base font-semibold text-[#2d2d2d]">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT: FORM */}
        <div className="reveal-form bg-white rounded-2xl sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-gray-50">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 ml-1">Full Name</label>
              <input 
                type="text" required placeholder="Name"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#f9f9f9] border border-transparent rounded-2xl focus:bg-white focus:border-[#a826ff] focus:outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 ml-1">Email Address</label>
              <input 
                type="email" required placeholder="Email"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#f9f9f9] border border-transparent rounded-2xl focus:bg-white focus:border-[#a826ff] focus:outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 ml-1">Message</label>
              <textarea 
                rows="4" required placeholder="How can I help?"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#f9f9f9] border border-transparent rounded-2xl focus:bg-white focus:border-[#a826ff] focus:outline-none transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit"
              className="submit-btn w-full py-3 sm:py-4 bg-[#a826ff] text-white rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:bg-[#8a00e6] transition-all transform active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>

      </main>
    </div>
  );
};

export default ContactPage;