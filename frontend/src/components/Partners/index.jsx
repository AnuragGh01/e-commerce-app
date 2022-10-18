import React from "react";
import { motion } from "framer-motion";
import brandsImg from "./images/brands-logo-black.png";

export default function Partners() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="brands pt-12 pb-8 text-center bg-gray-200 flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold underline underline-offset-8 mx-auto mb-4">
          Our Partners
        </h1>
        <img
          src={brandsImg}
          className="max-w-1000 w-full h-full object-cover"
          alt="brands"
        />
      </div>
    </motion.div>
  );
}
