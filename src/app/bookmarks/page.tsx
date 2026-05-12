'use client';

import { useApp } from '@/context/AppContext';
import { locations } from '@/data/locations';
import { BookmarkIcon } from 'lucide-react';
import SiteCard from '@/components/SiteCard';
import Link from 'next/link';
import './page.css';

export default function BookmarksPage() {
  const { bookmarks } = useApp();
  
  const bookmarkedSites = locations.filter(loc => bookmarks.includes(loc.id));

  return (
    <div className="bookmarks-page" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-xl))' }}>
      <div className="container">
        <div className="bookmarks-header mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BookmarkIcon size={24} className="text-gold" />
            <h1 className="text-display">My Bookmarks</h1>
          </div>
          <p className="text-secondary">
            Your saved stories and heritage sites across Odisha.
          </p>
        </div>

        {bookmarkedSites.length > 0 ? (
          <div className="grid-3">
            {bookmarkedSites.map(site => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        ) : (
          <div className="empty-state glass text-center py-12 rounded-lg">
            <BookmarkIcon size={48} className="text-muted mx-auto mb-4" strokeWidth={1} />
            <h3 className="text-display mb-2">No bookmarks yet</h3>
            <p className="text-secondary mb-6">
              Save your favorite stories and sites to read them later.
            </p>
            <Link href="/explore" className="btn btn-primary">
              Explore Sites
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
