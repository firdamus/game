import React, { useState } from 'react';
import { initialAchievements, type Achievement } from '../data/achievementsData';
import { sound } from '../utils/sound';
import { triggerHaptic } from '../utils/haptics';

interface PrestasiViewProps {
  onClaimBadgeReward?: () => void;
}

export const PrestasiView: React.FC<PrestasiViewProps> = () => {
  const [achievements] = useState<Achievement[]>(initialAchievements);

  const completedCount = achievements.filter((a) => a.completed).length;

  return (
    <div className="tab-view-container prestasi-view">
      <div className="tab-view-header">
        <h2 className="tab-title">🏆 Prestasi & Lencana</h2>
        <p className="tab-desc">
          Kamu telah meraih {completedCount} dari {achievements.length} lencana!
        </p>
      </div>

      <div className="prestasi-scroll-area">
        <div className="achievements-list">
          {achievements.map((item) => (
            <div
              key={item.id}
              className={`achievement-card ${item.completed ? 'completed' : 'in-progress'}`}
              onClick={() => {
                sound.playTap();
                triggerHaptic();
              }}
            >
              <div className="achievement-icon-wrap">
                <span className="achievement-emoji">{item.icon}</span>
                {item.completed && <span className="achievement-check-badge">✓</span>}
              </div>

              <div className="achievement-details">
                <div className="achievement-title-row">
                  <h4 className="achievement-title">{item.title}</h4>
                  <span className="achievement-reward-tag">{item.reward}</span>
                </div>
                <p className="achievement-desc">{item.desc}</p>

                <div className="achievement-progress-wrap">
                  <div className="achievement-bar-bg">
                    <div
                      className="achievement-bar-fill"
                      style={{
                        width: `${Math.min(100, (item.progress / item.maxProgress) * 100)}%`
                      }}
                    />
                  </div>
                  <span className="achievement-bar-count">
                    {item.progress}/{item.maxProgress}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
