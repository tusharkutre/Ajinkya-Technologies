// src/About.js
import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay: 0.4 }
};

// Content data
const aboutContent = {
  title: "About Us",
  description: "We are a team of passionate individuals committed to delivering the best services to our clients. Our mission is to provide high-quality solutions that meet the needs of our customers.",
  values: {
    title: "Our Values",
    items: [
      "Integrity",
      "Innovation",
      "Customer Satisfaction",
      "Teamwork"
    ]
  }
};

// Reusable animated components
const AnimatedHeading = ({ children, delay = 0 }) => (
  <motion.h1
    className="text-4xl font-bold mb-4 text-center"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.h1>
);

const AnimatedParagraph = ({ children, delay = 0.2 }) => (
  <motion.p
    className="text-lg text-gray-700 max-w-2xl text-center mb-6"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.p>
);

const ValuesList = () => (
  <motion.div
    className="flex flex-col items-center"
    {...fadeInScale}
  >
    <h2 className="text-2xl font-semibold mb-2">{aboutContent.values.title}</h2>
    <ul className="list-disc list-inside text-gray-600">
      {aboutContent.values.items.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  </motion.div>
);

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <AnimatedHeading>{aboutContent.title}</AnimatedHeading>
      <AnimatedParagraph>{aboutContent.description}</AnimatedParagraph>
      <ValuesList />
    </div>
  );
};

export default About;