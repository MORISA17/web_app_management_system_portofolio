import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Project,
  Skill,
  Education,
  Experience,
  Certificate,
  Organization,
  UserProfile,
  ContactMessage,
  VisitorStat
} from '../types';
import {
  initialProjects,
  initialSkills,
  initialEducation,
  initialExperience,
  initialCertificates,
  initialOrganization,
  initialProfile,
  initialMessages,
  initialVisitorStats
} from '../data/initialData';

interface AppContextType {
  // Navigation & View
  viewMode: 'public' | 'admin' | 'backend-code';
  setViewMode: (mode: 'public' | 'admin' | 'backend-code') => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (status: boolean) => void;
  adminSubPage: string;
  setAdminSubPage: (page: string) => void;

  // Data
  profile: UserProfile;
  updateProfile: (profile: Partial<UserProfile>) => void;
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: number) => void;
  skills: Skill[];
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  deleteSkill: (id: number) => void;
  education: Education[];
  addEducation: (edu: Omit<Education, 'id'>) => void;
  deleteEducation: (id: number) => void;
  experience: Experience[];
  addExperience: (exp: Omit<Experience, 'id'>) => void;
  deleteExperience: (id: number) => void;
  certificates: Certificate[];
  addCertificate: (cert: Omit<Certificate, 'id'>) => void;
  deleteCertificate: (id: number) => void;
  organizations: Organization[];
  addOrganization: (org: Omit<Organization, 'id'>) => void;
  deleteOrganization: (id: number) => void;
  messages: ContactMessage[];
  addMessage: (msg: { name: string; email: string; message: string }) => void;
  deleteMessage: (id: number) => void;
  markMessageRead: (id: number) => void;
  visitorStats: VisitorStat[];
  resetData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PROJECTS: 'portfolio_projects_v1',
  SKILLS: 'portfolio_skills_v1',
  EDUCATION: 'portfolio_education_v1',
  EXPERIENCE: 'portfolio_experience_v1',
  CERTIFICATES: 'portfolio_certificates_v1',
  ORGANIZATION: 'portfolio_organization_v1',
  PROFILE: 'portfolio_profile_v1',
  MESSAGES: 'portfolio_messages_v1',
  AUTH: 'portfolio_admin_auth_v1',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewMode] = useState<'public' | 'admin' | 'backend-code'>('public');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
  });
  const [adminSubPage, setAdminSubPage] = useState<string>('dashboard');

  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
    return saved ? JSON.parse(saved) : initialProfile;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [skills, setSkills] = useState<Skill[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SKILLS);
    return saved ? JSON.parse(saved) : initialSkills;
  });

  const [education, setEducation] = useState<Education[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.EDUCATION);
    return saved ? JSON.parse(saved) : initialEducation;
  });

  const [experience, setExperience] = useState<Experience[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.EXPERIENCE);
    return saved ? JSON.parse(saved) : initialExperience;
  });

  const [certificates, setCertificates] = useState<Certificate[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CERTIFICATES);
    return saved ? JSON.parse(saved) : initialCertificates;
  });

  const [organizations, setOrganizations] = useState<Organization[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ORGANIZATION);
    return saved ? JSON.parse(saved) : initialOrganization;
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    return saved ? JSON.parse(saved) : initialMessages;
  });

  const [visitorStats] = useState<VisitorStat[]>(initialVisitorStats);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.AUTH, isAdminLoggedIn ? 'true' : 'false');
  }, [isAdminLoggedIn]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EDUCATION, JSON.stringify(education));
  }, [education]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EXPERIENCE, JSON.stringify(experience));
  }, [experience]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(certificates));
  }, [certificates]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ORGANIZATION, JSON.stringify(organizations));
  }, [organizations]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  }, [messages]);

  // Operations
  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    const newProject: Project = { ...project, id: newId };
    setProjects(prev => [newProject, ...prev]);
  };

  const updateProject = (project: Project) => {
    setProjects(prev => prev.map(p => p.id === project.id ? project : p));
  };

  const deleteProject = (id: number) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const addSkill = (skill: Omit<Skill, 'id'>) => {
    const newId = skills.length > 0 ? Math.max(...skills.map(s => s.id)) + 1 : 1;
    setSkills(prev => [...prev, { ...skill, id: newId }]);
  };

  const deleteSkill = (id: number) => {
    setSkills(prev => prev.filter(s => s.id !== id));
  };

  const addEducation = (edu: Omit<Education, 'id'>) => {
    const newId = education.length > 0 ? Math.max(...education.map(e => e.id)) + 1 : 1;
    setEducation(prev => [...prev, { ...edu, id: newId }]);
  };

  const deleteEducation = (id: number) => {
    setEducation(prev => prev.filter(e => e.id !== id));
  };

  const addExperience = (exp: Omit<Experience, 'id'>) => {
    const newId = experience.length > 0 ? Math.max(...experience.map(e => e.id)) + 1 : 1;
    setExperience(prev => [ { ...exp, id: newId }, ...prev]);
  };

  const deleteExperience = (id: number) => {
    setExperience(prev => prev.filter(e => e.id !== id));
  };

  const addCertificate = (cert: Omit<Certificate, 'id'>) => {
    const newId = certificates.length > 0 ? Math.max(...certificates.map(c => c.id)) + 1 : 1;
    setCertificates(prev => [...prev, { ...cert, id: newId }]);
  };

  const deleteCertificate = (id: number) => {
    setCertificates(prev => prev.filter(c => c.id !== id));
  };

  const addOrganization = (org: Omit<Organization, 'id'>) => {
    const newId = organizations.length > 0 ? Math.max(...organizations.map(o => o.id)) + 1 : 1;
    setOrganizations(prev => [...prev, { ...org, id: newId }]);
  };

  const deleteOrganization = (id: number) => {
    setOrganizations(prev => prev.filter(o => o.id !== id));
  };

  const addMessage = ({ name, email, message }: { name: string; email: string; message: string }) => {
    const newId = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1;
    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) + 
      ', ' + now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const newMsg: ContactMessage = {
      id: newId,
      name,
      email,
      message,
      date: dateStr,
      read: false,
    };
    setMessages(prev => [newMsg, ...prev]);
  };

  const deleteMessage = (id: number) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const markMessageRead = (id: number) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, read: true } : m));
  };

  const resetData = () => {
    setProfile(initialProfile);
    setProjects(initialProjects);
    setSkills(initialSkills);
    setEducation(initialEducation);
    setExperience(initialExperience);
    setCertificates(initialCertificates);
    setOrganizations(initialOrganization);
    setMessages(initialMessages);
    localStorage.clear();
  };

  return (
    <AppContext.Provider
      value={{
        viewMode,
        setViewMode,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        adminSubPage,
        setAdminSubPage,
        profile,
        updateProfile,
        projects,
        addProject,
        updateProject,
        deleteProject,
        skills,
        addSkill,
        deleteSkill,
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
        messages,
        addMessage,
        deleteMessage,
        markMessageRead,
        visitorStats,
        resetData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
