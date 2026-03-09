"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120; // 000 to 119
const FRAME_PREFIX = "frame_";
const FRAME_SUFFIX = "_delay-0.066s.png";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Pad numbers like 001, 012, etc.
  const getFrameUrl = (index: number) => {
    const paddedIndex = index.toString().padStart(3, "0");
    return `/sequence/${FRAME_PREFIX}${paddedIndex}${FRAME_SUFFIX}`;
  };

  // Preload Images
  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = Array.from({ length: FRAME_COUNT }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.src = getFrameUrl(i);
          img.onload = () => {
            setLoadProgress((prev) => prev + 1);
            resolve(img);
          };
          img.onerror = () => {
            console.error(`Failed to load frame ${i}`);
            setLoadProgress((prev) => prev + 1);
            resolve(img); // Resolve anyway to avoid blocking Promise.all
          };
        });
      });

      const loadedImages = await Promise.all(loadPromises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    preloadImages();
  }, []);

  // Set up Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map 0-1 scroll progress to 0-119 frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Handle Canvas Drawing
  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[Math.floor(index)];
    if (!img) return;

    // Responsive Object Fit: Cover Logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let renderWidth = canvas.width;
    let renderHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image (Desktop usually)
      renderHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - renderHeight) / 2;
    } else {
      // Canvas is taller than image (Mobile usually)
      renderWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  // Re-draw when scroll changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    requestAnimationFrame(() => drawImage(latest));
  });

  // Re-draw on resize & initial load
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        drawImage(frameIndex.get());
      }
    };

    // Initial Setup
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, images]);

  const percentage = Math.round((loadProgress / FRAME_COUNT) * 100);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Loading Indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#121212] z-50 text-white font-mono gap-4">
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
               <motion.div 
                className="h-full bg-indigo-500" 
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
               />
            </div>
            <div className="text-xs text-gray-400">
              OPTIMIZING SEQUENCE: {percentage}%
            </div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="h-full w-full block"
        />
      </div>
    </div>
  );
}
