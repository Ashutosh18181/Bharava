'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Compass, MapPin, Headphones, EyeOff, Search } from 'lucide-react';
import './HeroSection.css';

const DISCOVERY_PILLS = [
  { icon: Compass,     label: 'Explore Nearby',       href: '/explore' },
  { icon: Search,      label: 'Search History',        href: '/explore' },
  { icon: Headphones,  label: 'Listen to Stories',     href: '/stories' },
  { icon: EyeOff,      label: 'Hidden Histories',      href: '/hidden' },
];

export default function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/explore?q=${encodeURIComponent(query)}`);
  };

  return (
    <section className="hero-section" aria-label="Hero">

      {/* Background */}
      <div className="hero-bg">
        <div className="noise-overlay" />
        <img
          src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=85"
          alt="Konark Sun Temple — Odisha"
          className="hero-image"
        />
        <div className="hero-vignette" />
      </div>

      {/* Center content */}
      <div className="hero-center">
        <div className="hero-tag animate-fade-up">
          <span className="hero-tag-dot" />
          Odisha Heritage Discovery
        </div>

        <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
          History Exists<br />
          <em>Around You</em>
        </h1>

        <p className="hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Every stone, river, and ruin holds a story waiting to be uncovered.<br />
          Ancient Kalinga lives — if you know where to look.
        </p>

        {/* Search bar */}
        <form
          className="hero-search animate-fade-up"
          style={{ animationDelay: '0.3s' }}
          onSubmit={handleSearch}
        >
          <Search size={18} className="hero-search-icon" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search historical sites, districts, or eras..."
            className="hero-search-input"
          />
          <button type="submit" className="hero-search-btn">
            Explore
          </button>
        </form>
      </div>

      {/* Discovery pills strip — bottom, floating */}
      <div className="hero-discovery-strip">
        <div className="hero-discovery-inner">
          <span className="hero-discovery-label">Quick Discovery</span>
          <div className="hero-discovery-pills">
            {DISCOVERY_PILLS.map(({ icon: Icon, label, href }) => (
              <Link key={label} href={href} className="discovery-pill">
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
