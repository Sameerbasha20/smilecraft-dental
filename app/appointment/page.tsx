"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors: any = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setSuccess(false);

    const { error } = await supabase.from("appointments").insert([
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Error saving data");
    } else {
      setSuccess(true);
      setForm({ name: "", phone: "", email: "" });
    }
  };

  return (
    <main className="py-20 px-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-teal-600">
        Book Appointment
      </h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">

        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Button */}
        <button
          disabled={loading}
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {/* Success Message */}
        {success && (
          <p className="text-green-600 text-center mt-4">
            Appointment booked successfully!
          </p>
        )}
      </form>
    </main>
  );
}