import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import PromotionsPage from './pages/PromotionsPage';
import BestSellersPage from './pages/BestSellersPage';
import PrivacyPolicyPage from './pages/policies/PrivacyPolicyPage';
import ExchangePolicyPage from './pages/policies/ExchangePolicyPage';
import ShippingPolicyPage from './pages/policies/ShippingPolicyPage';
import FAQPage from './pages/FAQPage';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { SearchProvider } from './context/SearchContext';
import SearchResults from './components/search/SearchResults';

function App() {
  return (
    <AuthProvider>
      <Router>
        <SearchProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/recuperar-senha" element={<ResetPasswordPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/produto/:id" element={<ProductPage />} />
                <Route path="/categoria/:id" element={<CategoryPage />} />
                <Route path="/promocoes" element={<PromotionsPage />} />
                <Route path="/mais-vendidos" element={<BestSellersPage />} />
                <Route path="/politicas/privacidade" element={<PrivacyPolicyPage />} />
                <Route path="/politicas/troca" element={<ExchangePolicyPage />} />
                <Route path="/politicas/envio" element={<ShippingPolicyPage />} />
                <Route path="/perguntas-frequentes" element={<FAQPage />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
            <SearchResults />
          </div>
        </SearchProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;