import React from "react";
import { motion } from "framer-motion";
import "../styles/InfiniteSlider.css";
import bro from "../img/brochure.webp";
import pbp from "../img/pbp.webp";
import fwp from "../img/fwp.webp";
import crp from "../img/crp.webp";
import stp from "../img/stp.webp";
import cmp from "../img/cmp.webp";
import wwp from "../img/wwp.webp";

const images = [bro, cmp, pbp, fwp, crp, stp, wwp,bro, cmp, pbp, fwp, crp, stp, wwp,bro, cmp, pbp, fwp, crp, stp, wwp,bro, cmp, pbp, fwp, crp, stp, wwp,bro, cmp, pbp, fwp, crp, stp, wwp,bro, cmp, pbp, fwp, crp, stp, wwp,bro, cmp, pbp, fwp, crp, stp, wwp,bro, cmp, pbp, fwp, crp, stp, wwp,bro, cmp, pbp, fwp, crp, stp, wwp,bro, cmp, pbp, fwp, crp, stp, wwp,bro, cmp, pbp, fwp, crp, stp, wwp,bro, cmp, pbp, fwp, crp, stp, wwp];

const InfiniteSlider = () => {
  return (
    <div className="slider-container">
      <motion.div
        className="slider"
        animate={{ x: ["0%", "-100%"] }} // Moves left infinitely
        transition={{
          repeat: Infinity,
          duration: 700, // Adjust speed
          ease: "linear",
          repeatDelay: 0,
        }}
      >
        {/* Create a seamless loop by duplicating the images */}
        {[...images, ...images].map((src, index) => (
          <img key={index} src={src} className="slider-img" alt={`slide-${index}`} />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
