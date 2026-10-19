import React, { useState } from 'react';
import { shapesData, type ShapeInfo } from '../data/shapesData';
import { sound } from '../utils/sound';
import { triggerHaptic } from '../utils/haptics';

interface MateriViewProps {
  onOpenShapeModal: (shapeId: string) => void;
}

export const MateriView: React.FC<MateriViewProps> = ({ onOpenShapeModal }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredShapes = shapesData.filter((s) => {
    if (filter === 'all') return true;
    if (filter === 'segi3') return s.id.includes('segitiga');
    if (filter === 'segi4') return s.id.includes('persegi') || s.id.includes('trapesium') || s.id.includes('jajar');
    if (filter === 'lingkaran') return s.id === 'lingkaran';
    return true;
  });

  const handleOpen = (shape: ShapeInfo) => {
    sound.playTap();
    triggerHaptic();
    onOpenShapeModal(shape.id);
  };

  return (
    <div className="tab-view-container materi-view">
      <div className="tab-view-header">
        <h2 className="tab-title">📖 Ensiklopedia Bangun Datar</h2>
        <p className="tab-desc">Pelajari bentuk, sifat-sifat, dan rumus bangun datar!</p>
      </div>

      <div className="materi-filter-row">
        {[
          { id: 'all', label: 'Semua Bentuk' },
          { id: 'segi3', label: 'Segitiga' },
          { id: 'segi4', label: 'Segiempat' },
          { id: 'lingkaran', label: 'Lingkaran' }
        ].map((btn) => (
          <button
            key={btn.id}
            className={`filter-chip ${filter === btn.id ? 'active' : ''}`}
            onClick={() => {
              sound.playTap();
              setFilter(btn.id);
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="materi-scroll-area">
        <div className="shapes-grid">
          {filteredShapes.map((shape) => (
            <div
              key={shape.id}
              className="shape-card-grid-item"
              style={{ borderTopColor: shape.color }}
              onClick={() => handleOpen(shape)}
            >
              <div className="shape-card-top">
                <span className="shape-tag" style={{ backgroundColor: `${shape.color}20`, color: shape.color }}>
                  {shape.name}
                </span>
                <button
                  className="card-audio-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playTap();
                    sound.speak(`${shape.name}. ${shape.description}`);
                  }}
                  title="Dengarkan Suara"
                >
                  🔊
                </button>
              </div>

              <h4 className="card-shape-title">{shape.name}</h4>
              <p className="card-shape-desc">{shape.description}</p>

              <div className="card-formula-box">
                <div className="formula-mini">
                  <strong>Luas:</strong> {shape.rumusLuas}
                </div>
              </div>

              <button className="card-learn-more-btn">Pelajari Lengkap ➔</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
