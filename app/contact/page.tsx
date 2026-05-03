"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <main className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-teal-600">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10 mt-12">

        {/* LEFT - CONTACT FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
            rows={5}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition">
            Send Message
          </button>
        </form>

        {/* RIGHT - GOOGLE MAP */}
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps?q=Velachery,Chennai&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </main>
  );
}