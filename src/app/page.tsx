import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Play, Compass } from 'lucide-react';

export default function Home() {
  const featuredStories = [
    {
      slug: "story-lingaraj",
      title: "Lingaraj Temple",
      location: "Bhubaneswar",
      distance: "2.4 km away",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      category: "Temple",
    },
    {
      slug: "story-konark",
      title: "Konark Sun Temple",
      location: "Konark",
      distance: "65 km away",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=85",
      category: "UNESCO",
    },
    {
      slug: "story-mukteshwar",
      title: "Mukteshwar Temple",
      location: "Bhubaneswar",
      distance: "1.8 km away",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
      category: "Hidden Gem",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="font-serif text-2xl text-white tracking-tight">Bharava</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-white">
            <Link href="/explore" className="hover:text-amber-400 transition">Explore</Link>
            <Link href="/map" className="hover:text-amber-400 transition">Map</Link>
            <Link href="/trails" className="hover:text-amber-400 transition">Trails</Link>
            <Link href="/videos" className="hover:text-amber-400 transition">Stories</Link>
          </div>

          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white border-none">
            <Link href="/explore">Start Journey</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section - Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&q=90"
          alt="Odisha Heritage"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="hero-gradient absolute inset-0" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-white/90 tracking-widest">ODISHA • INDIA</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-none tracking-tighter mb-6">
            HISTORY EXISTS<br />
            AROUND YOU
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-light">
            Walk through Odisha's living heritage.<br />
            Temples, forts, legends, and forgotten stories — revealed where they happened.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-7 rounded-full border-none">
              <Link href="/explore">
                <Compass className="mr-3" /> Explore Nearby
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white/50 bg-transparent text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full">
              <Link href="/videos">
                Watch Micro Stories
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 text-sm flex flex-col items-center gap-2 font-medium">
          Scroll to discover ↓
        </div>
      </section>

      {/* Quick Nearby Section */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif text-white">History Near You</h2>
              <p className="text-white/60 mt-2 text-lg">Real-time discovery in Odisha</p>
            </div>
            <Button variant="link" asChild className="text-amber-400 text-lg p-0 hover:no-underline">
              <Link href="/map">Open Full Map →</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <Link 
                key={story.slug}
                href={`/story/${story.slug}`}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900 border border-white/5"
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 text-amber-400 text-sm mb-2 font-medium">
                    <MapPin className="w-4 h-4" />
                    {story.distance}
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-2 leading-tight">{story.title}</h3>
                  <p className="text-white/70">{story.location}</p>
                </div>

                <div className="absolute top-6 right-6 bg-black/70 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-white border border-white/10">
                  {story.category}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black py-16 text-white/60">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>© 2026 Bharava • Made with love for Odisha's heritage</p>
        </div>
      </footer>
    </div>
  );
}
