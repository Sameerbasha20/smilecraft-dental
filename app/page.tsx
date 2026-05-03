"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-teal-50 py-20 px-6 text-center"
      >
        <h1 className="text-5xl font-bold text-teal-700">
          Advanced Dental Care for Every Smile
        </h1>

        <p className="mt-6 text-gray-600 max-w-xl mx-auto">
          Experience world-class dental treatments with expert doctors,
          modern technology, and a patient-first approach.
        </p>

        <a href="/appointment">
          <button className="mt-8 px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
            Book Appointment
          </button>
        </a>
      </motion.section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">

          {[ 
            "Root Canal Treatment",
            "Dental Implants",
            "Teeth Whitening"
          ].map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 shadow-lg rounded-xl cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-teal-600">
                {title}
              </h3>
              <p className="mt-3 text-gray-600">
                Premium dental treatment with advanced technology.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-teal-50">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Why Choose SmileCraft?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto text-center">

          {[
            "Expert Doctors",
            "Modern Technology",
            "Pain-Free Treatment",
            "Affordable Care"
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 shadow-md rounded-xl"
            >
              <h3 className="text-xl font-semibold text-teal-600">
                {item}
              </h3>
              <p className="mt-3 text-gray-600">
                Trusted dental care with best practices.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* DOCTORS */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Meet Our Specialists
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">

          {[
            {
              name: "Dr. Arjun Raman",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Dr. Priya Narayanan",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Dr. Karthik Subramanian",
              img: "https://randomuser.me/api/portraits/men/65.jpg",
            },
          ].map((doc, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <img
                src={doc.img}
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h3 className="mt-4 text-xl font-semibold text-teal-600">
                {doc.name}
              </h3>
              <p className="text-gray-500 mt-2">
                Dental Specialist
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          What Our Patients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">

          {[
            "Very professional clinic and painless treatment.",
            "Best dental implant consultation.",
            "Friendly doctors and easy booking."
          ].map((text, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 shadow-md rounded-xl"
            >
              <p className="text-gray-600 italic">
                “{text}”
              </p>
            </motion.div>
          ))}

        </div>
      </section>

    </main>
  );
}