// optimized code for CardDesc.jsx✅
import React, { useEffect, useState, useRef } from "react";
import TiltCard from "../components/TiltCard";
import { technologies } from "../tiltCardData";
import Marquee from "./Marquee";
import CountUpPage from "./CountUpPage";
import { motion, useAnimation } from "framer-motion";

const CardDesc = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set initial state to visible to ensure content is shown on first load
    setIsVisible(true);
    controls.start("visible");

    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Only trigger animation if not already visible
            if (!isVisible) {
              setIsVisible(true);
              controls.start("visible");
            }
            // Don't unobserve to allow re-animation if scrolled back into view
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px" // Trigger slightly before element comes into view
      }
    );

    // Observe the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls, isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="relative flex items-center justify-center flex-col mt-10 mb-20"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="w-full bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-5 sm:p-8">
        <div className="container mx-auto">
          <motion.div className="mx-auto space-y-6 sm:space-y-8" variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl font-medium text-left font-poppins">
              Leading Technologies 🚀
            </h1>

            <div className="font-poppins text-left text-slate-400 font-medium space-y-3 sm:space-y-4">
              <p>Market Leading Technologies that we work on.</p>
              <p>
                Ajinkya has been able to deliver solutions that has impacted
                peoples's life positively, We are a team of highly skilled
                professionals.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-auto max-w-7xl"
              variants={itemVariants}
            >
              {technologies.map((tech, index) => (
                <motion.div 
                  key={index} 
                  className="relative flex-1"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <TiltCard tech={tech} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Marquee />
            </motion.div>

            <motion.div
              className="min-h-[80vh] sm:min-h-[100vh]"
              variants={itemVariants}
            >
              <CountUpPage />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardDesc;