import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function RotatingText() {
  const words = ["fast", "free", " easy"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
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
    <div ref={containerRef} className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px] overflow-visible relative px-2 sm:px-4 text-white">
    <motion.div className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex items-center justify-center text-center flex-wrap gap-1 sm:gap-2 leading-tight sm:leading-[1.25]">
      <span>Learning the Bhagvad Gita</span>
      <span>made&nbsp;</span>
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
            duration: 3,
          }}
          className=" text-[#f791b4]"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  </div>
  );
}

export default RotatingText;
