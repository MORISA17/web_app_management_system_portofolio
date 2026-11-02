import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { User, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export const AdminLoginView: React.FC = () => {
  const { setIsAdminLoggedIn } = useApp();
  const [email, setEmail] = useState('admin@email.com');
  const [password, setPassword] = useState('admin123');
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      if (email.trim() === 'admin@email.com' && (password === 'admin123' || password === '••••••')) {
        setIsAdminLoggedIn(true);
      } else {
        setErrorMsg('Email atau password salah! (Gunakan: admin@email.com / admin123)');
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-[#f8fafc] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-100 p-8 sm:p-10 space-y-6">
        {/* Top Avatar Icon */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mx-auto shadow-inner">
            <User className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Login Admin</h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Masuk untuk mengelola portofolio
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 text-xs bg-rose-50 text-rose-600 border border-rose-200 rounded-xl font-medium">
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@email.com"
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 transition"
              />
              <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 transition"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-slate-600 select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Ingat saya</span>
            </label>
            <a
              href="#forgot"
              onClick={(e) => {
                e.preventDefault();
                alert('Gunakan email: admin@email.com dan password: admin123');
              }}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Lupa password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold text-sm shadow-md shadow-indigo-500/25 transition flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
          >
            <span>{loading ? 'Memproses...' : 'Masuk'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Vector Desk Illustration exactly as in design */}
        <div className="pt-2 flex justify-center">
          <div className="w-48 h-28 relative flex items-center justify-center">
            {/* Minimalist illustration matching design */}
            <svg viewBox="0 0 200 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Floor / Desk line */}
              <path d="M20 100H180" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round"/>
              {/* Plant on left */}
              <path d="M40 95C38 80 44 70 48 65C52 70 58 80 56 95" fill="#C7D2FE" stroke="#818CF8" strokeWidth="1.5"/>
              <path d="M48 65V95" stroke="#818CF8" strokeWidth="1.5"/>
              <circle cx="36" cy="80" r="4" fill="#A5B4FC" />
              {/* Person sitting */}
              <circle cx="100" cy="45" r="10" fill="#1E293B" />
              <path d="M90 62C90 56 94 53 100 53C106 53 110 56 110 62V82H90V62Z" fill="#3B82F6"/>
              {/* Desk */}
              <rect x="75" y="80" width="70" height="4" rx="2" fill="#64748B"/>
              <rect x="80" y="84" width="4" height="16" fill="#94A3B8"/>
              <rect x="136" y="84" width="4" height="16" fill="#94A3B8"/>
              {/* Laptop */}
              <path d="M112 80L122 70H132L124 80H112Z" fill="#1E293B"/>
              <rect x="120" y="68" width="14" height="10" rx="1" fill="#38BDF8" opacity="0.8"/>
            </svg>
          </div>
        </div>

        {/* Quick Demo Login Hint */}
        <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Akun Demo: admin@email.com</span>
          </div>
          <button
            type="button"
            onClick={() => setIsAdminLoggedIn(true)}
            className="text-indigo-600 font-semibold hover:underline"
          >
            Masuk Cepat
          </button>
        </div>
      </div>
    </div>
  );
};
