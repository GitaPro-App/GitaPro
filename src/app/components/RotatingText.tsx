"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function RotatingText() {
  const words = ["fastest", "simplest", "easiest"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isSpaced, setIsSpaced] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAnimating(true);
          setIsSpaced(true);
        } else {
          setIsAnimating(false);
          setCurrentIndex(0);
          setIsSpaced(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    if (isAnimating) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex === words.length - 1) {
            setIsAnimating(false);
            setTimeout(() => {
              setIsSpaced(false);
            }, 500);
            return 0;
          }
          return prevIndex + 1;
        });
      }, 2000);
    }

    return () => {
      clearInterval(interval);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isAnimating]);

  return (
    <div ref={containerRef} className="min-h-[120px] md:min-h-[100px] overflow-hidden relative px-4 md:px-6">
      <motion.div 
        className="text-xl sm:text-2xl md:text-4xl font-bold flex flex-wrap items-center justify-center text-center gap-2"
        animate={{
          gap: isSpaced ? "0.5rem" : "0.25rem",
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.span className="whitespace-nowrap">Learn the Gita</motion.span>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.7 
            }}
            className="text-purple-600 whitespace-nowrap"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
        <motion.span className="whitespace-nowrap">way possible.</motion.span>
      </motion.div>
    </div>
  );
}

export default RotatingText;