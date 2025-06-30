import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useApi } from '../hooks/useApi';
import { User } from '../types/api/types';
import { isValidEmail } from '../utils/validation';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { data: users, isLoading, error, execute } = useApi<User[]>();

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
    <Layout title="React TypeScript App">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Your React TypeScript App
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is a well-structured React application with TypeScript, Tailwind CSS, and proper API integration patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Add User</h3>
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
                Add User
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
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Features</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="text-blue-600 text-2xl mb-2">⚛️</div>
              <h4 className="font-medium text-gray-900">React 18</h4>
              <p className="text-sm text-gray-600">Latest React features and hooks</p>
            </div>
            <div className="text-center p-4">
              <div className="text-blue-600 text-2xl mb-2">📘</div>
              <h4 className="font-medium text-gray-900">TypeScript</h4>
              <p className="text-sm text-gray-600">Full type safety and IntelliSense</p>
            </div>
            <div className="text-center p-4">
              <div className="text-blue-600 text-2xl mb-2">🎨</div>
              <h4 className="font-medium text-gray-900">Tailwind CSS</h4>
              <p className="text-sm text-gray-600">Utility-first CSS framework</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home; 