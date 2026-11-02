import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, Trash2, Code } from 'lucide-react';
import { SkillIcon } from '../public/SkillIcons';

export const AdminSkillsManager: React.FC = () => {
  const { skills, addSkill, deleteSkill } = useApp();

  const [name, setName] = useState('');
  const [level, setLevel] = useState(85);
  const [category, setCategory] = useState<'Frontend' | 'Backend' | 'Database' | 'Tools'>('Frontend');
  const [icon, setIcon] = useState('javascript');

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addSkill({
      name,
      level,
      category,
      icon: icon || name.toLowerCase().replace(/\s+/g, ''),
      color: 'from-indigo-500 to-purple-600',
    });

    setName('');
    setLevel(80);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs max-w-4xl space-y-6">
      <div>
        <h3 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
          Kelola Skill & Keahlian
        </h3>
        <p className="text-xs text-slate-400">
          Atur keahlian teknis dan persentase penguasaan teknologi Anda
        </p>
      </div>

      {/* Add New Skill Form */}
      <form onSubmit={handleAddSkill} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-4 text-xs">
        <h4 className="font-bold text-slate-800 flex items-center gap-2">
          <Plus className="w-4 h-4 text-indigo-600" />
          <span>Tambah Keahlian Baru</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div className="sm:col-span-2">
            <label className="block font-semibold text-slate-700 mb-1">Nama Skill</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: React.js / Node.js"
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kategori</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as 'Frontend' | 'Backend' | 'Database' | 'Tools')}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-indigo-500"
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Database">Database</option>
              <option value="Tools">Tools</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Penguasaan ({level}%)</label>
            <input
              type="range"
              min={10}
              max={100}
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              className="w-full mt-2 accent-indigo-600"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2 text-slate-500">
            <span>Icon Tipe:</span>
            <select
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              className="px-2 py-1 rounded border border-slate-200 bg-white"
            >
              <option value="html5">HTML5</option>
              <option value="css3">CSS3</option>
              <option value="javascript">JavaScript</option>
              <option value="php">PHP</option>
              <option value="mysql">MySQL</option>
              <option value="git">Git & GitHub</option>
              <option value="custom">Generic Code</option>
            </select>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl"
          >
            Tambah Skill
          </button>
        </div>
      </form>

      {/* Existing Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((s) => (
          <div
            key={s.id}
            className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition flex items-center justify-between bg-white"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center p-1.5">
                <SkillIcon icon={s.icon} className="w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-slate-800 text-sm block">{s.name}</span>
                <span className="text-xs text-slate-400">{s.category} &bull; {s.level}%</span>
              </div>
            </div>

            <button
              onClick={() => {
                if (window.confirm(`Hapus skill ${s.name}?`)) {
                  deleteSkill(s.id);
                }
              }}
              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
