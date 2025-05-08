import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import ProductGallery from '../components/product/ProductGallery';
import ProductTabs from '../components/product/ProductTabs';
import RelatedProducts from '../components/product/RelatedProducts';
import { Star, Sparkles } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Produto não encontrado</h1>
      </div>
    );
  }
  
  const currentVariant = product.variants[selectedVariant];

  const handleVariantSelect = (index: number) => {
    setSelectedVariant(index);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const calculateSavings = (variant: typeof currentVariant) => {
    if (!product.originalPrice) return 0;
    const originalTotal = product.originalPrice * variant.quantity;
    const savings = originalTotal - variant.price;
    return savings;
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Gallery */}
        <div>
          <ProductGallery images={product.images} productName={product.name} />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <Star size={20} className="text-brand-warm fill-brand-warm" />
              <span className="ml-1 font-medium">{product.rating.toFixed(1)}</span>
            </div>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-secondary">{product.numReviews} avaliações</span>
          </div>
          
          <div className="mb-6">
            <span className="text-2xl font-bold text-brand-red">
              R$ {currentVariant.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm text-secondary line-through">
                  R$ {(product.originalPrice * currentVariant.quantity).toFixed(2)}
                </span>
                <span className="text-sm text-brand-red font-medium">
                  Economia de R$ {calculateSavings(currentVariant).toFixed(2)}
                </span>
              </div>
            )}
          </div>
          
          <p className="text-secondary mb-6">{product.description}</p>
          
          {/* Quantity Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-primary mb-2">
              Selecione a Quantidade
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => handleVariantSelect(index)}
                  className={`relative p-3 rounded-lg border-2 transition-all duration-300 ${
                    selectedVariant === index
                      ? 'border-brand-red bg-brand-red/5 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-brand-red/50 hover:bg-brand-red/5'
                  }`}
                >
                  {selectedVariant === index && isAnimating && (
                    <Sparkles 
                      className="absolute -top-2 -right-2 text-brand-red animate-bounce"
                      size={16}
                    />
                  )}
                  <div className="text-sm font-medium">
                    {variant.quantity} {variant.quantity === 1 ? 'unidade' : 'unidades'}
                  </div>
                  <div className="text-lg font-bold text-brand-red mt-1">
                    R$ {variant.price.toFixed(2)}
                  </div>
                  {product.originalPrice && (
                    <div className="text-xs text-brand-red mt-1">
                      -{Math.round((1 - variant.price / (product.originalPrice * variant.quantity)) * 100)}% OFF
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <a
            href={currentVariant.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-red text-white py-3 rounded-md font-medium hover:bg-brand-orange transition-colors flex items-center justify-center text-lg"
          >
            Comprar Agora
          </a>
        </div>
      </div>
      
      <ProductTabs product={product} />
      <RelatedProducts currentProductId={product.id} category={product.category} />
    </div>
  );
};

export default ProductPage;