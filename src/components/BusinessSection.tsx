import React from 'react';
import { MessageSquare, Phone, Users, BarChart3, Headphones, Zap } from 'lucide-react';

const BusinessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-red-500 rounded-lg p-2">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-blue-900">ALMODESK</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                A phone app, built
                <span className="block">for business</span>
              </h2>
              
              <p className="text-xl text-gray-600">
                Smarter Calls. AI Features. Growth Tools.
              </p>
            </div>

            {/* Feature Lists */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-red-500">AI Features</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>AI Caller Tunes</li>
                  <li>AI Smart Reviews</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-blue-500">Smarter Calls</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>IVR Routing</li>
                  <li>Call Distribution</li>
                  <li>Auto Call Recording</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-green-500">Call Insights</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>Admin Dashboard</li>
                  <li>Detailed Reports</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-purple-500">Growth Tools</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>CRM Integration</li>
                  <li>WhatsApp API</li>
                </ul>
              </div>
            </div>

            <button className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors">
              START FREE TRIAL
            </button>

            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                Add AI power to your business SIM
              </p>
              <p className="text-gray-600">www.almodesk.com</p>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px]">
              {/* Phone Frame */}
              <div className="bg-gray-800 rounded-3xl p-3 shadow-2xl h-full">
                <div className="bg-white rounded-2xl h-full relative overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="p-4 h-full">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4 text-sm">
                      <span>16:21 PM</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-300 rounded"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded"></div>
                        <div className="w-4 h-2 bg-green-500 rounded"></div>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="bg-blue-100 rounded-lg p-3 mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">Modern Realtors</h3>
                          <p className="text-sm text-gray-600">+91 1224867350</p>
                        </div>
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Team Members */}
                    <div className="bg-green-100 rounded-lg p-3 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">
                        <span>Alexandra Johnson Gracy Aman</span>
                      </div>
                    </div>

                    {/* Call Info */}
                    <div className="space-y-3">
                      <div className="bg-red-100 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm">Anuka</p>
                            <p className="text-xs text-gray-600">Token</p>
                          </div>
                          <div className="flex space-x-2">
                            <span className="bg-gray-200 px-2 py-1 rounded text-xs">293</span>
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">02:0</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-100 rounded-lg p-3">
                        <p className="text-sm text-purple-700">Incoming Call from +91 91098621</p>
                        <div className="mt-2 flex justify-center">
                          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                            <Phone className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Call History */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2">
                          <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4 text-green-500" />
                            <div>
                              <p className="text-sm">+91 9703385371</p>
                              <p className="text-xs text-gray-500">02:25 Reli</p>
                            </div>
                          </div>
                          <Phone className="w-4 h-4 text-gray-400" />
                        </div>

                        <div className="flex justify-between items-center p-2">
                          <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4 text-orange-500" />
                            <div>
                              <p className="text-sm">+91 1224667850</p>
                              <p className="text-xs text-gray-500">01:39 Reli</p>
                            </div>
                          </div>
                          <Phone className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-around bg-gray-100 rounded-lg p-2">
                        <div className="text-center">
                          <Phone className="w-5 h-5 mx-auto mb-1" />
                          <span className="text-xs">Call</span>
                        </div>
                        <div className="text-center">
                          <BarChart3 className="w-5 h-5 mx-auto mb-1" />
                          <span className="text-xs">Dashboard</span>
                        </div>
                        <div className="text-center">
                          <Users className="w-5 h-5 mx-auto mb-1" />
                          <span className="text-xs">Contacts</span>
                        </div>
                        <div className="text-center">
                          <Headphones className="w-5 h-5 mx-auto mb-1" />
                          <span className="text-xs">Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;