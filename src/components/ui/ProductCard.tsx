import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/api/types';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/product/${product.productId}`);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden group hover-lift"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className={`w-full h-48 object-cover transition-transform duration-300 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {product.quantity === 1 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
            Last One
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className={`font-semibold text-gray-900 mb-2 line-clamp-2 transition-colors duration-200 ${
          isHovered ? 'text-blue-600' : 'text-gray-900'
        }`}>
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-blue-600">
            {formatPrice(product.price)}
          </div>
          <div className="text-xs text-gray-500">
            {formatDate(product.createdAt)}
          </div>
        </div>
        
        <div className="mt-2">
          <span className={`inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full transition-all duration-200 ${
            isHovered ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
          }`}>
            {product.categories}
          </span>
        </div>

        {/* Quick action buttons - simplified */}
        <div className={`mt-3 flex space-x-2 transition-all duration-200 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
        }`}>
          <button 
            className="flex-1 bg-blue-600 text-white text-xs py-2 px-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.productId}`);
            }}
          >
            View Details
          </button>
          <button 
            className="bg-gray-200 text-gray-700 text-xs py-2 px-3 rounded-md hover:bg-gray-300 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              // TODO: Implement quick contact
              alert('Quick contact coming soon!');
            }}
          >
            💬
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 