import React from "react";
import blogposts from "../assets/Blogpost2.png";
import Divider from "@mui/material/Divider";

const Feedback = () => {
  return (
    <>
      <div className=" relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-teal-200 lg:m-5 lg:ml-[280px]">
        <div className=" absolute inset-0 bg-white/10 backdrop-blur-lg shadow-lg px-10 lg:pl-[40px] md:pl-[300px] text-center">
          {/* crate a component and render here */}
          <div className="lg:flex lg:justify-center lg:items-center lg:space-x-40 mt-10 ">
            <div>
              <img width={400} src={blogposts} alt="" />
            </div>

            <div className="lg:leading-8 lg:flex lg:justify-center lg:items-center lg:flex-col ">
              <h1 className="text-4xl">Contact Us</h1>
              <p className="lg:mt-0 mt-3">Feel free to contact us
                <span> | @Ajinkya Technologies</span>
              </p>
            </div>
          </div>


  <Divider />
        </div>
      </div>
    </>
  );
};

export default Feedback;
