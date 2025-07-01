import React, { useState } from 'react';
import { Category } from '../../types/api/types';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
  isSelected?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  category, 
  onClick, 
  isSelected = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group cursor-pointer text-center transition-all duration-200 ${
        isSelected ? 'scale-105' : 'hover-scale-sm'
      }`}
    >
      <div className="relative">
        <div 
          className={`w-20 h-20 mx-auto rounded-full ${category.color} flex items-center justify-center text-2xl text-white mb-3 shadow-md group-hover:shadow-lg transition-all duration-200 ${
            isSelected ? 'ring-2 ring-blue-300' : ''
          }`}
        >
          <span className={`transition-transform duration-200 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}>
            {category.icon}
          </span>
        </div>
        
        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        )}
      </div>
      
      <p className={`text-sm font-medium transition-all duration-200 ${
        isSelected 
          ? 'text-blue-600 font-semibold' 
          : 'text-gray-700 group-hover:text-blue-600'
      }`}>
        {category.name}
      </p>
      
      {/* Simple indicator for selected state */}
      {isSelected && (
        <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto mt-1"></div>
      )}
      
      {/* Simple tooltip */}
      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10`}>
        {category.description}
      </div>
    </div>
  );
};

export default CategoryCard; 