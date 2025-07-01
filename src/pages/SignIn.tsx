import React from 'react';
import { useLocation } from 'react-router-dom';
import SignInForm from '../components/forms/SignInForm';

const SignIn: React.FC = () => {
  const location = useLocation();
  const message = location.state?.message;

  return (
    <div>
      {message && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded shadow-lg">
            {message}
          </div>
        </div>
      )}
      <SignInForm />
    </div>
  );
};

export default SignIn; 