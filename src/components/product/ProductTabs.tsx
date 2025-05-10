import React, { useState } from 'react';
import { Product } from '../../types';
import { Star, Award, Shield, Package, Clock, CheckCircle, ChevronDown } from 'lucide-react';

interface ProductTabsProps {
  product: Product;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState('descricao');
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: 'descricao', label: 'Descrição' },
    { id: 'especificacoes', label: 'Especificações' },
    { id: 'modo-de-uso', label: 'Modo de Uso' },
    { id: 'beneficios', label: 'Benefícios' }
  ];

  const getActiveTabLabel = () => {
    return tabs.find(tab => tab.id === activeTab)?.label;
  };

  const tabContent = {
    descricao: (
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre o Produto</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            <p className="text-gray-700 leading-relaxed">{product.details}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Destaques</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h4 className="font-medium">Avaliação Excelente</h4>
                    <p className="text-sm text-gray-600">{product.rating.toFixed(1)}/5 ({product.numReviews} avaliações)</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-brand-red" />
                  <div>
                    <h4 className="font-medium">Produto Premium</h4>
                    <p className="text-sm text-gray-600">Qualidade garantida</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <div>
                    <h4 className="font-medium">Garantia de 30 dias</h4>
                    <p className="text-sm text-gray-600">Satisfação ou seu dinheiro de volta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    especificacoes: (
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Especificações Técnicas</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Categoria</h4>
                <p className="text-gray-700">
                  {product.category === 'saude-beleza' ? 'Saúde e Beleza' : 
                   product.category === 'dia-a-dia' ? 'Achados do Dia a Dia' : 
                   'Estimulantes'}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Disponibilidade</h4>
                <p className="text-gray-700">{product.stockCount} unidades em estoque</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Avaliações</h4>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-700">{product.rating.toFixed(1)} ({product.numReviews} avaliações)</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Informações de Entrega</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                <Package className="w-6 h-6 text-brand-red" />
                <div>
                  <h4 className="font-medium">Frete Grátis</h4>
                  <p className="text-sm text-gray-600">Para todo o Brasil</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                <Clock className="w-6 h-6 text-brand-red" />
                <div>
                  <h4 className="font-medium">Entrega Expressa</h4>
                  <p className="text-sm text-gray-600">1-3 dias úteis</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <div>
                  <h4 className="font-medium">Rastreamento</h4>
                  <p className="text-sm text-gray-600">Acompanhe seu pedido em tempo real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'modo-de-uso': (
      <div className="py-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6">Instruções de Uso</h3>
          {product.usage ? (
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="prose max-w-none">
                {product.usage.split('\n').map((line, index) => (
                  <p key={index} className="text-gray-700 mb-4">{line}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-600">Informações sobre o modo de uso serão adicionadas em breve.</p>
            </div>
          )}
        </div>
      </div>
    ),
    beneficios: (
      <div className="py-8">
        <h3 className="text-xl font-bold mb-6">Principais Benefícios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  };
  
  return (
    <div className="mt-12">
      {/* Tab Selection Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full md:w-64 bg-white border border-gray-200 rounded-lg px-4 py-3 text-left font-medium flex items-center justify-between shadow-sm hover:border-brand-red transition-colors"
        >
          <span>{getActiveTabLabel()}</span>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-10 w-full md:w-64 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                  activeTab === tab.id ? 'text-brand-red font-medium' : 'text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Tab Content */}
      <div className="mt-6">
        {tabContent[activeTab as keyof typeof tabContent]}
      </div>
    </div>
  );
};

export default ProductTabs;