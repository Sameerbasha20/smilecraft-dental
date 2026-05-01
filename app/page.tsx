export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-teal-50 py-20 px-6 text-center">
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
      </section>

    {/* SERVICES SECTION */}
{/* SERVICES SECTION */}
<section className="py-20 px-6 bg-white">
  <h2 className="text-3xl font-bold text-center text-gray-800">
    Our Services
  </h2>

  <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
    
    {/* Card 1 */}
    <div className="p-6 shadow-lg rounded-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-teal-50 cursor-pointer">
      <h3 className="text-xl font-semibold text-teal-600">
        Root Canal Treatment
      </h3>
      <p className="mt-3 text-gray-600">
        Pain-free root canal procedures with advanced technology.
      </p>
    </div>

    {/* Card 2 */}
    <div className="p-6 shadow-lg rounded-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-teal-50 cursor-pointer">
      <h3 className="text-xl font-semibold text-teal-600">
        Dental Implants
      </h3>
      <p className="mt-3 text-gray-600">
        Permanent solutions for missing teeth with natural look.
      </p>
    </div>

    {/* Card 3 */}
    <div className="p-6 shadow-lg rounded-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-teal-50 cursor-pointer">
      <h3 className="text-xl font-semibold text-teal-600">
        Teeth Whitening
      </h3>
      <p className="mt-3 text-gray-600">
        Get a brighter, confident smile with safe whitening.
      </p>
    </div>

  </div>
</section>

{/* WHY CHOOSE US */}
<section className="py-20 px-6 bg-teal-50">
  <h2 className="text-3xl font-bold text-center text-gray-800">
    Why Choose SmileCraft?
  </h2>

  <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto text-center">

    <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-teal-600">
        Expert Doctors
      </h3>
      <p className="mt-3 text-gray-600">
        Highly qualified dental specialists with years of experience.
      </p>
    </div>

    <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-teal-600">
        Modern Technology
      </h3>
      <p className="mt-3 text-gray-600">
        Advanced equipment for accurate diagnosis and treatment.
      </p>
    </div>

    <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-teal-600">
        Pain-Free Treatment
      </h3>
      <p className="mt-3 text-gray-600">
        Comfortable procedures with minimal discomfort.
      </p>
    </div>

    <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-teal-600">
        Affordable Care
      </h3>
      <p className="mt-3 text-gray-600">
        Quality dental care at reasonable pricing.
      </p>
    </div>

  </div>
</section>

{/* DOCTORS SECTION */}
<section className="py-20 px-6 bg-white">
  <h2 className="text-3xl font-bold text-center text-gray-800">
    Meet Our Specialists
  </h2>

  <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">

    {/* Doctor 1 */}
    <div className="bg-white shadow-lg rounded-xl p-6 text-center transition hover:shadow-2xl hover:-translate-y-2">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Doctor"
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h3 className="mt-4 text-xl font-semibold text-teal-600">
        Dr. Arjun Raman
      </h3>
      <p className="text-gray-600 mt-2">
        MDS, Endodontics
      </p>
      <p className="text-sm text-gray-500 mt-2">
        12+ years experience
      </p>
    </div>

    {/* Doctor 2 */}
    <div className="bg-white shadow-lg rounded-xl p-6 text-center transition hover:shadow-2xl hover:-translate-y-2">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Doctor"
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h3 className="mt-4 text-xl font-semibold text-teal-600">
        Dr. Priya Narayanan
      </h3>
      <p className="text-gray-600 mt-2">
        Cosmetic Dentistry
      </p>
      <p className="text-sm text-gray-500 mt-2">
        8+ years experience
      </p>
    </div>

    {/* Doctor 3 */}
    <div className="bg-white shadow-lg rounded-xl p-6 text-center transition hover:shadow-2xl hover:-translate-y-2">
      <img
        src="https://randomuser.me/api/portraits/men/65.jpg"
        alt="Doctor"
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h3 className="mt-4 text-xl font-semibold text-teal-600">
        Dr. Karthik Subramanian
      </h3>
      <p className="text-gray-600 mt-2">
        Orthodontics & Aligners
      </p>
      <p className="text-sm text-gray-500 mt-2">
        10+ years experience
      </p>
    </div>

  </div>
</section>
{/* BEFORE / AFTER SECTION */}
<section className="py-20 px-6 bg-teal-50">
  <h2 className="text-3xl font-bold text-center text-gray-800">
    Smile Transformations
  </h2>

  <p className="text-center text-gray-600 mt-4">
    See real results from our treatments
  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">

    {/* Card 1 */}
    <div className="overflow-hidden rounded-xl shadow-lg group">
      <img
        src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
        alt="Before After"
        className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
      />
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-600">
          Teeth Whitening Transformation
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="overflow-hidden rounded-xl shadow-lg group">
      <img
        src="https://images.unsplash.com/photo-1588776814546-ec7e2c3d72b0"
        alt="Before After"
        className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
      />
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-600">
          Dental Implants Case
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="overflow-hidden rounded-xl shadow-lg group">
      <img
        src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787"
        alt="Before After"
        className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
      />
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-600">
          Smile Makeover
        </p>
      </div>
    </div>

  </div>
</section>

{/* TESTIMONIALS */}
<section className="py-20 px-6 bg-white">
  <h2 className="text-3xl font-bold text-center text-gray-800">
    What Our Patients Say
  </h2>

  <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">

    {/* Testimonial 1 */}
    <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <p className="text-gray-600 italic">
        “Very professional clinic and painless root canal treatment.”
      </p>
      <h3 className="mt-4 font-semibold text-teal-600">
        — Rahul Sharma
      </h3>
    </div>

    {/* Testimonial 2 */}
    <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <p className="text-gray-600 italic">
        “Best dental implant consultation in Chennai.”
      </p>
      <h3 className="mt-4 font-semibold text-teal-600">
        — Priya Menon
      </h3>
    </div>

    {/* Testimonial 3 */}
    <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <p className="text-gray-600 italic">
        “Friendly doctors, clean clinic, and easy appointment booking.”
      </p>
      <h3 className="mt-4 font-semibold text-teal-600">
        — Arjun Kumar
      </h3>
    </div>

  </div>
</section>

{/* FAQ SECTION */}
<section className="py-20 px-6 bg-teal-50">
  <h2 className="text-3xl font-bold text-center text-gray-800">
    Frequently Asked Questions
  </h2>

  <div className="max-w-3xl mx-auto mt-10 space-y-4">

    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-semibold text-teal-600">
        Is root canal treatment painful?
      </h3>
      <p className="text-gray-600 mt-2">
        No, modern techniques ensure a pain-free experience.
      </p>
    </div>

    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-semibold text-teal-600">
        How long do dental implants last?
      </h3>
      <p className="text-gray-600 mt-2">
        With proper care, implants can last a lifetime.
      </p>
    </div>

    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-semibold text-teal-600">
        Do you offer emergency dental care?
      </h3>
      <p className="text-gray-600 mt-2">
        Yes, we provide quick emergency support for urgent cases.
      </p>
    </div>

  </div>
</section>
    </main>
  );
}