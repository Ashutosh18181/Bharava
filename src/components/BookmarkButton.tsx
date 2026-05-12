'use client';

import { useApp } from '@/context/AppContext';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import './BookmarkButton.css';

interface BookmarkButtonProps {
  locationId: string;
  size?: number;
  className?: string;
  showLabel?: boolean;
}

export default function BookmarkButton({ locationId, size = 20, className = '', showLabel = false }: BookmarkButtonProps) {
  const { isBookmarked, toggleBookmark } = useApp();
  const saved = isBookmarked(locationId);

  return (
    <button
      className={`bookmark-btn ${saved ? 'saved' : ''} ${className}`}
      onClick={(e) => {
        e.preventDefault(); // Prevent triggering parent links
        e.stopPropagation();
        toggleBookmark(locationId);
      }}
      aria-label={saved ? 'Remove bookmark' : 'Add bookmark'}
    >
      {saved ? <BookmarkCheck size={size} className="icon-saved" /> : <Bookmark size={size} />}
      {showLabel && <span className="bookmark-label">{saved ? 'Saved' : 'Save'}</span>}
    </button>
  );
}
