import React from 'react';
import { useApp } from '../../context/AppContext';
import { Menu, ChevronDown, User, LogOut } from 'lucide-react';

interface AdminHeaderProps {
  onToggleMobileMenu: () => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ onToggleMobileMenu }) => {
  const { adminSubPage, setIsAdminLoggedIn, profile } = useApp();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const getPageTitle = () => {
    switch (adminSubPage) {
      case 'dashboard':
        return 'Dashboard';
      case 'profil':
        return 'Kelola Profil';
      case 'pendidikan':
        return 'Kelola Pendidikan';
      case 'skill':
        return 'Kelola Skill';
      case 'pengalaman':
        return 'Kelola Pengalaman';
      case 'proyek':
        return 'Kelola Proyek';
      case 'sertifikat':
        return 'Kelola Sertifikat';
      case 'organisasi':
        return 'Kelola Organisasi';
      case 'kontak':
        return 'Pesan Kontak Masuk';
      case 'pengaturan':
        return 'Pengaturan Sistem';
      default:
        return 'Dashboard';
    }
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200/80 px-4 sm:px-8 flex items-center justify-between sticky top-14 z-20">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg"
          aria-label="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-800 leading-tight">
            {getPageTitle()}
          </h2>
          <p className="text-[11px] text-slate-400 hidden sm:block">
            Selamat datang, Admin!
          </p>
        </div>
      </div>

      {/* Right User Pill */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full hover:bg-slate-100 transition border border-slate-200/70"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs border border-indigo-200">
            {profile.avatarUrl ? (
              <img src={profile.avatarUrl} alt="Admin" className="w-full h-full object-cover" />
            ) : (
              <User className="w-4 h-4" />
            )}
          </div>
          <span className="text-xs font-bold text-slate-700">Admin</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 animate-fade-in">
            <div className="px-4 py-2 border-b border-slate-100">
              <p className="text-xs font-bold text-slate-800">{profile.name}</p>
              <p className="text-[11px] text-slate-400 truncate">{profile.email}</p>
            </div>
            <button
              onClick={() => {
                setDropdownOpen(false);
                setIsAdminLoggedIn(false);
              }}
              className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2 font-medium transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
