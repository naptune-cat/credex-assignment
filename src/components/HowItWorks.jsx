import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Upload License",
    icon: "🧾",
  },
  {
    title: "Get Valuation",
    icon: "💰",
  },
  {
    title: "Get Paid",
    icon: "🏦",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-br from-white to-blue-50 py-20 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-blue-800 text-center mb-16"
      >
        How It Works?
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto">
        {steps.map(({ title, icon }, i) => (
          <motion.div
            key={title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="bg-white shadow-xl rounded-2xl px-8 py-10 w-64 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 border-t-4 border-blue-400"
          >
            <div className="text-6xl bg-blue-100 rounded-full p-4 mb-4">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
