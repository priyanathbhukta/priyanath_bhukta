
import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = "" }) => {
  // This is a placeholder component that would display tech logos
  // In a real implementation, you would use actual SVG icons or images
  
  const getInitials = (name: string) => {
    return name.split(' ').map(part => part[0]).join('').toUpperCase();
  };
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-12 h-12 rounded-full bg-portfolio-accent/20 flex items-center justify-center mb-2">
        <span className="text-portfolio-accent text-sm font-bold">{getInitials(name)}</span>
      </div>
      <span className="text-sm text-portfolio-text text-center">{name}</span>
    </div>
  );
};
