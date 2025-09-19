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
        card: "gradient-bg-red text-white hover-scale",
        button: "btn-light text-purple-600",
        check: "text-success"
      };
    }
    
    const colors = {
      blue: {
        card: "bg-white border border-primary border-opacity-25 hover-border-blue-300",
        button: "btn-primary",
        check: "text-primary"
      },
      green: {
        card: "bg-white border border-success border-opacity-25 hover-border-blue-300",
        button: "btn-success",
        check: "text-success"
      }
    };
    
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="bg-gray-50 py-5" style={{ minHeight: '100vh' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <div className="bg-red-500 rounded-custom p-3 me-3">
              <MessageSquare className="text-white" size={32} />
            </div>
            <h1 className="display-6 fw-bold text-gray-900 mb-0">ALMODESK</h1>
          </div>
          <h2 className="display-4 fw-bold text-gray-900 mb-3">
            Choose Your Plan
          </h2>
          <p className="fs-5 text-gray-600 mx-auto mb-4" style={{ maxWidth: '48rem' }}>
            Select the perfect plan for your family, business, or enterprise tracking needs
          </p>
          
          {/* Billing Toggle */}
          <div className="bg-white rounded-pill p-1 d-inline-flex shadow-custom">
            <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
              Monthly
            </button>
            <button className="btn btn-link text-gray-600 fw-semibold px-4 py-2 text-decoration-none hover-text-blue-600">
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 mb-5">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, plan.popular);
            
            return (
              <div key={index} className="col-lg-4">
                <div className={`position-relative rounded-custom-xl p-4 h-100 ${colorClasses.card}`}>
                  {plan.popular && (
                    <div className="position-absolute top-0 start-50 translate-middle">
                      <div className="bg-warning text-dark px-3 py-2 rounded-pill small fw-semibold d-flex align-items-center">
                        <Star size={16} className="me-1" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <h3 className={`fs-3 fw-bold mb-3 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <div className="mb-3">
                      <span className={`display-5 fw-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price}
                      </span>
                      <span className={`fs-5 ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                        /{plan.period}
                      </span>
                    </div>
                    <div className={`small ${plan.popular ? 'text-white-50' : 'text-gray-500'}`}>
                      or {plan.yearlyPrice}/year
                    </div>
                  </div>

                  <ul className="list-unstyled space-y-4 mb-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="d-flex align-items-start">
                        <Check className={`me-2 mt-1 flex-shrink-0 ${colorClasses.check}`} size={20} />
                        <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/register"
                    className={`btn w-100 py-3 rounded-pill fw-semibold text-decoration-none ${colorClasses.button}`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Comparison */}
        <div className="bg-white rounded-custom-xl shadow-custom p-4 mb-5">
          <h3 className="fs-3 fw-bold text-gray-900 mb-4 text-center">
            Compare All Features
          </h3>
          
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="border-bottom border-2">
                  <th className="text-start py-3 fw-semibold text-gray-900">Features</th>
                  <th className="text-center py-3 fw-semibold text-primary">Basic</th>
                  <th className="text-center py-3 fw-semibold text-purple-600">Professional</th>
                  <th className="text-center py-3 fw-semibold text-success">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3">Real-time GPS tracking</td>
                  <td className="text-center py-3"><Check className="text-primary mx-auto" size={20} /></td>
                  <td className="text-center py-3"><Check className="text-purple-600 mx-auto" size={20} /></td>
                  <td className="text-center py-3"><Check className="text-success mx-auto" size={20} /></td>
                </tr>
                <tr>
                  <td className="py-3">Number of devices</td>
                  <td className="text-center py-3 text-primary">5</td>
                  <td className="text-center py-3 text-purple-600">15</td>
                  <td className="text-center py-3 text-success">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3">Location history</td>
                  <td className="text-center py-3 text-primary">7 days</td>
                  <td className="text-center py-3 text-purple-600">30 days</td>
                  <td className="text-center py-3 text-success">90 days</td>
                </tr>
                <tr>
                  <td className="py-3">API access</td>
                  <td className="text-center py-3">-</td>
                  <td className="text-center py-3">-</td>
                  <td className="text-center py-3"><Check className="text-success mx-auto" size={20} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="gradient-bg-purple rounded-custom-xl p-5 text-white">
            <h3 className="display-6 fw-bold mb-3">Ready to Get Started?</h3>
            <p className="fs-5 mb-4">
              Join thousands of users who trust Almodesk for their tracking needs
            </p>
            <div className="space-y-4">
              <Link
                to="/register"
                className="btn btn-light text-blue-600 px-5 py-3 rounded-pill fs-5 fw-semibold text-decoration-none d-inline-block"
              >
                Start Free Trial
              </Link>
              <p className="text-white-50 small">
                7-day free trial • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-5 text-center">
          <div className="bg-white rounded-custom p-4 shadow-custom mx-auto" style={{ maxWidth: '32rem' }}>
            <h4 className="fs-5 fw-bold text-gray-900 mb-3">Need Help Choosing?</h4>
            <div className="row g-3 text-gray-600">
              <div className="col-md-6">
                <p className="mb-1"><strong>Company:</strong> Sreesoftwares</p>
                <p className="mb-0"><strong>Website:</strong> www.almodesk.com</p>
              </div>
              <div className="col-md-6">
                <p className="mb-1"><strong>WhatsApp:</strong> +91 9500941142</p>
                <p className="mb-0"><strong>Email:</strong> support@almodesk.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;