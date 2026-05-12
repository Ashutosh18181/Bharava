'use client';

import { useState } from 'react';
import { Send, Upload, Info } from 'lucide-react';
import './page.css';

export default function ContributePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  return (
    <div className="contribute-page" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-xl))' }}>
      <div className="container max-w-3xl">
        <div className="contribute-header mb-8 text-center">
          <h1 className="section-title text-display">Share a Story</h1>
          <p className="text-secondary">
            Know a local legend? A forgotten site in your village? Submit it here. 
            All submissions go through our editorial review before publication.
          </p>
        </div>

        {submitted ? (
          <div className="success-message glass text-center py-12 rounded-lg">
            <div className="success-icon mb-4">
              <Send size={48} className="text-gold mx-auto" />
            </div>
            <h2 className="text-display mb-2">Thank You!</h2>
            <p className="text-secondary max-w-lg mx-auto">
              Your story has been submitted for editorial review. If accepted, it will be added to Bharava 
              with a "Community Sourced" or "Legend" confidence badge.
            </p>
            <button 
              className="btn btn-primary mt-8"
              onClick={() => setSubmitted(false)}
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form className="contribute-form glass p-8 rounded-lg" onSubmit={handleSubmit}>
            <div className="form-info-box mb-6">
              <Info size={16} className="text-gold flex-shrink-0 mt-1" />
              <p className="text-sm text-secondary">
                Community submissions are supporting content, not authoritative history unless verified by our team.
              </p>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="locationName">Place Name *</label>
                <input type="text" id="locationName" required placeholder="e.g. Ruined Fort of..." />
              </div>
              
              <div className="form-group">
                <label htmlFor="district">District *</label>
                <select id="district" required defaultValue="">
                  <option value="" disabled>Select District</option>
                  <option value="Khordha">Khordha</option>
                  <option value="Puri">Puri</option>
                  <option value="Cuttack">Cuttack</option>
                  <option value="Ganjam">Ganjam</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <div className="category-radios">
                {['Temple', 'Fort', 'Folk/Tribal', 'Legend/Myth', 'Other'].map(cat => (
                  <label key={cat} className="radio-label">
                    <input type="radio" name="category" value={cat} required />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="story">The Story / Legend *</label>
              <textarea 
                id="story" 
                rows={6} 
                required 
                placeholder="Tell us the history, local legend, or significance of this place..."
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="source">Source of this information *</label>
              <input 
                type="text" 
                id="source" 
                required 
                placeholder="e.g. My grandfather, Local priest, Book title..." 
              />
            </div>

            <div className="form-group">
              <label>Upload Media (Optional)</label>
              <div className="upload-box">
                <Upload size={24} className="text-muted mb-2" />
                <span className="text-sm text-secondary">Click or drag photos here</span>
                <span className="text-xs text-faint mt-1">Max 3 photos, 5MB each</span>
                <input type="file" className="file-input" accept="image/*" multiple />
              </div>
            </div>

            <div className="form-actions mt-8">
              <button type="submit" className="btn btn-primary w-full justify-center text-lg py-3">
                Submit for Review
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
