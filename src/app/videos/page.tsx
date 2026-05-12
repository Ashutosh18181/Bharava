import { videos } from '@/data/videos';
import VideoCard from '@/components/VideoCard';
import './page.css';

export default function VideosPage() {
  const featuredVideo = videos[0];
  const gridVideos = videos.slice(1);

  return (
    <div className="videos-page" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-xl))' }}>
      <div className="container">
        <div className="videos-header mb-6">
          <h1 className="section-title text-display">Curated External Media</h1>
          <p className="text-secondary max-w-2xl">
            A curated selection of high-quality documentaries and short films produced by 
            independent creators, government bodies, and broadcasters about Odisha's heritage.
          </p>
        </div>

        {/* Featured Video */}
        {featuredVideo && (
          <div className="featured-video-section mb-12">
            <h4 className="section-label mb-4">Featured Highlight</h4>
            <div className="featured-video-wrapper">
              <VideoCard video={featuredVideo} />
            </div>
          </div>
        )}

        {/* Grid Videos */}
        <div className="videos-grid-section">
          <h4 className="section-label mb-4">More Stories</h4>
          <div className="grid-3">
            {gridVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
