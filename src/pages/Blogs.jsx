import React from "react";
import { blogs } from "../blogs";
import blogposts from "../assets/blog.png";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  console.log("blogs");
  return (
    <>
      <div className="relative flex items-center justify-center lg:m-5 lg:ml-[280px]">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg shadow-lg px-5 lg:pl-[40px] md:pl-[300px] text-center">
          {/* container is must for adjustability */}
          <div className="container">
            <div className="mx-auto blogPage sm:flex justify-center items-center md:flex-col lg:flex-row">
              <motion.div
                initial={{ opacity: 0, x: -100 }} // initial state
                animate={{ opacity: 1, x: 0 }} // final state
                transition={{ duration: 0.5, delay: 0.2 }} // animation duration and delay
                className="lg:w-[60vh] md:w-[40vh]"
              >
                <img className="" src={blogposts} alt="" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }} // initial state
                animate={{ opacity: 1, x: 0 }} // final state
                transition={{ duration: 0.5, delay: 0.2 }} // animation duration and delay
              >
                <p className="mt-10">
                  Empowering progress : Ajinkya Technologies IT Services and Solutions
                </p>
              </motion.div>
             
            </div>

            <motion.div
              initial={{ opacity: 0, x: 300 }} // initial state- 300px right of the screen
              animate={{ opacity: 1, x: 0 }} // final state - move to 0px
              transition={{ duration: 0.5, delay: 0.2 }} // animation duration and delay
              className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {blogs.map((blog) => {
                return (
                  <div className="bg-gray-100/50 p-4 rounded-lg shadow-lg">
                    <BlogCard key={blog.id} blog={blog} />
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;