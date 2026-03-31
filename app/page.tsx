import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArtistsSection from "./components/ArtistsSection";
import { ParallaxSection } from "./components/ParallaxSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />

      <ArtistsSection />

      <ParallaxSection />

      <footer className="p-6 text-center text-gray-500">
        © 2026 Tattoo Studio
      </footer>
    </main>
  );
}