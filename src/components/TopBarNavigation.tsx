import React from 'react';
import { useApp } from '../context/AppContext';
import { LayoutDashboard, Globe, FileCode, Mail, RefreshCw } from 'lucide-react';

export const TopBarNavigation: React.FC = () => {
  const {
    viewMode,
    setViewMode,
    messages,
    resetData,
  } = useApp();

  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a] text-slate-100 border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 flex items-center justify-between gap-2">
        {/* Brand / Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-sm">
            RP
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold tracking-tight text-white leading-tight">
              Portfolio Management System
            </h1>
            <p className="text-[11px] text-slate-400">
              Desain Web Responsif &bull; Admin CMS &bull; PHP & MySQL
            </p>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center p-1 bg-slate-900/90 rounded-xl border border-slate-800/80 text-xs font-medium">
          <button
            id="nav-tab-public"
            onClick={() => setViewMode('public')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'public'
                ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">1.</span>
            <span>Halaman Portfolio</span>
          </button>

          <button
            id="nav-tab-admin"
            onClick={() => setViewMode('admin')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all relative ${
              viewMode === 'admin'
                ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">2.</span>
            <span>Halaman Admin</span>
            {unreadCount > 0 && (
              <span className="w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          <button
            id="nav-tab-backend"
            onClick={() => setViewMode('backend-code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'backend-code'
                ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Kode Backend</span>
            <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">PHP & SQL</span>
          </button>
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2">
          {unreadCount > 0 && viewMode !== 'admin' && (
            <button
              onClick={() => {
                setViewMode('admin');
              }}
              title={`${unreadCount} pesan baru dari kontak`}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-lg hover:bg-amber-500/20 transition"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{unreadCount} Pesan Baru</span>
            </button>
          )}

          <button
            onClick={() => {
              if (window.confirm('Reset data kembali ke data contoh bawaan desain?')) {
                resetData();
              }
            }}
            title="Reset Data ke Mockup Desain"
            className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
