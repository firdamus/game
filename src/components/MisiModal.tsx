import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { triggerHaptic } from '../utils/haptics';

interface MisiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimReward: (stars: number, diamonds: number) => void;
}

interface MissionItem {
  id: number;
  title: string;
  desc: string;
  current: number;
  max: number;
  stars: number;
  diamonds: number;
  claimed: boolean;
}

export const MisiModal: React.FC<MisiModalProps> = ({ isOpen, onClose, onClaimReward }) => {
  const [missions, setMissions] = useState<MissionItem[]>([
    {
      id: 1,
      title: 'Petualangan Sempurna',
      desc: 'Selesaikan 3 level dengan nilai sempurna',
      current: 1,
      max: 3,
      stars: 20,
      diamonds: 5,
      claimed: false
    },
    {
      id: 2,
      title: 'Eksplorasi Bentuk',
      desc: 'Pelajari 2 materi bangun datar baru di ensiklopedia',
      current: 2,
      max: 2,
      stars: 15,
      diamonds: 3,
      claimed: false
    },
    {
      id: 3,
      title: 'Tantangan Cepat',
      desc: 'Jawab benar 1 pertanyaan mini kuis bangun datar',
      current: 1,
      max: 1,
      stars: 10,
      diamonds: 2,
      claimed: false
    }
  ]);

  if (!isOpen) return null;

  const handleClaim = (mission: MissionItem) => {
    sound.playStar();
    triggerHaptic();
    onClaimReward(mission.stars, mission.diamonds);
    setMissions((prev) =>
      prev.map((m) => (m.id === mission.id ? { ...m, claimed: true } : m))
    );
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header bg-gradient-blue">
          <div className="modal-title-wrap">
            <span className="sign-icon">📋</span>
            <div>
              <h2 className="modal-title">Misi Hari Ini</h2>
              <p className="modal-subtitle">Selesaikan misi untuk mendapatkan bintang & permata!</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Tutup">
            ✕
          </button>
        </div>

        <div className="modal-scroll-content">
          <div className="missions-list">
            {missions.map((m) => {
              const isReady = m.current >= m.max && !m.claimed;
              return (
                <div key={m.id} className="mission-card-item">
                  <div className="mission-info-header">
                    <div>
                      <h4 className="mission-item-title">{m.title}</h4>
                      <p className="mission-item-desc">{m.desc}</p>
                    </div>
                    <div className="mission-reward-badge">
                      <span>+{m.stars} ⭐</span>
                      <span>+{m.diamonds} 💎</span>
                    </div>
                  </div>

                  <div className="mission-progress-bar-wrap">
                    <div className="mission-bar-bg">
                      <div
                        className="mission-bar-fill"
                        style={{ width: `${Math.min(100, (m.current / m.max) * 100)}%` }}
                      />
                    </div>
                    <span className="mission-progress-text">
                      {m.current}/{m.max}
                    </span>
                  </div>

                  <div className="mission-action-row">
                    {m.claimed ? (
                      <span className="claimed-badge">✓ Sudah Diklaim</span>
                    ) : isReady ? (
                      <button className="claim-reward-btn active-pulse" onClick={() => handleClaim(m)}>
                        🎁 Klaim Hadiah
                      </button>
                    ) : (
                      <span className="in-progress-text">Sedang Berjalan...</span>
                    )}
                  </div>
                </div>
              );
            })}
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
