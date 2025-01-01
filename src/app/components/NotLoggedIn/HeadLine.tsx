"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function RotatingText() {
  const words = ["quickly.", "simply.", "easily."];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isSpaced, setIsSpaced] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const currentContainerRef = containerRef.current;
  
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
  
    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }
  
    if (isAnimating) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex === words.length - 1) {
            setIsAnimating(false);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 2000);
    }
  
    return () => {
      clearInterval(interval);
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  }, [isAnimating, words.length]);
  

  return (
    <div ref={containerRef} className="min-h-[60px] md:min-h-[60px] overflow-hidden relative px-4 md:px-6">
      <motion.div 
        className="text-3xl sm:text-3xl md:text-4xl font-bold flex flex-wrap items-center justify-center text-center"
        animate={{
          gap: isSpaced ? "0.5rem" : "0.5rem",
        }}
        transition={{ duration: 1.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={`start-${currentIndex}`}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            Learn the Gita
          </motion.span>
        </AnimatePresence>
        
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
              duration: 3
            }}
            className="text-[#fcb154] whitespace-nowrap"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default RotatingText;