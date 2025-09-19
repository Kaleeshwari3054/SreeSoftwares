import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Smartphone, Shield, Users, Clock, Battery, MessageSquare, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                India's most powerful
                <span className="block text-blue-600">Mobile Tracking</span>
                <span className="block">Application</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Built to help you track family members, monitor employees, and secure your business with advanced GPS tracking technology.
              </p>

              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-lg font-semibold text-gray-800">
                  <span className="text-yellow-600">Connect your existing mobile SIM</span><br />
                  or track any device remotely
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/register"
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Register for Trial
              </Link>
              <Link 
                to="/pricing"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Plans & Pricing
              </Link>
            </div>
          </div>

          {/* Right Content - Phone Mockup with Features */}
          <div className="relative">
            <img 
              src="/WhatsApp Image 2025-09-13 at 6.22.45 PM (1).jpeg" 
              alt="Almodesk Mobile Tracking App Features" 
              className="w-full max-w-lg h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;