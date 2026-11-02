import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AdminLoginView } from './AdminLoginView';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { AdminDashboardOverview } from './AdminDashboardOverview';
import { AdminProjectsManager } from './AdminProjectsManager';
import { AdminProfileManager } from './AdminProfileManager';
import { AdminSkillsManager } from './AdminSkillsManager';
import { AdminMessagesManager } from './AdminMessagesManager';
import { AdminAcademicManager } from './AdminAcademicManager';

export const AdminLayout: React.FC = () => {
  const { isAdminLoggedIn, adminSubPage } = useApp();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // If user is not logged in, show Login Screen (replica of Login Admin in mockup)
  if (!isAdminLoggedIn) {
    return <AdminLoginView />;
  }

  const renderContent = () => {
    switch (adminSubPage) {
      case 'dashboard':
        return <AdminDashboardOverview />;
      case 'proyek':
        return <AdminProjectsManager />;
      case 'profil':
        return <AdminProfileManager />;
      case 'skill':
        return <AdminSkillsManager />;
      case 'kontak':
        return <AdminMessagesManager />;
      case 'pendidikan':
      case 'pengalaman':
      case 'sertifikat':
      case 'organisasi':
      case 'pengaturan':
        return <AdminAcademicManager type={adminSubPage} />;
      default:
        return <AdminDashboardOverview />;
    }
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-[#f8fafc] flex">
      {/* Sidebar */}
      <AdminSidebar
        mobileOpen={mobileSidebarOpen}
        setMobileOpen={setMobileSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader onToggleMobileMenu={() => setMobileSidebarOpen(true)} />
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};
