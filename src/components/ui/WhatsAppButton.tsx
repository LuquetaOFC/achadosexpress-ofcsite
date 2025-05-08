import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5511955573233';
  const message = 'Olá! Gostaria de saber mais sobre os produtos.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-brand-red hover:bg-brand-orange text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 animate-bounce" />
      <span className="absolute right-full mr-3 bg-white px-3 py-1.5 rounded-lg text-primary text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
        Fale Conosco
      </span>
    </button>
  );
};

export default WhatsAppButton;