"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    service: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
    emergency: false,
  });

  // ✅ NEXT STEP WITH VALIDATION
  const next = () => {
    if (step === 1) {
      if (!form.name || !form.phone || !form.email) {
        alert("Please fill all required fields");
        return;
      }
    }

    if (step === 2) {
      if (!form.service || !form.doctor || !form.date) {
        alert("Please complete all selections");
        return;
      }
    }

    setStep((prev) => prev + 1);
  };

  const back = () => setStep((prev) => prev - 1);

  // ✅ SUBMIT
  const handleSubmit = async () => {
    setLoading(true);

    const { error } = await supabase.from("appointments").insert([form]);

    setLoading(false);

    if (error) {
      alert("Error saving appointment");
      console.error(error);
    } else {
      setStep(5); // success screen
    }
  };

  return (
    <main className="py-20 px-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-teal-600">
        Book Appointment
      </h1>

      {step <= 4 && (
        <p className="text-center mt-2 text-gray-500">
          Step {step} of 4
        </p>
      )}

      <div className="mt-8 space-y-4">

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <input
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Phone"
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              placeholder="Age"
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, age: e.target.value })
              }
            />

            <button
              disabled={!form.name || !form.phone || !form.email}
              onClick={next}
              className="w-full bg-teal-600 text-white py-3 rounded-lg disabled:bg-gray-400"
            >
              Next
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <select
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, service: e.target.value })
              }
            >
              <option value="">Select Service</option>
              <option>Root Canal</option>
              <option>Dental Implants</option>
              <option>Teeth Whitening</option>
            </select>

            <select
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, doctor: e.target.value })
              }
            >
              <option value="">Select Doctor</option>
              <option>Dr. Arjun</option>
              <option>Dr. Priya</option>
              <option>Dr. Karthik</option>
            </select>

            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <input
              type="time"
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, time: e.target.value })
              }
            />

            <div className="flex gap-4">
              <button
                onClick={back}
                className="w-1/2 bg-gray-400 text-white py-3 rounded-lg"
              >
                Back
              </button>

              <button
                disabled={!form.service || !form.doctor || !form.date}
                onClick={next}
                className="w-1/2 bg-teal-600 text-white py-3 rounded-lg disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <textarea
              placeholder="Describe your problem"
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, notes: e.target.value })
              }
            />

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={(e) =>
                  setForm({ ...form, emergency: e.target.checked })
                }
              />
              Emergency Case
            </label>

            <div className="flex gap-4">
              <button
                onClick={back}
                className="w-1/2 bg-gray-400 text-white py-3 rounded-lg"
              >
                Back
              </button>

              <button
                onClick={next}
                className="w-1/2 bg-teal-600 text-white py-3 rounded-lg"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <div className="p-4 border rounded-lg">
              <p><b>Name:</b> {form.name}</p>
              <p><b>Phone:</b> {form.phone}</p>
              <p><b>Email:</b> {form.email}</p>
              <p><b>Service:</b> {form.service}</p>
              <p><b>Doctor:</b> {form.doctor}</p>
              <p><b>Date:</b> {form.date}</p>
              <p><b>Time:</b> {form.time}</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={back}
                className="w-1/2 bg-gray-400 text-white py-3 rounded-lg"
              >
                Back
              </button>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-1/2 bg-green-600 text-white py-3 rounded-lg disabled:bg-gray-400"
              >
                {loading ? "Submitting..." : "Confirm"}
              </button>
            </div>
          </>
        )}

        {/* STEP 5 SUCCESS */}
        {step === 5 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600">
              🎉 Appointment Confirmed!
            </h2>
            <p className="mt-4 text-gray-600">
              We will contact you shortly.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}