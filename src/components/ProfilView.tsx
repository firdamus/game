import React from 'react';
import { sound } from '../utils/sound';
import { triggerHaptic } from '../utils/haptics';

interface ProfilViewProps {
  stars: number;
  diamonds: number;
  level: number;
  studentName: string;
  onOpenSettings: () => void;
}

export const ProfilView: React.FC<ProfilViewProps> = ({
  stars,
  diamonds,
  level,
  studentName,
  onOpenSettings
}) => {
  return (
    <div className="tab-view-container profil-view">
      <div className="tab-view-header">
        <div className="profile-header-actions">
          <h2 className="tab-title">👤 Profil Siswa</h2>
          <button
            className="settings-shortcut-btn"
            onClick={() => {
              sound.playTap();
              triggerHaptic();
              onOpenSettings();
            }}
          >
            ⚙️
          </button>
        </div>
        <p className="tab-desc">Kartu capaian belajar dan statistik petualangan</p>
      </div>

      <div className="profil-scroll-area">
        {/* Student ID Card */}
        <div className="student-hero-banner">
          <div className="student-avatar-big">
            <span className="avatar-char">👦🏻</span>
            <span className="avatar-level-float">Lv.{level}</span>
          </div>
          <div className="student-main-details">
            <h3 className="student-full-name">{studentName}</h3>
            <p className="student-grade-badge">Siswa Kelas 4 SD</p>
            <p className="school-text">SD Negeri Edukasi Nusantara</p>
          </div>
        </div>

        {/* Level EXP Progress */}
        <div className="profil-progress-box">
          <div className="progress-label-bar">
            <span>Level {level} Petualang</span>
            <span className="exp-ratio">650 / 1000 EXP</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: '65%' }} />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="profile-stats-dashboard">
          <div className="dash-stat-tile">
            <span className="dash-stat-icon">⭐</span>
            <span className="dash-stat-number">{stars}</span>
            <span className="dash-stat-label">Bintang Terkumpul</span>
          </div>
          <div className="dash-stat-tile">
            <span className="dash-stat-icon">💎</span>
            <span className="dash-stat-number">{diamonds}</span>
            <span className="dash-stat-label">Permata Didapat</span>
          </div>
          <div className="dash-stat-tile">
            <span className="dash-stat-icon">🏆</span>
            <span className="dash-stat-number">4</span>
            <span className="dash-stat-label">Lencana Diraih</span>
          </div>
          <div className="dash-stat-tile">
            <span className="dash-stat-icon">🎯</span>
            <span className="dash-stat-number">94%</span>
            <span className="dash-stat-label">Rata-rata Akurasi</span>
          </div>
        </div>

        {/* Badges showcase */}
        <div className="profil-badges-card">
          <h4 className="badges-card-title">🎖️ Lencana Favorit</h4>
          <div className="badges-inline-row">
            <div className="badge-item-mini" title="Penjelajah Pertama">
              <span>🧭</span>
              <small>Langkah 1</small>
            </div>
            <div className="badge-item-mini" title="Master Segitiga">
              <span>🔺</span>
              <small>Segitiga</small>
            </div>
            <div className="badge-item-mini" title="Kolektor Bintang">
              <span>⭐</span>
              <small>100 Star</small>
            </div>
            <div className="badge-item-mini" title="Pencari Permata">
              <span>💎</span>
              <small>Permata</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
