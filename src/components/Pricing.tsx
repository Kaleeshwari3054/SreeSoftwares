import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹199",
      period: "per year",
      features: [
        "Real-time location tracking",
        "Emergency call feature",
        "Basic reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹299",
      period: "per year",
      features: [
        "All Basic features",
        "WhatsApp integration",
        "Advanced reports",
        "Battery monitoring",
        "Privacy controls",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹499",
      period: "per year",
      features: [
        "All Professional features",
        "AI-powered insights",
        "Custom integrations",
        "Dedicated support",
        "Advanced security",
        "Multi-device management"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan for your family, education, or business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 ${
              plan.popular 
                ? 'bg-gradient-to-br from-red-500 to-pink-600 text-white transform scale-105' 
                : 'bg-gray-50 border border-gray-200'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-green-300' : 'text-green-500'
                    }`} />
                    <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
                plan.popular
                  ? 'bg-white text-red-500 hover:bg-gray-100'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include 30-day free trial • No setup fees • Cancel anytime
          </p>
          <button className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors">
            START FREE TRIAL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;