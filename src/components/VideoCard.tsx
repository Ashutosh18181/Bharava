'use client';

import { useState } from 'react';
import { Video } from '@/data/types';
import { PlayCircle, Clock, ExternalLink, X } from 'lucide-react';
import './VideoCard.css';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="video-card glass" onClick={() => setShowModal(true)}>
        <div className="video-thumb-wrap">
          <img src={video.thumbnail} alt={video.title} className="video-thumb" loading="lazy" />
          <div className="video-overlay">
            <PlayCircle size={48} className="video-play-icon" strokeWidth={1.5} />
            <span className="video-duration">
              <Clock size={12} /> {video.duration}
            </span>
          </div>
        </div>
        
        <div className="video-content">
          <span className="video-source">
            <ExternalLink size={12} /> {video.source}
          </span>
          <h3 className="video-title">{video.title}</h3>
          <p className="video-desc">{video.description}</p>
        </div>
      </div>

      {showModal && (
        <div className="video-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="video-modal" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>
            <div className="video-modal-body">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>
            <div className="video-modal-info">
              <h3>{video.title}</h3>
              <p className="text-muted text-sm mt-2">{video.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
