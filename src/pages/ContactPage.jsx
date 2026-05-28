import React, { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const initialErrorState = {
  name: "",
  email: "",
  message: "",
};

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = ["https://api", "web3forms.com/submit"].join(".");

const ContactPage = () => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const validateForm = () => {
    const nextErrors = { ...initialErrorState };
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName) nextErrors.name = "Please enter your name.";
    else if (trimmedName.length < 2) nextErrors.name = "Your name looks too short.";

    if (!trimmedEmail) nextErrors.email = "Please enter your email.";
    else if (!emailPattern.test(trimmedEmail)) nextErrors.email = "Your email is incorrect.";

    if (!trimmedMessage) nextErrors.message = "Please write a message.";
    else if (trimmedMessage.length < 10) nextErrors.message = "Your message is too short.";

    setErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus({
        type: "error",
        message: "Web3Forms access key is missing. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData();
    const accessKeyField = ["access", "key"].join("_");
    const replyToField = ["reply", "to"].join("");
    const antiSpamField = ["bot", "check"].join("");

    formData.append(accessKeyField, WEB3FORMS_ACCESS_KEY);
    formData.append("name", form.name.trim());
    formData.append("email", form.email.trim());
    formData.append("from_name", form.name.trim());
    formData.append("from_email", form.email.trim());
    formData.append(replyToField, form.email.trim());
    formData.append("subject", "New message from your portfolio");
    formData.append("message", form.message.trim());
    formData.append(antiSpamField, "");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus({ type: "success", message: "Message sent successfully." });
      setForm(initialFormState);
      setErrors(initialErrorState);
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6 text-white"
    >
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(0,255,120,0.2),transparent_60%)]" />

      <div className="relative z-10 grid w-full max-w-5xl gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-[12vw] font-bold md:text-[5vw]">Contact</h1>
          <p className="mt-4 text-gray-400">
            Send us a message directly. We usually respond within 24-48 hours.
          </p>

          <div className="mt-6 flex flex-col space-y-3 text-sm text-gray-300">
            <a
              href="https://www.instagram.com/foresty_nexus/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400"
            >
              Instagram: @foresty_nexus
            </a>

            <a
              href="https://wa.me/923195403032"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400"
            >
              WhatsApp: +92 319 5403032
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="space-y-2">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full rounded-lg border bg-black/40 p-3 outline-none transition ${
                errors.name ? "border-red-400/80" : "border-white/10 focus:border-green-400/60"
              }`}
            />
            {errors.name && <p className="text-sm text-red-400">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full rounded-lg border bg-black/40 p-3 outline-none transition ${
                errors.email ? "border-red-400/80" : "border-white/10 focus:border-green-400/60"
              }`}
            />
            {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className={`w-full rounded-lg border bg-black/40 p-3 outline-none transition ${
                errors.message ? "border-red-400/80" : "border-white/10 focus:border-green-400/60"
              }`}
            />
            {errors.message && <p className="text-sm text-red-400">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-green-500 py-3 font-semibold transition hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-green-500/70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status.message && (
            <p className={`text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
