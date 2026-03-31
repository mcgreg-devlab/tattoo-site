import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArtistsSection from "./components/ArtistsSection";
import { ParallaxSection } from "./components/ParallaxSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      {/* About Section */}
<section className="py-24 px-6 max-w-5xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-6">
    Crafting Timeless Ink
  </h2>

  <p className="text-gray-400 leading-relaxed text-lg">
    We are a collective of world-class tattoo artists dedicated to precision,
    artistry, and storytelling. Every piece we create is designed to last a
    lifetime — bold, intentional, and uniquely yours.
  </p>
</section>

      <ArtistsSection />
      {/* Services Section */}
<section className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-semibold text-center mb-16">
    Our Expertise
  </h2>

  <div className="grid md:grid-cols-3 gap-10 text-center">
    
    <div>
      <h3 className="text-xl font-bold mb-3">Custom Tattoos</h3>
      <p className="text-gray-400">
        Fully personalized designs crafted to match your vision.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-3">Black & Grey</h3>
      <p className="text-gray-400">
        Timeless shading and realism with deep contrast.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-3">Fine Line</h3>
      <p className="text-gray-400">
        Clean, minimal, and precise modern tattoo styles.
      </p>
    </div>

  </div>
</section>

      <ParallaxSection />
      {/* CTA Section */}
<section className="py-32 text-center">
  <h2 className="text-4xl font-bold mb-6">
    Book Your Session
  </h2>

  <p className="text-gray-400 mb-8">
    Work with elite artists and bring your vision to life.
  </p>

  <a
    href="/contact"
    className="inline-block border border-white px-10 py-4 tracking-wide hover:bg-white hover:text-black transition-all duration-300"
  >
    Start Your Journey
  </a>
</section>

      <footer className="pt-10 pb-10 text-center text-gray-500 text-sm border-t border-gray-800">
  © 2026 Northink CDO | Powered By: mgseosolution.com 
</footer>
      
    </main>
  );
}