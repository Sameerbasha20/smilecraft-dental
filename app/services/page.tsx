import Link from "next/link";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-10 text-teal-600">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`}>
            <div className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <div className="text-3xl mb-2">{service.icon}</div>
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}