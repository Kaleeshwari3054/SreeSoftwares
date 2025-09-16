import React from 'react';
import { Check, Star, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹199",
      period: "per month",
      yearlyPrice: "₹1,999",
      features: [
        "Real-time GPS tracking",
        "Up to 5 devices",
        "Basic geo-fence alerts",
        "7-day location history",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Professional",
      price: "₹299",
      period: "per month",
      yearlyPrice: "₹2,999",
      features: [
        "All Basic features",
        "Up to 15 devices",
        "Advanced geo-fence alerts",
        "30-day location history",
        "Route playback",
        "Battery monitoring",
        "Smart notifications",
        "Priority support",
        "Export reports (PDF/Excel)"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Enterprise",
      price: "₹499",
      period: "per month",
      yearlyPrice: "₹4,999",
      features: [
        "All Professional features",
        "Unlimited devices",
        "90-day location history",
        "Advanced analytics",
        "Custom geo-fences",
        "API access",
        "White-label solution",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations"
      ],
      popular: false,
      color: "green"
    }
  ];

  const getColorClasses = (color: string, popular: boolean) => {
    if (popular) {
      return {
        card: "bg-gradient-to-br from-purple-500 to-pink-600 text-white transform scale-105",
        button: "bg-white text-purple-500 hover:bg-gray-100",
        check: "text-purple-200"
      };
    }
    
    const colors = {
      blue: {
        card: "bg-white border-2 border-blue-200 hover:border-blue-300",
        button: "bg-blue-600 text-white hover:bg-blue-700",
        check: "text-blue-500"
      },
      green: {
        card: "bg-white border-2 border-green-200 hover:border-green-300",
        button: "bg-green-600 text-white hover:bg-green-700",
        check: "text-green-500"
      }
    };
    
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-red-500 rounded-lg p-3">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">ALMODESK</h1>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Select the perfect plan for your family, business, or enterprise tracking needs
          </p>
          
          {/* Billing Toggle */}
          <div className="bg-white rounded-full p-1 inline-flex shadow-lg">
            <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-semibold hover:text-blue-600">
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, plan.popular);
            
            return (
              <div key={index} className={`relative rounded-2xl p-8 transition-all duration-300 ${colorClasses.card}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
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
                  <div className={`text-sm ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>
                    or {plan.yearlyPrice}/year
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colorClasses.check}`} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/register"
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-colors text-center block ${colorClasses.button}`}
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>

        {/* Features Comparison */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Compare All Features
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-600">Basic</th>
                  <th className="text-center py-4 px-4 font-semibold text-purple-600">Professional</th>
                  <th className="text-center py-4 px-4 font-semibold text-green-600">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-4">Real-time GPS tracking</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-blue-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-purple-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Number of devices</td>
                  <td className="text-center py-4 px-4 text-blue-600">5</td>
                  <td className="text-center py-4 px-4 text-purple-600">15</td>
                  <td className="text-center py-4 px-4 text-green-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Location history</td>
                  <td className="text-center py-4 px-4 text-blue-600">7 days</td>
                  <td className="text-center py-4 px-4 text-purple-600">30 days</td>
                  <td className="text-center py-4 px-4 text-green-600">90 days</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">API access</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6">
              Join thousands of users who trust Almodesk for their tracking needs
            </p>
            <div className="space-y-4">
              <Link
                to="/register"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Start Free Trial
              </Link>
              <p className="text-blue-100">
                7-day free trial • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Need Help Choosing?</h4>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <div>
                <p><strong>Company:</strong> Sreesoftwares</p>
                <p><strong>Website:</strong> www.almodesk.com</p>
              </div>
              <div>
                <p><strong>WhatsApp:</strong> +91 9500941142</p>
                <p><strong>Email:</strong> support@almodesk.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;