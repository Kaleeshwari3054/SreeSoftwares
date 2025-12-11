import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky-top">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <Link to="/" className="d-flex align-items-center text-decoration-none">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNDAiIGhlaWdodD0iODAiIHJ4PSIyMCIgZmlsbD0iI0VGNDQ0NCIvPgo8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI4IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSI3MCIgY3k9IjQwIiByPSI4IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSI0MCIgcj0iOCIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyMCA2MEwxNDAgODBMMTIwIDEwMFoiIGZpbGw9IiNFRjQ0NDQiLz4KPHRleHQgeD0iMTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzFENEVEOCI+QUxNT0RFU0s8L3RleHQ+Cjx0ZXh0IHg9IjEwIiB5PSIxNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzM3NDE1MSI+TW9iaWxlIFRyYWNrZXI8L3RleHQ+Cjwvc3ZnPgo=" 
              alt="Almodesk Logo" 
              className="me-2"
              style={{ height: '48px', width: 'auto' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="d-none d-md-flex align-items-center">
            <Link to="/" className="text-decoration-none text-gray-700 hover-text-red-500 me-4">Home</Link>
            <a href="#features" className="text-decoration-none text-gray-700 hover-text-red-500 me-4">Features</a>
            <Link to="/pricing" className="text-decoration-none text-gray-700 hover-text-red-500 me-4">Pricing</Link>
            <a href="#contact" className="text-decoration-none text-gray-700 hover-text-red-500 me-4">Contact</a>
            <Link 
              to="/register" 
              className="btn bg-blue-600 text-white px-4 py-2 rounded-pill hover-bg-blue-700 text-decoration-none"
            >
              Start Free Trial
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="btn d-md-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="d-md-none py-3 border-top">
            <div className="d-flex flex-column">
              <Link to="/" className="text-decoration-none text-gray-700 hover-text-red-500 py-2">Home</Link>
              <a href="#features" className="text-decoration-none text-gray-700 hover-text-red-500 py-2">Features</a>
              <Link to="/pricing" className="text-decoration-none text-gray-700 hover-text-red-500 py-2">Pricing</Link>
              <a href="#contact" className="text-decoration-none text-gray-700 hover-text-red-500 py-2">Contact</a>
              <Link 
                to="/register" 
                className="btn bg-blue-600 text-white px-4 py-2 rounded-pill hover-bg-blue-700 text-decoration-none mt-2 align-self-start"
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