import React, { useState, useEffect } from 'react';
import { Check, Truck, Trophy, CreditCard, ShieldCheck, Clock } from 'lucide-react';

interface BenefitsBannerProps {
  variant?: 'full' | 'compact';
  className?: string;
}

const BenefitsBanner: React.FC<BenefitsBannerProps> = ({ 
  variant = 'full',
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const benefits = [
    {
      icon: <ShieldCheck className="text-brand-red w-6 h-6" />,
      text: 'PAGUE SOMENTE AO RECEBER O PRODUTO',
      compactText: 'PAGUE AO RECEBER',
      description: 'Segurança garantida na sua compra'
    },
    {
      icon: <Truck className="text-brand-red w-6 h-6" />,
      text: 'ENTREGA EXPRESSA: 1-3 DIAS ÚTEIS',
      compactText: 'ENTREGA 1-3 DIAS',
      description: 'Rapidez e eficiência na entrega'
    },
    {
      icon: <Trophy className="text-brand-red w-6 h-6" />,
      text: 'FRETE GRÁTIS PARA TODO BRASIL',
      compactText: 'FRETE GRÁTIS',
      description: 'Economia em todas as compras'
    },
    {
      icon: <CreditCard className="text-brand-red w-6 h-6" />,
      text: 'MÚLTIPLAS FORMAS DE PAGAMENTO',
      compactText: 'PAGAMENTO FLEXÍVEL',
      description: 'Escolha como prefere pagar'
    },
    {
      icon: <Check className="text-brand-red w-6 h-6" />,
      text: 'PRODUTOS 100% ORIGINAIS',
      compactText: 'ORIGINALIDADE',
      description: 'Qualidade garantida'
    },
    {
      icon: <Clock className="text-brand-red w-6 h-6" />,
      text: 'ATENDIMENTO 24/7',
      compactText: 'SUPORTE 24H',
      description: 'Sempre prontos para ajudar'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 3000); // Change benefit every 3 seconds

    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className={`bg-gradient-brand py-6 ${className}`}>
      <div className="container mx-auto px-4">
        {variant === 'full' ? (
          // Desktop version: grid layout with animation
          <div className="hidden md:grid grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`flex items-start p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-500 transform ${
                  index === currentIndex ? 'scale-105 shadow-lg' : 'scale-100'
                }`}
              >
                <div className="flex-shrink-0 p-2 bg-white rounded-full">
                  {benefit.icon}
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-primary">
                    {benefit.text}
                  </h3>
                  <p className="text-sm text-secondary mt-1">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Mobile carousel version with auto-rotation
          <div className="md:hidden">
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 bg-white/10 rounded-lg p-3 backdrop-blur-sm whitespace-nowrap min-w-full"
                  >
                    <div className="p-1.5 bg-white rounded-full">
                      {benefit.icon}
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {benefit.compactText}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center space-x-1 mt-2">
              {benefits.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-brand-red w-3' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BenefitsBanner;