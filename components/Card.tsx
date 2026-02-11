interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        bg-white dark:bg-[#131825] 
        rounded-2xl 
        shadow-md dark:shadow-xl
        p-6 
        border border-gray-100 dark:border-[#2A3447]
        transition-all duration-300
        ${hover ? 'hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
