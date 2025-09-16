import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-red-500 rounded-lg p-2">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ALMODESK</h1>
              <p className="text-xs text-gray-500">Mobile Tracker</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-500 transition-colors">Home</Link>
            <a href="#features" className="text-gray-700 hover:text-red-500 transition-colors">Features</a>
            <Link to="/pricing" className="text-gray-700 hover:text-red-500 transition-colors">Pricing</Link>
            <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors">Contact</a>
            <Link 
              to="/register" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-red-500 transition-colors">Home</Link>
              <a href="#features" className="text-gray-700 hover:text-red-500 transition-colors">Features</a>
              <Link to="/pricing" className="text-gray-700 hover:text-red-500 transition-colors">Pricing</Link>
              <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors">Contact</a>
              <Link 
                to="/register" 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors w-fit"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;