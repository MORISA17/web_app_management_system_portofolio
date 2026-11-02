import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SkillIcon } from './SkillIcons';
import { Project } from '../../types';
import {
  User,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Github,
  Linkedin,
  Instagram,
  ArrowUp,
  Sparkles,
  Layers,
  Code2,
  Send,
  CheckCircle2,
  X,
  Menu
} from 'lucide-react';

export const PublicPortfolioView: React.FC = () => {
  const {
    profile,
    projects,
    skills,
    education,
    experience,
    certificates,
    organizations,
    addMessage,
    setViewMode,
  } = useApp();

  // Mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Project Category Filter
  const [activeCategory, setActiveCategory] = useState<'Semua' | 'Web' | 'Mobile' | 'Lainnya'>('Semua');

  // Project Detail Modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Certificates Modal
  const [showAllCerts, setShowAllCerts] = useState(false);

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessageText, setContactMessageText] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'Semua') return true;
    if (activeCategory === 'Web') return p.category === 'Web Application';
    if (activeCategory === 'Mobile') return p.category === 'Mobile Application';
    return p.category === 'Lainnya';
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessageText.trim()) return;

    setSubmitting(true);
    setTimeout(() => {
      addMessage({
        name: contactName,
        email: contactEmail,
        message: contactMessageText,
      });
      setSubmitting(false);
      setFormSubmitted(true);
      setContactName('');
      setContactEmail('');
      setContactMessageText('');
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 400);
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* 1. Header / Navbar */}
      <header className="sticky top-14 z-40 bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2 hover:opacity-90 transition"
          >
            <span className="text-indigo-400">&lt;</span>
            <span>MyPortfolio</span>
            <span className="text-indigo-400">/&gt;</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('home')} className="hover:text-indigo-400 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-indigo-400 transition">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-indigo-400 transition">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-indigo-400 transition">
              Projects
            </button>
            <button onClick={() => scrollToSection('certificates')} className="hover:text-indigo-400 transition">
              Certificates
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-400 transition">
              Contact
            </button>
          </nav>

          {/* Actions: Admin Portal CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode('admin')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/90 text-indigo-300 hover:bg-indigo-600 hover:text-white border border-slate-700 transition"
            >
              <span>Login Admin</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-sm text-slate-200 hover:text-indigo-400"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-sm text-slate-200 hover:text-indigo-400"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left py-2 text-sm text-slate-200 hover:text-indigo-400"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-2 text-sm text-slate-200 hover:text-indigo-400"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('certificates')}
              className="block w-full text-left py-2 text-sm text-slate-200 hover:text-indigo-400"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-sm text-slate-200 hover:text-indigo-400"
            >
              Contact
            </button>
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => setViewMode('admin')}
                className="w-full text-center py-2 text-xs font-semibold bg-indigo-600 text-white rounded-lg"
              >
                Buka Halaman Admin (CMS)
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16 sm:space-y-20">
        {/* HERO SECTION */}
        <section id="home" className="relative pt-6 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Text Left */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-950/60 text-indigo-300 border border-indigo-800/60">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                <span>Hello, I&apos;m</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {profile.name}
              </h1>

              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {profile.title}
              </div>

              <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                {profile.bio}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition transform active:scale-95"
                >
                  Lihat Proyek Saya
                </button>

                <a
                  href="#resume"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://drive.google.com', '_blank');
                  }}
                  className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-200 font-semibold inline-flex items-center gap-2 transition active:scale-95"
                >
                  <Download className="w-4 h-4 text-indigo-400" />
                  <span>Unduh CV</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4 text-slate-400">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-indigo-500 hover:bg-indigo-600/20 transition"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-indigo-500 hover:bg-indigo-600/20 transition"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-indigo-500 hover:bg-indigo-600/20 transition"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={profile.social.email}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-indigo-500 hover:bg-indigo-600/20 transition"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Profile Avatar Right */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Glow rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 blur-2xl animate-pulse" />
                <div className="absolute inset-2 rounded-full border-2 border-indigo-500/40 border-dashed animate-spin-slow" />
                <div className="absolute -inset-4 rounded-full border border-purple-500/20" />

                {/* Main Avatar Image */}
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-indigo-500/60 shadow-2xl shadow-indigo-500/20 bg-slate-900">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-2 right-4 bg-slate-900/90 border border-slate-700/80 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-semibold text-slate-200">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROW: ABOUT ME & SKILLS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* About Me Card */}
          <div id="about" className="lg:col-span-6 bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2.5 text-indigo-400 mb-4">
                <User className="w-5 h-5" />
                <h2 className="text-xl font-bold tracking-tight text-white">About Me</h2>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {profile.aboutText}
              </p>

              {/* Bio Details */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="w-24 text-slate-400 font-medium">Nama</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-100 font-semibold">{profile.name}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-24 text-slate-400 font-medium">Email</span>
                  <span className="text-slate-400">:</span>
                  <a href={`mailto:${profile.email}`} className="text-indigo-400 hover:underline">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-24 text-slate-400 font-medium">Telepon</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-100">{profile.phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-24 text-slate-400 font-medium">Lokasi</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-100">{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Visual tech decoration at card footer */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                tech-stack: PHP, MySQL, JS, React, Tailwind
              </span>
              <span className="bg-indigo-950/80 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800/50">
                Gresik, Jawa Timur
              </span>
            </div>
          </div>

          {/* Skills Card */}
          <div id="skills" className="lg:col-span-6 bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-2.5 text-indigo-400 mb-6">
              <Layers className="w-5 h-5" />
              <h2 className="text-xl font-bold tracking-tight text-white">Skills</h2>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-slate-950/60 border border-slate-800/80 hover:border-indigo-500/50 rounded-xl p-4 transition duration-200 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center p-1 border border-slate-800 group-hover:border-indigo-500/40 transition">
                        <SkillIcon icon={skill.icon} className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-slate-200 text-sm group-hover:text-white transition">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-indigo-400">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2.5 text-indigo-400">
              <Briefcase className="w-5 h-5" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Projects</h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 text-xs font-medium">
              {(['Semua', 'Web', 'Mobile', 'Lainnya'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg transition-all ${
                    activeCategory === cat
                      ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-950/70 border border-slate-800/90 rounded-xl overflow-hidden hover:border-indigo-500/50 transition flex flex-col group shadow-md"
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-950/90 text-indigo-300 border border-indigo-700/50 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/80 text-slate-300 backdrop-blur-sm border border-slate-700">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                    <button
                      onClick={() => {
                        if (project.demoUrl) {
                          window.open(project.demoUrl, '_blank');
                        } else {
                          setSelectedProject(project);
                        }
                      }}
                      className="w-full py-2 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white text-xs font-semibold border border-indigo-500/40 transition text-center"
                    >
                      Demo
                    </button>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition text-center"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              Tidak ada proyek pada kategori ini.
            </div>
          )}
        </section>

        {/* 4 CARDS ROW: Education, Experience, Certificates, Organization */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Education Card */}
          <div id="education" className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 mb-5">
                <GraduationCap className="w-5 h-5" />
                <h2 className="text-base font-bold text-white tracking-tight">Education</h2>
              </div>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-indigo-500/60 pl-3.5 space-y-1">
                    <h3 className="text-sm font-bold text-slate-100">{edu.institution}</h3>
                    <p className="text-xs text-indigo-300 font-medium">{edu.degree}</p>
                    <p className="text-[11px] text-slate-400">
                      {edu.period} {edu.gpa ? `| ${edu.gpa}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div id="experience" className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 mb-5">
                <Briefcase className="w-5 h-5" />
                <h2 className="text-base font-bold text-white tracking-tight">Experience</h2>
              </div>

              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-purple-500/60 pl-3.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono bg-purple-950/80 text-purple-300 px-1.5 py-0.5 rounded border border-purple-800/40">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-100">{exp.role}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificates Card */}
          <div id="certificates" className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 mb-5">
                <Award className="w-5 h-5" />
                <h2 className="text-base font-bold text-white tracking-tight">Certificates</h2>
              </div>

              <div className="space-y-3.5">
                {certificates.slice(0, 3).map((cert) => (
                  <div key={cert.id} className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-2.5">
                    <h3 className="text-xs font-bold text-slate-200 line-clamp-1">{cert.title}</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">{cert.issuer}</p>
                    <span className="text-[10px] text-indigo-400 font-mono">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowAllCerts(true)}
              className="mt-4 w-full py-2 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white text-xs font-semibold border border-indigo-500/40 transition"
            >
              Lihat Semua Sertifikat ({certificates.length})
            </button>
          </div>

          {/* Organization Card */}
          <div id="organization" className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 mb-5">
                <Users className="w-5 h-5" />
                <h2 className="text-base font-bold text-white tracking-tight">Organization</h2>
              </div>

              <div className="space-y-4">
                {organizations.map((org) => (
                  <div key={org.id} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-400" />
                      <h3 className="text-xs font-bold text-slate-100">{org.role}</h3>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-300 block pl-4">
                      {org.period} &bull; {org.organization}
                    </span>
                    <p className="text-xs text-slate-400 pl-4 leading-relaxed line-clamp-3">
                      {org.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT ME SECTION */}
        <section id="contact" className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Form */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2.5 text-indigo-400 mb-2">
                <Mail className="w-5 h-5" />
                <h2 className="text-xl font-bold tracking-tight text-white">Contact Me</h2>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                Tertarik bekerja sama atau ada proyek untuk saya kerjakan? Silakan hubungi saya melalui form di bawah ini.
              </p>

              {formSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">Pesan Berhasil Dikirim!</span>
                    <span>Terima kasih telah menghubungi. Pesan telah masuk ke database dan akan segera direspon.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Nama Anda <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Anda <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="budi@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Pesan Anda <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactMessageText}
                      onChange={(e) => setContactMessageText(e.target.value)}
                      placeholder="Tuliskan pesan atau penawaran kerja sama..."
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Mengirim...' : 'Kirim Pesan'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Contact Details */}
            <div className="lg:col-span-4 lg:border-l lg:border-slate-800/80 lg:pl-8 flex flex-col justify-center space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Email</span>
                  <p className="text-sm font-semibold text-slate-200">{profile.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Telepon</span>
                  <p className="text-sm font-semibold text-slate-200">{profile.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Lokasi</span>
                  <p className="text-sm font-semibold text-slate-200">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-6 mt-16 bg-[#080b12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setViewMode('admin')}
              className="hover:text-indigo-400 transition"
            >
              Dashboard Admin
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setViewMode('backend-code')}
              className="hover:text-indigo-400 transition"
            >
              PHP & MySQL Source Code
            </button>
            <span>&bull;</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition"
              title="Kembali ke Atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="relative h-56 bg-slate-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedProject.date || selectedProject.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.description}</p>

              {selectedProject.tags && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Tutup
                </button>
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold inline-flex items-center gap-1.5"
                  >
                    <span>Buka Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificates Modal */}
      {showAllCerts && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-indigo-400">
                <Award className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Daftar Semua Sertifikat</h3>
              </div>
              <button
                onClick={() => setShowAllCerts(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-indigo-400 font-semibold px-2 py-1 rounded bg-indigo-950 border border-indigo-900">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowAllCerts(false)}
                className="px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg"
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
