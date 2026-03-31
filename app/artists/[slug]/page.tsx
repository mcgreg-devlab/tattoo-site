const artists = {
  "artist-one": {
    name: "Artist One",
    style: "Realism",
    bio: "Specializes in highly detailed black and grey realism tattoos.",
    images: ["/tattoo1.jpg", "/tattoo2.jpg", "/tattoo3.jpg"],
  },
  "artist-two": {
    name: "Artist Two",
    style: "Blackwork",
    bio: "Bold blackwork designs with strong contrast and meaning.",
    images: ["/tattoo2.jpg", "/tattoo3.jpg", "/tattoo4.jpg"],
  },
  "artist-three": {
    name: "Artist Three",
    style: "Minimalist",
    bio: "Clean and simple fine-line tattoos with precision.",
    images: ["/tattoo1.jpg", "/tattoo3.jpg", "/tattoo4.jpg"],
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = artists[slug as keyof typeof artists];

  if (!artist) {
    return <div className="p-10 text-white">Artist not found</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <section className="p-10 border-b border-gray-800">
        <h1 className="text-5xl font-bold">{artist.name}</h1>
        <p className="mt-2 text-gray-400">{artist.style}</p>
      </section>

      {/* BIO */}
      <section className="p-10 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-300">{artist.bio}</p>
      </section>

      {/* GALLERY */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {artist.images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-72 object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold">
          Book with {artist.name}
        </h2>

        <a
          href="/contact"
          className="inline-block mt-6 bg-white text-black px-8 py-3 font-semibold"
        >
          Book Now
        </a>
      </section>

    </div>
  );
}