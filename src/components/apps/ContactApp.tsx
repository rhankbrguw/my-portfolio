"use client";

import React, { useState } from "react";
import { submitContactMessage } from "@/services/contactService";
import { soundService } from "@/services/soundService";

export const ContactApp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusText, setStatusText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundService.play("click");
    setStatus("sending");
    setStatusText("Transmitting message packet...");

    const result = await submitContactMessage({ name, email, message });

    if (result.success) {
      soundService.play("chord");
      setStatus("success");
      setStatusText(result.message);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      soundService.play("error");
      setStatus("error");
      setStatusText(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 font-sans text-xs text-[#111]">
      <div className="flex flex-col gap-1 border-b border-[#808080] pb-2">
        <div className="flex items-center gap-2">
          <span className="w-16 font-bold text-[#000080]">To:</span>
          <span className="font-mono text-[11px] sm:text-xs text-[#333]">raihanakbarg28@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="contact-name-input" className="w-16 font-bold">Your Name:</label>
          <input
            id="contact-name-input"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 text-xs px-1.5 py-0.5"
            placeholder="e.g. John Doe"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="contact-email-input" className="w-16 font-bold">Your Email:</label>
          <input
            id="contact-email-input"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 text-xs px-1.5 py-0.5"
            placeholder="e.g. john@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <label htmlFor="contact-body-input" className="font-bold">Message Content:</label>
        <textarea
          id="contact-body-input"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none p-1.5 font-mono text-xs text-[#111]"
          placeholder="Write your collaboration idea or message here..."
        />
      </div>

      {statusText && (
        <div
          role="status"
          className={`border p-1.5 text-[11px] font-mono ${
            status === "success"
              ? "bg-[#e6ffed] border-[#5bd3a1] text-[#006622]"
              : status === "error"
              ? "bg-[#ffeef0] border-[#ff8d8d] text-[#cc0000]"
              : "bg-[#f0f4f8] text-[#333]"
          }`}
        >
          {statusText}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 justify-between items-center pt-2 border-t border-[#808080]">
        <span className="font-mono text-[9px] sm:text-[10px] text-[#666]">SSL Encrypted</span>
        <button
          type="submit"
          disabled={status === "sending"}
          className="button font-bold text-xs ml-auto"
        >
          {status === "sending" ? "[...] Sending..." : "[>] Send Packet"}
        </button>
      </div>
    </form>
  );
};
