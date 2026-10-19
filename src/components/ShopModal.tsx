import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { triggerHaptic } from '../utils/haptics';

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  stars: number;
  diamonds: number;
  onAddRewards: (s: number, d: number) => void;
}

export const ShopModal: React.FC<ShopModalProps> = ({
  isOpen,
  onClose,
  stars,
  diamonds,
  onAddRewards
}) => {
  const [claimedDaily, setClaimedDaily] = useState(false);

  if (!isOpen) return null;

  const handleClaimDailyGift = () => {
    if (claimedDaily) return;
    sound.playStar();
    triggerHaptic();
    onAddRewards(50, 10);
    setClaimedDaily(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header bg-gradient-gold">
          <div className="modal-title-wrap">
            <span className="sign-icon">💎</span>
            <div>
              <h2 className="modal-title">Peti Hadiah Edukasi</h2>
              <p className="modal-subtitle">Kumpulkan bintang dan permata untuk prestasimu!</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Tutup">
            ✕
          </button>
        </div>

        <div className="modal-scroll-content">
          <div className="balance-overview-card">
            <div className="balance-item">
              <span className="balance-icon">⭐</span>
              <div>
                <div className="balance-num">{stars}</div>
                <div className="balance-name">Bintang Emas</div>
              </div>
            </div>
            <div className="balance-divider" />
            <div className="balance-item">
              <span className="balance-icon">💎</span>
              <div>
                <div className="balance-num">{diamonds}</div>
                <div className="balance-name">Permata Biru</div>
              </div>
            </div>
          </div>

          <div className="shop-chest-card">
            <div className="chest-visual">🎁</div>
            <div className="chest-info">
              <h4>Hadiah Harian Siswa Rajin</h4>
              <p>Dapatkan 50 ⭐ dan 10 💎 gratis setiap hari belajar matematika!</p>
            </div>
            <button
              className={`claim-chest-btn ${claimedDaily ? 'claimed' : 'ready-pulse'}`}
              disabled={claimedDaily}
              onClick={handleClaimDailyGift}
            >
              {claimedDaily ? 'Sudah Diambil Hari Ini' : 'Buka Peti Gratis!'}
            </button>
          </div>

          <div className="shop-tips-card">
            <h4>💡 Cara Mendapatkan Lebih Banyak:</h4>
            <ul>
              <li>Selesaikan level baru di Peta Petualangan (+20-30 ⭐)</li>
              <li>Jawab kuis dengan akurasi 100% (+5 💎)</li>
              <li>Kerjakan misi harian di papan tugas (+15 ⭐)</li>
            </ul>
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
