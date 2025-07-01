import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';
import { authService } from '../services/api';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('epsy_userId');

  const handleLogout = () => {
    authService.removeToken();
    localStorage.removeItem('epsy_userId');
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome to Epsy</h1>
              <p className="text-gray-600">Your dashboard</p>
            </div>
            <Button onClick={handleLogout} variant="danger">
              Logout
            </Button>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Account Information</h2>
            <p className="text-blue-700">User ID: {userId}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Authentication Status</h3>
              <p className="text-green-700">✅ Successfully authenticated</p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Next Steps</h3>
              <p className="text-purple-700">You can now access all Epsy features</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 