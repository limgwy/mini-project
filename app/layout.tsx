import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen 
bg-[length:200%_200%] 
bg-gradient-to-br 
from-[#ffb7e0] via-[#fef3c7] to-[#60a5fa] 
animate-gradient 
text-foreground"
      >
        <Navbar />
        <main className="min-h-screen bg-transparent">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
