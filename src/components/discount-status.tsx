'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Clock, Zap, Users } from 'lucide-react';

interface DiscountStatusProps {
  className?: string;
}

interface DiscountData {
  totalSignups: number;
  discountSpotsLeft: number;
  discountActive: boolean;
}

export function DiscountStatus({ className }: DiscountStatusProps) {
  const [discountData, setDiscountData] = useState<DiscountData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDiscountStatus();
    // Refresh every 30 seconds to keep it updated
    const interval = setInterval(fetchDiscountStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchDiscountStatus = async () => {
    try {
      const response = await fetch('/api/waitlist');
      if (response.ok) {
        const data = await response.json();
        setDiscountData(data);
      }
    } catch (error) {
      console.error('Failed to fetch discount status:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !discountData) {
    return (
      <div className={`text-center ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-48 mx-auto mb-2"></div>
          <div className="h-3 bg-gray-700 rounded w-32 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      {discountData.discountActive ? (
        <div className="space-y-2">
          <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 text-sm font-semibold animate-pulse">
            <Zap className="w-3 h-3 mr-2" />
            20% OFF - EARLY BIRD SPECIAL
          </Badge>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center text-yellow-400">
              <Users className="w-4 h-4 mr-1" />
              <span className="font-medium">{discountData.discountSpotsLeft}</span>
              <span className="text-gray-400 ml-1">spots left</span>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="flex items-center text-gray-300">
              <Clock className="w-4 h-4 mr-1" />
              <span>Limited time</span>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            {discountData.totalSignups}/50 early supporters joined
          </p>
          <div className="w-full bg-gray-800 rounded-full h-2 mt-3">
            <div 
              className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(discountData.totalSignups / 50) * 100}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <Badge className="bg-gray-700 text-gray-300 px-4 py-2 text-sm">
            <Users className="w-3 h-3 mr-2" />
            EARLY BIRD OFFER ENDED
          </Badge>
          <p className="text-sm text-gray-400">
            All 50 early bird spots claimed! You can still join the waitlist for priority access.
          </p>
          <p className="text-xs text-gray-500">
            {discountData.totalSignups} total signups
          </p>
        </div>
      )}
    </div>
  );
}