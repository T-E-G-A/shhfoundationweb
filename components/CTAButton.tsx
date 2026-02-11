import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: IconDefinition;
  external?: boolean;
  variant?: 'primary' | 'secondary';
}

export default function CTAButton({ 
  href, 
  children, 
  icon, 
  external = false,
  variant = 'primary' 
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1";
  const variantClasses = variant === 'primary' 
    ? "bg-[#138A4B] hover:bg-[#1FA35C]" 
    : "bg-[#0F3F77] hover:bg-[#1E5AA6]";
  
  const className = `${baseClasses} ${variantClasses}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
        {icon && <FontAwesomeIcon icon={icon} />}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {icon && <FontAwesomeIcon icon={icon} />}
    </Link>
  );
}
