import React from 'react';
import { sound } from '../utils/sound';
import { triggerHaptic } from '../utils/haptics';

export type TabType = 'beranda' | 'peta' | 'prestasi' | 'materi' | 'profil';

interface BottomNavProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange }) => {
  const handleSelect = (tab: TabType) => {
    if (tab === currentTab) return;
    sound.playTap();
    triggerHaptic();
    onTabChange(tab);
  };

  return (
    <nav className="bottom-nav-container" aria-label="Navigasi Utama">
      {/* 1. Beranda */}
      <button
        className={`bottom-nav-item ${currentTab === 'beranda' ? 'active' : ''}`}
        onClick={() => handleSelect('beranda')}
        aria-label="Beranda"
      >
        <div className="nav-icon-wrap">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        <span className="nav-label">Beranda</span>
      </button>

      {/* 2. Peta */}
      <button
        className={`bottom-nav-item ${currentTab === 'peta' ? 'active' : ''}`}
        onClick={() => handleSelect('peta')}
        aria-label="Peta"
      >
        <div className="nav-icon-wrap">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
            <line x1="8" y1="2" x2="8" y2="18" />
            <line x1="16" y1="6" x2="16" y2="22" />
          </svg>
        </div>
        <span className="nav-label">Peta</span>
      </button>

      {/* 3. Prestasi */}
      <button
        className={`bottom-nav-item ${currentTab === 'prestasi' ? 'active' : ''}`}
        onClick={() => handleSelect('prestasi')}
        aria-label="Prestasi"
      >
        <div className="nav-icon-wrap">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
            <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>
        </div>
        <span className="nav-label">Prestasi</span>
      </button>

      {/* 4. Materi */}
      <button
        className={`bottom-nav-item ${currentTab === 'materi' ? 'active' : ''}`}
        onClick={() => handleSelect('materi')}
        aria-label="Materi"
      >
        <div className="nav-icon-wrap">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
            <path d="M6 6h10" />
            <path d="M6 10h10" />
          </svg>
        </div>
        <span className="nav-label">Materi</span>
      </button>

      {/* 5. Profil */}
      <button
        className={`bottom-nav-item ${currentTab === 'profil' ? 'active' : ''}`}
        onClick={() => handleSelect('profil')}
        aria-label="Profil"
      >
        <div className="nav-icon-wrap">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <span className="nav-label">Profil</span>
      </button>
    </nav>
  );
};
