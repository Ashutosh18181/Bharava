import { BookOpen } from 'lucide-react';
import './SourceList.css';

interface SourceListProps {
  sources: string[];
}

export default function SourceList({ sources }: SourceListProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="source-list glass">
      <div className="source-header">
        <BookOpen size={16} className="text-muted" />
        <h4>References & Attribution</h4>
      </div>
      <ul className="source-items">
        {sources.map((source, i) => (
          <li key={i} className="source-item">
            {source}
          </li>
        ))}
      </ul>
      <p className="source-disclaimer">
        Historical details may vary by scholarly interpretation or regional tradition. 
        Bharava aims to present consensus history alongside noted community lore.
      </p>
    </div>
  );
}
