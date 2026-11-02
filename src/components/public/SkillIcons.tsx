import React from 'react';

export const SkillIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = 'w-6 h-6' }) => {
  switch (icon.toLowerCase()) {
    case 'html5':
    case 'html':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2L5.8 19.5L12 21.2L18.2 19.5L20 2H4Z" fill="#E44D26"/>
          <path d="M12 3.6V19.6L16.7 18.3L18.2 3.6H12Z" fill="#F16529"/>
          <path d="M12 7.7H8.5L8.7 10.4H12V12.7H8.9L9.3 16.3L12 17.1V14.7L10.7 14.3L10.5 12.7H12V7.7Z" fill="#EBEBEB"/>
          <path d="M12 7.7V10.4H15.3L15 13.9L12 14.7V17.1L14.7 16.3L15.5 7.7H12Z" fill="#FFFFFF"/>
        </svg>
      );
    case 'css3':
    case 'css':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2L5.8 19.5L12 21.2L18.2 19.5L20 2H4Z" fill="#1572B6"/>
          <path d="M12 3.6V19.6L16.7 18.3L18.2 3.6H12Z" fill="#33A9DC"/>
          <path d="M12 7.7H8.5L8.7 10.4H12V7.7ZM12 12.7H8.9L9.3 16.3L12 17.1V14.7L10.7 14.3L10.5 12.7H12Z" fill="#EBEBEB"/>
          <path d="M12 7.7V10.4H15.3L15.1 12.7H12V15H14.8L14.6 16.3L12 17.1V19.5L16.7 18.2L17 15.3L17.2 12.7L17.5 7.7H12Z" fill="#FFFFFF"/>
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <div className={`flex items-center justify-center font-bold bg-[#F7DF1E] text-black rounded text-xs ${className}`}>
          JS
        </div>
      );
    case 'php':
      return (
        <div className={`flex items-center justify-center font-bold bg-[#777BB4] text-white rounded text-xs px-1 ${className}`}>
          php
        </div>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C7 3 4 5 4 8V16C4 19 7 21 12 21C17 21 20 19 20 16V8C20 5 17 3 12 3Z" fill="#00758F" opacity="0.2"/>
          <ellipse cx="12" cy="7" rx="8" ry="4" stroke="#00758F" strokeWidth="2"/>
          <path d="M4 7V12C4 14.2 7.6 16 12 16C16.4 16 20 14.2 20 12V7" stroke="#00758F" strokeWidth="2"/>
          <path d="M4 12V17C4 19.2 7.6 21 12 21C16.4 21 20 19.2 20 17V12" stroke="#00758F" strokeWidth="2"/>
          <circle cx="15" cy="11" r="1.5" fill="#F29111" />
        </svg>
      );
    case 'git':
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.25C6.73 19.84 6.14 18 6.14 18C5.68 16.85 5.03 16.55 5.03 16.55C4.12 15.93 5.1 15.95 5.1 15.95C6.1 16.02 6.62 16.98 6.62 16.98C7.5 18.52 8.95 18.07 9.53 17.81C9.62 17.17 9.87 16.74 10.15 16.49C7.94 16.24 5.62 15.38 5.62 11.58C5.62 10.5 6.01 9.61 6.65 8.92C6.55 8.67 6.21 7.66 6.75 6.3C6.75 6.3 7.58 6.03 9.47 7.32C10.26 7.1 11.1 6.99 11.94 6.99C12.78 6.99 13.62 7.1 14.41 7.32C16.3 6.03 17.13 6.3 17.13 6.3C17.67 7.66 17.33 8.67 17.23 8.92C17.87 9.61 18.26 10.5 18.26 11.58C18.26 15.39 15.93 16.23 13.72 16.48C14.07 16.79 14.39 17.39 14.39 18.31V21C14.39 21.28 14.55 21.6 15.06 21.5C19.04 20.16 21.91 16.42 21.91 12C21.91 6.477 17.43 2 12 2Z" fill="#F05032"/>
        </svg>
      );
    default:
      return (
        <div className={`flex items-center justify-center font-bold bg-indigo-600 text-white rounded text-xs ${className}`}>
          {icon.substring(0, 2).toUpperCase()}
        </div>
      );
  }
};
