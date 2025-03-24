import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/InfiniteSlider.css";
import bro from "../img/brochure.webp";
import pbp from "../img/pbp.webp";
import fwp from "../img/fwp.webp";
import crp from "../img/crp.webp";
import stp from "../img/stp.webp";
import cmp from "../img/cmp.webp";
import wwp from "../img/wwp.webp";

const images = [
  { src: bro, link: "/brochure" },
  { src: cmp, link: "/events/Cinematica" },
  { src: pbp, link: "/events/Presentation-BlitZ" },
  { src: fwp, link: "/events/FunFinity-Wars" },
  { src: crp, link: "/events/CodeRescue" },
  { src: stp, link: "/events/SharK-Tank" },
  { src: wwp, link: "/events/WebWhiz" },
];

const InfiniteSlider = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      const currentX = sliderRef.current?.getBoundingClientRect().left || 0;
      controls.start({
        x: [currentX, "-50%"],
        transition: { repeat: Infinity, duration: 50, ease: "linear" },
      });
    }
  }, [isPaused, controls]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="slider-container">
      <motion.div
        ref={sliderRef}
        className="slider"
        animate={controls}
        initial={{ x: "0%" }}
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }} // Infinite dragging
        dragTransition={{ bounceStiffness: 50, bounceDamping: 10 }} // Smoother motion
        whileTap={{ cursor: "grabbing" }} // Changes cursor while dragging
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...images, ...images, ...images, ...images, ...images].map(({ src, link }, index) => (
          <motion.img
            key={index}
            src={src}
            className="slider-img"
            alt={`slide-${index}`}
            onClick={() => navigate(link)}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            style={{ cursor: "pointer", margin: "5px" }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
