import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, User, LogOut } from 'lucide-react';
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
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-1' : 'bg-gradient-brand py-2'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-1.5"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} className="text-primary" /> : <Menu size={20} className="text-primary" />}
            </button>
            
            {/* Logo */}
            <div className="md:ml-0 mx-auto md:mx-0">
              <Logo size="small" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 items-center ml-6">
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
            <div className="flex items-center space-x-4">
              {/* Search - Desktop */}
              <form onSubmit={handleSearch} className="hidden md:flex relative">
                <input 
                  type="search"
                  name="search"
                  placeholder="Buscar produtos..." 
                  className="w-56 rounded-full bg-white pl-3 pr-8 py-1.5 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-brand-red transition-colors"
                >
                  <Search size={16} />
                </button>
              </form>

              {/* Auth Buttons */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-sm font-medium text-primary hover:text-brand-red transition-colors focus:outline-none"
                  >
                    <User size={20} />
                    <span className="hidden md:block">{user.email?.split('@')[0]}</span>
                  </button>

                  {/* User Menu Dropdown */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <LogOut size={16} className="mr-2" />
                          Sair
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-primary hover:text-brand-red transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/cadastro"
                    className="text-sm font-medium text-white bg-brand-red hover:bg-brand-orange px-4 py-1.5 rounded-full transition-colors"
                  >
                    Cadastrar
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Search */}
          <div className="md:hidden mt-2 mb-1">
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="search"
                name="search"
                placeholder="Buscar produtos..." 
                className="w-full rounded-full bg-white pl-3 pr-8 py-1.5 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
              />
              <button 
                type="submit" 
                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-brand-red transition-colors"
              >
                <Search size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } pt-14 md:hidden`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="font-medium text-lg text-primary">
              Home
            </Link>
            <Link to="/categoria/saude-beleza" className="font-medium text-lg text-primary">
              Saúde e Beleza
            </Link>
            <Link to="/categoria/dia-a-dia" className="font-medium text-lg text-primary">
              Achadinhos
            </Link>
            <Link to="/categoria/estimulantes" className="font-medium text-lg text-primary">
              Estimulantes
            </Link>
            {!user && (
              <>
                <hr className="border-gray-200" />
                <Link to="/login" className="font-medium text-lg text-primary">
                  Login
                </Link>
                <Link to="/cadastro" className="font-medium text-lg text-primary">
                  Cadastrar
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
      
      {/* Spacer for fixed header */}
      <div className="h-20 md:h-16"></div>
    </header>
  );
};

export default Header;