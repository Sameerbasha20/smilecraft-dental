import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "SmileCraft Dental Clinic",
    template: "%s | SmileCraft Dental",
  },
  description:
    "SmileCraft Dental Clinic offers advanced dental care including implants, root canal, teeth whitening and more.",
  keywords: [
    "Dental Clinic",
    "Dentist",
    "Dental Implants",
    "Root Canal",
    "Teeth Whitening",
  ],
  openGraph: {
    title: "SmileCraft Dental Clinic",
    description:
      "Advanced dental care with expert doctors and modern technology.",
    url: "https://your-vercel-url.vercel.app",
    siteName: "SmileCraft Dental",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}