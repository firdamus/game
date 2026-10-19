export interface QuizStep {
  id: number;
  question: string;
  shapePreviewType: 'triangle' | 'square' | 'circle' | 'rectangle';
  options: { label: string; isCorrect: boolean }[];
  hint: string;
}

export interface GameLevel {
  id: number;
  title: string;
  subtitle: string;
  unlocked: boolean;
  stars: number; // 0 to 3
  rewardCoins: number;
  rewardDiamonds: number;
  questions: QuizStep[];
}

export const initialLevels: GameLevel[] = [
  {
    id: 1,
    title: 'Lembah Segitiga',
    subtitle: 'Mengenal sisi dan sudut segitiga',
    unlocked: true,
    stars: 3,
    rewardCoins: 20,
    rewardDiamonds: 5,
    questions: [
      {
        id: 1,
        question: 'Manakah bentuk yang memiliki 3 sisi dan 3 titik sudut?',
        shapePreviewType: 'triangle',
        options: [
          { label: 'Segitiga 🔺', isCorrect: true },
          { label: 'Lingkaran ⚪', isCorrect: false },
          { label: 'Persegi 🟦', isCorrect: false }
        ],
        hint: 'Perhatikan jumlah sisi dan sudutnya yang berjumlah tiga.'
      },
      {
        id: 2,
        question: 'Benda di bawah ini yang berbentuk segitiga adalah...',
        shapePreviewType: 'triangle',
        options: [
          { label: 'Koin Uang 🪙', isCorrect: false },
          { label: 'Potongan Pizza 🍕', isCorrect: true },
          { label: 'Buku Tulis 📓', isCorrect: false }
        ],
        hint: 'Potongan pizza memiliki bentuk mengerucut dengan 3 sudut.'
      },
      {
        id: 3,
        question: 'Jika alas segitiga 10 cm dan tinggi 6 cm, berapa luasnya? (L = ½ × a × t)',
        shapePreviewType: 'triangle',
        options: [
          { label: '60 cm²', isCorrect: false },
          { label: '30 cm²', isCorrect: true },
          { label: '16 cm²', isCorrect: false }
        ],
        hint: '½ dikalikan 10 adalah 5, kemudian 5 dikalikan 6 = 30.'
      }
    ]
  },
  {
    id: 2,
    title: 'Hutan Persegi',
    subtitle: 'Menjelajahi 4 sisi sama panjang',
    unlocked: true,
    stars: 2,
    rewardCoins: 25,
    rewardDiamonds: 8,
    questions: [
      {
        id: 1,
        question: 'Ciri utama dari bangun persegi adalah...',
        shapePreviewType: 'square',
        options: [
          { label: 'Memiliki 3 sisi melengkung', isCorrect: false },
          { label: 'Keempat sisinya sama panjang', isCorrect: true },
          { label: 'Hanya memiliki 2 sudut', isCorrect: false }
        ],
        hint: 'Semua sisi pada persegi memiliki ukuran yang persis sama.'
      },
      {
        id: 2,
        question: 'Berapakah keliling persegi jika panjang sisinya 7 cm? (K = 4 × s)',
        shapePreviewType: 'square',
        options: [
          { label: '28 cm', isCorrect: true },
          { label: '49 cm', isCorrect: false },
          { label: '21 cm', isCorrect: false }
        ],
        hint: 'Kalikan 4 dengan panjang sisinya: 4 × 7 = 28.'
      }
    ]
  },
  {
    id: 3,
    title: 'Danau Lingkaran',
    subtitle: 'Garis lengkung tanpa sudut',
    unlocked: true,
    stars: 1,
    rewardCoins: 30,
    rewardDiamonds: 10,
    questions: [
      {
        id: 1,
        question: 'Bangun datar yang tidak memiliki titik sudut sama sekali adalah...',
        shapePreviewType: 'circle',
        options: [
          { label: 'Lingkaran ⭕', isCorrect: true },
          { label: 'Segitiga 🔺', isCorrect: false },
          { label: 'Trapesium ⏢', isCorrect: false }
        ],
        hint: 'Bentuk bulat tanpa sudut tajam.'
      },
      {
        id: 2,
        question: 'Jarak dari titik tengah lingkaran ke tepi lingkaran disebut...',
        shapePreviewType: 'circle',
        options: [
          { label: 'Keliling', isCorrect: false },
          { label: 'Jari-jari (r)', isCorrect: true },
          { label: 'Sudut', isCorrect: false }
        ],
        hint: 'Setengah dari garis diameter.'
      }
    ]
  },
  {
    id: 4,
    title: 'Bukit Persegi Panjang',
    subtitle: 'Dua pasang sisi sejajar berhadapan',
    unlocked: false,
    stars: 0,
    rewardCoins: 35,
    rewardDiamonds: 12,
    questions: []
  },
  {
    id: 5,
    title: 'Benteng Trapesium',
    subtitle: 'Tantangan sisi sejajar misterius',
    unlocked: false,
    stars: 0,
    rewardCoins: 40,
    rewardDiamonds: 15,
    questions: []
  },
  {
    id: 6,
    title: 'Puncak Bangun Datar (Boss)',
    subtitle: 'Ujian akhir petualangan geometri',
    unlocked: false,
    stars: 0,
    rewardCoins: 100,
    rewardDiamonds: 50,
    questions: []
  }
];
