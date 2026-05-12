import { notFound } from 'next/navigation';
import { trails } from '@/data/trails';
import { locations } from '@/data/locations';
import Link from 'next/link';
import { MapPin, Clock, ArrowLeft, Map } from 'lucide-react';
import SiteCard from '@/components/SiteCard';
import './page.css';

interface TrailPageProps {
  params: { id: string };
}

export default function TrailPage({ params }: TrailPageProps) {
  const trail = trails.find(t => t.id === params.id);
  
  if (!trail) {
    notFound();
  }

  // Get the ordered sites for this trail
  const trailSites = trail.locationIds
    .map(id => locations.find(l => l.id === id))
    .filter(Boolean) as typeof locations;

  return (
    <article className="trail-page">
      <header className="trail-header">
        <div className="trail-header-bg">
          <img src={trail.image} alt={trail.name} />
          <div className="trail-header-gradient" style={{ '--trail-color': trail.color } as React.CSSProperties}></div>
        </div>
        
        <div className="container trail-header-content">
          <Link href="/explore" className="trail-back-btn">
            <ArrowLeft size={16} /> Back to Explore
          </Link>
          
          <div className="trail-meta mb-4">
            <span className="badge badge-trail"><Map size={12} /> Heritage Trail</span>
            <span className="trail-region"><MapPin size={12} /> {trail.region}</span>
            <span className="trail-duration"><Clock size={12} /> {trail.durationDays} Days</span>
          </div>
          
          <h1 className="trail-title text-display">{trail.name}</h1>
          <p className="trail-tagline">{trail.description}</p>
          
          <div className="trail-actions mt-6">
            <Link href={`/map?trail=${trail.id}`} className="btn btn-primary">
              <Map size={18} /> View Route on Map
            </Link>
          </div>
        </div>
      </header>

      <div className="container mt-12 mb-12">
        <div className="trail-layout">
          <div className="trail-main">
            <h2 className="text-2xl font-bold mb-6">Trail Highlights</h2>
            <ul className="trail-highlights-list glass p-6 rounded-lg mb-10">
              {trail.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 mb-3 last:mb-0">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: trail.color }}></div>
                  <span className="text-secondary">{highlight}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-6">Journey Stops ({trailSites.length})</h2>
            <div className="trail-timeline">
              {trailSites.map((site, index) => (
                <div key={site.id} className="trail-stop">
                  <div className="trail-stop-marker" style={{ borderColor: trail.color }}>
                    <span>{index + 1}</span>
                  </div>
                  <div className="trail-stop-content">
                    <SiteCard site={site} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
