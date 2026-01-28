import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <div className="font-semibold">My Portfolio</div>
        
        <div className="flex items-center gap-6 px-4">
          <Link href="/" className="hover:text-pink-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-pink-400 transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-pink-400 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-pink-400 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}