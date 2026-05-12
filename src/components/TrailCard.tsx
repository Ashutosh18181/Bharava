import Link from 'next/link';
import { Trail } from '@/data/types';
import { Map, Clock } from 'lucide-react';
import './TrailCard.css';

interface TrailCardProps {
  trail: Trail;
}

export default function TrailCard({ trail }: TrailCardProps) {
  return (
    <Link href={`/trails/${trail.id}`} className="trail-card glass">
      <div className="trail-card-image-wrap">
        <img src={trail.image} alt={trail.name} className="trail-card-image" loading="lazy" />
        <div className="trail-card-overlay" style={{ '--trail-color': trail.color } as React.CSSProperties}>
          <div className="trail-card-badge">
            <Map size={14} /> Heritage Trail
          </div>
        </div>
      </div>
      
      <div className="trail-card-content">
        <div className="trail-card-meta">
          <span className="trail-region">{trail.region}</span>
          <span className="trail-duration">
            <Clock size={12} /> {trail.durationDays} Days
          </span>
        </div>
        
        <h3 className="trail-card-title">{trail.name}</h3>
        <p className="trail-card-desc">{trail.description}</p>
        
        <div className="trail-card-highlights">
          <span className="highlights-label">Highlights:</span>
          <ul className="highlights-list">
            {trail.highlights.slice(0, 2).map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
        
        <div className="trail-card-footer">
          <span className="trail-sites-count">{trail.locationIds.length} Sites</span>
          <span className="trail-explore-btn" style={{ color: trail.color }}>Explore Trail →</span>
        </div>
      </div>
    </Link>
  );
}
