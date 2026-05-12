import { ConfidenceLevel } from '@/data/types';
import { ShieldCheck, Users, Sparkles } from 'lucide-react';
import './StoryConfidenceBadge.css';

interface BadgeProps {
  level: ConfidenceLevel;
}

export default function StoryConfidenceBadge({ level }: BadgeProps) {
  if (level === 'verified') {
    return (
      <span className="conf-badge conf-verified" title="Verified by historians or archaeological records">
        <ShieldCheck size={12} />
        <span>Verified History</span>
      </span>
    );
  }
  
  if (level === 'community') {
    return (
      <span className="conf-badge conf-community" title="Sourced from local community or oral history">
        <Users size={12} />
        <span>Community Sourced</span>
      </span>
    );
  }

  return (
    <span className="conf-badge conf-legend" title="Based on regional folklore or mythology">
      <Sparkles size={12} />
      <span>Legend / Folklore</span>
    </span>
  );
}
