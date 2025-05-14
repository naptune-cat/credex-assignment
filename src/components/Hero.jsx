import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="text-center py-20 bg-blue-50"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Resell Your Unused Software Licenses
      </motion.h1>

      <motion.p
        className="mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Turn unused software into cash in minutes.
      </motion.p>

      <motion.button
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sell My Licenses
      </motion.button>
    </motion.section>
  );
};

export default Hero;
