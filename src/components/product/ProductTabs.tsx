import React, { useState } from 'react';
import { Product } from '../../types';

interface ProductTabsProps {
  product: Product;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState('descricao');
  
  const tabContent = {
    descricao: (
      <div className="py-6">
        <p className="text-gray-700">{product.description}</p>
        <p className="text-gray-700 mt-4">{product.details}</p>
      </div>
    ),
    especificacoes: (
      <div className="py-6">
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Categoria: {product.category === 'saude-beleza' ? 'Saúde e Beleza' : product.category === 'dia-a-dia' ? 'Achados do Dia a Dia' : 'Estimulantes'}</li>
          <li>Estoque: {product.stockCount} unidades</li>
          <li>Avaliações: {product.numReviews} clientes</li>
          <li>Nota média: {product.rating.toFixed(1)}/5</li>
        </ul>
      </div>
    ),
    'modo-de-uso': (
      <div className="py-6">
        <p className="text-gray-700">{product.usage || 'Informações sobre o modo de uso serão adicionadas em breve.'}</p>
      </div>
    ),
    beneficios: (
      <div className="py-6">
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {product.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    )
  };
  
  return (
    <div className="mt-8 border-t border-gray-200">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto scrollbar-hide -mb-px">
        <div className="flex min-w-full md:min-w-0 md:flex-wrap gap-2 p-2">
          <button
            className={`py-3 px-6 font-medium whitespace-nowrap rounded-full transition-colors ${
              activeTab === 'descricao' 
                ? 'bg-brand-red text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('descricao')}
          >
            Descrição
          </button>
          <button
            className={`py-3 px-6 font-medium whitespace-nowrap rounded-full transition-colors ${
              activeTab === 'especificacoes' 
                ? 'bg-brand-red text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('especificacoes')}
          >
            Especificações
          </button>
          <button
            className={`py-3 px-6 font-medium whitespace-nowrap rounded-full transition-colors ${
              activeTab === 'modo-de-uso' 
                ? 'bg-brand-red text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('modo-de-uso')}
          >
            Modo de Uso
          </button>
          <button
            className={`py-3 px-6 font-medium whitespace-nowrap rounded-full transition-colors ${
              activeTab === 'beneficios' 
                ? 'bg-brand-red text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('beneficios')}
          >
            Benefícios
          </button>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="border-t border-gray-200">
        {tabContent[activeTab as keyof typeof tabContent]}
      </div>
    </div>
  );
};

export default ProductTabs;