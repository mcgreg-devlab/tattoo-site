export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-black text-white border-b border-gray-800">
      <h1 className="text-2xl font-extrabold tracking-widest">
        INK STUDIO
      </h1>

      <div className="space-x-8 text-sm uppercase tracking-wide">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/artists" className="hover:text-gray-400">Artists</a>
        <a href="/gallery" className="hover:text-gray-400">Gallery</a>
        <a href="/contact" className="hover:text-gray-400">Book</a>
      </div>
    </nav>
  );
}