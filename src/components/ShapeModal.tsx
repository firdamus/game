import React, { useState } from 'react';
import { shapesData, type ShapeInfo } from '../data/shapesData';
import { sound } from '../utils/sound';
import { triggerHaptic } from '../utils/haptics';

interface ShapeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialShapeId?: string;
}

export const ShapeModal: React.FC<ShapeModalProps> = ({ isOpen, onClose, initialShapeId }) => {
  const [selectedShape, setSelectedShape] = useState<ShapeInfo>(() => {
    return shapesData.find((s) => s.id === initialShapeId) || shapesData[0];
  });
  const [activeTab, setActiveTab] = useState<'sifat' | 'rumus' | 'benda' | 'kuis'>('sifat');
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleSelectShape = (shape: ShapeInfo) => {
    sound.playTap();
    triggerHaptic();
    setSelectedShape(shape);
    setQuizAnswered(null);
  };

  const handleSpeak = () => {
    sound.playTap();
    sound.speak(`${selectedShape.name}. ${selectedShape.description}`);
  };

  const handleAnswerQuiz = (index: number) => {
    triggerHaptic();
    setQuizAnswered(index);
    if (index === selectedShape.quizQuestion.correctIndex) {
      sound.playCorrect();
    } else {
      sound.playWrong();
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header bg-gradient-wood">
          <div className="modal-title-wrap">
            <span className="sign-icon">🪵</span>
            <div>
              <h2 className="modal-title">Kenali Bangun Datar</h2>
              <p className="modal-subtitle">Eksplorasi bentuk, sifat, dan rumus</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Tutup">
            ✕
          </button>
        </div>

        {/* Shape Pills Slider */}
        <div className="shape-pills-row">
          {shapesData.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSelectShape(s)}
              className={`shape-pill-btn ${selectedShape.id === s.id ? 'active' : ''}`}
              style={{
                borderColor: selectedShape.id === s.id ? s.color : '#e2e8f0',
                backgroundColor: selectedShape.id === s.id ? `${s.color}15` : '#ffffff',
                color: selectedShape.id === s.id ? s.color : '#475569'
              }}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="modal-scroll-content">
          {/* Shape Hero Display */}
          <div className="shape-hero-box" style={{ background: `linear-gradient(135deg, ${selectedShape.color}20, #ffffff)` }}>
            <div className="shape-visual-icon">
              {selectedShape.id === 'segitiga' && (
                <svg width="100" height="100" viewBox="0 0 100 100" className="animated-shape">
                  <polygon points="50,15 90,85 10,85" fill={selectedShape.color} stroke="#1e293b" strokeWidth="4" />
                  <circle cx="42" cy="55" r="5" fill="#fff" />
                  <circle cx="42" cy="55" r="2.5" fill="#000" />
                  <circle cx="58" cy="55" r="5" fill="#fff" />
                  <circle cx="58" cy="55" r="2.5" fill="#000" />
                  <path d="M 44 68 Q 50 74 56 68" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              )}
              {selectedShape.id === 'persegi' && (
                <svg width="100" height="100" viewBox="0 0 100 100" className="animated-shape">
                  <rect x="15" y="15" width="70" height="70" rx="10" fill={selectedShape.color} stroke="#1e293b" strokeWidth="4" />
                  <circle cx="40" cy="45" r="5" fill="#fff" />
                  <circle cx="40" cy="45" r="2.5" fill="#000" />
                  <circle cx="60" cy="45" r="5" fill="#fff" />
                  <circle cx="60" cy="45" r="2.5" fill="#000" />
                  <path d="M 43 60 Q 50 67 57 60" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              )}
              {selectedShape.id === 'lingkaran' && (
                <svg width="100" height="100" viewBox="0 0 100 100" className="animated-shape">
                  <circle cx="50" cy="50" r="38" fill={selectedShape.color} stroke="#1e293b" strokeWidth="4" />
                  <circle cx="40" cy="45" r="5" fill="#fff" />
                  <circle cx="40" cy="45" r="2.5" fill="#000" />
                  <circle cx="60" cy="45" r="5" fill="#fff" />
                  <circle cx="60" cy="45" r="2.5" fill="#000" />
                  <path d="M 43 62 Q 50 70 57 62" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              )}
              {selectedShape.id === 'persegi-panjang' && (
                <svg width="120" height="80" viewBox="0 0 120 80" className="animated-shape">
                  <rect x="10" y="15" width="100" height="50" rx="8" fill={selectedShape.color} stroke="#1e293b" strokeWidth="4" />
                  <circle cx="50" cy="38" r="5" fill="#fff" />
                  <circle cx="50" cy="38" r="2.5" fill="#000" />
                  <circle cx="70" cy="38" r="5" fill="#fff" />
                  <circle cx="70" cy="38" r="2.5" fill="#000" />
                  <path d="M 53 52 Q 60 57 67 52" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              )}
              {selectedShape.id === 'trapesium' && (
                <svg width="110" height="90" viewBox="0 0 110 90" className="animated-shape">
                  <polygon points="30,20 80,20 100,75 10,75" fill={selectedShape.color} stroke="#1e293b" strokeWidth="4" />
                  <circle cx="45" cy="45" r="5" fill="#fff" />
                  <circle cx="45" cy="45" r="2.5" fill="#000" />
                  <circle cx="65" cy="45" r="5" fill="#fff" />
                  <circle cx="65" cy="45" r="2.5" fill="#000" />
                  <path d="M 48 60 Q 55 66 62 60" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              )}
              {selectedShape.id === 'jajar-genjang' && (
                <svg width="110" height="90" viewBox="0 0 110 90" className="animated-shape">
                  <polygon points="35,20 100,20 75,75 10,75" fill={selectedShape.color} stroke="#1e293b" strokeWidth="4" />
                  <circle cx="48" cy="45" r="5" fill="#fff" />
                  <circle cx="48" cy="45" r="2.5" fill="#000" />
                  <circle cx="68" cy="45" r="5" fill="#fff" />
                  <circle cx="68" cy="45" r="2.5" fill="#000" />
                  <path d="M 51 60 Q 58 66 65 60" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              )}
            </div>

            <div className="shape-hero-text">
              <div className="shape-title-row">
                <h3 className="shape-main-title">{selectedShape.name}</h3>
                <button className="speak-audio-btn" onClick={handleSpeak} title="Dengarkan Suara">
                  🔊 Suara
                </button>
              </div>
              <p className="shape-main-desc">{selectedShape.description}</p>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="shape-subtabs">
            <button
              className={`shape-subtab-btn ${activeTab === 'sifat' ? 'active' : ''}`}
              onClick={() => {
                sound.playTap();
                setActiveTab('sifat');
              }}
            >
              📋 Sifat-Sifat
            </button>
            <button
              className={`shape-subtab-btn ${activeTab === 'rumus' ? 'active' : ''}`}
              onClick={() => {
                sound.playTap();
                setActiveTab('rumus');
              }}
            >
              📐 Rumus
            </button>
            <button
              className={`shape-subtab-btn ${activeTab === 'benda' ? 'active' : ''}`}
              onClick={() => {
                sound.playTap();
                setActiveTab('benda');
              }}
            >
              🌎 Contoh Nyata
            </button>
            <button
              className={`shape-subtab-btn ${activeTab === 'kuis' ? 'active' : ''}`}
              onClick={() => {
                sound.playTap();
                setActiveTab('kuis');
              }}
            >
              🎯 Mini Kuis
            </button>
          </div>

          {/* Tab Content */}
          <div className="shape-detail-card">
            {activeTab === 'sifat' && (
              <ul className="sifat-list">
                {selectedShape.sifat.map((item, idx) => (
                  <li key={idx} className="sifat-item">
                    <span className="sifat-bullet" style={{ backgroundColor: selectedShape.color }}>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'rumus' && (
              <div className="rumus-container">
                <div className="rumus-box">
                  <div className="rumus-label">Luas Bangun:</div>
                  <div className="rumus-value">{selectedShape.rumusLuas}</div>
                </div>
                <div className="rumus-box">
                  <div className="rumus-label">Keliling Bangun:</div>
                  <div className="rumus-value">{selectedShape.rumusKeliling}</div>
                </div>
              </div>
            )}

            {activeTab === 'benda' && (
              <div className="contoh-grid">
                {selectedShape.contohNyata.map((contoh, idx) => (
                  <div key={idx} className="contoh-card">
                    <span className="contoh-text">{contoh}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'kuis' && (
              <div className="mini-quiz-box">
                <p className="quiz-q-text">{selectedShape.quizQuestion.question}</p>
                <div className="quiz-opts-col">
                  {selectedShape.quizQuestion.options.map((opt, idx) => {
                    let optClass = 'quiz-opt-btn';
                    if (quizAnswered !== null) {
                      if (idx === selectedShape.quizQuestion.correctIndex) {
                        optClass += ' correct';
                      } else if (idx === quizAnswered) {
                        optClass += ' wrong';
                      }
                    }
                    return (
                      <button
                        key={idx}
                        className={optClass}
                        disabled={quizAnswered !== null}
                        onClick={() => handleAnswerQuiz(idx)}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {quizAnswered !== null && (
                  <div className={`quiz-feedback-box ${quizAnswered === selectedShape.quizQuestion.correctIndex ? 'success' : 'warn'}`}>
                    {quizAnswered === selectedShape.quizQuestion.correctIndex ? '🎉 ' : '💡 '}
                    {selectedShape.quizQuestion.explanation}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn-primary-action" onClick={onClose}>
            Kembali ke Petualangan
          </button>
        </div>
      </div>
    </div>
  );
};
