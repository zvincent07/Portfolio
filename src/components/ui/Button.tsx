import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-white text-gray-900 hover:bg-gray-100',
    secondary: 'bg-gray-800/50 text-white border border-gray-700 hover:bg-gray-800',
    ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
  };

  const iconStyles = iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${iconStyles} ${className}`}
      {...props}
    >
      {icon && (
        <span className="transition-transform group-hover:translate-x-1 group-hover:translate-y-0.5">
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
