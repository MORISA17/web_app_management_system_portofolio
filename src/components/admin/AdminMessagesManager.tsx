import React from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, Trash2, CheckCircle, Clock, Send } from 'lucide-react';

export const AdminMessagesManager: React.FC = () => {
  const { messages, deleteMessage, markMessageRead } = useApp();

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs max-w-4xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
            Pesan Masuk (Kontak Publik)
          </h3>
          <p className="text-xs text-slate-400">
            Pesan dan penawaran kerja sama yang dikirimkan oleh pengunjung melalui formulir Contact Me
          </p>
        </div>

        <span className="text-xs font-semibold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
          Total: {messages.length} Pesan
        </span>
      </div>

      <div className="space-y-4">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-5 rounded-2xl border transition ${
                msg.read
                  ? 'bg-white border-slate-200'
                  : 'bg-indigo-50/40 border-indigo-200 shadow-xs'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      msg.read
                        ? 'bg-slate-100 text-slate-500'
                        : 'bg-indigo-600 text-white'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{msg.name}</h4>
                    <a
                      href={`mailto:${msg.email}`}
                      className="text-xs text-indigo-600 hover:underline"
                    >
                      {msg.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{msg.date}</span>
                  </span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                {msg.message}
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                {!msg.read && (
                  <button
                    onClick={() => markMessageRead(msg.id)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition inline-flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Tandai Sudah Dibaca</span>
                  </button>
                )}

                <a
                  href={`mailto:${msg.email}?subject=Re: Kontak Portofolio Mohammad Rifqi Saniy`}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition inline-flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Balas Email</span>
                </a>

                <button
                  onClick={() => {
                    if (window.confirm('Hapus pesan ini?')) {
                      deleteMessage(msg.id);
                    }
                  }}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                  title="Hapus Pesan"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-12 text-center text-slate-400 text-xs">
            Belum ada pesan masuk. Formulir di halaman publik siap menerima pesan!
          </div>
        )}
      </div>
    </div>
  );
};
