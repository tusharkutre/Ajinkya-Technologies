import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

import customer from "../assets/customer.png";
import group from "../assets/group.png";
import feedback from "../assets/feedback.png";
import values from "../assets/values.png";
import BentoGrid from "./BentoGrid";

import Carousel from "./Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Teams from "./Teams";
import Footer from "./Footer";

var settings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable auto slide play
  autoplaySpeed: 2000, // Set delay between slides in milliseconds
};

const countData = [
  {
    id: 1,
    title: "Number of customer",
    start: 0,
    end: 100,
    duration: 5,
    img: group,
  },
  {
    id: 2,
    title: "values created from solutions build",
    start: 0,
    end: 558,
    duration: 5,
    img: values,
  },
  {
    id: 3,
    title: "positive feedbacks",
    start: 0,
    end: 99,
    duration: 5,
    img: feedback,
  },
];

const slideData = [
  {
    id: 1,
    img: customer,
    title: "Pranav Kavshik",
    subtitle: "Partner, Sr. Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    logo: customer,
  },
  {
    id: 2,
    img: customer,
    title: "Sarah Johnson",
    subtitle: "CEO, Tech Solutions",
    desc: "Working with Ajinkya Technologies has transformed our business operations. Their innovative solutions have helped us achieve remarkable growth.",
    logo: customer,
  },
  {
    id: 3,
    img: customer,
    title: "Michael Chen",
    subtitle: "CTO, Digital Innovations",
    desc: "The team at Ajinkya Technologies delivered exceptional results. Their expertise and dedication to quality is truly impressive.",
    logo: customer,
  },
];

const CountUpPage = () => {
  const [countOnScroll, setCountOnScroll] = useState(false);
  const sliderRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.top >= 0) {
        setCountOnScroll(true);
      }
    };

    // Check initial position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    sliderRef.current.slickPause(); // Pause autoplay on hover
  };

  const handleMouseLeave = () => {
    sliderRef.current.slickPlay(); // Resume autoplay when not hovering
  };

  return (
    <>
      <section
        className="grid mb-10 md:grid-cols-2 lg:grid-cols-3 gap-10"
        ref={ref}
      >
        {countData.map((data, index) => (
          <div
            key={index}
            className="flex duration-200 hover:-translate-y-4 flex-col p-10 bg-gray-100 space-y-5 justify-center "
          >
            <div className="flex justify-center">
              <img width={50} src={data.img} alt={data.title} />
            </div>
            <div className="text-6xl  font-bold text-center font-poppins">
              {countOnScroll && (
                <CountUp
                  start={data.start}
                  end={data.end}
                  duration={data.duration}
                />
              )}
              <span>+</span>
            </div>
            <div className="font-poppins">{data.title}</div>
          </div>
        ))}
      </section>

      {/* render Bento-grid UI */}
      <BentoGrid />

      {/* carousel slider UI */}
      <section>
        <div className="lg:w-2/3 w-fit my-10">
          <h1 className="text-4xl leading-tight text-left font-medium font-poppins">
            See why over 1000 + companies have chosen Ajinkya Technologies
          </h1>
        </div>
        <Slider
          ref={sliderRef}
          {...settings}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {slideData.map((slide, index) => (
            <div key={index}>
              <Carousel slide={slide} />
            </div>
          ))}
        </Slider>
      </section>

      {/* teams Ui */}
      <Teams />

      {/* Footer UI */}
      <Footer/>
    </>
  );
};

export default CountUpPage;