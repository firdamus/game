import React, { useState } from 'react';
import type { TabType } from './BottomNav';
import { sound } from '../utils/sound';
import { triggerHaptic } from '../utils/haptics';

interface HomeLobbyProps {
  onStartAdventure: () => void;
  onOpenMateri: () => void;
  onOpenMisi: () => void;
  onOpenSettings: () => void;
  onOpenShop: () => void;
  onOpenProfile: () => void;
  onTabChange: (tab: TabType) => void;
}

export const HomeLobby: React.FC<HomeLobbyProps> = ({
  onStartAdventure,
  onOpenMateri,
  onOpenMisi,
  onOpenSettings,
  onOpenShop,
  onOpenProfile,
  onTabChange
}) => {
  const [mascotBounce, setMascotBounce] = useState(false);
  const [mascotBubble, setMascotBubble] = useState<string | null>(null);

  const handleMascotClick = () => {
    sound.playJump();
    triggerHaptic();
    setMascotBounce(true);
    const quotes = [
      'Halo! Aku Si Segitiga! Ayo bertualang! 🔺',
      'Aku punya 3 sisi dan 3 sudut lho! ✨',
      'Siap taklukkan Lembah Segitiga? 🚀',
      'Ayo kumpulkan semua bintang emas! ⭐'
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    setMascotBubble(quote);
    sound.speak('Halo! Aku Si Segitiga! Ayo bertualang bersamaku!');

    setTimeout(() => {
      setMascotBounce(false);
    }, 600);

    setTimeout(() => {
      setMascotBubble(null);
    }, 3500);
  };

  const handleStartClick = () => {
    sound.playTap();
    triggerHaptic();
    onStartAdventure();
  };

  const handleSignpostClick = () => {
    sound.playTap();
    triggerHaptic();
    onOpenMateri();
  };

  const handleMisiClick = () => {
    sound.playTap();
    triggerHaptic();
    onOpenMisi();
  };

  const handleSettingsClick = () => {
    sound.playTap();
    triggerHaptic();
    onOpenSettings();
  };

  const handleShopClick = () => {
    sound.playTap();
    triggerHaptic();
    onOpenShop();
  };

  const handleProfileClick = () => {
    sound.playTap();
    triggerHaptic();
    onOpenProfile();
  };

  return (
    <div className="home-lobby-wrapper">
      {/* Background artwork */}
      <img
        src="/lobby_background.jpg"
        alt="Petualangan Bangun Datar"
        className="home-background-img"
        draggable={false}
      />

      {/* Interactive Overlays aligned precisely with 9:16 layout */}
      <div className="home-overlay-layer">
        {/* 1. Profile Capsule Hotspot */}
        <button
          className="hotspot-btn profile-hotspot"
          onClick={handleProfileClick}
          title="Lihat Profil Siswa"
          aria-label="Profil Siswa Rizki Level 3"
        >
          <span className="hotspot-ping" />
        </button>

        {/* 2. Star Pill Hotspot */}
        <button
          className="hotspot-btn star-hotspot"
          onClick={handleShopClick}
          title="Buka Peti Bintang"
          aria-label="120 Bintang"
        >
          <span className="hotspot-ping" />
        </button>

        {/* 3. Diamond Pill Hotspot */}
        <button
          className="hotspot-btn diamond-hotspot"
          onClick={handleShopClick}
          title="Buka Peti Permata"
          aria-label="45 Permata"
        >
          <span className="hotspot-ping" />
        </button>

        {/* 4. Settings Gear Hotspot */}
        <button
          className="hotspot-btn settings-hotspot"
          onClick={handleSettingsClick}
          title="Buka Pengaturan"
          aria-label="Pengaturan"
        >
          <span className="hotspot-ping" />
        </button>

        {/* 5. Daily Mission Card Hotspot */}
        <button
          className="hotspot-btn mission-hotspot"
          onClick={handleMisiClick}
          title="Buka Misi Hari Ini"
          aria-label="Misi Hari Ini"
        >
          <span className="hotspot-ripple-border" />
        </button>

        {/* 6. Big "Mulai Petualangan" Button Hotspot */}
        <button
          className="hotspot-btn start-adventure-hotspot"
          onClick={handleStartClick}
          title="Mulai Petualangan!"
          aria-label="Mulai Petualangan"
        >
          <span className="start-btn-glow" />
          <span className="start-btn-shimmer" />
        </button>

        {/* 7. Wooden Signpost ("Kenali Bangun Datar") Hotspot */}
        <button
          className="hotspot-btn signpost-hotspot"
          onClick={handleSignpostClick}
          title="Kenali Bangun Datar"
          aria-label="Kenali Bangun Datar"
        >
          <span className="signpost-indicator">
            <span className="arrow-pulse">➔</span>
          </span>
        </button>

        {/* 8. Mascot (Walking Yellow Triangle) Interactive Character */}
        <button
          className={`hotspot-btn mascot-hotspot ${mascotBounce ? 'bouncing' : ''}`}
          onClick={handleMascotClick}
          title="Sapa Si Segitiga!"
          aria-label="Maskot Segitiga"
        >
          {mascotBubble && (
            <div className="mascot-speech-bubble">
              <span>{mascotBubble}</span>
              <div className="bubble-tail" />
            </div>
          )}
        </button>

        {/* 9. Bottom Navigation Bar Hotspots */}
        <div className="bottom-nav-hotspots">
          <button
            className="bnav-hotspot active"
            onClick={() => onTabChange('beranda')}
            title="Beranda"
            aria-label="Beranda"
          />
          <button
            className="bnav-hotspot"
            onClick={() => {
              sound.playTap();
              triggerHaptic();
              onTabChange('peta');
            }}
            title="Peta Petualangan"
            aria-label="Peta"
          />
          <button
            className="bnav-hotspot"
            onClick={() => {
              sound.playTap();
              triggerHaptic();
              onTabChange('prestasi');
            }}
            title="Prestasi & Lencana"
            aria-label="Prestasi"
          />
          <button
            className="bnav-hotspot"
            onClick={() => {
              sound.playTap();
              triggerHaptic();
              onTabChange('materi');
            }}
            title="Materi Bangun Datar"
            aria-label="Materi"
          />
          <button
            className="bnav-hotspot"
            onClick={() => {
              sound.playTap();
              triggerHaptic();
              onTabChange('profil');
            }}
            title="Profil Siswa"
            aria-label="Profil"
          />
        </div>
      </div>
    </div>
  );
};
