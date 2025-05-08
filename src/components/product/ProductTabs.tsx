import React, { useState } from 'react';
import { Product } from '../../types';

interface ProductTabsProps {
  product: Product;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState('descricao');
  
  const tabContent = {
    descricao: (
      <div className="py-4">
        <p className="text-gray-700">{product.description}</p>
        <p className="text-gray-700 mt-4">{product.details}</p>
      </div>
    ),
    especificacoes: (
      <div className="py-4">
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Categoria: {product.category === 'saude-beleza' ? 'Saúde e Beleza' : product.category === 'dia-a-dia' ? 'Achados do Dia a Dia' : 'Estimulantes'}</li>
          <li>Estoque: {product.stockCount} unidades</li>
          <li>Avaliações: {product.numReviews} clientes</li>
          <li>Nota média: {product.rating.toFixed(1)}/5</li>
        </ul>
      </div>
    ),
    'modo-de-uso': (
      <div className="py-4">
        <p className="text-gray-700">{product.usage || 'Informações sobre o modo de uso serão adicionadas em breve.'}</p>
      </div>
    ),
    beneficios: (
      <div className="py-4">
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
      <div className="flex overflow-x-auto space-x-4 border-b border-gray-200">
        <button
          className={`py-2 px-1 font-medium whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'descricao' ? 'border-teal text-teal' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('descricao')}
        >
          Descrição
        </button>
        <button
          className={`py-2 px-1 font-medium whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'especificacoes' ? 'border-teal text-teal' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('especificacoes')}
        >
          Especificações
        </button>
        <button
          className={`py-2 px-1 font-medium whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'modo-de-uso' ? 'border-teal text-teal' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('modo-de-uso')}
        >
          Modo de Uso
        </button>
        <button
          className={`py-2 px-1 font-medium whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'beneficios' ? 'border-teal text-teal' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('beneficios')}
        >
          Benefícios
        </button>
      </div>
      
      {/* Tab Content */}
      <div>
        {tabContent[activeTab as keyof typeof tabContent]}
      </div>
    </div>
  );
};

export default ProductTabs;