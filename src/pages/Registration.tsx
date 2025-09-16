import React, { useState } from 'react';
import { Check, X, MessageSquare } from 'lucide-react';

const Registration = () => {
  const [selectedOption, setSelectedOption] = useState('existing');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    simNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white rounded-lg p-2">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-white">ALMODESK</h1>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Register for Trial</h2>
            <p className="text-blue-100 italic">Please share valid details only</p>
          </div>

          <div className="p-8">
            {/* Option Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Select the option that matches your requirement
              </h3>

              <div className="space-y-4">
                {/* Existing SIM Option */}
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="option"
                      value="existing"
                      checked={selectedOption === 'existing'}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Connect my existing mobile with Almodesk
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span className="text-green-700">Incoming tracking: Entire team can track device in real-time</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <X className="w-5 h-5 text-red-500" />
                          <span className="text-red-700">Outgoing sharing: Only the device with mobile SIM can be tracked by others</span>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Virtual Number Option */}
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="option"
                      value="virtual"
                      checked={selectedOption === 'virtual'}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Buy new virtual tracking service from Almodesk
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span className="text-green-700">Incoming tracking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span className="text-green-700">Outgoing tracking</span>
                        </div>
                        <p className="text-gray-600 mt-2">
                          Entire team can track and be tracked by all devices at the same time
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your company name (optional)"
                  />
                </div>
              </div>

              {selectedOption === 'existing' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Existing SIM Number *
                  </label>
                  <input
                    type="tel"
                    name="simNumber"
                    required
                    value={formData.simNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your existing SIM number"
                  />
                </div>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">What you'll get:</h4>
                <ul className="space-y-1 text-blue-800">
                  <li>• 7-day free trial with all premium features</li>
                  <li>• Real-time GPS tracking for unlimited devices</li>
                  <li>• 24/7 customer support</li>
                  <li>• No setup fees or hidden charges</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial Now
              </button>
            </form>

            <div className="mt-8 text-center text-gray-600">
              <p>By registering, you agree to our Terms of Service and Privacy Policy</p>
              <p className="mt-2">Need help? Contact us at <a href="mailto:support@almodesk.com" className="text-blue-600 hover:underline">support@almodesk.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;