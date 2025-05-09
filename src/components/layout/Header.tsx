import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, User, LogOut, Phone, Mail, Clock, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';
import { useSearch } from '../../context/SearchContext';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setSearchQuery } = useSearch();
  const { user, logout } = useAuth();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    if (query.trim()) {
      setSearchQuery(query.trim());
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };
  
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-brand-red text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center divide-x divide-white/20">
              <div className="flex items-center space-x-6 pr-6">
                <a href="tel:+5511955573233" className="flex items-center hover:text-white/90 transition-colors text-sm">
                  <Phone size={16} className="mr-2" />
                  (11) 95557-3233
                </a>
                <a href="mailto:contato@achadinhosexpress.com.br" className="flex items-center hover:text-white/90 transition-colors text-sm">
                  <Mail size={16} className="mr-2" />
                  contato@achadinhosexpress.com.br
                </a>
              </div>
              <div className="flex items-center space-x-6 px-6">
                <div className="flex items-center text-sm">
                  <Clock size={16} className="mr-2" />
                  Seg - Sex, 9h às 18h
                </div>
                <div className="flex items-center text-sm">
                  <MapPin size={16} className="mr-2" />
                  São Paulo, SP
                </div>
              </div>
            </div>
            <div className="text-sm font-medium bg-white/10 px-4 py-1 rounded-full">
              🚚 Frete Grátis para todo Brasil!
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`fixed top-0 md:top-[44px] left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-gradient-brand py-3'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
            </button>
            
            {/* Logo */}
            <div className="md:ml-0 mx-auto md:mx-0">
              <Logo size="medium" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center ml-12">
              <Link to="/" className="text-sm font-medium text-primary hover:text-brand-red transition-colors">
                Home
              </Link>
              <Link to="/categoria/saude-beleza" className="text-sm font-medium text-primary hover:text-brand-red transition-colors">
                Saúde e Beleza
              </Link>
              <Link to="/categoria/dia-a-dia" className="text-sm font-medium text-primary hover:text-brand-red transition-colors">
                Achadinhos
              </Link>
              <Link to="/categoria/estimulantes" className="text-sm font-medium text-primary hover:text-brand-red transition-colors">
                Estimulantes
              </Link>
            </nav>
            
            {/* Search and Auth */}
            <div className="flex items-center space-x-6">
              {/* Search - Desktop */}
              <form onSubmit={handleSearch} className="hidden md:flex relative">
                <input 
                  type="search"
                  name="search"
                  placeholder="Buscar produtos..." 
                  className="w-64 rounded-full bg-white/90 backdrop-blur-sm pl-5 pr-12 py-2.5 text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent shadow-sm"
                />
                <button 
                  type="submit" 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-brand-red transition-colors"
                >
                  <Search size={18} />
                </button>
              </form>

              {/* Auth Buttons */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-3 text-sm font-medium text-primary hover:text-brand-red transition-colors p-2 hover:bg-white/10 rounded-full"
                  >
                    <User size={24} />
                    <span className="hidden md:block">{user.email?.split('@')[0]}</span>
                  </button>

                  {/* User Menu Dropdown */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <LogOut size={18} className="mr-2" />
                        Sair
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-primary hover:text-brand-red transition-colors hidden md:block"
                  >
                    Login
                  </Link>
                  <Link
                    to="/cadastro"
                    className="text-sm font-medium text-white bg-brand-red hover:bg-brand-orange px-6 py-2.5 rounded-full transition-colors shadow-sm"
                  >
                    Cadastrar
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Search */}
          <div className="md:hidden mt-3">
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="search"
                name="search"
                placeholder="Buscar produtos..." 
                className="w-full rounded-full bg-white/90 backdrop-blur-sm pl-5 pr-12 py-2.5 text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent shadow-sm"
              />
              <button 
                type="submit" 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-brand-red transition-colors"
              >
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } pt-24 md:hidden`}
      >
        <nav className="container mx-auto px-4 py-6">
          <div className="space-y-6">
            <Link to="/" className="block text-lg font-medium text-primary hover:text-brand-red transition-colors">
              Home
            </Link>
            <Link to="/categoria/saude-beleza" className="block text-lg font-medium text-primary hover:text-brand-red transition-colors">
              Saúde e Beleza
            </Link>
            <Link to="/categoria/dia-a-dia" className="block text-lg font-medium text-primary hover:text-brand-red transition-colors">
              Achadinhos
            </Link>
            <Link to="/categoria/estimulantes" className="block text-lg font-medium text-primary hover:text-brand-red transition-colors">
              Estimulantes
            </Link>
            
            <hr className="border-gray-200" />
            
            {!user && (
              <div className="space-y-4">
                <Link to="/login" className="block text-lg font-medium text-primary hover:text-brand-red transition-colors">
                  Login
                </Link>
                <Link to="/cadastro" className="block text-lg font-medium text-primary hover:text-brand-red transition-colors">
                  Cadastrar
                </Link>
              </div>
            )}

            {/* Mobile Contact Info */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Contato</h3>
              <div className="space-y-4">
                <a href="tel:+5511955573233" className="flex items-center text-primary">
                  <Phone size={18} className="mr-3 text-brand-red" />
                  (11) 95557-3233
                </a>
                <a href="mailto:contato@achadinhosexpress.com.br" className="flex items-center text-primary">
                  <Mail size={18} className="mr-3 text-brand-red" />
                  contato@achadinhosexpress.com.br
                </a>
                <div className="flex items-center text-primary">
                  <Clock size={18} className="mr-3 text-brand-red" />
                  Seg - Sex, 9h às 18h
                </div>
                <div className="flex items-center text-primary">
                  <MapPin size={18} className="mr-3 text-brand-red" />
                  São Paulo, SP
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Spacer for fixed header */}
      <div className="h-24 md:h-[108px]"></div>
    </header>
  );
};

export default Header;