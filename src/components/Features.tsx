import React from 'react';
import { 
  MapPin, Clock, Shield, Smartphone, Users, Battery, 
  BarChart3, Bell, Globe, Eye, Settings, Download,
  Cloud, Car, Zap, Monitor
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MapPin size={32} />,
      title: "Real-Time GPS Tracking",
      description: "View live location instantly with precise coordinates"
    },
    {
      icon: <Clock size={32} />,
      title: "Route History Playback",
      description: "Replay past routes and journeys with detailed timeline"
    },
    {
      icon: <Shield size={32} />,
      title: "Geo-Fence Alerts",
      description: "Get notified when a device leaves/enters a zone"
    },
    {
      icon: <Bell size={32} />,
      title: "Instant Notifications",
      description: "Speed, movement & safety alerts in real-time"
    },
    {
      icon: <Monitor size={32} />,
      title: "Single Dashboard",
      description: "Manage and track all devices in one place"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Multi-Device Support",
      description: "Track multiple mobiles simultaneously"
    },
    {
      icon: <Zap size={32} />,
      title: "Offline Tracking",
      description: "Stores data without internet and syncs later"
    },
    {
      icon: <Shield size={32} />,
      title: "High Data Security",
      description: "Strong protection for all user information"
    },
    {
      icon: <Battery size={32} />,
      title: "Battery & Network Status",
      description: "Monitor device health remotely"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Detailed Reports & Analytics",
      description: "Travel logs & usage insights"
    },
    {
      icon: <Bell size={32} />,
      title: "Smart Alerts",
      description: "Overspeed, idle, entry/exit notifications"
    },
    {
      icon: <MapPin size={32} />,
      title: "Accurate GPS System",
      description: "Highly precise location updates"
    },
    {
      icon: <Globe size={32} />,
      title: "Global Coverage",
      description: "Track devices anywhere in the world"
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Monitoring",
      description: "Continuous tracking without interruptions"
    },
    {
      icon: <Users size={32} />,
      title: "User & Role Management",
      description: "Assign admin, user & viewer roles"
    },
    {
      icon: <Download size={32} />,
      title: "Exportable Reports",
      description: "Download data in PDF/Excel formats"
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Backup",
      description: "Secure cloud-based data storage"
    },
    {
      icon: <Car size={32} />,
      title: "Vehicle & Asset Tracking",
      description: "Track mobiles, vehicles & assets"
    },
    {
      icon: <Settings size={32} />,
      title: "Customizable Settings",
      description: "Personalize alerts, zones & notifications"
    },
    {
      icon: <Eye size={32} />,
      title: "Easy-to-Use Interface",
      description: "Clean UI with smooth navigation"
    }
  ];

  return (
    <section id="features" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-gray-900 mb-3">
            Mobile Tracking App – 20 Key Features
          </h2>
          <p className="fs-5 text-gray-600 mx-auto" style={{ maxWidth: '48rem' }}>
            Comprehensive mobile tracking solution with advanced features for family safety, business monitoring, and security tracking
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="bg-blue-50 rounded-custom p-4 shadow-custom hover-scale border border-blue-100 hover-border-blue-300 h-100">
                <div className="text-blue-600 mb-3">
                  {feature.icon}
                </div>
                <h3 className="fs-6 fw-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 small mb-0">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <div className="gradient-bg-purple rounded-custom-xl p-5 text-white">
            <h3 className="fs-3 fw-bold mb-3">Ready to Get Started?</h3>
            <p className="fs-5 mb-4">Join thousands of users who trust Almodesk for their tracking needs</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button className="btn btn-light text-blue-600 px-4 py-2 rounded-pill fw-semibold hover-bg-gray-100">
                Start Free Trial
              </button>
              <button className="btn btn-outline-light px-4 py-2 rounded-pill fw-semibold">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;