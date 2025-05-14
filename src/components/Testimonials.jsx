import React from "react";

const reviews = [
  {
    name: "Piyush Vishwakarma",
    role: "CTO",
    company: "VishwaGaming",
    feedback: "Fast and trustworthy. Highly recommended!",
  },
  {
    name: "Arya Gautam",
    role: "HR",
    company: "Tech Nova",
    feedback: "SoftSell made the resale process seamless.",
  },
  {
    name: "Connie Tucker",
    role: "CEO",
    company: "Shelly Enterprises",
    feedback: "Best place to resell.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-white to-gray-50 py-16 px-6 md:px-12 text-center"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map(({ name, role, company, feedback }) => (
          <div
            key={name}
            className="bg-white shadow-md hover:shadow-xl transition duration-300 p-6 rounded-2xl border border-gray-200"
          >
            <p className="italic text-gray-700 text-lg mb-4">“{feedback}”</p>
            <p className="font-semibold text-blue-600">{name}</p>
            <p className="text-sm text-gray-500">
              {role}, {company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
