import Link from "next/link";

const blogs = [
  {
    title: "5 Tips for Healthy Teeth",
    slug: "healthy-teeth",
    desc: "Learn how to maintain oral hygiene easily.",
  },
  {
    title: "Benefits of Dental Implants",
    slug: "dental-implants",
    desc: "Why implants are the best solution for missing teeth.",
  },
  {
    title: "How Often Should You Visit a Dentist?",
    slug: "dentist-visits",
    desc: "Expert advice on dental checkups.",
  },
];

export default function Blog() {
  return (
    <main className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-teal-600">
        Our Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="p-6 shadow-lg rounded-xl hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-teal-600">
              {blog.title}
            </h2>
            <p className="mt-3 text-gray-600">
              {blog.desc}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}