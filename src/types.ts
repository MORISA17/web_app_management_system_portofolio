export interface Project {
  id: number;
  title: string;
  category: 'Web Application' | 'Mobile Application' | 'Lainnya';
  year: string;
  date: string;
  description: string;
  image: string;
  demoUrl?: string;
  detailUrl?: string;
  tags: string[];
}

export interface Skill {
  id: number;
  name: string;
  level: number; // percentage e.g. 95
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  icon: string;
  color: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
}

export interface Experience {
  id: number;
  role: string;
  companyOrType: string;
  period: string;
  description: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface Organization {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  read: boolean;
}

export interface UserProfile {
  name: string;
  title: string;
  bio: string;
  aboutText: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl: string;
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
  };
}

export interface VisitorStat {
  month: string;
  visitors: number;
}
