import { motion } from "framer-motion";
import React from "react";

const benefits = [
  { title: "Fast Payments", desc: "Get paid within 24 hours." },
  { title: "Secure Process", desc: "End-to-end encryption." },
  { title: "Top Valuations", desc: "Fair market pricing." },
  { title: "Trusted by 500+ Companies", desc: "Reliable and efficient." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
    },
  }),
};

const WhyToChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="bg-gradient-to-b from-blue-50 to-white py-20 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-extrabold text-blue-700 mb-12"
      >
        Why Choose Us
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {benefits.map(({ title, desc }, i) => (
          <motion.div
            key={title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="rounded-3xl p-6 bg-white shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 relative overflow-hidden"
          > 
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-bl-full"></div>

            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {title}
            </h3>
            <p className="text-gray-600">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyToChooseUs;
