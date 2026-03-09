"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 (0% to 30%)
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -200]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);

  // Section 2 (30% to 60%)
  const y2 = useTransform(scrollYProgress, [0.2, 0.45, 0.6], [200, 0, -200]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.45, 0.6], [0, 1, 1, 0]);

  // Section 3 (60% to 90%)
  const y3 = useTransform(scrollYProgress, [0.5, 0.75, 0.9], [200, 0, -200]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.65, 0.75, 0.9], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none w-full">
      {/* 
        The container height must match ScrollyCanvas exactly to map the
        scroll sections 1:1. ScrollyCanvas is 400vh tall plus 100vh sticky area = 500vh total scroll space.
        But the viewport tracking works best if we just map this div 
        to stretch the full length. 
      */}
      <div className="h-[400vh] w-full relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none p-8">
          
          <motion.div 
            style={{ y: y1, opacity: opacity1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl">
              Mohammad Sadab Saqib
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 font-light tracking-wide drop-shadow-lg">
              Associate Manager & Lead Test Engineer
            </p>
          </motion.div>

          <motion.div 
            style={{ y: y2, opacity: opacity2 }}
            className="absolute inset-0 flex flex-col items-start justify-center max-w-7xl mx-auto px-8 md:px-24"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-2xl max-w-2xl">
              9+ years of
              <br/>
              <span className="text-gray-400">IT Experience.</span>
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-lg font-light leading-relaxed">
              Specializing in automated testing architectures, CI/CD pipelines, and driving quality across organizations.
            </p>
          </motion.div>

          <motion.div 
            style={{ y: y3, opacity: opacity3 }}
            className="absolute inset-0 flex flex-col items-end justify-center max-w-7xl mx-auto px-8 md:px-24 text-right"
          >
             <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-2xl max-w-2xl">
              Bridging the gap between
              <br/>
              <span className="text-gray-400">Quality and Engineering.</span>
            </h2>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
