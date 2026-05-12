'use client';

import { locations } from '@/data/locations';
import { EyeOff, Unlock } from 'lucide-react';
import { useState } from 'react';
import SiteCard from '@/components/SiteCard';
import './page.css';

export default function HiddenPage() {
  const hiddenGems = locations.filter(loc => loc.isHiddenGem);
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="hidden-page">
      <div className="hidden-hero">
        <div className="hidden-bg"></div>
        <div className="container hidden-content">
          <EyeOff size={48} className="text-crimson mb-6 animate-pulse" />
          <h1 className="text-display mb-4">Hidden Histories</h1>
          <p className="text-secondary max-w-2xl text-center mx-auto mb-8">
            These are the stories that textbooks forgot. Jungle forts, abandoned temples, 
            and lost capitals that are slowly being reclaimed by nature.
          </p>
          
          {!unlocked ? (
            <button 
              className="btn unlock-btn"
              onClick={() => setUnlocked(true)}
            >
              <Unlock size={18} />
              Unlock Hidden Sites
            </button>
          ) : (
            <p className="text-gold uppercase tracking-wider text-sm font-bold">
              Treasures Unlocked
            </p>
          )}
        </div>
      </div>

      {unlocked && (
        <div className="container py-12 animate-fade-up">
          <div className="grid-3">
            {hiddenGems.map(site => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
