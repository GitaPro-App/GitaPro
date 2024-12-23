"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function RotatingText() {
  const words = ["fast.", "simple.", "easy."];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    let interval;
    const currentContainerRef = containerRef.current;
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAnimating(true);
        } else {
          setIsAnimating(false);
          setCurrentIndex(0);
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
    <div ref={containerRef} className="min-h-[60px] md:min-h-[60px] relative px-4 md:px-6">
      <motion.div 
        className="text-3xl sm:text-3xl md:text-4xl font-bold flex flex-wrap items-center justify-center text-center"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={`start-${currentIndex}`}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mr-3" // Added margin-right
          >
            Learning the Gita made
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
              damping: 30
            }}
            className="text-purple-600 inline-block scale-90" // Added scale-90 to decrease size
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default RotatingText;
