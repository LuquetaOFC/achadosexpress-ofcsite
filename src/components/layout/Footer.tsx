import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Mail, 
  MessageCircle, 
  CreditCard, 
  DollarSign
} from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-brand pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Logo withSlogan={true} />
            <p className="mt-4 text-sm text-primary">
              Achadinhos Express traz para você as melhores soluções em produtos para o seu dia a dia, saúde, beleza e muito mais.
            </p>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categoria/saude-beleza" className="text-primary hover:text-brand-red transition-colors">
                  Saúde e Beleza
                </Link>
              </li>
              <li>
                <Link to="/categoria/dia-a-dia" className="text-primary hover:text-brand-red transition-colors">
                  Achadinhos
                </Link>
              </li>
              <li>
                <Link to="/categoria/estimulantes" className="text-primary hover:text-brand-red transition-colors">
                  Estimulantes
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Policies */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Informações</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/politicas/privacidade" className="text-primary hover:text-brand-red transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/politicas/troca" className="text-primary hover:text-brand-red transition-colors">
                  Política de Troca
                </Link>
              </li>
              <li>
                <Link to="/politicas/envio" className="text-primary hover:text-brand-red transition-colors">
                  Política de Envio
                </Link>
              </li>
              <li>
                <Link to="/perguntas-frequentes" className="text-primary hover:text-brand-red transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="text-brand-red" />
                <span className="ml-2 text-primary">
                  contato@achadinhosexpress.com.br
                </span>
              </li>
              <li className="flex items-center">
                <MessageCircle size={18} className="text-brand-red" />
                <span className="ml-2 text-primary">
                  Atendimento Online
                </span>
              </li>
            </ul>
            
            <h3 className="text-lg font-bold mt-6 mb-4 text-primary">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/achadinhosexpress.oficial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-red hover:text-brand-orange transition-colors"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="mt-10 pt-6 border-t border-black/10">
          <h3 className="text-lg font-bold mb-4 text-primary text-center">Formas de Pagamento</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <CreditCard size={24} className="text-brand-red mr-2" />
              <span className="text-primary">Cartão de Crédito</span>
            </div>
            <div className="flex items-center">
              <CreditCard size={24} className="text-brand-red mr-2" />
              <span className="text-primary">Cartão de Débito</span>
            </div>
            <div className="flex items-center">
              <DollarSign size={24} className="text-brand-red mr-2" />
              <span className="text-primary">Pagamento na Entrega</span>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-black/10 text-center">
          <p className="text-sm text-primary">
            &copy; {new Date().getFullYear()} Achadinhos Express. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;