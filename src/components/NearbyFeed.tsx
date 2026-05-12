'use client';

import { useApp, getLocationsWithDistance } from '@/context/AppContext';
import { locations } from '@/data/locations';
import { Compass, MapPin, Navigation } from 'lucide-react';
import SiteCard from './SiteCard';
import './NearbyFeed.css';

export default function NearbyFeed() {
  const { gpsLocation, gpsError, gpsLoading, requestLocation } = useApp();

  const nearbyLocations = gpsLocation
    ? getLocationsWithDistance(locations, gpsLocation).slice(0, 4)
    : [];

  return (
    <section className="nearby-feed section" aria-labelledby="nearby-title">
      <div className="container">
        <div className="nearby-header">
          <div>
            <h2 id="nearby-title" className="section-title">History Near Me</h2>
            <p className="section-subtitle">
              Discover the living heritage immediately around you.
            </p>
          </div>
          
          <button 
            className="btn btn-primary locate-btn"
            onClick={requestLocation}
            disabled={gpsLoading}
          >
            {gpsLoading ? (
              <span className="spinner"></span>
            ) : (
              <Navigation size={18} />
            )}
            {gpsLocation ? 'Update Location' : 'Locate Me'}
          </button>
        </div>

        {gpsError && (
          <div className="nearby-error glass">
            <Compass size={24} className="text-muted" />
            <div>
              <h4>Location Error</h4>
              <p>{gpsError}</p>
            </div>
          </div>
        )}

        {!gpsLocation && !gpsError && !gpsLoading && (
          <div className="nearby-prompt glass">
            <MapPin size={32} className="prompt-icon" />
            <h3>Discover what's around you</h3>
            <p>Grant location access while using the app to uncover stories of temples, forts, and forgotten histories just minutes away.</p>
            <button className="btn btn-primary mt-4" onClick={requestLocation}>
              Enable Location
            </button>
          </div>
        )}

        {gpsLocation && nearbyLocations.length > 0 && (
          <div className="grid-4">
            {nearbyLocations.map((site) => (
              <div key={site.id} className="animate-fade-up">
                <SiteCard site={site} />
              </div>
            ))}
          </div>
        )}

        {gpsLocation && nearbyLocations.length === 0 && (
          <div className="nearby-empty glass">
            <p>No historical sites found within immediate walking distance. Try exploring the map!</p>
          </div>
        )}
      </div>
    </section>
  );
}
