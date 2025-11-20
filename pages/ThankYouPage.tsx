
import React from 'react';
import { useFunnel } from '../context/FunnelContext';

const ThankYouPage: React.FC = () => {
  const { leadData } = useFunnel();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-xl shadow-lg text-center">
        <svg className="w-20 h-20 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
          Thank You, {leadData?.fullName || 'Partner'}!
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Your payment has been submitted for verification.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg text-left space-y-2">
            <p className="text-gray-800">
                <strong>What's Next?</strong>
            </p>
            <p className="text-sm text-gray-700">
                1. Our team will verify your payment within 24 hours.
            </p>
            <p className="text-sm text-gray-700">
                2. Once confirmed, you will receive an email and SMS with your portal access credentials and training materials.
            </p>
            <p className="text-sm text-gray-700">
                3. Please check your spam folder if you don't see the email in your inbox.
            </p>
        </div>
        <a 
            href="https://eaccessph.com/register/100000799"
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 inline-block w-full sm:w-auto bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-dark transition-colors duration-300"
        >
          Join Our Support Group
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;
