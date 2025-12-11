import React from 'react';
import { Users, Globe, Heart } from 'lucide-react';

const GlobalStats = () => {
  return (
    <section className="gradient-bg-cyan py-5 position-relative">
      {/* World Map Background Effect */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.1 }}>
        <div className="w-100 h-100 gradient-bg-green"></div>
      </div>
      
      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2 className="display-2 fw-bold text-blue-900 mb-4">ALMODESK</h2>
        </div>

        {/* Stats Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="bg-white rounded-custom p-4 shadow-custom border border-blue-200 text-center hover-scale">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <Users className="text-red-500 me-2" size={32} />
              </div>
              <div className="display-4 fw-bold text-red-500 mb-2">10,000+</div>
              <div className="fs-5 fw-semibold text-blue-900">Users Worldwide</div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-white rounded-custom p-4 shadow-custom border border-blue-200 text-center hover-scale">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <Globe className="text-red-500 me-2" size={32} />
              </div>
              <div className="display-4 fw-bold text-red-500 mb-2">50+</div>
              <div className="fs-5 fw-semibold text-blue-900">Countries</div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-white rounded-custom p-4 shadow-custom border border-blue-200 text-center hover-scale">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <Heart className="text-red-500 me-2" size={32} />
              </div>
              <div className="display-4 fw-bold text-red-500 mb-2">2,000+</div>
              <div className="fs-5 fw-semibold text-blue-900">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Trust Message */}
        <div className="text-center space-y-6">
          <h3 className="display-5 fw-bold text-blue-900">
            Trusted Globally for Family,<br />
            Business & Security Tracking
          </h3>
          <p className="fs-3 fw-semibold text-blue-900">
            One App – Unlimited Safety,<br />
            Anywhere in the World
          </p>
        </div>

        {/* Red dots representing global presence */}
        <div className="position-absolute animate-ping bg-red-500 rounded-circle" style={{ top: '80px', left: '80px', width: '12px', height: '12px' }}></div>
        <div className="position-absolute animate-ping bg-red-500 rounded-circle" style={{ top: '128px', right: '128px', width: '12px', height: '12px', animationDelay: '0.5s' }}></div>
        <div className="position-absolute animate-ping bg-red-500 rounded-circle" style={{ bottom: '128px', left: '160px', width: '12px', height: '12px', animationDelay: '1s' }}></div>
        <div className="position-absolute animate-ping bg-red-500 rounded-circle" style={{ bottom: '80px', right: '80px', width: '12px', height: '12px', animationDelay: '1.5s' }}></div>
        <div className="position-absolute animate-ping bg-red-500 rounded-circle" style={{ top: '160px', left: '50%', width: '12px', height: '12px', animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default GlobalStats;