'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Settings } from 'lucide-react';
import './AudioPlayer.css';

interface AudioPlayerProps {
  locationName: string;
}

export default function AudioPlayer({ locationName }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // In V1, this is a demo ambient track. Future versions will use TTS narration.
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/05/16/audio_965dbf4125.mp3?filename=india-ambient-110022.mp3');
    audioRef.current.loop = true;
    
    const updateProgress = () => {
      if (audioRef.current && audioRef.current.duration) {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }
    };

    audioRef.current.addEventListener('timeupdate', updateProgress);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="audio-player glass">
      <div className="audio-info">
        <span className="audio-badge">Demo Audio</span>
        <h4>Atmosphere: {locationName}</h4>
        <p>Future versions will feature full voice narration.</p>
      </div>
      
      <div className="audio-controls">
        <button className="audio-btn" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? <Pause size={24} /> : <Play size={24} className="play-icon" />}
        </button>
        
        <div className="audio-progress-wrap">
          <div className="audio-progress-bar">
            <div className="audio-progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        
        <button className="audio-icon-btn" onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        <button className="audio-icon-btn" title="Future language settings">
          <Settings size={18} />
        </button>
      </div>
    </div>
  );
}
