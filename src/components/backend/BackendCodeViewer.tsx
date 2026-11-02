import React, { useState } from 'react';
import { backendCodeFiles } from '../../data/backendCode';
import { Database, FileCode, Copy, Check, Download, Terminal, Folder } from 'lucide-react';

export const BackendCodeViewer: React.FC = () => {
  const fileNames = Object.keys(backendCodeFiles) as (keyof typeof backendCodeFiles)[];
  const [activeFile, setActiveFile] = useState<keyof typeof backendCodeFiles>('database.sql');
  const [copied, setCopied] = useState(false);

  const activeContent = backendCodeFiles[activeFile];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([activeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = activeFile.includes('/') ? activeFile.split('/').pop()! : activeFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-[#0b0f19] text-slate-200 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Description */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 mb-2">
                <Database className="w-3.5 h-3.5 text-indigo-400" />
                <span>PHP & MySQL Backend Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Kode Backend Native (PHP & MySQL Database)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Sesuai permintaan Anda, berikut adalah kode sumber murni lengkap untuk backend database MySQL dan skrip PHP (PDO & REST API) yang siap digunakan di server Apache, XAMPP, Laragon, ataupun cPanel hosting.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Kode</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl shadow-xs transition flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh File</span>
              </button>
            </div>
          </div>
        </div>

        {/* Code Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* File Explorer Tree (Left 3 cols) */}
          <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800">
              <Folder className="w-4 h-4 text-indigo-400" />
              <span>Struktur Berkas</span>
            </div>

            <div className="space-y-1">
              {fileNames.map((name) => {
                const isSelected = activeFile === name;
                return (
                  <button
                    key={name}
                    onClick={() => setActiveFile(name)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono transition flex items-center gap-2.5 ${
                      isSelected
                        ? 'bg-indigo-600 text-white font-bold shadow-xs'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{name}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 space-y-1">
              <p className="flex items-center gap-1 font-semibold text-slate-400">
                <Terminal className="w-3 h-3 text-emerald-400" />
                <span>Petunjuk XAMPP / MySQL</span>
              </p>
              <p>
                1. Buka phpMyAdmin & import <strong>database.sql</strong>
              </p>
              <p>
                2. Simpan skrip di folder <strong>htdocs/portfolio/</strong>
              </p>
            </div>
          </div>

          {/* Code Viewer (Right 9 cols) */}
          <div className="lg:col-span-9 bg-[#0d1322] border border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
            {/* Tab header */}
            <div className="h-10 bg-slate-950 px-4 flex items-center justify-between border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="font-mono text-xs text-slate-300 font-bold ml-2">
                  {activeFile}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">
                {activeContent.split('\n').length} baris
              </span>
            </div>

            {/* Code Body */}
            <div className="p-4 overflow-x-auto max-h-[600px] overflow-y-auto font-mono text-xs text-slate-300 leading-relaxed selection:bg-indigo-500 selection:text-white">
              <pre className="whitespace-pre">
                <code>{activeContent}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
