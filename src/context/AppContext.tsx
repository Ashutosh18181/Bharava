'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Location } from '@/data/types';

export type Language = 'en' | 'hi' | 'od';

interface GPSLocation {
  lat: number;
  lng: number;
  accuracy?: number;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  gpsLocation: GPSLocation | null;
  gpsError: string | null;
  gpsLoading: boolean;
  requestLocation: () => void;
  bookmarks: string[];
  toggleBookmark: (locationId: string) => void;
  isBookmarked: (locationId: string) => boolean;
  manualLocation: string | null;
  setManualLocation: (loc: string | null) => void;
}

const AppContext = createContext<AppContextType | null>(null);

// Compute distance in km between two lat/lng points (Haversine formula)
export function computeDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)}m`;
  return `${km.toFixed(1)} km`;
}

export function getLocationsWithDistance(
  locations: Location[],
  gps: GPSLocation
): (Location & { distanceKm: number; distanceLabel: string })[] {
  return locations
    .map((loc) => {
      const distanceKm = computeDistance(gps.lat, gps.lng, loc.lat, loc.lng);
      return { ...loc, distanceKm, distanceLabel: formatDistance(distanceKm) };
    })
    .sort((a, b) => a.distanceKm - b.distanceKm);
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [gpsLocation, setGpsLocation] = useState<GPSLocation | null>(null);
  const [gpsError, setGpsError] = useState<string | null>(null);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [manualLocation, setManualLocation] = useState<string | null>(null);

  // Restore bookmarks from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bharava-bookmarks');
      if (saved) setBookmarks(JSON.parse(saved));
    } catch {}
  }, []);

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setGpsError('Geolocation is not supported by your browser.');
      return;
    }
    setGpsLoading(true);
    setGpsError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGpsLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude, accuracy: pos.coords.accuracy });
        setGpsLoading(false);
      },
      (err) => {
        setGpsError(err.message || 'Location access denied.');
        setGpsLoading(false);
      },
      { timeout: 10000, maximumAge: 60000 }
    );
  }, []);

  const toggleBookmark = useCallback((locationId: string) => {
    setBookmarks((prev) => {
      const next = prev.includes(locationId) ? prev.filter((id) => id !== locationId) : [...prev, locationId];
      try { localStorage.setItem('bharava-bookmarks', JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const isBookmarked = useCallback((locationId: string) => bookmarks.includes(locationId), [bookmarks]);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        gpsLocation,
        gpsError,
        gpsLoading,
        requestLocation,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        manualLocation,
        setManualLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
