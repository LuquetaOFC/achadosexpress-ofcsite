import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp, X } from 'lucide-react';
import { ProductFilters } from '../../../types';

interface FiltersProps {
  onFilterChange: (filters: ProductFilters) => void;
  currentFilters: ProductFilters;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange, currentFilters }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  const handleCategoryChange = (value: string) => {
    onFilterChange({ ...currentFilters, category: value });
  };
  
  const handleAvailabilityChange = (value: string) => {
    onFilterChange({ ...currentFilters, availability: value });
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...currentFilters.priceRange] as [number, number];
    newRange[index] = newValue;
    onFilterChange({ ...currentFilters, priceRange: newRange });
  };

  const FiltersContent = () => (
    <>
      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3 cursor-pointer" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
          <h4 className="font-semibold">Categoria</h4>
          {isCategoryOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        
        {isCategoryOpen && (
          <div className="space-y-2">
            <div className="flex items-center">
              <input 
                type="radio" 
                id="all_category" 
                name="category" 
                value="all" 
                checked={currentFilters.category === 'all'} 
                onChange={() => handleCategoryChange('all')}
                className="mr-2"
              />
              <label htmlFor="all_category">Todas as categorias</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                id="saude_beleza" 
                name="category" 
                value="saude_beleza" 
                checked={currentFilters.category === 'saude_beleza'} 
                onChange={() => handleCategoryChange('saude_beleza')}
                className="mr-2"
              />
              <label htmlFor="saude_beleza">Saúde e Beleza</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                id="estimulantes" 
                name="category" 
                value="estimulantes" 
                checked={currentFilters.category === 'estimulantes'} 
                onChange={() => handleCategoryChange('estimulantes')}
                className="mr-2"
              />
              <label htmlFor="estimulantes">Estimulantes de Energia</label>
            </div>
          </div>
        )}
      </div>
      
      {/* Availability Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3 cursor-pointer" onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}>
          <h4 className="font-semibold">Disponibilidade</h4>
          {isAvailabilityOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        
        {isAvailabilityOpen && (
          <div className="space-y-2">
            <div className="flex items-center">
              <input 
                type="radio" 
                id="all_availability" 
                name="availability" 
                value="all" 
                checked={currentFilters.availability === 'all'} 
                onChange={() => handleAvailabilityChange('all')}
                className="mr-2"
              />
              <label htmlFor="all_availability">Todos</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                id="inStock" 
                name="availability" 
                value="inStock" 
                checked={currentFilters.availability === 'inStock'} 
                onChange={() => handleAvailabilityChange('inStock')}
                className="mr-2"
              />
              <label htmlFor="inStock">Em estoque</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                id="preOrder" 
                name="availability" 
                value="preOrder" 
                checked={currentFilters.availability === 'preOrder'} 
                onChange={() => handleAvailabilityChange('preOrder')}
                className="mr-2"
              />
              <label htmlFor="preOrder">Pré-venda</label>
            </div>
          </div>
        )}
      </div>
      
      {/* Price Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3 cursor-pointer" onClick={() => setIsPriceOpen(!isPriceOpen)}>
          <h4 className="font-semibold">Preço</h4>
          {isPriceOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        
        {isPriceOpen && (
          <div>
            <div className="flex justify-between mb-2">
              <span>R$ {currentFilters.priceRange[0]}</span>
              <span>R$ {currentFilters.priceRange[1]}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="minPrice" className="block text-sm mb-1">Mínimo</label>
                <input 
                  type="number" 
                  id="minPrice" 
                  min="0" 
                  max={currentFilters.priceRange[1]} 
                  value={currentFilters.priceRange[0]} 
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="maxPrice" className="block text-sm mb-1">Máximo</label>
                <input 
                  type="number" 
                  id="maxPrice" 
                  min={currentFilters.priceRange[0]} 
                  max="2000" 
                  value={currentFilters.priceRange[1]} 
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <button 
        className="w-full bg-[#002f6c] text-white py-2 rounded-md hover:bg-[#001f4c] transition-colors"
        onClick={() => {
          onFilterChange(currentFilters);
          setIsMobileFiltersOpen(false);
        }}
      >
        Aplicar Filtros
      </button>
    </>
  );
  
  return (
    <>
      {/* Mobile Filter Button */}
      <button
        className="md:hidden fixed bottom-4 right-4 z-50 bg-[#002f6c] text-white p-4 rounded-full shadow-lg"
        onClick={() => setIsMobileFiltersOpen(true)}
      >
        <Filter size={24} />
      </button>

      {/* Mobile Filters Drawer */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isMobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white transform transition-transform duration-300 ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold flex items-center">
                <Filter size={20} className="mr-2" />
                Filtros
              </h3>
              <button onClick={() => setIsMobileFiltersOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <FiltersContent />
          </div>
        </div>
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:block bg-white rounded-lg shadow-md p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold flex items-center">
            <Filter size={20} className="mr-2" />
            Filtros
          </h3>
        </div>
        <FiltersContent />
      </div>
    </>
  );
};

export default Filters;