"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-[0.3em] gold-text">
  Northink CDO
</h1>

        {/* Links */}
        <div className="space-x-8 text-sm uppercase tracking-wider">
          <a href="/" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="/artists" className="hover:text-gray-400 transition">
            Artists
          </a>
        </div>
      </div>
    </nav>
  );
}