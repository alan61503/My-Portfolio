"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success (you can later connect API/Email)
    setSubmitted(true);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
      <p className="text-center text-gray-600 mb-12">
        Have a project in mind or just want to say hello? Drop me a message below 👇
      </p>

      {submitted ? (
        <div className="p-6 bg-green-50 border border-green-200 rounded-2xl text-center">
          <h3 className="text-lg font-semibold text-green-700">Message sent!</h3>
          <p className="text-green-600 mt-2">
            Thanks for reaching out. I’ll get back to you soon 🚀
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white shadow-md rounded-2xl p-8"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black/80 focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black/80 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black/80 focus:outline-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white rounded-xl py-3 font-medium hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      )}

      <div className="mt-12 text-center">
        <p className="text-gray-600">Or reach me directly at:</p>
        <a
          href="mailto:yourname@email.com"
          className="text-black font-semibold hover:underline"
        >
          yourname@email.com
        </a>
      </div>
    </section>
  );
}
