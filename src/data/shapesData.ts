export interface ShapeInfo {
  id: string;
  name: string;
  color: string;
  description: string;
  sifat: string[];
  rumusLuas: string;
  rumusKeliling: string;
  contohNyata: string[];
  quizQuestion: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const shapesData: ShapeInfo[] = [
  {
    id: 'segitiga',
    name: 'Segitiga',
    color: '#f59e0b',
    description: 'Bangun datar yang dibatasi oleh tiga sisi dan memiliki tiga sudut.',
    sifat: [
      'Mempunyai 3 buah sisi',
      'Mempunyai 3 buah titik sudut',
      'Total besar sudut dalamnya selalu 180°',
      'Jenisnya: Segitiga Sama Sisi, Sama Kaki, Siku-siku, Sembarang'
    ],
    rumusLuas: 'L = ½ × alas × tinggi',
    rumusKeliling: 'K = sisi + sisi + sisi',
    contohNyata: ['Potongan Pizza 🍕', 'Atap Rumah 🏠', 'Rambu Lalu Lintas ⚠️', 'Penggaris Segitiga 📐'],
    quizQuestion: {
      question: 'Berapakah jumlah titik sudut yang dimiliki oleh bangun segitiga?',
      options: ['2 sudut', '3 sudut', '4 sudut', '5 sudut'],
      correctIndex: 1,
      explanation: 'Hebat! Segitiga selalu memiliki 3 sisi dan 3 titik sudut.'
    }
  },
  {
    id: 'persegi',
    name: 'Persegi',
    color: '#3b82f6',
    description: 'Bangun datar dengan 4 sisi yang sama panjang dan 4 sudut siku-siku 90°.',
    sifat: [
      'Semua 4 sisinya memiliki panjang yang sama',
      'Memiliki 4 titik sudut siku-siku (90°)',
      'Memiliki 4 sumbu simetri lipat',
      'Memiliki 2 garis diagonal yang berpotongan tegak lurus'
    ],
    rumusLuas: 'L = sisi × sisi (s²)',
    rumusKeliling: 'K = 4 × sisi (4s)',
    contohNyata: ['Papan Catur ♟️', 'Ubin Lantai ⬛', 'Kertas Origami 📄', 'Jendela Kotak 🪟'],
    quizQuestion: {
      question: 'Berapa banyak sisi pada persegi yang memiliki panjang sama?',
      options: ['2 sisi', '3 sisi', '4 sisi semua sama', 'Tidak ada yang sama'],
      correctIndex: 2,
      explanation: 'Tepat sekali! Keempat sisi persegi semuanya sama panjang.'
    }
  },
  {
    id: 'lingkaran',
    name: 'Lingkaran',
    color: '#ef4444',
    description: 'Bangun datar yang terbentuk dari himpunan titik berjarak sama dari titik pusat.',
    sifat: [
      'Hanya memiliki 1 sisi lengkung melingkar',
      'Tidak memiliki titik sudut sama sekali',
      'Memiliki simetri lipat & putar tak terhingga',
      'Memiliki jari-jari (r) dan diameter (d = 2r)'
    ],
    rumusLuas: 'L = π × r² (π = 3,14 atau 22/7)',
    rumusKeliling: 'K = 2 × π × r atau π × d',
    contohNyata: ['Roda Sepeda 🚲', 'Jam Dinding ⏰', 'Koin Uang 🪙', 'Piring Makan 🍽️'],
    quizQuestion: {
      question: 'Berapa banyak titik sudut yang dimiliki bangun lingkaran?',
      options: ['0 titik sudut', '1 titik sudut', '2 titik sudut', 'Tak terhingga'],
      correctIndex: 0,
      explanation: 'Pintar! Lingkaran hanya tersusun dari garis lengkung tertutup tanpa titik sudut.'
    }
  },
  {
    id: 'persegi-panjang',
    name: 'Persegi Panjang',
    color: '#10b981',
    description: 'Bangun datar empat sisi dengan dua pasang sisi sejajar sama panjang dan 4 sudut siku-siku.',
    sifat: [
      'Memiliki 2 pasang sisi sejajar yang sama panjang (panjang & lebar)',
      'Memiliki 4 sudut siku-siku (90°)',
      'Memiliki 2 sumbu simetri lipat',
      'Memiliki 2 diagonal yang sama panjang'
    ],
    rumusLuas: 'L = panjang × lebar (p × l)',
    rumusKeliling: 'K = 2 × (panjang + lebar)',
    contohNyata: ['Pintu Kamar 🚪', 'Layar HP / Tablet 📱', 'Papan Tulis 🏫', 'Uang Kertas 💵'],
    quizQuestion: {
      question: 'Rumus luas persegi panjang dengan panjang p dan lebar l adalah...',
      options: ['p + l', 'p × l', '2 × (p + l)', 'p × p'],
      correctIndex: 1,
      explanation: 'Benar! Luas Persegi Panjang didapat dari perkalian panjang kali lebar (p × l).'
    }
  },
  {
    id: 'trapesium',
    name: 'Trapesium',
    color: '#8b5cf6',
    description: 'Bangun datar segi empat yang memiliki tepat sepasang sisi sejajar.',
    sifat: [
      'Memiliki sepasang sisi yang sejajar berhadapan',
      'Jumlah sudut yang berdekatan di antara sisi sejajar adalah 180°',
      'Jenisnya: Trapesium Sama Kaki, Siku-siku, dan Sembarang'
    ],
    rumusLuas: 'L = ½ × (sisi sejajar a + b) × tinggi',
    rumusKeliling: 'K = jumlah seluruh 4 sisinya',
    contohNyata: ['Perahu Sampan ⛵', 'Atap Gazebo ⛺', 'Tas Jinjing 👜'],
    quizQuestion: {
      question: 'Ciri khas utama bangun datar trapesium adalah...',
      options: ['Semua sisi sama panjang', 'Memiliki sepasang sisi sejajar', 'Memiliki 3 sudut', 'Tidak ada sisi lurus'],
      correctIndex: 1,
      explanation: 'Bagus sekali! Trapesium memiliki sepasang sisi yang saling sejajar.'
    }
  },
  {
    id: 'jajar-genjang',
    name: 'Jajar Genjang',
    color: '#06b6d4',
    description: 'Bangun datar segi empat dengan dua pasang sisi sejajar dan sudut berhadapan sama besar.',
    sifat: [
      'Dua pasang sisi berhadapan sejajar dan sama panjang',
      'Sudut-sudut yang berhadapan sama besar',
      'Sudut yang berdekatan berjumlah 180°',
      'Tidak memiliki sumbu simetri lipat'
    ],
    rumusLuas: 'L = alas × tinggi (a × t)',
    rumusKeliling: 'K = 2 × (sisi a + sisi b)',
    contohNyata: ['Penghapus Miring 🧽', 'Motif Kain Batik 🎨', 'Gedung Arsitektur Modern 🏢'],
    quizQuestion: {
      question: 'Rumus untuk menghitung luas jajar genjang adalah...',
      options: ['alas × tinggi', '½ × alas × tinggi', 'sisi × sisi', 'panjang + lebar'],
      correctIndex: 0,
      explanation: 'Hebat! Rumus luas jajar genjang adalah alas dikalikan tinggi (a × t).'
    }
  }
];
