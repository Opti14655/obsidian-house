'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  agreement: boolean;
}

interface SubmissionResult {
  success: boolean;
  message: string;
  discountCode?: string;
  discountPercent?: number;
  position?: number;
  error?: string;
}

export function PreOrderForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States',
    agreement: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResult({
          success: true,
          message: data.message,
          discountCode: data.discountCode,
          discountPercent: data.discountPercent,
          position: data.position
        });
        // Reset form on success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          addressLine2: '',
          city: '',
          state: '',
          postalCode: '',
          country: 'United States',
          agreement: false
        });
      } else {
        setResult({
          success: false,
          message: data.error || 'Something went wrong',
          error: data.error
        });
      }
    } catch {
      setResult({
        success: false,
        message: 'Network error. Please check your connection and try again.',
        error: 'Network error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success state
  if (result?.success) {
    return (
      <div className="bg-black border border-gray-800 rounded-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-light text-white mb-2">You&apos;re In! 🎉</h3>
          <p className="text-gray-300 mb-4">{result.message}</p>
        </div>

        {result.discountPercent && result.discountPercent > 0 && (
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 mb-6">
            <Badge className="bg-white text-red-600 mb-3 px-4 py-2 font-bold">
              {result.discountPercent}% OFF SECURED
            </Badge>
            <p className="text-white font-medium mb-2">Your Exclusive Discount Code:</p>
            <div className="bg-black/30 rounded-lg p-3 mb-2">
              <code className="text-2xl font-mono text-white tracking-wider">
                {result.discountCode}
              </code>
            </div>
            <p className="text-red-100 text-sm">
              Save this code! You&apos;ll need it when ARCHIVE No.001 launches.
            </p>
          </div>
        )}

        <div className="text-sm text-gray-400 space-y-2">
          <p>✅ Position #{result.position} on the exclusive waitlist</p>
          <p>✅ Priority access when ARCHIVE No.001 launches</p>
          <p>✅ You&apos;ll be notified via email when it&apos;s time to complete your order</p>
        </div>

        <Button 
          onClick={() => setResult(null)}
          variant="outline" 
          className="mt-6 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
        >
          Add Another Person
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-black border border-gray-800 rounded-lg p-8">
      {result && !result.success && (
        <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
            <p className="text-red-300">{result.message}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input 
          type="text" 
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name" 
          className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          required
          disabled={isSubmitting}
        />
        <input 
          type="text" 
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name" 
          className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div className="mb-4">
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address" 
          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div className="mb-4">
        <input 
          type="tel" 
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number" 
          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div className="mb-4">
        <input 
          type="text" 
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Street Address" 
          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div className="mb-4">
        <input 
          type="text" 
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleInputChange}
          placeholder="Apartment, suite, etc. (optional)" 
          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          disabled={isSubmitting}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input 
          type="text" 
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City" 
          className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          required
          disabled={isSubmitting}
        />
        <input 
          type="text" 
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          placeholder="State/Province" 
          className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input 
          type="text" 
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          placeholder="Postal/Zip Code" 
          className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          required
          disabled={isSubmitting}
        />
        <select 
          name="country"
          value={formData.country}
          onChange={(e) => setFormData(prev => ({...prev, country: e.target.value}))}
          className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          required
          disabled={isSubmitting}
        >
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Belgium">Belgium</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Austria">Austria</option>
          <option value="Sweden">Sweden</option>
          <option value="Norway">Norway</option>
          <option value="Denmark">Denmark</option>
          <option value="Australia">Australia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Japan">Japan</option>
          <option value="Singapore">Singapore</option>
          <option value="Hong Kong">Hong Kong</option>
          <option value="Other">Other (Contact us)</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label className="flex items-start text-left text-gray-300 text-sm">
          <input 
            type="checkbox" 
            name="agreement"
            checked={formData.agreement}
            onChange={handleInputChange}
            className="mt-1 mr-3 rounded" 
            required
            disabled={isSubmitting}
          />
          <span>
            By submitting this pre-order, I understand that I am committing to purchase ARCHIVE No.001 
            for $160 (or discounted price if applicable) upon release. The shipping address provided will be used 
            for delivery. I will be contacted with payment details when the fragrance launches.
          </span>
        </label>
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Securing Your Spot...
          </>
        ) : (
          'Secure My Pre-Order'
        )}
      </Button>
      <p className="text-gray-500 text-xs mt-4 text-center">
        *Limited to 300 bottles worldwide • No payment required now
      </p>
    </form>
  );
}