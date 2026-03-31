export default function Navbar() {
  return (
    <nav className="p-4 border-b border-gray-800 flex justify-between">
      <h1 className="text-xl font-bold">Tattoo Studio</h1>
      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/artists/artist-one">Artists</a>
      </div>
    </nav>
  );
}