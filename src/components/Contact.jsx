import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [license, setLicense] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, company, license });
  };

  return (
    <motion.form
      id="contact"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl mx-auto my-12 p-8 rounded-3xl shadow-xl bg-white backdrop-blur-md border border-blue-100"
    >
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Get in Touch
      </h2>

      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-1 font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="mb-1 font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="company" className="mb-1 font-medium text-gray-700">
          Company
        </label>
        <input
          type="text"
          id="company"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      <div className="flex flex-col mb-6">
        <label htmlFor="license" className="mb-1 font-medium text-gray-700">
          License Type
        </label>
        <select
          id="license"
          value={license}
          onChange={(e) => setLicense(e.target.value)}
          required
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        >
          <option value="">Select License Type</option>
          <option value="office">Microsoft Office</option>
          <option value="adobe">Adobe Suite</option>
          <option value="antivirus">Antivirus</option>
          <option value="oracle">Oracle</option>
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="message" className="mb-1 font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-md"
          onClick={() => {
            alert("Message sent!");
            setCompany("");
            setEmail("");
            setLicense("");
            setName("");
            setMessage("");
          }}
        >
          Submit
        </button>
      </motion.div>
    </motion.form>
  );
};

export default Contact;
