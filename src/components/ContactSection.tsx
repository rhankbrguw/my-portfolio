"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormspreeError {
  message: string;
}

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

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
        setStatus("success");
        setMessage("Thank you for your message! I'll get back to you soon.");
        form.reset();
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      } else {
        const responseData = await response.json();
        setStatus("error");
        if (Object.hasOwn(responseData, "errors")) {
          setMessage(
            responseData["errors"]
              .map((error: FormspreeError) => error.message)
              .join(", ")
          );
        } else {
          setMessage("Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      console.error("Contact Form Submission Error:", error);
      setStatus("error");
      setMessage(
        "Network error occurred. Please check your connection and try again."
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  } as const;

  const buttonVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
    submitting: {
      scale: 1,
      transition: { duration: 0.2 },
    },
  } as const;

  const statusVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  } as const;

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h2
          className="text-3xl font-bold mb-4 sm:text-4xl"
          variants={itemVariants}
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 mb-12"
          variants={itemVariants}
        >
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you. Let&apos;s discuss how we can bring your ideas to life.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          action={process.env.NEXT_PUBLIC_FORMSPREE_URL}
          method="POST"
          variants={itemVariants}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-4 bg-[#1A1A1A] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#3EB489] focus:ring-2 focus:ring-[#3EB489]/20 transition-all duration-300 placeholder-gray-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-4 bg-[#1A1A1A] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#3EB489] focus:ring-2 focus:ring-[#3EB489]/20 transition-all duration-300 placeholder-gray-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              required
              className="w-full px-4 py-4 bg-[#1A1A1A] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#3EB489] focus:ring-2 focus:ring-[#3EB489]/20 transition-all duration-300 placeholder-gray-500 resize-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              type="submit"
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              animate={status === "submitting" ? "submitting" : "idle"}
              className="w-full sm:w-auto bg-[#3EB489] text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:bg-[#35a375] hover:shadow-lg hover:shadow-[#3EB489]/25"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.div>

          {message && (
            <motion.div
              variants={statusVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`mt-6 p-4 rounded-lg flex items-center gap-3 ${
                status === "success"
                  ? "bg-green-900/20 border border-green-700/30 text-green-400"
                  : "bg-red-900/20 border border-red-700/30 text-red-400"
              }`}
            >
              {status === "success" ? (
                <CheckCircle size={20} className="flex-shrink-0" />
              ) : (
                <AlertCircle size={20} className="flex-shrink-0" />
              )}
              <p className="text-sm font-medium">{message}</p>
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
