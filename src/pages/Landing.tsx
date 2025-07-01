import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: '🛍️',
      title: 'Student Marketplace',
      description: 'Buy and sell within the Covenant University community'
    },
    {
      icon: '🎓',
      title: 'Verified Vendors',
      description: 'All vendors are verified Covenant University students'
    },
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Quick delivery across campus locations'
    },
    {
      icon: '💳',
      title: 'Secure Payments',
      description: 'Safe and secure payment processing'
    }
  ];

  const categories = [
    { name: 'Electronics', icon: '📱', color: 'bg-blue-500' },
    { name: 'Fashion', icon: '👕', color: 'bg-purple-500' },
    { name: 'Books', icon: '📚', color: 'bg-green-500' },
    { name: 'Food', icon: '🍕', color: 'bg-orange-500' },
    { name: 'Beauty', icon: '💄', color: 'bg-pink-500' },
    { name: 'Sports', icon: '⚽', color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold transition-all duration-300 ${
                scrollY > 50 ? 'text-blue-600 scale-105' : 'text-blue-600'
              }`}>
                Epsy
              </h1>
              <span className="ml-2 text-sm text-gray-600">Covenant University</span>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/signin')}
                className="text-gray-700 hover:text-blue-600 hover-scale transition-all duration-200"
              >
                Sign In
              </Button>
              <Button
                onClick={() => navigate('/signup')}
                className="bg-blue-600 hover:bg-blue-700 hover-scale transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`text-center transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Epsy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The premier marketplace for Covenant University students. Buy, sell, and connect with fellow students in a safe, verified environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/home')}
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 hover-scale transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Browse Products
              </Button>
              <Button
                onClick={() => navigate('/signup')}
                variant="secondary"
                className="text-lg px-8 py-3 hover-scale transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Start Selling
              </Button>
            </div>
          </div>
        </div>
        
        {/* Minimal decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-200 rounded-full opacity-20"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-500 ${
            scrollY > 300 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">Epsy</span>?
            </h2>
            <p className="text-lg text-gray-600">
              The safest and most convenient way to buy and sell within the Covenant University community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover-lift ${
                  scrollY > 400 + (index * 50) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-500 ${
            scrollY > 800 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
            <p className="text-lg text-gray-600">
              Discover amazing products from your fellow students
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => navigate('/home')}
                className={`group cursor-pointer transition-all duration-300 hover-scale-sm ${
                  scrollY > 900 + (index * 30) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className={`w-20 h-20 mx-auto rounded-full ${category.color} flex items-center justify-center text-2xl text-white mb-3 shadow-md group-hover:shadow-lg transition-all duration-200`}>
                  {category.icon}
                </div>
                <p className="text-center text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-500 ${
            scrollY > 1200 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of Covenant University students buying and selling on Epsy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/signup')}
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 hover-scale transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Create Account
              </Button>
              <Button
                onClick={() => navigate('/home')}
                variant="ghost"
                className="text-white border-white hover:bg-blue-700 text-lg px-8 py-3 hover-scale transition-all duration-200"
              >
                Browse Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Epsy</h3>
              <p className="text-gray-400">
                The premier marketplace for Covenant University students.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigate('/home')} className="hover:text-white transition-colors duration-200">Browse Products</button></li>
                <li><button onClick={() => navigate('/signup')} className="hover:text-white transition-colors duration-200">Start Selling</button></li>
                <li><button onClick={() => navigate('/signin')} className="hover:text-white transition-colors duration-200">Sign In</button></li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors duration-200">Help Center</button></li>
                <li><button className="hover:text-white transition-colors duration-200">Contact Us</button></li>
                <li><button className="hover:text-white transition-colors duration-200">Safety Guidelines</button></li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors duration-200">Privacy Policy</button></li>
                <li><button className="hover:text-white transition-colors duration-200">Terms of Service</button></li>
                <li><button className="hover:text-white transition-colors duration-200">Cookie Policy</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p>&copy; 2024 Epsy. All rights reserved. Covenant University Marketplace.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing; 