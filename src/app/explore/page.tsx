'use client';

import { Suspense, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { locations } from '@/data/locations';
import { trails } from '@/data/trails';
import { Category } from '@/data/types';
import { useApp, getLocationsWithDistance } from '@/context/AppContext';
import SiteCard from '@/components/SiteCard';
import FilterBar from '@/components/FilterBar';

const CATEGORIES: Category[] = [
  'temple', 'buddhist', 'fort', 'battle', 'cultural', 'festival', 'tribal', 'maritime', 'hidden'
];

function ExploreContent() {
  const searchParams = useSearchParams();
  const initialTrail = searchParams.get('trail') || 'all';
  
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [trail, setTrail] = useState<string | 'all'>(initialTrail);
  
  const { gpsLocation } = useApp();

  // Filter locations based on state
  const filteredLocations = useMemo(() => {
    let result = locations;
    
    // Apply category filter
    if (category !== 'all') {
      result = result.filter(loc => loc.category === category);
    }
    
    // Apply trail filter
    if (trail !== 'all') {
      const selectedTrail = trails.find(t => t.id === trail);
      if (selectedTrail) {
        result = result.filter(loc => selectedTrail.locationIds.includes(loc.id));
      }
    }
    
    // Calculate distances if GPS is available
    if (gpsLocation) {
      return getLocationsWithDistance(result, gpsLocation);
    }
    
    return result;
  }, [category, trail, gpsLocation]);

  return (
    <>
      <div className="explore-header mb-6">
        <h1 className="section-title text-display">Explore Odisha</h1>
        <p className="text-secondary max-w-2xl">
          Browse through verified historical sites, community-sourced stories, and local legends. 
          Use filters to find specific types of heritage or follow curated trails.
        </p>
      </div>

      <FilterBar 
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
        trails={trails.map(t => ({ id: t.id, name: t.name }))}
        selectedTrail={trail}
        onSelectTrail={setTrail}
      />

      <div className="explore-results">
        <div className="results-count mb-4">
          <span className="text-sm font-semibold text-muted">
            Showing {filteredLocations.length} locations
          </span>
        </div>
        
        {filteredLocations.length > 0 ? (
          <div className="grid-3">
            {filteredLocations.map(site => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        ) : (
          <div className="empty-state glass text-center py-12 rounded-lg">
            <h3 className="text-display mb-2">No locations found</h3>
            <p className="text-secondary">Try adjusting your filters to discover more sites.</p>
            <button 
              className="btn btn-ghost mt-4"
              onClick={() => { setCategory('all'); setTrail('all'); }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default function ExplorePage() {
  return (
    <div className="explore-page" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-xl))' }}>
      <div className="container">
        <Suspense fallback={<div className="glass p-8 text-center">Loading explore data...</div>}>
          <ExploreContent />
        </Suspense>
      </div>
    </div>
  );
}
