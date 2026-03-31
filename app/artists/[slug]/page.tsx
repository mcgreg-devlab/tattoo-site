const artists = {
  "artist-one": {
    name: "Artist One",
    style: "Realism",
    bio: "Specializes in highly detailed black and grey realism tattoos.",
    images: ["/artist1.jpg"],
  },
  "artist-two": {
    name: "Artist Two",
    style: "Blackwork",
    bio: "Bold blackwork designs with strong contrast and meaning.",
    images: ["/artist2.jpg"],
  },
  "artist-three": {
    name: "Artist Three",
    style: "Minimalist",
    bio: "Clean and simple fine-line tattoos with precision.",
    images: ["/artist3.jpg"],
  },
};

export default function Page({ params }: { params: { slug: string } }) {
  const artist = artists[params.slug as keyof typeof artists];

  if (!artist) {
    return <div className="p-10 text-white">Artist not found</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">{artist.name}</h1>
      <p className="text-gray-400 mb-6">{artist.style}</p>
      <p className="mb-8">{artist.bio}</p>

      <div className="grid md:grid-cols-3 gap-4">
        {artist.images.map((img, i) => (
          <img key={i} src={img} className="w-full h-60 object-cover" />
        ))}
      </div>
    </div>
  );
}