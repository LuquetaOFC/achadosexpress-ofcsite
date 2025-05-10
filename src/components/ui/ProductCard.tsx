import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Timer, Package, Shield, Users, Eye, CreditCard, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { Product } from '../../types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ProductCardProps {
  product: Product;
  size?: 'small' | 'medium' | 'large';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, size = 'medium' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const [recentViews, setRecentViews] = useState(0);
  
  // Simulate dynamic urgency with random recent views
  useEffect(() => {
    const baseViews = Math.floor(Math.random() * 20) + 30;
    setRecentViews(baseViews);
    
    const interval = setInterval(() => {
      setRecentViews(prev => prev + Math.floor(Math.random() * 2));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // 30-minute countdown timer effect
  useEffect(() => {
    const endTime = new Date();
    endTime.setMinutes(endTime.getMinutes() + 30);

    const updateTimer = () => {
      const now = new Date();
      const diff = endTime.getTime() - now.getTime();
      
      if (diff <= 0) {
        // Reset timer when it reaches 0
        endTime.setMinutes(endTime.getMinutes() + 30);
      }
      
      const minutes = Math.floor(diff / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${minutes}m ${seconds}s`);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const sizeClasses = {
    small: 'max-w-[140px]',
    medium: 'max-w-[180px] md:max-w-[280px]',
    large: 'max-w-[200px] md:max-w-[300px]'
  };
  
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  const stockStatus = product.stockCount < 10 ? `Últimas ${product.stockCount} unidades!` : null;
  
  const installmentPrice = (product.price / 10).toFixed(2);
  
  return (
    <Link 
      to={`/produto/${product.id}`} 
      className={`${sizeClasses[size]} block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        <LazyLoadImage
          src={product.images[0]}
          alt={product.name}
          effect="blur"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          wrapperClassName="w-full h-full"
        />
        
        {/* Trust Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full">
            <Award className="w-4 h-4 text-brand-red" />
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full">
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
        </div>

        {/* Discount Badge - Repositioned and Restyled */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-brand-red/90 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-lg shadow-sm">
            -{discountPercentage}%
          </div>
        )}

        {/* Stock Status */}
        {stockStatus && (
          <div className="absolute bottom-2 left-2 right-2 bg-brand-orange/90 text-white text-xs font-medium rounded-full px-3 py-1.5 text-center animate-pulse shadow-sm">
            ⚡ {stockStatus}
          </div>
        )}

        {/* Quick View Overlay */}
        <div 
          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-3 transform transition-all duration-300">
            <span className="text-white text-sm font-medium px-6 py-2.5 bg-brand-red rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg hover:bg-brand-orange flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              Ver Detalhes
            </span>
            <div className="text-white text-sm bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-sm">
              ⭐ {product.rating.toFixed(1)} ({product.numReviews} avaliações)
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        {/* Dynamic Social Proof */}
        <div className="flex items-center text-xs text-gray-600 mb-2">
          <Users className="w-3 h-3 text-brand-red flex-shrink-0 mr-1" />
          <span className="truncate">{recentViews} pessoas estão vendo agora</span>
        </div>

        {/* Product Title */}
        <h3 className="font-medium text-sm md:text-base text-primary line-clamp-2 h-10 md:h-12 group-hover:text-brand-red transition-colors">
          {product.name}
        </h3>
        
        {/* Price Section */}
        <div className="mt-3 space-y-1">
          {product.originalPrice && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 line-through">
                De R$ {product.originalPrice.toFixed(2)}
              </span>
              <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-lg">
                -{discountPercentage}%
              </span>
            </div>
          )}
          
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-2xl text-brand-red">
                R$ {product.price.toFixed(2)}
              </span>
              <span className="text-xs text-brand-red font-medium">
                à vista
              </span>
            </div>
            
            <div className="flex items-center text-xs text-gray-600 mt-1">
              <CreditCard className="w-4 h-4 text-brand-red flex-shrink-0 mr-1" />
              <span className="truncate">10x de R$ {installmentPrice} sem juros</span>
            </div>
          </div>
        </div>

        {/* Urgency Timer */}
        <div className="mt-3 bg-red-50 p-2 rounded-lg">
          <div className="flex items-center justify-between text-xs text-brand-red">
            <span className="font-medium">Oferta termina em:</span>
            <span className="font-bold">{timeLeft}</span>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="space-y-2">
            <div className="flex items-center text-xs text-gray-600">
              <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mr-1.5" />
              <span className="truncate">Frete Grátis</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <Timer className="w-3.5 h-3.5 text-brand-red flex-shrink-0 mr-1.5" />
              <span className="truncate">Entrega Expressa 1-3 dias</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <Shield className="w-3.5 h-3.5 text-brand-red flex-shrink-0 mr-1.5" />
              <span className="truncate">Garantia de 30 dias</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <button className="w-full mt-4 bg-brand-red text-white py-2 rounded-lg font-medium hover:bg-brand-orange transition-colors transform hover:scale-105 flex items-center justify-center gap-2">
          <Package className="w-4.5 h-4.5 flex-shrink-0" />
          <span>Comprar Agora</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;