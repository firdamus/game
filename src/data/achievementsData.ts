export interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
  progress: number;
  maxProgress: number;
  completed: boolean;
  reward: string;
}

export const initialAchievements: Achievement[] = [
  {
    id: 'first_adventure',
    title: 'Langkah Pertama',
    desc: 'Selesaikan level petualangan pertamamu',
    icon: '🧭',
    progress: 1,
    maxProgress: 1,
    completed: true,
    reward: '+10 ⭐'
  },
  {
    id: 'triangle_master',
    title: 'Penjelajah Segitiga',
    desc: 'Kuasai seluruh kuis di Lembah Segitiga',
    icon: '🔺',
    progress: 3,
    maxProgress: 3,
    completed: true,
    reward: '+20 ⭐'
  },
  {
    id: 'star_collector',
    title: 'Kolektor Bintang',
    desc: 'Kumpulkan total 100 bintang petualangan',
    icon: '⭐',
    progress: 120,
    maxProgress: 100,
    completed: true,
    reward: '+15 💎'
  },
  {
    id: 'diamond_hunter',
    title: 'Pencari Permata',
    desc: 'Kumpulkan 40 permata langka',
    icon: '💎',
    progress: 45,
    maxProgress: 40,
    completed: true,
    reward: '+30 ⭐'
  },
  {
    id: 'daily_hero',
    title: 'Pahlawan Harian',
    desc: 'Selesaikan semua misi harian',
    icon: '📜',
    progress: 1,
    maxProgress: 3,
    completed: false,
    reward: '+25 💎'
  },
  {
    id: 'geometry_king',
    title: 'Raja Bangun Datar',
    desc: 'Buka dan taklukkan semua level di Peta Dunia',
    icon: '👑',
    progress: 3,
    maxProgress: 6,
    completed: false,
    reward: '+100 💎'
  }
];
