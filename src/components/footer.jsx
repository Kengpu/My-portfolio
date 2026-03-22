import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();

  useGSAP(() => {
    gsap.from(".footer-text", {
      scrollTrigger: {
        trigger: ".footer-text",
        start: "top 95%",
      },
      y: 15,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  }, { scope: footerRef });

  return (
    <footer 
      ref={footerRef} 
      className="w-full bg-[#fafafa] border-t border-gray-100 py-10"
    >
      <div className="flex justify-center items-center px-8">
        <div className="footer-text text-gray-400 text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-center">
          © 2026 <span className="text-gray-600">Keng Puthearith</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;