import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Timer, Package, Shield } from 'lucide-react';
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
      className={`${sizeClasses[size]} block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group`}
    >
      {/* Product Image with Lazy Loading */}
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        
        {/* Discount Badge with Animation */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-brand-red text-white text-xs font-bold rounded-full px-3 py-1.5 animate-pulse shadow-lg">
            -{discountPercentage}% OFF
          </div>
        )}

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-sm font-medium px-6 py-2.5 bg-brand-red rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-lg hover:bg-brand-orange">
            Ver Detalhes
          </span>
        </div>
      </div>
      
      {/* Product Info with Enhanced Typography */}
      <div className="p-4">
        <h3 className="font-medium text-sm md:text-base text-primary line-clamp-2 h-10 md:h-12 group-hover:text-brand-red transition-colors">
          {product.name}
        </h3>
        
        {/* Ratings with Animation */}
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < Math.floor(product.rating)
                    ? 'text-brand-warm fill-brand-warm'
                    : 'text-gray-300'
                } transition-colors`}
              />
            ))}
          </div>
          <span className="text-xs ml-1 text-gray-600">({product.numReviews})</span>
        </div>
        
        {/* Price with Enhanced Styling */}
        <div className="mt-3 space-y-1">
          {product.originalPrice && (
            <span className="text-xs text-gray-500 line-through block">
              De R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-brand-red">
              R$ {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                Economize {((product.originalPrice - product.price).toFixed(2))}
              </span>
            )}
          </div>
        </div>

        {/* Product Benefits */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="space-y-1.5">
            <div className="flex items-center text-xs text-gray-600">
              <Timer size={14} className="text-brand-red mr-1.5" />
              <span>Entrega em 1-3 dias úteis</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <Package size={14} className="text-brand-red mr-1.5" />
              <span>Frete Grátis</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <Shield size={14} className="text-brand-red mr-1.5" />
              <span>Garantia de 30 dias</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;