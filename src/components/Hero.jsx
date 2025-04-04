// optimized code for Hero.jsx✅
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "../styles.css";

const Hero = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

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
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px" // Trigger slightly before element comes into view
      }
    );

    // Observe the hero section
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Cleanup
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [controls, isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <div className="relative isolate overflow-hidden">
      {/* Top gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <motion.div 
        ref={heroRef}
        className="relative text-center flex items-center justify-center flex-col py-24 sm:py-32 lg:py-[60px]"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="flex items-center justify-center flex-col w-full max-w-5xl mx-auto px-6 lg:px-8">
          <div className="container mx-auto">
            {/* Announcement banner - hidden on mobile, visible on sm and up */}
            <motion.div 
              className="roundedDiv hidden sm:mb-8 sm:flex sm:justify-center"
              variants={itemVariants}
            >
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-2 ring-gray-900/10 hover:ring-gray-900/20 transition-all duration-300">
                <span className="font-medium font-poppins">
                  Be the part of Ajinkya Technologies ❤️.
                </span>
                <a href="#" className="font-semibold text-indigo-600 ml-2 hover:text-indigo-800 transition-colors">
                  <span className="absolute inset-0 font-roboto font-medium" aria-hidden="true"></span>
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.div>

            {/* Main tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-xl leading-7 font-semibold text-teal-400 mb-6"
            >
              Ajinkya Believe's in Technology, What it has to Offer and we
              Ensure it will Enable us to Build Secured, Robust and a
              Sustainable Future for Generations to Come.
            </motion.p>

            {/* Heading with gradient text */}
            <div className="leading-8 text-center md:leading-10 py-3 mb-6">
              <div className="inline-block">
                <motion.h1
                  variants={itemVariants}
                  className="tracking-tight inline font-bold text-[clamp(1.5rem,5vw,2.5rem)] sm:text-[clamp(1.8rem,6vw,3.5rem)] lg:text-5xl"
                >
                  Let's Create&nbsp;
                </motion.h1>
                <motion.h1
                  variants={itemVariants}
                  className="tracking-tight inline font-bold from-[#FF1CF7] to-[#b249f8] text-[clamp(1.5rem,5vw,2.5rem)] sm:text-[clamp(1.8rem,6vw,3.5rem)] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b"
                >
                  Something Big Together..&nbsp;
                </motion.h1>
              </div>
            </div>

            {/* Subheading */}
            <motion.h3
              variants={itemVariants}
              className="py-3 font-semibold text-lg sm:text-xl text-gray-500 mb-8"
            >
              Tech Company, building World Class Products and Solutions!
            </motion.h3>

            {/* Call to action buttons */}
            <motion.div 
              className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
              variants={itemVariants}
            >
              <a
                href="#"
                className="w-full sm:w-auto font-roboto rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300"
              >
                Get started
              </a>
              <a
                href="#"
                className="w-full sm:w-auto font-poppins text-sm/6 font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
