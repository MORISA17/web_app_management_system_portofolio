import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  FolderKanban,
  Code,
  Briefcase,
  Award,
  Users,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { AdminProjectsManager } from './AdminProjectsManager';

export const AdminDashboardOverview: React.FC = () => {
  const {
    projects,
    skills,
    experience,
    certificates,
    organizations,
    visitorStats,
    setAdminSubPage,
  } = useApp();

  const statCards = [
    {
      label: 'Proyek',
      count: projects.length,
      icon: FolderKanban,
      color: 'bg-purple-100 text-purple-600',
      tab: 'proyek',
    },
    {
      label: 'Skill',
      count: skills.length,
      icon: Code,
      color: 'bg-emerald-100 text-emerald-600',
      tab: 'skill',
    },
    {
      label: 'Pengalaman',
      count: experience.length,
      icon: Briefcase,
      color: 'bg-sky-100 text-sky-600',
      tab: 'pengalaman',
    },
    {
      label: 'Sertifikat',
      count: certificates.length,
      icon: Award,
      color: 'bg-amber-100 text-amber-600',
      tab: 'sertifikat',
    },
    {
      label: 'Organisasi',
      count: organizations.length,
      icon: Users,
      color: 'bg-rose-100 text-rose-600',
      tab: 'organisasi',
    },
  ];

  // Latest 3 projects for the preview widget
  const latestProjects = projects.slice(0, 3);

  // SVG Line Chart coordinates math (max value 20)
  const chartHeight = 120;
  const chartWidth = 320;
  const maxVal = 20;

  const points = visitorStats.map((stat, i) => {
    const x = 30 + (i * (chartWidth - 60)) / (visitorStats.length - 1);
    const y = chartHeight - 20 - (stat.visitors / maxVal) * (chartHeight - 40);
    return { x, y, ...stat };
  });

  const pathD = points.reduce((acc, pt, i) => {
    return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, '');

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 1. TOP STATS CARDS (5 cards exactly as in mockup) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <button
              key={idx}
              onClick={() => setAdminSubPage(stat.tab)}
              className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition text-left flex items-center gap-3.5 group"
            >
              <div className={`w-11 h-11 rounded-xl ${stat.color} flex items-center justify-center flex-shrink-0 transition group-hover:scale-105`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-slate-800 leading-none block">
                  {stat.count}
                </span>
                <span className="text-xs text-slate-500 font-medium mt-0.5 block">
                  {stat.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 2. MIDDLE ROW: Proyek Terbaru + Statistik Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Proyek Terbaru Card */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-800 tracking-tight">
                Proyek Terbaru
              </h3>
            </div>

            <div className="space-y-3.5">
              {latestProjects.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-10 h-10 rounded-lg object-cover bg-slate-100"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 line-clamp-1">
                        {p.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {p.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-400 font-mono flex-shrink-0 pl-2">
                    {p.date || `${p.year}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-2 border-t border-slate-100">
            <button
              onClick={() => setAdminSubPage('proyek')}
              className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition"
            >
              <span>Lihat semua proyek</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Statistik Chart Card */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-800 tracking-tight">
                Statistik
              </h3>
              <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                <span>6 Bulan Terakhir</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Responsive Line Chart */}
            <div className="w-full overflow-x-auto py-2">
              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="w-full h-40 overflow-visible"
              >
                {/* Horizontal Grid lines */}
                {[0, 5, 10, 15, 20].map((val) => {
                  const y = chartHeight - 20 - (val / maxVal) * (chartHeight - 40);
                  return (
                    <g key={val}>
                      <line
                        x1="30"
                        y1={y}
                        x2={chartWidth - 10}
                        y2={y}
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      />
                      <text
                        x="20"
                        y={y + 3}
                        fontSize="9"
                        fill="#94a3b8"
                        textAnchor="end"
                        fontFamily="monospace"
                      >
                        {val}
                      </text>
                    </g>
                  );
                })}

                {/* Line Path */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Dots & Month Labels */}
                {points.map((pt, idx) => (
                  <g key={idx} className="group cursor-pointer">
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="4"
                      fill="#6366f1"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <text
                      x={pt.x}
                      y={chartHeight - 4}
                      fontSize="9"
                      fill="#64748b"
                      textAnchor="middle"
                      fontWeight="500"
                    >
                      {pt.month}
                    </text>
                    {/* Tooltip value */}
                    <text
                      x={pt.x}
                      y={pt.y - 8}
                      fontSize="9"
                      fill="#4338ca"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {pt.visitors}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Tren Pengunjung Portfolio</span>
            <span className="text-emerald-600 font-semibold">+35% meningkat</span>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION: Kelola Proyek Table directly in Dashboard */}
      <div>
        <AdminProjectsManager />
      </div>
    </div>
  );
};
