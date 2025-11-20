
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFunnel } from '../context/FunnelContext';
import { LeadData } from '../types';

const LeadCapturePage: React.FC = () => {
  const navigate = useNavigate();
  const { setLeadData } = useFunnel();
  const [formData, setFormData] = useState<LeadData>({
    fullName: '',
    email: '',
    mobileNumber: '',
    messengerLink: '',
    referralCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (formData.fullName && formData.email && formData.mobileNumber && formData.messengerLink) {
        setLeadData(formData);
        // Here you would typically send data to a backend/API
        console.log('Lead Captured:', formData);
        navigate('/checkout');
    } else {
        alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-primary">Almost there!</h1>
            <p className="text-gray-600">Just one more step to start your business.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required />
          <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <InputField label="Mobile Number" name="mobileNumber" type="tel" value={formData.mobileNumber} onChange={handleChange} required />
          <InputField label="Facebook Messenger Link" name="messengerLink" value={formData.messengerLink} onChange={handleChange} required />
          <InputField label="Referral Code (Optional)" name="referralCode" value={formData.referralCode} onChange={handleChange} />
          
          <button 
            type="submit"
            className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-dark transition-colors duration-300"
          >
            Proceed to Checkout
          </button>
        </form>
         <p className="text-xs text-gray-500 mt-6 text-center">
            By proceeding, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};


interface InputFieldProps {
    label: string;
    name: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, type = 'text', required = false }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm"
        />
    </div>
);

export default LeadCapturePage;
