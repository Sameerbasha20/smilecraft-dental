type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const blogData: any = {
  "healthy-teeth": {
    title: "5 Tips for Healthy Teeth",
    content:
      "Brush twice daily, floss regularly, avoid sugary foods, drink water, and visit your dentist every 6 months.",
  },
  "dental-implants": {
    title: "Benefits of Dental Implants",
    content:
      "Dental implants are durable, natural-looking, and improve chewing ability.",
  },
  "dentist-visits": {
    title: "How Often Should You Visit a Dentist?",
    content:
      "It is recommended to visit your dentist every 6 months for regular checkups.",
  },
};

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params; // ✅ FIX HERE

  const blog = blogData[slug];

  if (!blog) {
    return <h1 className="text-center mt-20">Blog not found</h1>;
  }

  return (
    <main className="py-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-600">
        {blog.title}
      </h1>

      <p className="mt-6 text-gray-700 leading-7">
        {blog.content}
      </p>
    </main>
  );
}