
import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useFunnel } from '../context/FunnelContext';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { leadData } = useFunnel();
  const [paymentMethod, setPaymentMethod] = useState('GCash');
  const [proof, setProof] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!leadData) {
    // Redirect to signup if leadData is not available
    return <Navigate to="/signup" />;
  }

  const handleProofChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProof(e.target.files[0]);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!proof) {
      setError('Please upload your proof of payment.');
      return;
    }
    setIsSubmitting(true);
    setError('');

    // Mock API call to submit order
    console.log('Submitting Order:', {
      leadData,
      paymentMethod,
      proofFileName: proof.name,
    });
    // In a real app, you would upload the file and send data to your backend (e.g., Google Sheets via App Script)
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
    
    setIsSubmitting(false);
    navigate('/thank-you');
  };

  const paymentOptions = ['GCash', 'Bank Transfer', 'PayPal'];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-lg">
        {/* Order Summary */}
        <div className="md:border-r md:pr-8">
          <h1 className="text-3xl font-bold text-brand-primary mb-6">Order Summary</h1>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Package</p>
              <p className="font-semibold text-lg">eAccess PH Portal - Lifetime Access</p>
            </div>
            <div className="flex justify-between items-center text-xl font-bold border-t pt-4">
              <span>Total Amount:</span>
              <span className="text-brand-primary">₱4,998.00</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Payment Instructions</h2>
            <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
                <p><strong>Step 1:</strong> Select your preferred payment method below.</p>
                <p><strong>Step 2:</strong> Transfer the exact amount of <strong>₱4,998.00</strong> to the provided account details.</p>
                <p><strong>Step 3:</strong> Take a screenshot of your transaction receipt.</p>
                <p><strong>Step 4:</strong> Upload the screenshot below and complete your order.</p>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Complete Your Payment</h2>
          
          {/* Payment Method Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
            <div className="flex space-x-2 rounded-lg bg-gray-200 p-1">
              {paymentOptions.map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPaymentMethod(option)}
                  className={`w-full py-2 text-sm font-medium rounded-md transition-colors ${paymentMethod === option ? 'bg-brand-primary text-white shadow' : 'text-gray-600 hover:bg-gray-300'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Payment Details */}
          <div className="mb-6 p-4 border rounded-lg bg-gray-50">
            {paymentMethod === 'GCash' && (
                <div>
                    <p className="font-semibold">GCash Number: 0912-345-6789</p>
                    <p className="font-semibold">Account Name: Juan D. C.</p>
                    <img src="https://picsum.photos/200/200?random=10" alt="GCash QR Code" className="mx-auto mt-2 rounded-md" />
                </div>
            )}
            {paymentMethod === 'Bank Transfer' && (
                <div>
                    <p className="font-semibold">Bank: BDO Unibank</p>
                    <p className="font-semibold">Account #: 001234567890</p>
                    <p className="font-semibold">Account Name: eAccess PH Inc.</p>
                </div>
            )}
            {paymentMethod === 'PayPal' && (
                <div>
                    <p className="font-semibold">PayPal Email: payments@eaccess.ph</p>
                    <p className="text-sm">Please choose "Send to a friend" to avoid fees.</p>
                </div>
            )}
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label htmlFor="proof" className="block text-sm font-medium text-gray-700 mb-2">Upload Proof of Payment</label>
            <input 
              type="file" 
              id="proof" 
              onChange={handleProofChange} 
              accept="image/png, image/jpeg, image/jpg"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-brand-primary hover:file:bg-blue-100"
            />
            {proof && <p className="text-xs text-green-600 mt-1">File selected: {proof.name}</p>}
          </div>

          {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-secondary text-brand-dark font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Complete Order'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
