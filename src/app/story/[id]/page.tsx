import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
import { stories } from '@/data/stories';
import { trails } from '@/data/trails';
import { MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import StoryConfidenceBadge from '@/components/StoryConfidenceBadge';
import BookmarkButton from '@/components/BookmarkButton';
import AudioPlayer from '@/components/AudioPlayer';
import TimelineView from '@/components/TimelineView';
import QuizStrip from '@/components/QuizStrip';
import SourceList from '@/components/SourceList';
import SiteCard from '@/components/SiteCard';
import './page.css';

interface StoryPageProps {
  params: { id: string };
}

export default function StoryPage({ params }: StoryPageProps) {
  // First, find the location by id OR storyId
  const location = locations.find(l => l.id === params.id || l.storyId === params.id);
  
  if (!location) {
    notFound();
  }

  // Then find the associated story, if it exists
  const story = stories.find(s => s.locationId === location.id);

  // If no detailed story exists, we render the crisp Tier B page
  const isBasicPage = !story;
  
  // Find trails this location belongs to
  const locationTrails = trails.filter(t => location.trailIds.includes(t.id));

  // Find related sites (either from story or matching category/district for Tier B)
  let relatedSites = [];
  if (story?.relatedLocationIds) {
    relatedSites = locations.filter(l => story.relatedLocationIds.includes(l.id));
  } else {
    // For Tier B, show a few sites from the same category or district
    relatedSites = locations
      .filter(l => l.id !== location.id && (l.category === location.category || l.district === location.district))
      .slice(0, 3);
  }

  return (
    <article className="story-page">
      {/* Hero Header */}
      <header className="story-header">
        <div className="story-header-bg">
          <img src={location.image} alt={location.name} />
          <div className="story-header-gradient"></div>
        </div>
        
        <div className="container story-header-content">
          <Link href="/explore" className="story-back-btn">
            <ArrowLeft size={16} /> Back to Explore
          </Link>
          
          <div className="story-meta mb-4">
            <span className={`badge badge-${location.category}`}>{location.category}</span>
            <span className="story-district"><MapPin size={12} /> {location.district}</span>
            <span className="story-era">{location.era}</span>
          </div>
          
          <h1 className="story-title text-display">
            {story ? story.title : location.name}
          </h1>
          
          <p className="story-tagline">
            {story ? story.tagline : location.teaser}
          </p>
          
          <div className="story-actions">
            <StoryConfidenceBadge level={location.confidenceLevel} />
            <BookmarkButton locationId={location.id} size={20} showLabel />
          </div>
        </div>
      </header>

      <div className="container">
        <div className="story-layout">
          {/* Main Content */}
          <div className="story-main">
            {/* Audio Player (Only for Tier A currently) */}
            {story && <AudioPlayer locationName={location.name} />}
            
            {/* Narrative Content */}
            <div className="story-narrative">
              {isBasicPage ? (
                // Tier B / Basic Location Content
                <div className="basic-content">
                  <p className="lead-paragraph">{location.teaser}</p>
                  
                  {/* Auto-generated short history based on tags and metadata */}
                  <p className="mt-4">
                    Located in the {location.district} district, this {location.era} site stands as a testament to the region's {location.category} heritage. 
                    {location.tags?.length ? ` It is primarily associated with ${location.tags.slice(0, 2).join(' and ')}.` : ''}
                  </p>
                  
                  <details className="know-more-accordion mt-6">
                    <summary className="know-more-toggle btn btn-ghost">
                      <span>Know more about this site</span>
                    </summary>
                    <div className="know-more-content glass p-6 mt-4 rounded-lg">
                      <h4 className="text-gold mb-2">Historical Context</h4>
                      <p className="text-secondary text-sm">
                        While the full cinematic story is currently in our editorial pipeline, this site has been {location.confidenceLevel === 'verified' ? 'verified by historical records' : 'sourced from local community legends'}. 
                        {location.sourceRefs && location.sourceRefs.length > 0 && (
                          <span className="block mt-2">
                            <strong>Key Sources:</strong> {location.sourceRefs.join(', ')}
                          </span>
                        )}
                      </p>
                      
                      {/* Show images if we have them, otherwise fallback to the main image */}
                      <div className="story-gallery mt-6">
                        <figure className="story-figure">
                          <img src={location.image} alt={location.name} loading="lazy" />
                          <figcaption>
                            <span className="caption-text">{location.name}</span>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </details>
                </div>
              ) : (
                // Tier A Story
                <>
                  <p className="lead-paragraph">{story.narrative.split('\n\n')[0]}</p>
                  
                  {/* Rest of narrative split by paragraphs */}
                  {story.narrative.split('\n\n').slice(1).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}

                  <div className="story-divider"></div>

                  <h3 className="text-display mb-4 text-gold">Significance</h3>
                  <p>{story.significance}</p>
                  
                  {/* Image Gallery inline */}
                  {story.images && story.images.length > 0 && (
                    <div className="story-gallery mt-8">
                      {story.images.map((img, i) => (
                        <figure key={i} className="story-figure">
                          <img src={img.url} alt={img.caption} loading="lazy" />
                          <figcaption>
                            <span className="caption-text">{img.caption}</span>
                            <span className="caption-credit">Photo: {img.credit}</span>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  )}

                  {/* Timeline */}
                  {story.timeline && story.timeline.length > 0 && (
                    <div className="mt-12">
                      <TimelineView timeline={story.timeline} />
                    </div>
                  )}

                  {/* Quiz */}
                  {story.quiz && (
                    <QuizStrip quiz={story.quiz} />
                  )}

                  {/* Sources */}
                  {story.sourceRefs && (
                    <SourceList sources={story.sourceRefs} />
                  )}
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="story-sidebar">
            {/* Trails */}
            {locationTrails.length > 0 && (
              <div className="sidebar-widget glass">
                <h4 className="widget-title">Part of Heritage Trails</h4>
                <div className="widget-trail-list">
                  {locationTrails.map(trail => (
                    <Link key={trail.id} href={`/explore?trail=${trail.id}`} className="widget-trail-item">
                      <div className="widget-trail-color" style={{ backgroundColor: trail.color }}></div>
                      <span>{trail.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Map Preview */}
            <div className="sidebar-widget glass">
              <h4 className="widget-title">Location</h4>
              <div className="widget-map-preview">
                {/* Static map image for preview */}
                <div className="fake-map-bg"></div>
                <div className="map-preview-marker">
                  <MapPin size={24} className="text-gold" />
                </div>
              </div>
              <p className="text-sm text-secondary mt-3 mb-4">
                {location.district} District, Odisha
              </p>
              <Link href={`/map?focus=${location.id}`} className="btn btn-ghost w-full justify-center">
                Open in Interactive Map
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Sites */}
        {relatedSites.length > 0 && (
          <section className="related-section">
            <div className="story-divider"></div>
            <h2 className="section-title mb-6">Continue the Journey</h2>
            <div className="grid-3">
              {relatedSites.map(site => (
                <SiteCard key={site.id} site={site} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
