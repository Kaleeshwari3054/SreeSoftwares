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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-50 py-5" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-white rounded-custom-xl shadow-custom-lg overflow-hidden">
              {/* Header */}
              <div className="gradient-bg-purple px-4 py-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-white rounded p-2 me-3">
                    <MessageSquare className="text-blue-600" size={24} />
                  </div>
                  <h1 className="fs-3 fw-bold text-white mb-0">ALMODESK</h1>
                </div>
                <h2 className="display-6 fw-bold text-white mb-2">Register for Trial</h2>
                <p className="text-white-50 fst-italic mb-0">Please share valid details only</p>
              </div>

              <div className="p-4">
                {/* Option Selection */}
                <div className="mb-4">
                  <h3 className="fs-5 fw-semibold text-gray-900 mb-4">
                    Select the option that matches your requirement
                  </h3>

                  <div className="space-y-4">
                    {/* Existing SIM Option */}
                    <div className="border border-gray-200 rounded-custom p-4 hover-border-blue-300">
                      <label className="d-flex align-items-start">
                        <input
                          type="radio"
                          name="option"
                          value="existing"
                          checked={selectedOption === 'existing'}
                          onChange={(e) => setSelectedOption(e.target.value)}
                          className="me-3 mt-1"
                        />
                        <div className="flex-grow-1">
                          <h4 className="fs-5 fw-semibold text-gray-900 mb-3">
                            Connect my existing mobile with Almodesk
                          </h4>
                          <div className="space-y-2">
                            <div className="d-flex align-items-center">
                              <Check className="text-green-500 me-2" size={20} />
                              <span className="text-success">Incoming tracking: Entire team can track device in real-time</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <X className="text-red-500 me-2" size={20} />
                              <span className="text-danger">Outgoing sharing: Only the device with mobile SIM can be tracked by others</span>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>

                    {/* Virtual Number Option */}
                    <div className="border border-gray-200 rounded-custom p-4 hover-border-blue-300">
                      <label className="d-flex align-items-start">
                        <input
                          type="radio"
                          name="option"
                          value="virtual"
                          checked={selectedOption === 'virtual'}
                          onChange={(e) => setSelectedOption(e.target.value)}
                          className="me-3 mt-1"
                        />
                        <div className="flex-grow-1">
                          <h4 className="fs-5 fw-semibold text-gray-900 mb-3">
                            Buy new virtual tracking service from Almodesk
                          </h4>
                          <div className="space-y-2">
                            <div className="d-flex align-items-center">
                              <Check className="text-green-500 me-2" size={20} />
                              <span className="text-success">Incoming tracking</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Check className="text-green-500 me-2" size={20} />
                              <span className="text-success">Outgoing tracking</span>
                            </div>
                            <p className="text-gray-600 mt-2 mb-0">
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
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-control form-control-lg rounded-custom"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control form-control-lg rounded-custom"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium text-gray-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control form-control-lg rounded-custom"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-control form-control-lg rounded-custom"
                        placeholder="Enter your company name (optional)"
                      />
                    </div>
                  </div>

                  {selectedOption === 'existing' && (
                    <div>
                      <label className="form-label fw-medium text-gray-700">
                        Existing SIM Number *
                      </label>
                      <input
                        type="tel"
                        name="simNumber"
                        required
                        value={formData.simNumber}
                        onChange={handleInputChange}
                        className="form-control form-control-lg rounded-custom"
                        placeholder="Enter your existing SIM number"
                      />
                    </div>
                  )}

                  <div className="bg-blue-50 border border-primary border-opacity-25 rounded-custom p-3">
                    <h4 className="fw-semibold text-primary mb-2">What you'll get:</h4>
                    <ul className="list-unstyled mb-0 text-primary">
                      <li>• 7-day free trial with all premium features</li>
                      <li>• Real-time GPS tracking for unlimited devices</li>
                      <li>• 24/7 customer support</li>
                      <li>• No setup fees or hidden charges</li>
                    </ul>
                  </div>

                  <button
                    type="submit"
                    className="btn gradient-bg-purple text-white w-100 py-3 fs-5 fw-semibold rounded-custom hover-scale"
                  >
                    Start Free Trial Now
                  </button>
                </form>

                <div className="mt-4 text-center text-gray-600">
                  <p className="mb-2">By registering, you agree to our Terms of Service and Privacy Policy</p>
                  <p className="mb-0">Need help? Contact us at <a href="mailto:support@almodesk.com" className="text-blue-600 text-decoration-none">support@almodesk.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;