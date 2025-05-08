import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  size?: 'small' | 'medium' | 'large';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, size = 'medium' }) => {
  const sizeClasses = {
    small: 'max-w-[140px]',
    medium: 'max-w-[180px] md:max-w-[250px]',
    large: 'max-w-[200px] md:max-w-[300px]'
  };
  
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;
  
  return (
    <Link 
      to={`/produto/${product.id}`} 
      className={`${sizeClasses[size]} block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group`}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-brand-red text-white text-xs font-bold rounded-full px-2 py-1">
            -{discountPercentage}%
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-2 md:p-3">
        <h3 className="font-medium text-sm md:text-base text-primary line-clamp-2 h-10 md:h-12">{product.name}</h3>
        
        {/* Ratings */}
        <div className="flex items-center mt-1">
          <Star size={14} className="text-brand-warm fill-brand-warm" />
          <span className="text-xs ml-1">{product.rating.toFixed(1)}</span>
          <span className="text-xs text-secondary ml-1">({product.numReviews})</span>
        </div>
        
        {/* Price */}
        <div className="mt-2">
          {product.originalPrice && (
            <span className="text-xs text-secondary line-through mr-2">
              R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="font-bold text-sm md:text-base text-brand-red">
            R$ {product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;