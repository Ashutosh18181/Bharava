import { trails } from '@/data/trails';
import TrailCard from '@/components/TrailCard';
import './page.css';

export default function TrailsPage() {
  return (
    <div className="trails-page" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-xl))' }}>
      <div className="container">
        <div className="trails-header mb-8 text-center">
          <h1 className="text-display mb-4">Heritage Trails</h1>
          <p className="text-secondary max-w-2xl mx-auto">
            Odisha's history is best understood as a journey. Follow these curated routes connecting 
            thematic sites across the state, from ancient coastal ports to forgotten jungle forts.
          </p>
        </div>

        <div className="grid-2">
          {trails.map(trail => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </div>
      </div>
    </div>
  );
}
