import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { TopBarNavigation } from './components/TopBarNavigation';
import { PublicPortfolioView } from './components/public/PublicPortfolioView';
import { AdminLayout } from './components/admin/AdminLayout';
import { BackendCodeViewer } from './components/backend/BackendCodeViewer';

const AppContent: React.FC = () => {
  const { viewMode } = useApp();

  return (
    <div className="min-h-screen bg-[#0b0f19] flex flex-col font-sans antialiased text-slate-100">
      <TopBarNavigation />

      <div className="flex-1 w-full">
        {viewMode === 'public' && <PublicPortfolioView />}
        {viewMode === 'admin' && <AdminLayout />}
        {viewMode === 'backend-code' && <BackendCodeViewer />}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
