export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-6 flex justify-between items-center bg-black/70 backdrop-blur border-b border-gray-900">
      
      <h1 className="text-sm tracking-[0.3em] font-semibold">
        Northink CDO
      </h1>

      <div className="space-x-8 text-sm tracking-wider">
        <a href="/" className="hover:text-gray-400">HOME</a>
        <a href="/artists/artist-one" className="hover:text-gray-400">ARTISTS</a>
        <a href="/contact" className="hover:text-gray-400">BOOK</a>
      </div>

    </nav>
  );
}