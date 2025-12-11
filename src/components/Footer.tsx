import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-md-3">
            <div className="space-y-4">
              <div className="d-flex align-items-center">
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNDAiIGhlaWdodD0iODAiIHJ4PSIyMCIgZmlsbD0iI0VGNDQ0NCIvPgo8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI4IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSI3MCIgY3k9IjQwIiByPSI4IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSI0MCIgcj0iOCIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyMCA2MEwxNDAgODBMMTIwIDEwMFoiIGZpbGw9IiNFRjQ0NDQiLz4KPHRleHQgeD0iMTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzFENEVEOCI+QUxNT0RFU0s8L3RleHQ+Cjx0ZXh0IHg9IjEwIiB5PSIxNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzM3NDE1MSI+TW9iaWxlIFRyYWNrZXI8L3RleHQ+Cjwvc3ZnPgo=" 
                  alt="Almodesk Logo" 
                  style={{ height: '40px', width: 'auto' }}
                />
              </div>
              <p className="text-white-50">
                World's most powerful mobile tracking application designed for family, education, and business use.
              </p>
              <div className="d-flex space-x-4">
                <Facebook className="text-white-50 hover-text-white" size={20} style={{ cursor: 'pointer' }} />
                <Twitter className="text-white-50 hover-text-white" size={20} style={{ cursor: 'pointer' }} />
                <Instagram className="text-white-50 hover-text-white" size={20} style={{ cursor: 'pointer' }} />
                <Linkedin className="text-white-50 hover-text-white" size={20} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="col-md-3">
            <h4 className="fs-5 fw-semibold mb-3">Product</h4>
            <ul className="list-unstyled space-y-2 text-white-50">
              <li><a href="#features" className="text-decoration-none text-white-50 hover-text-white">Features</a></li>
              <li><a href="/pricing" className="text-decoration-none text-white-50 hover-text-white">Pricing</a></li>
              <li><a href="#" className="text-decoration-none text-white-50 hover-text-white">Mobile App</a></li>
              <li><a href="#" className="text-decoration-none text-white-50 hover-text-white">API Documentation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3">
            <h4 className="fs-5 fw-semibold mb-3">Support</h4>
            <ul className="list-unstyled space-y-2 text-white-50">
              <li><a href="#" className="text-decoration-none text-white-50 hover-text-white">Help Center</a></li>
              <li><a href="#" className="text-decoration-none text-white-50 hover-text-white">Documentation</a></li>
              <li><a href="#" className="text-decoration-none text-white-50 hover-text-white">Contact Us</a></li>
              <li><a href="#" className="text-decoration-none text-white-50 hover-text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h4 className="fs-5 fw-semibold mb-3">Contact</h4>
            <div className="space-y-3 text-white-50">
              <div className="d-flex align-items-center">
                <Mail size={20} className="me-2" />
                <span>www.almodesk.com</span>
              </div>
              <div className="d-flex align-items-center">
                <Phone size={20} className="me-2" />
                <span>+91 9500941142</span>
              </div>
              <div className="d-flex align-items-center">
                <MapPin size={20} className="me-2" />
                <span>India</span>
              </div>
              <div className="mt-3">
                <p className="small fw-semibold text-white mb-1">Sreesoftwares</p>
                <p className="small mb-0">Trusted Mobile Tracking Solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary mt-5 pt-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="text-white-50 small mb-3 mb-md-0">
              © 2024 Almodesk by Sreesoftwares. All rights reserved.
            </p>
            <div className="d-flex space-x-6">
              <a href="#" className="text-white-50 hover-text-white small text-decoration-none me-3">Terms of Service</a>
              <a href="#" className="text-white-50 hover-text-white small text-decoration-none me-3">Privacy Policy</a>
              <a href="#" className="text-white-50 hover-text-white small text-decoration-none">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;