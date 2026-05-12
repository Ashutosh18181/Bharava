import { TimelineEntry } from '@/data/types';
import './TimelineView.css';

interface TimelineViewProps {
  timeline: TimelineEntry[];
}

export default function TimelineView({ timeline }: TimelineViewProps) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <div className="timeline-view glass">
      <h3 className="timeline-title">Key Events</h3>
      <div className="timeline-scroll">
        <div className="timeline-track"></div>
        {timeline.map((entry, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-node"></div>
            <div className="timeline-content">
              <div className="timeline-year">{entry.year}</div>
              <div className="timeline-event">{entry.event}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
