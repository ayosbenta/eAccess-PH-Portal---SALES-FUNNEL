
import React from 'react';
import { Link } from 'react-router-dom';

const LeadCapturePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-8 px-4">
       <div className="w-full max-w-6xl mb-6 text-left">
          <Link to="/" className="text-brand-primary font-semibold hover:underline transition-colors duration-300">
            &larr; Back to Main Page
          </Link>
          <h1 className="text-3xl font-bold text-brand-dark mt-4 text-center">Complete Your Registration</h1>
          <p className="text-gray-600 mt-2 text-center">
            You are being redirected to our secure registration portal. Please fill out the form below to join.
          </p>
       </div>
      <div className="w-full max-w-6xl h-[85vh] bg-white p-1 md:p-2 rounded-xl shadow-2xl border border-gray-200">
          <iframe
            src="https://eaccessph.com/register/100000799"
            title="eAccess PH Official Registration"
            className="w-full h-full border-0 rounded-lg"
            frameBorder="0"
          ></iframe>
      </div>
    </div>
  );
};

export default LeadCapturePage;
