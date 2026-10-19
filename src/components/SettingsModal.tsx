import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { triggerHaptic } from '../utils/haptics';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onResetProgress: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, onResetProgress }) => {
  const [sfx, setSfx] = useState(sound.getSfxEnabled());
  const [voice, setVoice] = useState(sound.getVoiceEnabled());
  const [hapticEnabled, setHapticEnabled] = useState(true);
  const [confirmReset, setConfirmReset] = useState(false);

  if (!isOpen) return null;

  const toggleSfx = () => {
    const next = !sfx;
    setSfx(next);
    sound.setSfxEnabled(next);
    if (next) sound.playTap();
  };

  const toggleVoice = () => {
    const next = !voice;
    setVoice(next);
    sound.setVoiceEnabled(next);
    if (next) sound.speak('Suara narasi edukasi aktif!');
  };

  const toggleHaptic = () => {
    const next = !hapticEnabled;
    setHapticEnabled(next);
    if (next) triggerHaptic();
  };

  const handleReset = () => {
    onResetProgress();
    setConfirmReset(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header bg-gradient-slate">
          <div className="modal-title-wrap">
            <span className="sign-icon">⚙️</span>
            <div>
              <h2 className="modal-title">Pengaturan Game</h2>
              <p className="modal-subtitle">Atur suara, getaran, dan preferensi aplikasi</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Tutup">
            ✕
          </button>
        </div>

        <div className="modal-scroll-content">
          <div className="settings-section">
            <div className="setting-toggle-row">
              <div>
                <div className="setting-label">🔊 Efek Suara (SFX)</div>
                <div className="setting-desc">Suara klik tombol, hadiah, dan kuis</div>
              </div>
              <button
                className={`switch-toggle ${sfx ? 'on' : 'off'}`}
                onClick={toggleSfx}
                aria-label="Toggle SFX"
              >
                <div className="switch-thumb" />
              </button>
            </div>

            <div className="setting-toggle-row">
              <div>
                <div className="setting-label">🗣️ Suara Edukasi</div>
                <div className="setting-desc">Pelafalan nama bangun datar dan sifatnya</div>
              </div>
              <button
                className={`switch-toggle ${voice ? 'on' : 'off'}`}
                onClick={toggleVoice}
                aria-label="Toggle Voice"
              >
                <div className="switch-thumb" />
              </button>
            </div>

            <div className="setting-toggle-row">
              <div>
                <div className="setting-label">📳 Getaran (Haptics)</div>
                <div className="setting-desc">Umpan balik getaran pada perangkat saat disentuh</div>
              </div>
              <button
                className={`switch-toggle ${hapticEnabled ? 'on' : 'off'}`}
                onClick={toggleHaptic}
                aria-label="Toggle Haptics"
              >
                <div className="switch-thumb" />
              </button>
            </div>
          </div>

          <div className="settings-section app-info-card">
            <h4>🎮 Tentang Game</h4>
            <p className="app-info-p"><strong>Judul:</strong> Petualangan Bangun Datar</p>
            <p className="app-info-p"><strong>Versi:</strong> 1.0.0 (Capacitor Mobile Edition)</p>
            <p className="app-info-p"><strong>Tujuan:</strong> Media pembelajaran interaktif matematika geometri bangun datar untuk siswa Sekolah Dasar.</p>
          </div>

          <div className="settings-section reset-zone">
            {!confirmReset ? (
              <button
                className="btn-danger-outline"
                onClick={() => {
                  sound.playTap();
                  setConfirmReset(true);
                }}
              >
                🔄 Reset Semua Progres Game
              </button>
            ) : (
              <div className="confirm-reset-box">
                <p>Yakin ingin mereset semua skor, bintang, dan level ke awal?</p>
                <div className="confirm-btn-row">
                  <button className="btn-danger-confirm" onClick={handleReset}>
                    Ya, Reset
                  </button>
                  <button className="btn-cancel" onClick={() => setConfirmReset(false)}>
                    Batal
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-primary-action" onClick={onClose}>
            Simpan & Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
