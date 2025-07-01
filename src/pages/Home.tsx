import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button, Input } from '../components/ui';
import { useApi } from '../hooks/useApi';
import { isValidEmail } from '../utils/validation';
import { authService } from '../services/api';

// Demo type for the example
interface DemoUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { data: users, isLoading, error, execute } = useApi<DemoUser[]>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Example API call - replace with your actual API
    try {
      await execute(async () => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        return [
          { id: '1', name: formData.name, email: formData.email, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
        ];
      });
      
      // Reset form on success
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleFetchUsers = async () => {
    try {
      await execute(async () => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        return [
          { id: '1', name: 'John Doe', email: 'john@example.com', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
          { id: '2', name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
        ];
      });
    } catch (error) {
      console.error('Fetch users error:', error);
    }
  };

  return (
    <Layout title="Epsy - Welcome">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Epsy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted platform for connecting with vendors and customers. Join our community today!
          </p>
        </div>

        {/* Authentication Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Started</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Button 
              onClick={() => navigate('/signup')} 
              className="w-full"
            >
              Create Account
            </Button>
            <Button 
              onClick={() => navigate('/signin')} 
              variant="secondary"
              className="w-full"
            >
              Sign In
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Demo Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                placeholder="Enter your name"
                required
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                placeholder="Enter your email"
                required
              />
              <Button type="submit" loading={isLoading} className="w-full">
                Submit Demo
              </Button>
            </form>
          </div>

          {/* API Demo Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">API Demo</h3>
            <Button onClick={handleFetchUsers} loading={isLoading} className="mb-4">
              Fetch Users
            </Button>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            {users && users.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Users:</h4>
                {users.map(user => (
                  <div key={user.id} className="bg-gray-50 p-3 rounded">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Features</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="text-blue-600 text-2xl mb-2">🛍️</div>
              <h4 className="font-medium text-gray-900">Vendor Marketplace</h4>
              <p className="text-sm text-gray-600">Connect with trusted vendors</p>
            </div>
            <div className="text-center p-4">
              <div className="text-blue-600 text-2xl mb-2">🔐</div>
              <h4 className="font-medium text-gray-900">Secure Authentication</h4>
              <p className="text-sm text-gray-600">Safe and verified accounts</p>
            </div>
            <div className="text-center p-4">
              <div className="text-blue-600 text-2xl mb-2">📱</div>
              <h4 className="font-medium text-gray-900">Modern Platform</h4>
              <p className="text-sm text-gray-600">Built with React & TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home; 