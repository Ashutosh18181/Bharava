'use client';

import { useEffect, useState } from 'react';
import { Location, Trail } from '@/data/types';
import { useApp } from '@/context/AppContext';
import { useRouter } from 'next/navigation';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

// Fix for default marker icon in react-leaflet
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapViewProps {
  locations: Location[];
  trails?: Trail[];
  activeTrailId?: string | 'all';
}

function MapUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { animate: true, duration: 1.5 });
  }, [center, zoom, map]);
  return null;
}

export default function MapView({ locations, trails = [], activeTrailId = 'all' }: MapViewProps) {
  const router = useRouter();
  const { gpsLocation } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter locations based on active trail
  const activeTrail = trails.find(t => t.id === activeTrailId);
  const mapLocations = activeTrail 
    ? locations.filter(loc => activeTrail.locationIds.includes(loc.id))
    : locations;

  // Compute map center
  let center: [number, number] = [20.2381, 85.8341]; // Default to Bhubaneswar
  let zoom = 7;

  if (activeTrail && mapLocations.length > 0) {
    // Center on first location of trail
    center = [mapLocations[0].lat, mapLocations[0].lng];
    zoom = 9;
  } else if (gpsLocation) {
    center = [gpsLocation.lat, gpsLocation.lng];
    zoom = 10;
  }

  // Create polyline coordinates for active trail
  const trailCoordinates: [number, number][] = activeTrail
    ? activeTrail.locationIds
        .map(id => locations.find(l => l.id === id))
        .filter((l): l is Location => l !== undefined)
        .map(l => [l.lat, l.lng])
    : [];

  if (!mounted) {
    return <div className="map-placeholder skeleton"></div>;
  }

  return (
    <div className="map-container-wrap">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        className="leaflet-map"
        zoomControl={false}
      >
        <MapUpdater center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* Trail Polyline */}
        {trailCoordinates.length > 1 && (
          <Polyline 
            positions={trailCoordinates} 
            color={activeTrail?.color || 'var(--accent-gold)'} 
            weight={4}
            opacity={0.6}
            dashArray="10, 10"
          />
        )}

        {/* User GPS Location Marker */}
        {gpsLocation && (
          <Marker 
            position={[gpsLocation.lat, gpsLocation.lng]}
            icon={new L.DivIcon({
              className: 'user-location-marker',
              html: '<div class="user-location-dot"></div>'
            })}
          >
            <Popup className="dark-popup">You are here</Popup>
          </Marker>
        )}

        {/* Heritage Locations */}
        {mapLocations.map(loc => (
          <Marker 
            key={loc.id} 
            position={[loc.lat, loc.lng]}
            icon={new L.DivIcon({
              className: 'custom-marker',
              html: `<div class="marker-dot bg-${loc.category}"></div>`
            })}
          >
            <Popup className="dark-popup" minWidth={220}>
              <div className="map-popup-content">
                <img src={loc.image} alt={loc.name} className="map-popup-img" />
                <span className="map-popup-badge">{loc.category}</span>
                <h4>{loc.name}</h4>
                <p>{loc.district}</p>
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => router.push(`/story/${loc.storyId || loc.id}`)}
                >
                  Read Story
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
