import React from 'react';

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  showLabel?: boolean;
  showActiveIndicator?: boolean;
}

export function NavButton({
  icon,
  label,
  isActive = false,
  showLabel = true,
  showActiveIndicator = true,
  className = '',
  ...props
}: NavButtonProps) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 relative group rounded-lg ${
        isActive
          ? 'bg-gray-700/50 text-white shadow-md'
          : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
      } ${className}`}
      {...props}
    >
      {showActiveIndicator && isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-blue-400 rounded-r-full"></div>
      )}
      <span className="transition-transform group-hover:scale-110">{icon}</span>
      {showLabel && <span className="text-sm font-medium tracking-wide">{label}</span>}
    </button>
  );
}
