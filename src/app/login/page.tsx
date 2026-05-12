'use client';

import Link from 'next/link';
import { Flame, ArrowRight, Mail } from 'lucide-react';
import './page.css';

export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        
        {/* Left Side: Info */}
        <div className="auth-info glass">
          <Link href="/" className="auth-logo mb-8 inline-flex items-center gap-2">
            <Flame className="text-gold" size={24} />
            <span className="text-xl font-display font-bold">Bharava</span>
          </Link>
          
          <h1 className="text-display mb-4 text-3xl">Your Gateway to Odisha's Living History</h1>
          <p className="text-secondary mb-8">
            Join thousands of explorers uncovering the untold stories of ancient Kalinga. 
            From the bustling temple streets of Bhubaneswar to the lost jungle forts of Kalahandi.
          </p>
          
          <div className="auth-features">
            <div className="feature-item">
              <div className="feature-icon bg-temple-dim"></div>
              <div>
                <h4 className="text-sm font-bold">Save Your Journey</h4>
                <p className="text-xs text-muted">Bookmark sites and curate your own heritage trails.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon bg-hidden-dim"></div>
              <div>
                <h4 className="text-sm font-bold">Unlock Hidden Gems</h4>
                <p className="text-xs text-muted">Get exclusive access to verified but lesser-known locations.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon bg-cultural-dim"></div>
              <div>
                <h4 className="text-sm font-bold">Contribute to History</h4>
                <p className="text-xs text-muted">Submit local legends for editorial review and publication.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="auth-form-container">
          <div className="auth-form-wrapper glass">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
              <p className="text-sm text-secondary">Sign in to continue your exploration</p>
            </div>

            <div className="social-logins mb-6">
              <button className="btn social-btn w-full justify-center">
                Continue with GitHub
              </button>
              <button className="btn social-btn w-full justify-center mt-3">
                <Mail size={18} /> Continue with Google
              </button>
            </div>

            <div className="auth-divider mb-6">
              <span>OR</span>
            </div>

            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="explorer@example.com" />
              </div>
              <div className="form-group mt-4">
                <div className="flex justify-between items-center">
                  <label htmlFor="password">Password</label>
                  <a href="#" className="text-xs text-gold hover:underline">Forgot password?</a>
                </div>
                <input type="password" id="password" placeholder="••••••••" />
              </div>
              
              <button type="submit" className="btn btn-primary w-full justify-center mt-8 py-3">
                Sign In <ArrowRight size={16} />
              </button>
            </form>

            <p className="text-center text-sm text-secondary mt-6">
              Don't have an account? <a href="#" className="text-gold font-bold hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
