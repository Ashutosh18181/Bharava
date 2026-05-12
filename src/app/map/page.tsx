'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { locations } from '@/data/locations';
import { trails } from '@/data/trails';
import './page.css';

// Dynamically import MapView with SSR disabled to avoid 'window is not defined' error
const MapView = dynamic(() => import('@/components/MapView'), { 
  ssr: false,
  loading: () => <div className="map-page-loading skeleton">Loading Heritage Map...</div>
});

function MapContent() {
  const searchParams = useSearchParams();
  const initialTrail = searchParams.get('trail') || 'all';
  
  const [activeTrailId, setActiveTrailId] = useState<string | 'all'>(initialTrail);

  return (
    <>
      <div className="map-sidebar glass">
        <div className="map-sidebar-header">
          <h1 className="text-display mb-2">Heritage Map</h1>
          <p className="text-sm text-secondary">
            Explore Odisha's historical sites geographically. Select a trail to see its route.
          </p>
        </div>
        
        <div className="map-sidebar-content">
          <h4 className="text-xs font-bold uppercase text-muted tracking-wider mb-3">
            Highlight Trail
          </h4>
          <div className="map-trail-filters">
            <button 
              className={`map-trail-btn ${activeTrailId === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTrailId('all')}
            >
              Show All Sites
            </button>
            
            {trails.map(trail => (
              <button 
                key={trail.id}
                className={`map-trail-btn ${activeTrailId === trail.id ? 'active' : ''}`}
                onClick={() => setActiveTrailId(trail.id)}
                style={{ 
                  borderLeftColor: activeTrailId === trail.id ? trail.color : 'transparent' 
                }}
              >
                {trail.name}
              </button>
            ))}
          </div>
          
          <div className="map-legend mt-6">
            <h4 className="text-xs font-bold uppercase text-muted tracking-wider mb-3">
              Legend
            </h4>
            <div className="legend-items">
              <div className="legend-item"><span className="legend-dot bg-temple"></span> Temple</div>
              <div className="legend-item"><span className="legend-dot bg-fort"></span> Fort & Battle</div>
              <div className="legend-item"><span className="legend-dot bg-buddhist"></span> Buddhist</div>
              <div className="legend-item"><span className="legend-dot bg-cultural"></span> Cultural</div>
              <div className="legend-item"><span className="legend-dot bg-hidden"></span> Hidden Gem</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="map-area">
        <MapView 
          locations={locations} 
          trails={trails} 
          activeTrailId={activeTrailId} 
        />
      </div>
    </>
  );
}

export default function MapPage() {
  return (
    <div className="map-page-container">
      <Suspense fallback={<div className="map-page-loading skeleton">Loading Map Interface...</div>}>
        <MapContent />
      </Suspense>
    </div>
  );
}
