import React from 'react';
import type { GameLevel } from '../data/gameLevels';
import { sound } from '../utils/sound';
import { triggerHaptic } from '../utils/haptics';

interface PetaViewProps {
  levels: GameLevel[];
  onSelectLevel: (level: GameLevel) => void;
}

export const PetaView: React.FC<PetaViewProps> = ({ levels, onSelectLevel }) => {
  const handleLevelClick = (level: GameLevel) => {
    triggerHaptic();
    if (!level.unlocked) {
      sound.playWrong();
      return;
    }
    sound.playTap();
    onSelectLevel(level);
  };

  return (
    <div className="tab-view-container peta-view">
      <div className="tab-view-header">
        <h2 className="tab-title">🗺️ Peta Petualangan</h2>
        <p className="tab-desc">Pilih level untuk menjelajahi dunia geometri!</p>
      </div>

      <div className="peta-scroll-area">
        <div className="peta-path-track">
          {levels.map((lvl, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={lvl.id}
                className={`peta-level-node-wrap ${isLeft ? 'align-left' : 'align-right'}`}
              >
                <button
                  className={`peta-node-btn ${lvl.unlocked ? 'unlocked' : 'locked'} ${
                    lvl.id === 3 ? 'current-pulse' : ''
                  }`}
                  onClick={() => handleLevelClick(lvl)}
                >
                  <div className="node-icon-circle">
                    {lvl.unlocked ? (
                      <span className="node-number">{lvl.id}</span>
                    ) : (
                      <span className="node-lock">🔒</span>
                    )}
                  </div>

                  <div className="node-info">
                    <h4 className="node-title">{lvl.title}</h4>
                    <p className="node-subtitle">{lvl.subtitle}</p>
                    {lvl.unlocked && (
                      <div className="node-stars-row">
                        {[1, 2, 3].map((starNum) => (
                          <span
                            key={starNum}
                            className={`node-star ${starNum <= lvl.stars ? 'active' : 'inactive'}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
