import { Project, Skill, Education, Experience, Certificate, Organization, UserProfile, ContactMessage, VisitorStat } from '../types';

export const initialProfile: UserProfile = {
  name: 'Mohammad Rifqi Saniy',
  title: 'Web Developer',
  bio: 'Saya adalah seorang pengembang web yang bersemangat dalam membangun aplikasi web yang modern, responsif, dan user friendly.',
  aboutText: 'Saya lulusan Teknik Informatika yang memiliki minat besar di bidang pengembangan web. Saya senang mempelajari hal baru dan selalu tertantang untuk membuat solusi digital yang bermanfaat.',
  email: 'rifqi.saniy@gmail.com',
  phone: '0896-8757-5620',
  location: 'Gresik, Indonesia',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
  resumeUrl: '#',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    email: 'mailto:rifqi.saniy@gmail.com',
  },
};

export const initialSkills: Skill[] = [
  { id: 1, name: 'HTML', level: 95, category: 'Frontend', icon: 'html5', color: 'from-orange-500 to-amber-600' },
  { id: 2, name: 'CSS', level: 90, category: 'Frontend', icon: 'css3', color: 'from-blue-500 to-indigo-600' },
  { id: 3, name: 'JavaScript', level: 85, category: 'Frontend', icon: 'javascript', color: 'from-yellow-400 to-amber-500' },
  { id: 4, name: 'PHP', level: 85, category: 'Backend', icon: 'php', color: 'from-indigo-400 to-purple-600' },
  { id: 5, name: 'MySQL', level: 80, category: 'Database', icon: 'mysql', color: 'from-sky-500 to-blue-700' },
  { id: 6, name: 'Git & GitHub', level: 80, category: 'Tools', icon: 'git', color: 'from-orange-600 to-red-600' },
];

export const initialProjects: Project[] = [
  {
    id: 1,
    title: 'Sistem Pakar Gaya Belajar Siswa',
    category: 'Web Application',
    year: '2024',
    date: '20 Mei 2024',
    description: 'Aplikasi sistem pakar untuk menentukan gaya belajar siswa menggunakan metode forward chaining.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
    demoUrl: 'https://demo.example.com/sistem-pakar',
    detailUrl: '#',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Forward Chaining']
  },
  {
    id: 2,
    title: 'Aplikasi Pemutakhiran Data PKH',
    category: 'Web Application',
    year: '2024',
    date: '15 April 2024',
    description: 'Aplikasi berbasis web untuk membantu petugas dalam memutakhirkan data peserta PKH.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    demoUrl: 'https://demo.example.com/data-pkh',
    detailUrl: '#',
    tags: ['CodeIgniter', 'MySQL', 'JavaScript', 'Tailwind']
  },
  {
    id: 3,
    title: 'Aplikasi Pengirim Pesan SMS',
    category: 'Mobile Application',
    year: '2024',
    date: '10 Maret 2024',
    description: 'Aplikasi android untuk mengirim pesan SMS secara massal dengan mudah dan cepat.',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=600&auto=format&fit=crop',
    demoUrl: 'https://demo.example.com/sms-sender',
    detailUrl: '#',
    tags: ['Android', 'Java', 'SQLite', 'SMS Gateway']
  },
  {
    id: 4,
    title: 'Website Company Profile',
    category: 'Web Application',
    year: '2023',
    date: '12 Des 2023',
    description: 'Website representasi profil perusahaan dengan tampilan modern, katalog produk terpadu, dan form kontak.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
    demoUrl: 'https://demo.example.com/company-profile',
    detailUrl: '#',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP']
  },
  {
    id: 5,
    title: 'Dashboard Administrasi Sekolah',
    category: 'Web Application',
    year: '2023',
    date: '18 Okt 2023',
    description: 'Sistem informasi pengelolaan data guru, murid, jadwal pelajaran, nilai siswa, dan laporan absensi.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    demoUrl: 'https://demo.example.com/sekolah-admin',
    detailUrl: '#',
    tags: ['PHP', 'MySQL', 'AdminLTE', 'jQuery']
  },
  {
    id: 6,
    title: 'E-Commerce UMKM Lokal',
    category: 'Web Application',
    year: '2023',
    date: '05 Agu 2023',
    description: 'Platform jual beli online untuk memberdayakan produk-produk kerajinan tangan khas Jawa Timur.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop',
    demoUrl: 'https://demo.example.com/umkm-store',
    detailUrl: '#',
    tags: ['PHP', 'MySQL', 'Midtrans API', 'Bootstrap']
  },
  {
    id: 7,
    title: 'Sistem Inventaris Gudang',
    category: 'Web Application',
    year: '2022',
    date: '14 Nov 2022',
    description: 'Aplikasi manajemen stok barang, pencatatan supplier, dan pembuatan barcode otomatis.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop',
    demoUrl: 'https://demo.example.com/inventaris',
    detailUrl: '#',
    tags: ['PHP Native', 'MySQL', 'ChartJS']
  }
];

export const initialEducation: Education[] = [
  {
    id: 1,
    institution: 'Universitas Qomaruddin Gresik',
    degree: 'S1 Teknik Informatika',
    period: '2021 - 2025',
    gpa: 'IPK 3.54 / 4.00'
  },
  {
    id: 2,
    institution: 'SMK Negeri 1 Gresik',
    degree: 'Teknik Komputer dan Jaringan',
    period: '2018 - 2021'
  }
];

export const initialExperience: Experience[] = [
  {
    id: 1,
    role: 'Freelance Web Developer',
    companyOrType: 'Self-Employed',
    period: '2024',
    description: 'Mengembangkan beberapa proyek aplikasi web untuk klien secara freelance dengan fokus pada kepuasan klien dan performa aplikasi.'
  },
  {
    id: 2,
    role: 'Magang - Web Developer',
    companyOrType: 'Dinas Komunikasi dan Informatika',
    period: '2023',
    description: 'Melakukan pengembangan dan maintenance sistem informasi berbasis web serta integrasi REST API data publik.'
  }
];

export const initialCertificates: Certificate[] = [
  {
    id: 1,
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Academy',
    year: '2023',
    credentialUrl: '#'
  },
  {
    id: 2,
    title: 'Web Development Fundamentals',
    issuer: 'Coursera Google Certificate',
    year: '2023',
    credentialUrl: '#'
  },
  {
    id: 3,
    title: 'Database MySQL Dasar',
    issuer: 'Skill Academy',
    year: '2023',
    credentialUrl: '#'
  },
  {
    id: 4,
    title: 'Junior Web Developer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2024',
    credentialUrl: '#'
  },
  {
    id: 5,
    title: 'Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Academy',
    year: '2023',
    credentialUrl: '#'
  },
  {
    id: 6,
    title: 'Git & GitHub Workflow',
    issuer: 'Codepolitan',
    year: '2022',
    credentialUrl: '#'
  }
];

export const initialOrganization: Organization[] = [
  {
    id: 1,
    role: 'Anggota Himpunan Mahasiswa Teknik Informatika',
    organization: 'HIMATIF Univ. Qomaruddin',
    period: '2022 - 2023',
    description: 'Berperan aktif dalam berbagai kegiatan organisasi dan kerja sama tim untuk menyukseskan acara dan program kerja mahasiswa.'
  },
  {
    id: 2,
    role: 'Staff Publikasi & Dokumentasi',
    organization: 'BEM Fakultas Teknik',
    period: '2021 - 2022',
    description: 'Bertanggung jawab atas publikasi konten grafis, media sosial, dan dokumentasi event fakultas.'
  }
];

export const initialMessages: ContactMessage[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    email: 'budi.santoso@perusahaan.co.id',
    message: 'Halo Mas Rifqi, kami tertarik mengajak kolaborasi untuk pembuatan sistem informasi internal perusahaan kami. Apakah bersedia meeting minggu depan?',
    date: '18 Sep 2024, 14:30',
    read: false
  },
  {
    id: 2,
    name: 'Anisa Putri',
    email: 'anisa.hrd@technova.id',
    message: 'Selamat siang, saya melihat portofolio Anda di GitHub. Kami sedang mencari Junior Fullstack Developer untuk penempatan Surabaya.',
    date: '12 Sep 2024, 09:15',
    read: true
  }
];

export const initialVisitorStats: VisitorStat[] = [
  { month: 'Mar', visitors: 4 },
  { month: 'Apr', visitors: 8 },
  { month: 'Mei', visitors: 5 },
  { month: 'Jun', visitors: 12 },
  { month: 'Jul', visitors: 17 },
  { month: 'Agu', visitors: 11 },
];
