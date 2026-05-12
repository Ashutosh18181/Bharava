import Link from 'next/link';
import { Location } from '@/data/types';
import { MapPin, ArrowRight } from 'lucide-react';
import StoryConfidenceBadge from './StoryConfidenceBadge';
import BookmarkButton from './BookmarkButton';
import './SiteCard.css';

interface SiteCardProps {
  site: Location & { distanceLabel?: string };
}

export default function SiteCard({ site }: SiteCardProps) {
  return (
    <Link href={`/story/${site.storyId || site.id}`} className="site-card">
      <div className="site-card-image-wrap">
        <img src={site.image} alt={site.name} className="site-card-image" loading="lazy" />
        <div className="site-card-overlay">
          <div className="site-card-top-badges">
            <span className={`badge badge-${site.category}`}>{site.category}</span>
            {site.distanceLabel && (
              <span className="site-card-distance">
                <MapPin size={11} /> {site.distanceLabel}
              </span>
            )}
          </div>
          <div className="site-card-bookmark">
            <BookmarkButton locationId={site.id} size={20} />
          </div>
        </div>
      </div>

      <div className="site-card-content">
        <div className="site-card-meta">
          <span className="site-card-district">{site.district}</span>
          <span className="site-card-era">{site.era}</span>
        </div>

        <h3 className="site-card-title">{site.name}</h3>

        <div className="site-card-confidence">
          <StoryConfidenceBadge level={site.confidenceLevel} />
        </div>

        <p className="site-card-teaser">{site.teaser}</p>

        <div className="site-card-footer">
          {site.trailIds && site.trailIds.length > 0 && (
            <div className="site-card-trails">
              {site.trailIds.slice(0, 1).map(trailId => (
                <span key={trailId} className="site-card-trail-tag">On a Trail</span>
              ))}
            </div>
          )}
          <span className="site-card-read-more">
            Read Story <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
