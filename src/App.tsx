import { useState, useEffect } from 'react';
import './App.css';
import { type TabType, BottomNav } from './components/BottomNav';
import { HomeLobby } from './components/HomeLobby';
import { PetaView } from './components/PetaView';
import { PrestasiView } from './components/PrestasiView';
import { MateriView } from './components/MateriView';
import { ProfilView } from './components/ProfilView';
import { ShapeModal } from './components/ShapeModal';
import { MisiModal } from './components/MisiModal';
import { SettingsModal } from './components/SettingsModal';
import { ShopModal } from './components/ShopModal';
import { ProfileModal } from './components/ProfileModal';
import { LevelQuizModal } from './components/LevelQuizModal';
import { initialLevels, type GameLevel } from './data/gameLevels';

function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('beranda');

  // Stats from photo: 120 stars, 45 diamonds, Level 3, Rizki
  const [stars, setStars] = useState<number>(() => {
    const saved = localStorage.getItem('game_stars');
    return saved ? parseInt(saved, 10) : 120;
  });

  const [diamonds, setDiamonds] = useState<number>(() => {
    const saved = localStorage.getItem('game_diamonds');
    return saved ? parseInt(saved, 10) : 45;
  });

  const [studentLevel, setStudentLevel] = useState<number>(() => {
    const saved = localStorage.getItem('game_level');
    return saved ? parseInt(saved, 10) : 3;
  });

  const [studentName] = useState<string>('Rizki');

  const [levels, setLevels] = useState<GameLevel[]>(() => {
    const saved = localStorage.getItem('game_levels');
    return saved ? JSON.parse(saved) : initialLevels;
  });

  // Modals state
  const [shapeModalOpen, setShapeModalOpen] = useState(false);
  const [shapeModalId, setShapeModalId] = useState<string>('segitiga');
  const [misiModalOpen, setMisiModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [shopModalOpen, setShopModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [activeQuizLevel, setActiveQuizLevel] = useState<GameLevel>(initialLevels[0]);

  // Persist state changes
  useEffect(() => {
    localStorage.setItem('game_stars', stars.toString());
  }, [stars]);

  useEffect(() => {
    localStorage.setItem('game_diamonds', diamonds.toString());
  }, [diamonds]);

  useEffect(() => {
    localStorage.setItem('game_level', studentLevel.toString());
  }, [studentLevel]);

  useEffect(() => {
    localStorage.setItem('game_levels', JSON.stringify(levels));
  }, [levels]);

  const handleStartAdventure = () => {
    // Start active level or level 1
    const currentLvl = levels.find((l) => l.id === 3) || levels[0];
    setActiveQuizLevel(currentLvl);
    setQuizModalOpen(true);
  };

  const handleSelectLevel = (level: GameLevel) => {
    setActiveQuizLevel(level);
    setQuizModalOpen(true);
  };

  const handleCompleteLevel = (
    levelId: number,
    starsEarned: number,
    coins: number,
    newDiamonds: number
  ) => {
    setStars((prev) => prev + coins);
    setDiamonds((prev) => prev + newDiamonds);

    setLevels((prev) =>
      prev.map((lvl) => {
        if (lvl.id === levelId) {
          return {
            ...lvl,
            stars: Math.max(lvl.stars, starsEarned)
          };
        }
        // Unlock next level
        if (lvl.id === levelId + 1) {
          return {
            ...lvl,
            unlocked: true
          };
        }
        return lvl;
      })
    );
  };

  const handleOpenMateriShape = (shapeId: string) => {
    setShapeModalId(shapeId);
    setShapeModalOpen(true);
  };

  const handleAddRewards = (addedStars: number, addedDiamonds: number) => {
    setStars((prev) => prev + addedStars);
    setDiamonds((prev) => prev + addedDiamonds);
  };

  const handleResetProgress = () => {
    setStars(120);
    setDiamonds(45);
    setStudentLevel(3);
    setLevels(initialLevels);
    localStorage.clear();
  };

  return (
    <div className="mobile-app-shell">
      <main className="mobile-screen-viewport">
        {/* Tab 1: Beranda (Home Lobby with exact photo look) */}
        {currentTab === 'beranda' && (
          <HomeLobby
            onStartAdventure={handleStartAdventure}
            onOpenMateri={() => {
              setShapeModalId('segitiga');
              setShapeModalOpen(true);
            }}
            onOpenMisi={() => setMisiModalOpen(true)}
            onOpenSettings={() => setSettingsModalOpen(true)}
            onOpenShop={() => setShopModalOpen(true)}
            onOpenProfile={() => setProfileModalOpen(true)}
            onTabChange={(tab) => setCurrentTab(tab)}
          />
        )}

        {/* Tab 2: Peta (Adventure Map) */}
        {currentTab === 'peta' && (
          <div className="tab-screen-wrapper">
            <PetaView levels={levels} onSelectLevel={handleSelectLevel} />
            <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
          </div>
        )}

        {/* Tab 3: Prestasi (Trophy & Badges) */}
        {currentTab === 'prestasi' && (
          <div className="tab-screen-wrapper">
            <PrestasiView />
            <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
          </div>
        )}

        {/* Tab 4: Materi (2D Shapes Encyclopedia) */}
        {currentTab === 'materi' && (
          <div className="tab-screen-wrapper">
            <MateriView onOpenShapeModal={handleOpenMateriShape} />
            <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
          </div>
        )}

        {/* Tab 5: Profil (Student Stats) */}
        {currentTab === 'profil' && (
          <div className="tab-screen-wrapper">
            <ProfilView
              stars={stars}
              diamonds={diamonds}
              level={studentLevel}
              studentName={studentName}
              onOpenSettings={() => setSettingsModalOpen(true)}
            />
            <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
          </div>
        )}

        {/* Modals & Dialogs */}
        <ShapeModal
          isOpen={shapeModalOpen}
          initialShapeId={shapeModalId}
          onClose={() => setShapeModalOpen(false)}
        />

        <MisiModal
          isOpen={misiModalOpen}
          onClose={() => setMisiModalOpen(false)}
          onClaimReward={handleAddRewards}
        />

        <SettingsModal
          isOpen={settingsModalOpen}
          onClose={() => setSettingsModalOpen(false)}
          onResetProgress={handleResetProgress}
        />

        <ShopModal
          isOpen={shopModalOpen}
          stars={stars}
          diamonds={diamonds}
          onClose={() => setShopModalOpen(false)}
          onAddRewards={handleAddRewards}
        />

        <ProfileModal
          isOpen={profileModalOpen}
          stars={stars}
          diamonds={diamonds}
          level={studentLevel}
          studentName={studentName}
          onClose={() => setProfileModalOpen(false)}
        />

        <LevelQuizModal
          isOpen={quizModalOpen}
          level={activeQuizLevel}
          onClose={() => setQuizModalOpen(false)}
          onCompleteLevel={handleCompleteLevel}
        />
      </main>
    </div>
  );
}

export default App;
