import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* LOGO */}
      <h1 className="text-xl font-bold text-teal-600">
        SmileCraft
      </h1>

      {/* NAV LINKS */}
      <div className="space-x-6 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link
          href="/appointment"
          className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Book
        </Link>
      </div>
    </nav>
  );
}