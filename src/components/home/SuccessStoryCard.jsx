import React from 'react';
import { Star } from 'lucide-react';

export const SuccessStoryCard = ({ imageUrl, testimonial, couple }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={imageUrl}
        alt="Happy Couple"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 mb-4">{testimonial}</p>
        <p className="font-semibold">{couple}</p>
      </div>
    </div>
  );
};