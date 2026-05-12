import { Category } from '@/data/types';
import './FilterBar.css';

interface FilterBarProps {
  categories: Category[];
  selectedCategory: Category | 'all';
  onSelectCategory: (cat: Category | 'all') => void;
  trails?: { id: string; name: string }[];
  selectedTrail?: string | 'all';
  onSelectTrail?: (trailId: string | 'all') => void;
}

export default function FilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  trails,
  selectedTrail,
  onSelectTrail
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      {/* Category filters */}
      <div className="filter-group">
        <span className="filter-label">Categories</span>
        <div className="filter-scroll">
          <button
            className={`filter-pill ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => onSelectCategory('all')}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Trail filters (optional) */}
      {trails && onSelectTrail && (
        <div className="filter-group trail-filters">
          <span className="filter-label">Trails</span>
          <div className="filter-scroll">
            <button
              className={`filter-pill trail-pill ${selectedTrail === 'all' || !selectedTrail ? 'active' : ''}`}
              onClick={() => onSelectTrail('all')}
            >
              All Trails
            </button>
            {trails.map(trail => (
              <button
                key={trail.id}
                className={`filter-pill trail-pill ${selectedTrail === trail.id ? 'active' : ''}`}
                onClick={() => onSelectTrail(trail.id)}
              >
                {trail.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
