import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_3etzq23";
    const templateID = "template_y6yhtogz";
    const publicKey = "qvzaH63rzIDq9DCuR";

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setLoading(false);

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(0,255,120,0.2),transparent_60%)]" />

      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <h1 className="text-[12vw] md:text-[5vw] font-bold">
            Contact
          </h1>

          <p className="text-gray-400 mt-4">
            Send us a message directly. We usually respond within 24–48 hours.
          </p>

          <div className="mt-6 space-y-3 text-sm text-gray-300 flex flex-col">
            <a
              href="https://www.instagram.com/foresty_nexus/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400"
            >
              Instagram: @foresty_nexus
            </a>

            <a
              href="https://wa.me/923331456448"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400"
            >
              WhatsApp: +92 333 1456448
            </a>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-4"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-green-500 hover:bg-green-600 transition rounded-lg font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-sm">
              Message sent successfully ✔
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;