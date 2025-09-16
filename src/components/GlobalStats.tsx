import React from 'react';
import { Users, Globe, Heart } from 'lucide-react';

const GlobalStats = () => {
  return (
    <section className="bg-gradient-to-br from-cyan-50 to-blue-100 py-20 relative">
      {/* World Map Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-green-400 to-blue-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-8">ALMODESK</h2>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 text-center transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-red-500 mr-2" />
            </div>
            <div className="text-4xl font-bold text-red-500 mb-2">10,000+</div>
            <div className="text-xl font-semibold text-blue-900">Users Worldwide</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 text-center transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-red-500 mr-2" />
            </div>
            <div className="text-4xl font-bold text-red-500 mb-2">50+</div>
            <div className="text-xl font-semibold text-blue-900">Countries</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 text-center transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-red-500 mr-2" />
            </div>
            <div className="text-4xl font-bold text-red-500 mb-2">2,000+</div>
            <div className="text-xl font-semibold text-blue-900">Happy Customers</div>
          </div>
        </div>

        {/* Trust Message */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900">
            Trusted Globally for Family,<br />
            Business & Security Tracking
          </h3>
          <p className="text-2xl font-semibold text-blue-800">
            One App – Unlimited Safety,<br />
            Anywhere in the World
          </p>
        </div>

        {/* Red dots representing global presence */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-red-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-red-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-red-500 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-40 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default GlobalStats;