import React from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  stars: number;
  diamonds: number;
  level: number;
  studentName: string;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  stars,
  diamonds,
  level,
  studentName
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header bg-gradient-profile">
          <div className="modal-title-wrap">
            <span className="sign-icon">🎓</span>
            <div>
              <h2 className="modal-title">Kartu Pelajar</h2>
              <p className="modal-subtitle">Data prestasi dan capaian belajar siswa</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Tutup">
            ✕
          </button>
        </div>

        <div className="modal-scroll-content">
          <div className="profile-identity-card">
            <div className="profile-avatar-large">
              <span className="avatar-img-placeholder">👦🏻</span>
              <div className="level-badge-float">Lv.{level}</div>
            </div>
            <div className="profile-identity-info">
              <h3 className="student-name-text">{studentName}</h3>
              <p className="student-role-text">Siswa Kelas 4 SD</p>
              <div className="student-badge-pill">🏅 Juara Geometri Kelas</div>
            </div>
          </div>

          <div className="profile-exp-card">
            <div className="exp-label-row">
              <span>Progres Level {level}</span>
              <span className="exp-numbers">650 / 1000 EXP</span>
            </div>
            <div className="exp-bar-bg">
              <div className="exp-bar-fill" style={{ width: '65%' }} />
            </div>
            <p className="exp-helper">350 EXP lagi untuk naik ke Level {level + 1}!</p>
          </div>

          <div className="profile-stats-grid">
            <div className="stat-tile">
              <div className="stat-icon">⭐</div>
              <div className="stat-val">{stars}</div>
              <div className="stat-name">Bintang Dikoleksi</div>
            </div>
            <div className="stat-tile">
              <div className="stat-icon">💎</div>
              <div className="stat-val">{diamonds}</div>
              <div className="stat-name">Permata Langka</div>
            </div>
            <div className="stat-tile">
              <div className="stat-icon">🎯</div>
              <div className="stat-val">94%</div>
              <div className="stat-name">Akurasi Jawaban</div>
            </div>
            <div className="stat-tile">
              <div className="stat-icon">🗺️</div>
              <div className="stat-val">3 / 6</div>
              <div className="stat-name">Dunia Ditaklukkan</div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-primary-action" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
