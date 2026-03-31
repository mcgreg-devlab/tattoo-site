import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArtistCard from "./components/ArtistCard";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />

      <section className="p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Meet Our Artists
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ArtistCard
            name="Artist One"
            style="Realism"
            image="/artist1.jpg"
            slug="artist-one"
          />
          <ArtistCard
            name="Artist Two"
            style="Blackwork"
            image="/artist2.jpg"
            slug="artist-two"
          />
          <ArtistCard
            name="Artist Three"
            style="Minimalist"
            image="/artist3.jpg"
            slug="artist-three"
          />
        </div>
      </section>
    </main>
  );
}