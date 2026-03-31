"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArtistCard from "./components/ArtistCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />

      {/* Artists Section */}
      <section className="p-10 bg-black">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Meet Our Artists
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ArtistCard
            name="Artist One"
            style="Realism"
            image="/artist1.jpg"
          />
          <ArtistCard
            name="Artist Two"
            style="Blackwork"
            image="/artist2.jpg"
          />
          <ArtistCard
            name="Artist Three"
            style="Minimalist"
            image="/artist3.jpg"
          />
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="p-10 bg-gray-950">
        <h2 className="text-3xl font-bold mb-6">Latest Work</h2>

        <div className="grid md:grid-cols-4 gap-4">
          <Image
            src="/tattoo1.jpg"
            alt="tattoo"
            width={400}
            height={200}
            className="h-40 w-full object-cover"
          />
          <Image
            src="/tattoo2.jpg"
            alt="tattoo"
            width={400}
            height={200}
            className="h-40 w-full object-cover"
          />
          <Image
            src="/tattoo3.jpg"
            alt="tattoo"
            width={400}
            height={200}
            className="h-40 w-full object-cover"
          />
          <Image
            src="/tattoo4.jpg"
            alt="tattoo"
            width={400}
            height={200}
            className="h-40 w-full object-cover"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-16 text-center">
        <h2 className="text-4xl font-bold">
          Ready for Your Next Tattoo?
        </h2>
        <p className="text-gray-400 mt-4">
          Book an appointment with our professional artists today.
        </p>

        <a
          href="/contact"
          className="inline-block mt-6 bg-white text-black px-8 py-3 font-semibold"
        >
          Book Now
        </a>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-500">
        © 2026 Tattoo Studio. All rights reserved.
      </footer>
    </main>
  );
}