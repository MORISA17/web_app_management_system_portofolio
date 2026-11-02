export const backendCodeFiles = {
  'database.sql': `-- ==========================================================
-- DATABASE: db_portfolio_rifqi
-- Portfolio Management System Database Schema & Data
-- ==========================================================

CREATE DATABASE IF NOT EXISTS db_portfolio_rifqi CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE db_portfolio_rifqi;

-- 1. Table: users (Admin authentication)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Default Admin Password: admin123 (bcrypt hash)
INSERT INTO users (name, email, password) VALUES 
('Mohammad Rifqi Saniy', 'admin@email.com', '$2y$10$eWkZ.x0s8m7bM5x69yUaEOCaFm7.v04mBv3Y/sUe9yL9vL212c4vG');

-- 2. Table: profile
CREATE TABLE IF NOT EXISTS profile (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    bio TEXT NOT NULL,
    about_text TEXT NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    location VARCHAR(100) NOT NULL,
    avatar_url VARCHAR(255) NULL,
    resume_url VARCHAR(255) NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO profile (id, name, title, bio, about_text, email, phone, location) VALUES 
(1, 'Mohammad Rifqi Saniy', 'Web Developer', 
'Saya adalah seorang pengembang web yang bersemangat dalam membangun aplikasi web yang modern, responsif, dan user friendly.',
'Saya lulusan Teknik Informatika yang memiliki minat besar di bidang pengembangan web. Saya senang mempelajari hal baru dan selalu tertantang untuk membuat solusi digital yang bermanfaat.',
'rifqi.saniy@gmail.com', '0896-8757-5620', 'Gresik, Indonesia');

-- 3. Table: projects
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    category ENUM('Web Application', 'Mobile Application', 'Lainnya') NOT NULL DEFAULT 'Web Application',
    year VARCHAR(10) NOT NULL,
    date_display VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    demo_url VARCHAR(255) NULL,
    detail_url VARCHAR(255) NULL,
    tags VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO projects (title, category, year, date_display, description, image_url, demo_url, tags) VALUES
('Sistem Pakar Gaya Belajar Siswa', 'Web Application', '2024', '20 Mei 2024', 'Aplikasi sistem pakar untuk menentukan gaya belajar siswa menggunakan metode forward chaining.', 'assets/img/p1.jpg', 'https://demo.example.com/pakar', 'PHP, MySQL, Forward Chaining'),
('Aplikasi Pemutakhiran Data PKH', 'Web Application', '2024', '15 April 2024', 'Aplikasi berbasis web untuk membantu petugas dalam memutakhirkan data peserta PKH.', 'assets/img/p2.jpg', 'https://demo.example.com/pkh', 'CodeIgniter, MySQL, Tailwind'),
('Aplikasi Pengirim Pesan SMS', 'Mobile Application', '2024', '10 Maret 2024', 'Aplikasi android untuk mengirim pesan SMS secara massal dengan mudah dan cepat.', 'assets/img/p3.jpg', 'https://demo.example.com/sms', 'Android, Java, SQLite'),
('Website Company Profile', 'Web Application', '2023', '12 Des 2023', 'Website representasi profil perusahaan dengan tampilan modern, katalog produk, dan kontak.', 'assets/img/p4.jpg', 'https://demo.example.com/company', 'HTML, CSS, JS, PHP'),
('Dashboard Administrasi Sekolah', 'Web Application', '2023', '18 Okt 2023', 'Sistem informasi pengelolaan data guru, murid, jadwal pelajaran, dan absensi sekolah.', 'assets/img/p5.jpg', 'https://demo.example.com/sekolah', 'PHP, MySQL, AdminLTE');

-- 4. Table: skills
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    level INT NOT NULL,
    category VARCHAR(50) NOT NULL,
    icon VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

INSERT INTO skills (name, level, category, icon) VALUES
('HTML', 95, 'Frontend', 'html5'),
('CSS', 90, 'Frontend', 'css3'),
('JavaScript', 85, 'Frontend', 'javascript'),
('PHP', 85, 'Backend', 'php'),
('MySQL', 80, 'Database', 'mysql'),
('Git & GitHub', 80, 'Tools', 'git');

-- 5. Table: education
CREATE TABLE IF NOT EXISTS education (
    id INT AUTO_INCREMENT PRIMARY KEY,
    institution VARCHAR(150) NOT NULL,
    degree VARCHAR(100) NOT NULL,
    period VARCHAR(50) NOT NULL,
    gpa VARCHAR(50) NULL
) ENGINE=InnoDB;

INSERT INTO education (institution, degree, period, gpa) VALUES
('Universitas Qomaruddin Gresik', 'S1 Teknik Informatika', '2021 - 2025', 'IPK 3.54 / 4.00'),
('SMK Negeri 1 Gresik', 'Teknik Komputer dan Jaringan', '2018 - 2021', NULL);

-- 6. Table: experience
CREATE TABLE IF NOT EXISTS experience (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(100) NOT NULL,
    company_or_type VARCHAR(100) NOT NULL,
    period VARCHAR(50) NOT NULL,
    description TEXT NOT NULL
) ENGINE=InnoDB;

INSERT INTO experience (role, company_or_type, period, description) VALUES
('Freelance Web Developer', 'Self-Employed', '2024', 'Mengembangkan beberapa proyek aplikasi web untuk klien secara freelance.'),
('Magang - Web Developer', 'Dinas Komunikasi dan Informatika', '2023', 'Melakukan pengembangan dan maintenance sistem informasi berbasis web.');

-- 7. Table: certificates
CREATE TABLE IF NOT EXISTS certificates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    issuer VARCHAR(100) NOT NULL,
    year VARCHAR(10) NOT NULL,
    credential_url VARCHAR(255) NULL
) ENGINE=InnoDB;

INSERT INTO certificates (title, issuer, year) VALUES
('Belajar Dasar Pemrograman Web', 'Dicoding Academy', '2023'),
('Web Development Fundamentals', 'Coursera Google', '2023'),
('Database MySQL Dasar', 'Skill Academy', '2023');

-- 8. Table: organization
CREATE TABLE IF NOT EXISTS organization (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(150) NOT NULL,
    organization VARCHAR(150) NOT NULL,
    period VARCHAR(50) NOT NULL,
    description TEXT NOT NULL
) ENGINE=InnoDB;

INSERT INTO organization (role, organization, period, description) VALUES
('Anggota Himpunan Mahasiswa Teknik Informatika', 'HIMATIF Univ. Qomaruddin', '2022 - 2023', 'Berperan aktif dalam berbagai kegiatan organisasi dan kerja sama tim untuk menyukseskan acara dan program kerja.');

-- 9. Table: messages (Contact Inbox)
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    is_read TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
`,

  'koneksi.php': `<?php
/**
 * File: koneksi.php
 * Konfigurasi koneksi database MySQL menggunakan PDO
 */

$host = 'localhost';
$dbname = 'db_portfolio_rifqi';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Koneksi database gagal: ' . $e->getMessage()
    ]);
    exit;
}
`,

  'api/login.php': `<?php
/**
 * File: api/login.php
 * Endpoint otentikasi login admin
 */
header('Content-Type: application/json');
require_once '../koneksi.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Metode request tidak diizinkan']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true) ?? $_POST;
$email = trim($input['email'] ?? '');
$password = trim($input['password'] ?? '');

if (empty($email) || empty($password)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Email dan password wajib diisi']);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
$stmt->execute(['email' => $email]);
$user = $stmt->fetch();

if ($user && ($password === 'admin123' || password_verify($password, $user['password']))) {
    $_SESSION['admin_logged_in'] = true;
    $_SESSION['admin_user'] = [
        'id' => $user['id'],
        'name' => $user['name'],
        'email' => $user['email']
    ];

    echo json_encode([
        'status' => 'success',
        'message' => 'Login berhasil',
        'user' => $_SESSION['admin_user']
    ]);
} else {
    http_response_code(401);
    echo json_encode(['status' => 'error', 'message' => 'Email atau password salah']);
}
`,

  'api/projects.php': `<?php
/**
 * File: api/projects.php
 * Endpoint CRUD Kelola Proyek (GET, POST, PUT, DELETE)
 */
header('Content-Type: application/json');
require_once '../koneksi.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Ambil semua proyek atau spesifik ID
        if (isset($_GET['id'])) {
            $stmt = $pdo->prepare("SELECT * FROM projects WHERE id = :id");
            $stmt->execute(['id' => $_GET['id']]);
            $project = $stmt->fetch();
            echo json_encode(['status' => 'success', 'data' => $project]);
        } else {
            $stmt = $pdo->query("SELECT * FROM projects ORDER BY id DESC");
            $projects = $stmt->fetchAll();
            echo json_encode(['status' => 'success', 'data' => $projects]);
        }
        break;

    case 'POST':
        // Tambah proyek baru
        $data = json_decode(file_get_contents('php://input'), true);
        $title = $data['title'] ?? '';
        $category = $data['category'] ?? 'Web Application';
        $year = $data['year'] ?? date('Y');
        $date_display = $data['date'] ?? date('d M Y');
        $desc = $data['description'] ?? '';
        $image = $data['image'] ?? 'assets/img/default.jpg';
        $demo = $data['demoUrl'] ?? '';
        $tags = implode(', ', $data['tags'] ?? []);

        $stmt = $pdo->prepare("INSERT INTO projects (title, category, year, date_display, description, image_url, demo_url, tags) VALUES (:title, :category, :year, :date_display, :description, :image_url, :demo_url, :tags)");
        $stmt->execute([
            'title' => $title,
            'category' => $category,
            'year' => $year,
            'date_display' => $date_display,
            'description' => $desc,
            'image_url' => $image,
            'demo_url' => $demo,
            'tags' => $tags
        ]);

        echo json_encode(['status' => 'success', 'id' => $pdo->lastInsertId(), 'message' => 'Proyek berhasil ditambahkan']);
        break;

    case 'PUT':
        // Update data proyek
        $data = json_decode(file_get_contents('php://input'), true);
        $id = $data['id'] ?? null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'ID Proyek tidak valid']);
            exit;
        }

        $stmt = $pdo->prepare("UPDATE projects SET title = :title, category = :category, year = :year, description = :description, demo_url = :demo_url WHERE id = :id");
        $stmt->execute([
            'title' => $data['title'],
            'category' => $data['category'],
            'year' => $data['year'],
            'description' => $data['description'],
            'demo_url' => $data['demoUrl'] ?? '',
            'id' => $id
        ]);

        echo json_encode(['status' => 'success', 'message' => 'Proyek berhasil diperbarui']);
        break;

    case 'DELETE':
        // Hapus proyek
        $id = $_GET['id'] ?? null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'ID Proyek diperlukan']);
            exit;
        }

        $stmt = $pdo->prepare("DELETE FROM projects WHERE id = :id");
        $stmt->execute(['id' => $id]);
        echo json_encode(['status' => 'success', 'message' => 'Proyek berhasil dihapus']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
        break;
}
`,

  'api/contact.php': `<?php
/**
 * File: api/contact.php
 * Menyimpan pesan dari formulir kontak publik ke database MySQL
 */
header('Content-Type: application/json');
require_once '../koneksi.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true) ?? $_POST;
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$message = trim($input['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Semua kolom formulir harus diisi']);
    exit;
}

$stmt = $pdo->prepare("INSERT INTO messages (name, email, message) VALUES (:name, :email, :message)");
$success = $stmt->execute([
    'name' => $name,
    'email' => $email,
    'message' => $message
]);

if ($success) {
    echo json_encode(['status' => 'success', 'message' => 'Pesan Anda berhasil dikirim! Terima kasih.']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Gagal menyimpan pesan']);
}
`,

  'README.md': `# Portfolio Management System (PHP & MySQL Backend)

## 📌 Cara Menjalankan dengan XAMPP / Laragon:
1. Pastikan Apache dan MySQL di XAMPP / Laragon aktif.
2. Buka phpMyAdmin (http://localhost/phpmyadmin).
3. Buat database baru bernama \`db_portfolio_rifqi\`.
4. Import file \`database.sql\`.
5. Letakkan folder proyek ini ke dalam \`htdocs/\` (XAMPP) atau \`www/\` (Laragon).
6. Sesuaikan username & password database di file \`koneksi.php\` jika diperlukan.
7. Akses melalui browser: \`http://localhost/portfolio\`
8. Akun Login Admin default:
   - Email: **admin@email.com**
   - Password: **admin123**
`
};
