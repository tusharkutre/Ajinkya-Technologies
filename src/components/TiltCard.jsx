// Optimized component ✅ : This component is already optimized by mapping the tags and object keys.
import React from "react";
import { Tilt } from "react-tilt";

// tech object component(functional component)
const TechObject = ({ title, subTitle , img }) => (
  <div className="bg-gray-100/10 px-2 py-1 rounded-md ring-1 ring-gray-400 text-sm">
    <div className="flex justify-between w-72 gap-1 items-start">
    <div className="flex flex-col items-start">
        <div className="font-poppins">{title}</div>
        <div className="font-poppins">{subTitle}</div>
    </div>
      <div>
          <img src={img} />
      </div>
    </div>
  </div>
);

const TiltCard = ({ tech }) => (
  <Tilt options={{ max: 25, scale: 1.02 }}>
    <div className="h-full py-4 px-4 ring-2 inset-0 bg-[#efeeef] bg-gradient-to-tr hover:from-purple-400/20 hover:via-fuchsia-100 hover:to-blue-400/40 backdrop-blur-md p-5 rounded-2xl w-full ring-gray-300 shadow-lg overflow-hidden">
      <div className="flex flex-col h-full">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          <div className="rounded-md overflow-hidden mb-4">
            <img 
              src={tech.newUI} 
              alt="" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="flex gap-2 font-poppins items-center">
            <span>✅</span>
            {tech.title}
          </div>
        </h2>
        <p className="text-lg text-gray-600 font-poppins flex-grow">{tech.desc}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.tags?.map((tag) => (
            <Tilt
              key={tag}
              className="bg-gray-100/10 font-poppins px-2 py-1 rounded-md ring-1 ring-gray-400 text-sm"
            >
              {tag}
            </Tilt>
          ))}
          
          {["obj1", "obj2", "obj3"].map(
            (objKey) =>
              tech[objKey] && (
                <Tilt key={objKey}>
                  <TechObject
                    title={tech[objKey].title}
                    subTitle={tech[objKey].subTitle}
                    img={tech[objKey].image}
                  />
                </Tilt>
              )
          )}
        </div>
      </div>
    </div>
  </Tilt>
);

export default TiltCard;
