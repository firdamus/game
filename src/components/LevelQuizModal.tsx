import React, { useState } from 'react';
import type { GameLevel } from '../data/gameLevels';
import { sound } from '../utils/sound';
import { triggerHaptic } from '../utils/haptics';

interface LevelQuizModalProps {
  isOpen: boolean;
  level: GameLevel;
  onClose: () => void;
  onCompleteLevel: (levelId: number, starsEarned: number, coins: number, diamonds: number) => void;
}

export const LevelQuizModal: React.FC<LevelQuizModalProps> = ({
  isOpen,
  level,
  onClose,
  onCompleteLevel
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showFinished, setShowFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);

  if (!isOpen) return null;

  const currentQuestion = level.questions[currentStepIndex];

  const handleSelectOption = (index: number) => {
    if (selectedOption !== null) return;
    triggerHaptic();
    setSelectedOption(index);

    const isCorrect = currentQuestion.options[index].isCorrect;
    if (isCorrect) {
      sound.playCorrect();
      setCorrectCount((prev) => prev + 1);
    } else {
      sound.playWrong();
    }
  };

  const handleNextQuestion = () => {
    sound.playTap();
    setShowHint(false);
    setSelectedOption(null);

    if (currentStepIndex + 1 < level.questions.length) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Completed!
      sound.playStar();
      setShowFinished(true);
      const calculatedStars = Math.max(1, Math.min(3, Math.round(((correctCount + (currentQuestion.options[selectedOption ?? 0]?.isCorrect ? 1 : 0)) / level.questions.length) * 3)));
      onCompleteLevel(level.id, calculatedStars, level.rewardCoins, level.rewardDiamonds);
    }
  };

  const handleRestart = () => {
    sound.playTap();
    setCurrentStepIndex(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setShowFinished(false);
    setShowHint(false);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card quiz-game-modal" onClick={(e) => e.stopPropagation()}>
        {/* Game Header */}
        <div className="quiz-header">
          <div className="quiz-header-info">
            <span className="quiz-level-badge">Level {level.id}</span>
            <h3 className="quiz-level-title">{level.title}</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {!showFinished ? (
          <div className="quiz-body">
            {/* Progress indicators */}
            <div className="quiz-progress-dots">
              {level.questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`quiz-dot ${
                    idx === currentStepIndex
                      ? 'current'
                      : idx < currentStepIndex
                      ? 'done'
                      : ''
                  }`}
                />
              ))}
            </div>

            <div className="quiz-step-label">
              Soal {currentStepIndex + 1} dari {level.questions.length}
            </div>

            {/* Shape illustration */}
            <div className="quiz-visual-stage">
              {currentQuestion.shapePreviewType === 'triangle' && (
                <svg width="120" height="120" viewBox="0 0 100 100" className="shape-bouncing">
                  <polygon points="50,15 90,85 10,85" fill="#f59e0b" stroke="#1e293b" strokeWidth="4" />
                  <circle cx="42" cy="55" r="5" fill="#fff" />
                  <circle cx="42" cy="55" r="2.5" fill="#000" />
                  <circle cx="58" cy="55" r="5" fill="#fff" />
                  <circle cx="58" cy="55" r="2.5" fill="#000" />
                  <path d="M 44 68 Q 50 74 56 68" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              )}
              {currentQuestion.shapePreviewType === 'square' && (
                <svg width="110" height="110" viewBox="0 0 100 100" className="shape-bouncing">
                  <rect x="15" y="15" width="70" height="70" rx="10" fill="#3b82f6" stroke="#1e293b" strokeWidth="4" />
                  <circle cx="40" cy="45" r="5" fill="#fff" />
                  <circle cx="40" cy="45" r="2.5" fill="#000" />
                  <circle cx="60" cy="45" r="5" fill="#fff" />
                  <circle cx="60" cy="45" r="2.5" fill="#000" />
                  <path d="M 43 60 Q 50 67 57 60" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              )}
              {currentQuestion.shapePreviewType === 'circle' && (
                <svg width="110" height="110" viewBox="0 0 100 100" className="shape-bouncing">
                  <circle cx="50" cy="50" r="38" fill="#ef4444" stroke="#1e293b" strokeWidth="4" />
                  <circle cx="40" cy="45" r="5" fill="#fff" />
                  <circle cx="40" cy="45" r="2.5" fill="#000" />
                  <circle cx="60" cy="45" r="5" fill="#fff" />
                  <circle cx="60" cy="45" r="2.5" fill="#000" />
                  <path d="M 43 62 Q 50 70 57 62" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              )}
            </div>

            {/* Question Text */}
            <div className="quiz-question-box">
              <h4 className="quiz-question-text">{currentQuestion.question}</h4>
            </div>

            {/* Hint Box */}
            {showHint && (
              <div className="quiz-hint-banner">
                💡 <strong>Petunjuk:</strong> {currentQuestion.hint}
              </div>
            )}

            {/* Options list */}
            <div className="quiz-options-list">
              {currentQuestion.options.map((opt, idx) => {
                let btnState = '';
                if (selectedOption !== null) {
                  if (opt.isCorrect) {
                    btnState = 'correct-choice';
                  } else if (idx === selectedOption) {
                    btnState = 'wrong-choice';
                  }
                }
                return (
                  <button
                    key={idx}
                    className={`quiz-choice-btn ${btnState}`}
                    disabled={selectedOption !== null}
                    onClick={() => handleSelectOption(idx)}
                  >
                    <span className="choice-letter">{String.fromCharCode(65 + idx)}</span>
                    <span className="choice-label">{opt.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Next or Hint button */}
            <div className="quiz-footer-actions">
              {selectedOption === null ? (
                <button
                  className="btn-hint-text"
                  onClick={() => {
                    sound.playTap();
                    setShowHint(!showHint);
                  }}
                >
                  {showHint ? 'Sembunyikan Petunjuk' : '💡 Butuh Petunjuk?'}
                </button>
              ) : (
                <button className="btn-primary-action next-step-btn" onClick={handleNextQuestion}>
                  {currentStepIndex + 1 < level.questions.length ? 'Lanjut ke Soal Berikutnya ➔' : 'Lihat Hasil Petualangan 🎉'}
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Finished Victory Screen */
          <div className="quiz-victory-screen">
            <div className="victory-icon-bounce">🏆</div>
            <h3 className="victory-title">Hebat Sekali!</h3>
            <p className="victory-subtitle">Kamu berhasil menyelesaikan petualangan di {level.title}!</p>

            <div className="victory-stars-row">
              <span className="star-big bounce-1">⭐</span>
              <span className="star-big bounce-2">⭐</span>
              <span className="star-big bounce-3">⭐</span>
            </div>

            <div className="victory-rewards-card">
              <div className="reward-chip">
                <span>+{level.rewardCoins}</span>
                <span>⭐ Bintang</span>
              </div>
              <div className="reward-chip">
                <span>+{level.rewardDiamonds}</span>
                <span>💎 Permata</span>
              </div>
            </div>

            <div className="victory-buttons">
              <button className="btn-primary-action" onClick={onClose}>
                Lanjut ke Peta Petualangan 🗺️
              </button>
              <button className="btn-secondary-action" onClick={handleRestart}>
                Mainkan Lagi 🔄
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
