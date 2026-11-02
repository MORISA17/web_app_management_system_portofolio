import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, Trash2, GraduationCap, Briefcase, Award, Users, Settings, RefreshCw } from 'lucide-react';

export const AdminAcademicManager: React.FC<{ type: 'pendidikan' | 'pengalaman' | 'sertifikat' | 'organisasi' | 'pengaturan' }> = ({ type }) => {
  const {
    education,
    addEducation,
    deleteEducation,
    experience,
    addExperience,
    deleteExperience,
    certificates,
    addCertificate,
    deleteCertificate,
    organizations,
    addOrganization,
    deleteOrganization,
    resetData,
  } = useApp();

  // Form states
  const [eduInst, setEduInst] = useState('');
  const [eduDegree, setEduDegree] = useState('');
  const [eduPeriod, setEduPeriod] = useState('');
  const [eduGpa, setEduGpa] = useState('');

  const [expRole, setExpRole] = useState('');
  const [expComp, setExpComp] = useState('');
  const [expPeriod, setExpPeriod] = useState('');
  const [expDesc, setExpDesc] = useState('');

  const [certTitle, setCertTitle] = useState('');
  const [certIssuer, setCertIssuer] = useState('');
  const [certYear, setCertYear] = useState('');

  const [orgRole, setOrgRole] = useState('');
  const [orgName, setOrgName] = useState('');
  const [orgPeriod, setOrgPeriod] = useState('');
  const [orgDesc, setOrgDesc] = useState('');

  if (type === 'pengaturan') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs max-w-2xl space-y-6">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <Settings className="w-5 h-5 text-indigo-600" />
            <span>Pengaturan Sistem & Database</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Konfigurasi database, backup data, dan manajemen penyimpanan CMS
          </p>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs text-slate-700">
          <h4 className="font-bold text-slate-800">Status Penyimpanan Data:</h4>
          <p>
            &bull; Mode Penyimpanan: <strong>Sinkronisasi Browser LocalStorage + Skema PHP/MySQL</strong><br />
            &bull; Database Target: <strong>db_portfolio_rifqi</strong> (MySQL / MariaDB)<br />
            &bull; Backend API: <strong>PHP 8.x PDO Prepared Statements</strong>
          </p>
        </div>

        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-3 text-xs text-rose-800">
          <h4 className="font-bold">Reset Database ke Contoh Desain:</h4>
          <p>
            Mengembalikan seluruh data proyek, profil, skill, pendidikan, dan pengalaman ke data awal yang sesuai dengan gambar desain.
          </p>
          <button
            onClick={() => {
              if (window.confirm('Apakah Anda yakin ingin me-reset seluruh data ke bawaan mockup?')) {
                resetData();
                alert('Data berhasil di-reset!');
              }
            }}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl inline-flex items-center gap-2 transition"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset Data Sekarang</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs max-w-4xl space-y-6">
      {/* PENDIDIKAN */}
      {type === 'pendidikan' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <span>Kelola Riwayat Pendidikan</span>
            </h3>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!eduInst.trim()) return;
              addEducation({
                institution: eduInst,
                degree: eduDegree,
                period: eduPeriod,
                gpa: eduGpa || undefined,
              });
              setEduInst('');
              setEduDegree('');
              setEduPeriod('');
              setEduGpa('');
            }}
            className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs"
          >
            <h4 className="font-bold text-slate-800">Tambah Riwayat Pendidikan</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Nama Institusi / Universitas"
                value={eduInst}
                onChange={(e) => setEduInst(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
              <input
                type="text"
                required
                placeholder="Jurusan / Gelar (Contoh: S1 Teknik Informatika)"
                value={eduDegree}
                onChange={(e) => setEduDegree(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
              <input
                type="text"
                required
                placeholder="Periode (Contoh: 2021 - 2025)"
                value={eduPeriod}
                onChange={(e) => setEduPeriod(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
              <input
                type="text"
                placeholder="IPK (Opsional, Contoh: IPK 3.54 / 4.00)"
                value={eduGpa}
                onChange={(e) => setEduGpa(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl text-xs"
            >
              Simpan Pendidikan
            </button>
          </form>

          <div className="space-y-3">
            {education.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-slate-800">{item.institution}</h4>
                  <p className="text-xs text-indigo-600 font-medium">{item.degree}</p>
                  <p className="text-[11px] text-slate-400">{item.period} {item.gpa ? `| ${item.gpa}` : ''}</p>
                </div>
                <button
                  onClick={() => deleteEducation(item.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PENGALAMAN */}
      {type === 'pengalaman' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              <span>Kelola Pengalaman Kerja / Magang</span>
            </h3>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!expRole.trim()) return;
              addExperience({
                role: expRole,
                companyOrType: expComp,
                period: expPeriod,
                description: expDesc,
              });
              setExpRole('');
              setExpComp('');
              setExpPeriod('');
              setExpDesc('');
            }}
            className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs"
          >
            <h4 className="font-bold text-slate-800">Tambah Pengalaman</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                required
                placeholder="Posisi (Contoh: Freelance Web Developer)"
                value={expRole}
                onChange={(e) => setExpRole(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
              <input
                type="text"
                placeholder="Perusahaan / Instansi"
                value={expComp}
                onChange={(e) => setExpComp(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
              <input
                type="text"
                required
                placeholder="Tahun / Periode (Contoh: 2024)"
                value={expPeriod}
                onChange={(e) => setExpPeriod(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
            </div>
            <textarea
              rows={2}
              required
              placeholder="Deskripsi kegiatan / tanggung jawab..."
              value={expDesc}
              onChange={(e) => setExpDesc(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl text-xs"
            >
              Simpan Pengalaman
            </button>
          </form>

          <div className="space-y-3">
            {experience.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-slate-800">{item.role}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{item.description}</p>
                </div>
                <button
                  onClick={() => deleteExperience(item.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg flex-shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SERTIFIKAT */}
      {type === 'sertifikat' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600" />
              <span>Kelola Sertifikat & Lisensi</span>
            </h3>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!certTitle.trim()) return;
              addCertificate({
                title: certTitle,
                issuer: certIssuer,
                year: certYear,
              });
              setCertTitle('');
              setCertIssuer('');
              setCertYear('');
            }}
            className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs"
          >
            <h4 className="font-bold text-slate-800">Tambah Sertifikat Baru</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                required
                placeholder="Nama Sertifikat"
                value={certTitle}
                onChange={(e) => setCertTitle(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
              <input
                type="text"
                required
                placeholder="Penerbit (Contoh: Dicoding)"
                value={certIssuer}
                onChange={(e) => setCertIssuer(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
              <input
                type="text"
                required
                placeholder="Tahun (Contoh: 2023)"
                value={certYear}
                onChange={(e) => setCertYear(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl text-xs"
            >
              Simpan Sertifikat
            </button>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certificates.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-xs text-slate-800">{item.title}</h4>
                  <p className="text-[11px] text-slate-400">{item.issuer} &bull; {item.year}</p>
                </div>
                <button
                  onClick={() => deleteCertificate(item.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ORGANISASI */}
      {type === 'organisasi' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <span>Kelola Pengalaman Organisasi</span>
            </h3>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!orgRole.trim()) return;
              addOrganization({
                role: orgRole,
                organization: orgName,
                period: orgPeriod,
                description: orgDesc,
              });
              setOrgRole('');
              setOrgName('');
              setOrgPeriod('');
              setOrgDesc('');
            }}
            className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs"
          >
            <h4 className="font-bold text-slate-800">Tambah Organisasi</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                required
                placeholder="Jabatan / Peran"
                value={orgRole}
                onChange={(e) => setOrgRole(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
              <input
                type="text"
                required
                placeholder="Nama Organisasi"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
              <input
                type="text"
                required
                placeholder="Periode (Contoh: 2022 - 2023)"
                value={orgPeriod}
                onChange={(e) => setOrgPeriod(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl"
              />
            </div>
            <textarea
              rows={2}
              required
              placeholder="Deskripsi peran dan kontribusi..."
              value={orgDesc}
              onChange={(e) => setOrgDesc(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl text-xs"
            >
              Simpan Organisasi
            </button>
          </form>

          <div className="space-y-3">
            {organizations.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 flex items-start justify-between gap-4"
              >
                <div>
                  <h4 className="font-bold text-sm text-slate-800">{item.role}</h4>
                  <p className="text-xs text-indigo-600 font-medium">{item.organization} &bull; {item.period}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.description}</p>
                </div>
                <button
                  onClick={() => deleteOrganization(item.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-lg flex-shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
