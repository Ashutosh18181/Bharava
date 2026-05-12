import Link from 'next/link';
import { Flame, MapPin, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="footer-logo-icon"><Flame size={16} /></span>
              <span>Bharava</span>
            </Link>
            <p className="footer-tagline">
              History exists around you.<br />
              Discover Odisha&apos;s living stories.
            </p>
            <div className="footer-location">
              <MapPin size={12} />
              <span>Odisha, India</span>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Discover</h4>
            <Link href="/explore">Explore Sites</Link>
            <Link href="/map">Heritage Map</Link>
            <Link href="/hidden">Hidden Histories</Link>
            <Link href="/videos">Videos</Link>
          </div>

          <div className="footer-links-group">
            <h4>Trails</h4>
            <Link href="/map?trail=bhubaneswar-temple-trail">Temple Trail</Link>
            <Link href="/map?trail=puri-konark-trail">Puri–Konark Trail</Link>
            <Link href="/map?trail=buddhist-diamond-triangle">Buddhist Triangle</Link>
            <Link href="/trails">All Trails →</Link>
          </div>

          <div className="footer-links-group">
            <h4>Community</h4>
            <Link href="/contribute">Contribute a Story</Link>
            <Link href="/bookmarks">My Bookmarks</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-disclaimer">
            Story confidence levels reflect the nature of sources: Verified (peer-reviewed / ASI records),
            Community (local accounts / oral history), Legend (folklore / oral tradition). All content is
            editorial — verify with primary sources for research.
          </p>
          <div className="footer-credits">
            <span>Made with <Heart size={12} className="heart" /> for Odisha</span>
            <span>·</span>
            <span>V1 MVP · 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
