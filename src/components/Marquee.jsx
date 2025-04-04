import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  // Marquee images array
  const upperMarquee = [
    "/01.svg",
    "/02.svg",
    "/03.svg",
    "/04.svg",
    "/05.svg",
    "/06.svg",
    "/07.svg",
    "/08.svg",
    "/09.svg",
    "/10.svg",
    "/11.svg",
  ];
  const lowerMarquee = [
    "/12.svg",
    "/13.svg",
    "/14.svg",
    "/15.svg",
    "/16.svg",
    "/17.svg",
    "/18.svg",
    "/19.svg",
    "/20.svg",
    "/21.svg",
    "/22.svg",
  ];
  return (
    <>
      <h1 className="text-4xl font-poppins font-semibold text-left">Trusted by Top Global companies</h1>
      <h1 className="text-xl font-poppins font-medium text-left">We are a team of highly skilled professionals</h1>
      <section className="relative h-[70vh] overflow-hidden rounded-2xl bg-black flex items-center justify-center flex-col">
        <section className="absolute text-center">
          <section className="container space-y-20 mx-auto">

            <section className="flex">
              <motion.section
                initial={{ x: 0 }} //from initial position
                animate={{ x: "-100%" }} // to reverse of left side final position
                transition={{ repeat: Infinity, duration: 80, ease: "linear" }}

                className="flex flex-shrink-0 gap-10 "
              >
                {upperMarquee.map((img, index) => {
                  return (
                    <img key={index} className="w-60" src={img} alt="marquee" />
                  );
                })}
              </motion.section>

              <motion.section
                initial={{ x: 0 }} //from initial position
                animate={{ x: "-100%" }} // to reverse of left side final position
                transition={{ duration: 80, ease: "linear", repeat:Infinity }} // add a delay of 5 seconds
                className="flex flex-shrink-0 gap-10 "
              >
                {upperMarquee.map((img, index) => {
                  return (
                    // <div key={index} className="">
                    <img key={index} className="w-60" src={img} alt="marquee" />
                    // </div>
                  );
                })}
              </motion.section>
            </section>

            <section className="flex">
              <motion.section
                initial={{ x: "-100%" }} //from initial position
                animate={{ x: 0 }} // to reverse of left side final position
                transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
                className="flex flex-shrink-0 gap-10 "
              >
                {lowerMarquee.map((img, index) => {
                  return (
                    // <div key={index} className="">
                    <img key={index} className="w-60" src={img} alt="marquee" />
                    // </div>
                  );
                })}
              </motion.section>

              <motion.section
                initial={{ x: "-100%" }} //from initial position
                animate={{ x: 0 }} // to reverse of left side final position
                transition={{ duration: 80, ease: "linear", repeat:Infinity }} // add a delay of 5 seconds
                className="flex flex-shrink-0 gap-10 "
              >
                {lowerMarquee.map((img, index) => {
                  return (
                    // <div key={index} className="">
                    <img key={index} className="w-60" src={img} alt="marquee" />
                    // </div>
                  );
                })}
              </motion.section>
            </section>

          </section>
        </section>
      </section>
    </>
  );
};

export default Marquee;
