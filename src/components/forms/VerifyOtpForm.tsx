import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { useApi } from '../../hooks/useApi';
import { VerifyOtpRequest } from '../../types/api/types';
import { authService } from '../../services/api';

const VerifyOtpForm: React.FC = () => {
  const navigate = useNavigate();
  const { execute, isLoading, error } = useApi();
  
  const [otpCode, setOtpCode] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [countdown, setCountdown] = useState(0);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Get user email from localStorage
    const email = localStorage.getItem('epsy_userEmail');
    if (!email) {
      navigate('/signup');
      return;
    }
    setUserEmail(email);

    // Start countdown timer
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6); // Only allow numbers, max 6 digits
    setOtpCode(value);

    // Clear error when user starts typing
    if (errors.otp) {
      setErrors(prev => ({ ...prev, otp: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!otpCode.trim()) {
      newErrors.otp = 'OTP code is required';
    } else if (otpCode.length !== 6) {
      newErrors.otp = 'OTP code must be 6 digits';
    } else if (!/^\d{6}$/.test(otpCode)) {
      newErrors.otp = 'OTP code must contain only numbers';
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
      const otpData: VerifyOtpRequest = {
        email: userEmail,
        code: parseInt(otpCode)
      };

      const response = await execute(() => authService.verifyOtp(otpData));
      
      if (response) {
        // Clear stored data
        localStorage.removeItem('epsy_userEmail');
        
        // Navigate to sign in page
        navigate('/signin', { 
          state: { message: 'Email verified successfully! Please sign in.' }
        });
      }
    } catch (error) {
      console.error('OTP verification error:', error);
    }
  };

  const handleResendOtp = async () => {
    // This would typically call a resend OTP endpoint
    // For now, we'll just reset the countdown
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Epsy</h1>
          <h2 className="text-xl font-semibold text-gray-900">Verify your email</h2>
          <p className="mt-2 text-sm text-gray-600">
            We've sent a verification code to
          </p>
          <p className="text-sm font-medium text-gray-900">{userEmail}</p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Verification Code
              </label>
              <input
                type="text"
                value={otpCode}
                onChange={handleOtpChange}
                placeholder="Enter 6-digit code"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-center text-lg tracking-widest"
                maxLength={6}
                required
              />
              {errors.otp && (
                <p className="mt-1 text-sm text-red-600">{errors.otp}</p>
              )}
            </div>

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
              Verify Email
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the code?
            </p>
            {countdown > 0 ? (
              <p className="text-sm text-gray-500 mt-1">
                Resend available in {formatTime(countdown)}
              </p>
            ) : (
              <button
                onClick={handleResendOtp}
                className="text-sm text-blue-600 hover:text-blue-500 font-medium mt-1"
              >
                Resend code
              </button>
            )}
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Already verified?</span>
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

export default VerifyOtpForm; 