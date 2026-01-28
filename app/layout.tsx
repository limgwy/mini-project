import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<body className="min-h-screen bg-gradient-to-br from-[#fbcfe8] via-[#f8fafc] to-[#94a3b8] text-foreground">
        <Navbar />
        <main className="min-h-screen bg-transparent">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
