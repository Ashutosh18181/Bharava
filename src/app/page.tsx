import HeroSection from '@/components/HeroSection';
import NearbyFeed from '@/components/NearbyFeed';
import SiteCard from '@/components/SiteCard';
import TrailCard from '@/components/TrailCard';
import { locations } from '@/data/locations';
import { trails } from '@/data/trails';
import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';
import './page.css';

export default function Home() {
  const featuredSites = locations.filter(loc => loc.tier === 'A').slice(0, 3);
  const editorialSite = locations.filter(loc => loc.tier === 'A')[0];
  const featuredTrails = trails.slice(0, 2);

  return (
    <div className="home-page">
      {/* 1. Hero — fullscreen cinematic banner + discovery pills */}
      <HeroSection />

      {/* 2. Flagship Stories — dark bg, premium editorial cards */}
      <section className="flagship-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Tier A Narratives</span>
              <h2 className="section-title">Flagship Stories</h2>
              <p className="section-subtitle">
                Deep, cinematic storytelling of Odisha's most iconic heritage sites.
              </p>
            </div>
            <Link href="/explore" className="btn btn-ghost hide-mobile">
              All Sites <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {featuredSites.map(site => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>

          <div className="mobile-view-all show-mobile">
            <Link href="/explore" className="btn btn-ghost w-full justify-center">
              View All Stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Editorial Feature — warm dark bg, split layout (Ref 2) */}
      {editorialSite && (
        <section className="editorial-section">
          <div className="editorial-inner">
            <div className="editorial-image-wrap">
              <img src={editorialSite.image} alt={editorialSite.name} />
              <span className="editorial-image-badge">Featured Story</span>
            </div>
            <div className="editorial-text">
              <span className="section-label">Cinematic Experience</span>
              <h2>The Living Memory of Ancient Kalinga</h2>
              <p>
                Long before empires rose and fell, the land of Odisha held stories of conquest, devotion, 
                and quiet resilience. Bharava brings these narratives out of textbooks and into the 
                streets, temples, and riverbanks where they were born.
              </p>
              <p>
                Walk in the shadow of Ashoka's remorse at Dhauli. Hear the chisels of 13th-century 
                sculptors at Konark. Feel the pull of a thousand-year pilgrimage in Puri.
              </p>
              <Link href={`/story/${editorialSite.storyId || editorialSite.id}`} className="btn btn-outline-light">
                Begin the Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 4. Nearby Discovery */}
      <section className="nearby-section">
        <NearbyFeed />
      </section>

      {/* 5. Heritage Trails */}
      <section className="trails-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Journeys</span>
              <h2 className="section-title">Heritage Trails</h2>
              <p className="section-subtitle">
                Follow curated routes connecting related historical sites across districts.
              </p>
            </div>
            <Link href="/trails" className="btn btn-ghost hide-mobile">
              All Trails <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-2">
            {featuredTrails.map(trail => (
              <TrailCard key={trail.id} trail={trail} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <span className="section-label" style={{ textAlign: 'center', display: 'block', marginBottom: '1rem' }}>
              Start Exploring
            </span>
            <h2>Every Street is a Portal</h2>
            <p>
              Open the interactive map to see all historical sites across Odisha. 
              The land remembers everything — you just have to ask.
            </p>
            <div className="cta-buttons">
              <Link href="/map" className="btn btn-primary">
                <Layers size={18} /> Open Heritage Map
              </Link>
              <Link href="/hidden" className="btn btn-outline-light">
                Find Hidden Gems
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
