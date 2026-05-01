import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "SmileCraft Dental Clinic",
  description: "Advanced Dental Care for Every Smile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}