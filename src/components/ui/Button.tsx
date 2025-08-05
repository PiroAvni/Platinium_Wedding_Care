import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import React from 'react';

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: (e?: React.MouseEvent) => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  animate?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  animate = true,
}: ButtonProps) => {
  // Base styles
  const baseStyles =
    'font-medium transition-all duration-300 rounded-full flex items-center justify-center gap-2';

  // Variant styles
  const variantStyles = {
    primary:
      'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg',
    secondary:
      'bg-white text-gray-900 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200',
    outline:
      'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-w-[120px]',
    md: 'px-6 py-3 text-base min-w-[150px] sm:px-8 md:py-4 md:text-lg',
    lg: 'px-8 py-4 text-lg min-w-[180px] sm:px-10 md:py-5 md:text-xl',
  };

  // Disabled styles
  const disabledStyles =
    'opacity-50 cursor-not-allowed hover:bg-gray-900 hover:text-white';

  // Full width styles
  const widthStyles = fullWidth ? 'w-full' : 'w-auto';

  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${widthStyles}
    ${disabled ? disabledStyles : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Animation props
  const animationProps = animate
    ? {
        whileHover: disabled ? {} : { scale: 1.02 },
        whileTap: disabled ? {} : { scale: 0.98 },
      }
    : {};

  // Content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className='flex-shrink-0'>{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className='flex-shrink-0'>{icon}</span>
      )}
    </>
  );

  // Render as link if href is provided
  if (href) {
    return (
      <motion.a href={href} className={buttonStyles} {...animationProps}>
        {content}
      </motion.a>
    );
  }

  // Render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
      {...animationProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;
