"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="py-20 px-6 max-w-6xl mx-auto">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-teal-600">
          About SmileCraft Dental Clinic
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We provide advanced dental care with modern technology and a patient-first approach.
        </p>
      </motion.div>

      {/* ABOUT CONTENT */}
      <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Who We Are
          </h2>

          <p className="mt-4 text-gray-600">
            SmileCraft Dental Clinic is dedicated to delivering high-quality dental treatments 
            with a focus on comfort and precision. Our experienced team ensures that every 
            patient receives personalized care in a friendly environment.
          </p>

          <p className="mt-4 text-gray-600">
            We specialize in cosmetic dentistry, implants, orthodontics, and preventive care.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://images.unsplash.com/photo-1588776814546-ec7e2c3d72b0"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* STATS */}
      <section className="grid md:grid-cols-4 gap-6 mt-20 text-center">

        {[
          { label: "Patients Treated", value: "5000+" },
          { label: "Years Experience", value: "10+" },
          { label: "Expert Doctors", value: "5+" },
          { label: "Success Rate", value: "99%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-teal-50 rounded-xl shadow"
          >
            <h3 className="text-2xl font-bold text-teal-600">
              {item.value}
            </h3>
            <p className="text-gray-600 mt-2">
              {item.label}
            </p>
          </motion.div>
        ))}

      </section>

    </main>
  );
}