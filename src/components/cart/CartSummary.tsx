import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartSummary: React.FC = () => {
  const { state } = useCart();
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold pb-4 border-b border-gray-200">Resumo do Pedido</h2>
      
      <div className="space-y-3 py-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">R$ {state.total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Frete:</span>
          <span className="font-medium">GRÁTIS</span>
        </div>
        <div className="pt-3 border-t border-gray-200 flex justify-between">
          <span className="font-bold">Total:</span>
          <span className="font-bold">R$ {state.total.toFixed(2)}</span>
        </div>
      </div>
      
      <Link
        to="/checkout"
        className={`block w-full text-center py-3 px-4 rounded-md font-medium transition-colors ${
          state.items.length > 0
            ? 'bg-teal text-white hover:bg-teal/90'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        aria-disabled={state.items.length === 0}
        onClick={(e) => state.items.length === 0 && e.preventDefault()}
      >
        Finalizar Compra
      </Link>
      
      <div className="mt-4 text-center">
        <Link 
          to="/"
          className="text-teal text-sm hover:underline"
        >
          Continuar comprando
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;