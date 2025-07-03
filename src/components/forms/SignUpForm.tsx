import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../ui';
import { useApi } from '../../hooks/useApi';
import { RegisterRequest } from '../../types/api/types';
import { isValidEmail } from '../../utils/validation';
import { authService } from '../../services/api';

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const { execute, isLoading, error } = useApi();
  
  const [formData, setFormData] = useState<RegisterRequest>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: '',
    isVendor: false,
    vendorCategory: 'CLOTHING'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const vendorCategories = [
    { value: 'CLOTHING', label: 'Clothing' },
    { value: 'FOOD', label: 'Food' },
    { value: 'ELECTRONICS', label: 'Electronics' },
    { value: 'HEALTH', label: 'Health' },
    { value: 'BEAUTY', label: 'Beauty' },
    { value: 'SPORTS', label: 'Sports' },
    { value: 'BOOKS', label: 'Books' },
    { value: 'OTHER', label: 'Other' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (formData.isVendor && !formData.vendorCategory) {
      newErrors.vendorCategory = 'Vendor category is required for vendors';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await execute(() => authService.register(formData));
      
      if (response) {
        // Store user ID for OTP verification
        localStorage.setItem('epsy_userId', response.userId);
        localStorage.setItem('epsy_userEmail', formData.email);
        
        // Navigate to OTP verification page
        navigate('/verify-otp');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Epsy</h1>
          <h2 className="text-xl font-semibold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join Epsy and start your journey
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
                placeholder="Enter your first name"
                required
              />
              <Input
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
                placeholder="Enter your last name"
                required
              />
            </div>

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

            <Input
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
              placeholder="Enter your password"
              required
            />

            <Input
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              error={errors.location}
              placeholder="Enter your location"
              required
            />

            <div className="flex items-center">
              <input
                id="isVendor"
                name="isVendor"
                type="checkbox"
                checked={formData.isVendor}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="isVendor" className="ml-2 block text-sm text-gray-900">
                I am a vendor
              </label>
            </div>

            {formData.isVendor && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vendor Category
                </label>
                <select
                  name="vendorCategory"
                  value={formData.vendorCategory}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {vendorCategories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {errors.vendorCategory && (
                  <p className="mt-1 text-sm text-red-600">{errors.vendorCategory}</p>
                )}
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <Button
              type="submit"
              loading={isLoading}
              className="w-full"
            >
              Create Account
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Already have an account?</span>
              </div>
            </div>

            <div className="mt-6">
              <Button
                variant="ghost"
                onClick={() => navigate('/signin')}
                className="w-full"
              >
                Sign in instead
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm; 