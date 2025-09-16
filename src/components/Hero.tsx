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
            <div className="relative mx-auto w-80 h-96">
              {/* Phone Frame */}
              <div className="bg-gray-800 rounded-3xl p-3 shadow-2xl">
                <div className="bg-white rounded-2xl h-full relative overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="p-6 h-full flex flex-col items-center justify-center">
                    <div className="bg-blue-600 rounded-2xl p-4 mb-4">
                      <MapPin className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">ALMODESK</h3>
                    <p className="text-gray-600 text-center mb-4">Real-Time Tracking</p>
                    <div className="bg-green-500 rounded-full p-4">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Icons Around Phone */}
              <div className="absolute -top-4 -left-4">
                <div className="bg-green-500 rounded-full p-3 shadow-lg animate-pulse">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm mt-2 text-center font-medium">Real-Time<br />GPS Tracking</p>
              </div>

              <div className="absolute -top-4 -right-4">
                <div className="bg-red-500 rounded-full p-3 shadow-lg animate-pulse">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm mt-2 text-center font-medium">Geo-Fence<br />Alerts</p>
              </div>

              <div className="absolute -bottom-4 -left-4">
                <div className="bg-purple-500 rounded-full p-3 shadow-lg animate-pulse">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm mt-2 text-center font-medium">Multi-Device<br />Support</p>
              </div>

              <div className="absolute -bottom-4 -right-4">
                <div className="bg-orange-500 rounded-full p-3 shadow-lg animate-pulse">
                  <Battery className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm mt-2 text-center font-medium">Battery<br />Monitoring</p>
              </div>

              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
                <div className="bg-blue-500 rounded-full p-3 shadow-lg animate-pulse">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm mt-2 text-center font-medium">24/7<br />Monitoring</p>
              </div>

              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                <div className="bg-pink-500 rounded-full p-3 shadow-lg animate-pulse">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm mt-2 text-center font-medium">Smart<br />Alerts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;