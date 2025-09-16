import React from 'react';
import { 
  MapPin, Clock, Shield, Smartphone, Users, Battery, 
  BarChart3, Bell, Globe, Eye, Settings, Download,
  Cloud, Car, Zap, Monitor
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Real-Time GPS Tracking",
      description: "View live location instantly with precise coordinates"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Route History Playback",
      description: "Replay past routes and journeys with detailed timeline"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Geo-Fence Alerts",
      description: "Get notified when a device leaves/enters a zone"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Instant Notifications",
      description: "Speed, movement & safety alerts in real-time"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Single Dashboard",
      description: "Manage and track all devices in one place"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Multi-Device Support",
      description: "Track multiple mobiles simultaneously"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Offline Tracking",
      description: "Stores data without internet and syncs later"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "High Data Security",
      description: "Strong protection for all user information"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Battery & Network Status",
      description: "Monitor device health remotely"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Detailed Reports & Analytics",
      description: "Travel logs & usage insights"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Alerts",
      description: "Overspeed, idle, entry/exit notifications"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Accurate GPS System",
      description: "Highly precise location updates"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coverage",
      description: "Track devices anywhere in the world"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Monitoring",
      description: "Continuous tracking without interruptions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User & Role Management",
      description: "Assign admin, user & viewer roles"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Exportable Reports",
      description: "Download data in PDF/Excel formats"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Backup",
      description: "Secure cloud-based data storage"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Vehicle & Asset Tracking",
      description: "Track mobiles, vehicles & assets"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customizable Settings",
      description: "Personalize alerts, zones & notifications"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Easy-to-Use Interface",
      description: "Clean UI with smooth navigation"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mobile Tracking App – 20 Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mobile tracking solution with advanced features for family safety, business monitoring, and security tracking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">Join thousands of users who trust Almodesk for their tracking needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
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