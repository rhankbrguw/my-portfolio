"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormspreeError {
  message: string;
}

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Thanks for your message!");
        form.reset();
      } else {
        const responseData = await response.json();
        if (Object.hasOwn(responseData, "errors")) {
          setStatus(
            responseData["errors"]
              .map((error: FormspreeError) => error.message)
              .join(", ")
          );
        } else {
          setStatus("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      console.error("Contact Form Submission Error:", error);
      setStatus("Oops! A network error occurred. Please try again.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 sm:text-4xl text-accent">
          Let&apos;s Connect
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          Have a project in mind or want to connect? Fill out the form below or
          send me an email. I&apos;m always excited to discuss new ideas.
        </p>

         <form
          onSubmit={handleSubmit}
          action={process.env.NEXT_PUBLIC_FORMSPREE_URL}
          method="POST"
        >
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-panel w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3EB489] focus:border-[#3EB489] transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-panel w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3EB489] focus:border-[#3EB489] transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="bg-panel w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3EB489] focus:border-[#3EB489] transition-all"
            ></textarea>
            <div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-accent text-background font-bold py-3 px-8 rounded-lg hover:bg-[#3EB489] transition-all disabled:bg-gray-500"
                disabled={status === "Submitting..."}
              >
                Send Message
              </button>
            </div>
            {status && <p className="mt-4 text-center">{status}</p>}
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactSection;
