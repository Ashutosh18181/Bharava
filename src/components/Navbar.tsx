'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Flame, Map, Compass, Film, EyeOff, PlusCircle, BookmarkIcon, Menu, X, Globe, User } from 'lucide-react';
import { useApp, Language } from '@/context/AppContext';
import './Navbar.css';

const NAV_LINKS = [
  { href: '/explore', id: 'explore', icon: Compass },
  { href: '/map', id: 'map', icon: Map },
  { href: '/videos', id: 'videos', icon: Film },
  { href: '/hidden', id: 'hidden', icon: EyeOff },
  { href: '/contribute', id: 'contribute', icon: PlusCircle },
];

const NAV_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: { explore: 'Explore', map: 'Map', videos: 'Videos', hidden: 'Hidden', contribute: 'Contribute', signIn: 'Sign In' },
  hi: { explore: 'खोजें', map: 'नक्शा', videos: 'वीडियो', hidden: 'छिपे हुए', contribute: 'योगदान', signIn: 'साइन इन' },
  od: { explore: 'ଅନ୍ୱେଷଣ', map: 'ମାନଚିତ୍ର', videos: 'ଭିଡିଓ', hidden: 'ଲୁକ୍କାୟିତ', contribute: 'ଯୋଗଦାନ', signIn: 'ସାଇନ୍ ଇନ୍' }
};

const LANG_LABELS: Record<Language, string> = { en: 'English', hi: 'हिन्दी', od: 'ଓଡ଼ିଆ' };
const LANG_SHORT: Record<Language, string> = { en: 'EN', hi: 'हि', od: 'ଓ' };

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, bookmarks } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const t = NAV_TRANSLATIONS[language];

  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="navbar-logo" aria-label="Bharava Home">
          <span className="navbar-logo-icon"><Flame size={18} strokeWidth={2.5} /></span>
          <span className="navbar-logo-text">Bharava</span>
          <span className="navbar-logo-sub">Odisha</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-nav hide-mobile" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, id }) => (
            <Link
              key={href}
              href={href}
              className={`navbar-link ${pathname === href ? 'active' : ''}`}
            >
              {t[id]}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="navbar-actions">
          {/* Language Dropdown */}
          <div 
            className="lang-dropdown-container" 
            ref={langDropdownRef}
            onMouseEnter={() => setLangDropdownOpen(true)}
            onMouseLeave={() => setLangDropdownOpen(false)}
          >
            <button 
              className="lang-dropdown-toggle"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={langDropdownOpen}
            >
              <Globe size={16} />
              <span className="lang-current">{LANG_SHORT[language]}</span>
            </button>
            
            {langDropdownOpen && (
              <div className="lang-dropdown-menu glass">
                <span className="lang-dropdown-header">Select Language</span>
                {(['en', 'hi', 'od'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    className={`lang-dropdown-item ${language === lang ? 'active' : ''}`}
                    onClick={() => {
                      setLanguage(lang);
                      setLangDropdownOpen(false);
                    }}
                  >
                    {LANG_LABELS[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Bookmarks */}
          <Link href="/bookmarks" className="bookmark-nav-btn" aria-label="Bookmarks">
            <BookmarkIcon size={18} />
            {bookmarks.length > 0 && (
              <span className="bookmark-count">{bookmarks.length}</span>
            )}
          </Link>

          {/* Sign In */}
          <Link href="/login" className="login-nav-btn hide-mobile">
            <User size={16} />
            <span>{t['signIn']}</span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-btn show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="mobile-nav show-mobile" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, id, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`mobile-nav-link ${pathname === href ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={16} />
              {t[id]}
            </Link>
          ))}
          <div className="mobile-nav-divider"></div>
          <Link 
            href="/login" 
            className={`mobile-nav-link ${pathname === '/login' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            <User size={16} />
            {t['signIn']}
          </Link>
        </nav>
      )}
    </header>
  );
}
