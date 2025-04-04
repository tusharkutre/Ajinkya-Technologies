import React from "react";
import rocket from "../assets/rocket.png";
import { motion } from "framer-motion";

const RocketUI = () => {
  return (
    <>
      <div className="w-[220px] mx-auto">
        <div className="p-4 gap-4 flex justify-center items-center bg-blue-100 rounded-lg shadow-lg ">
          <div className="flex flex-col items-start ">
            <h5 className="mb-4">Haven't account?</h5>
            <a
              className="bg-[#5d78ff] text-white px-3 py-2 rounded-md font-bold"
              target="_blank"
              aria-label="Sign Up"
              href="/authentication/register"
            >
              Sign Up
            </a>
          </div>

          <div className="MuiBox-root">
            <motion.img
              initial={{ y: -50 }} // initial state
              animate={{
                y: [0, -30, 0], // animate the rocket up and down
              }}
              transition={{
                duration: 2, // animation duration
                repeat: Infinity, // repeat the animation infinitely
                ease: "easeInOut", // animation easing
              }}
              width={100}
              src={rocket}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RocketUI;
