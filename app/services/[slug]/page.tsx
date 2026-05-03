import { services } from "@/lib/services";
import Link from "next/link";

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ important

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Service not found
      </div>
    );
  }

  return (
    <section className="min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-teal-600 mb-4">
          {service.title}
        </h1>

        <p className="text-gray-600 mb-6">{service.desc}</p>

        <Link href="/appointment">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
            Book Appointment
          </button>
        </Link>
      </div>
    </section>
  );
}