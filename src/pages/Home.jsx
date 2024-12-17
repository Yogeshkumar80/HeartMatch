import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FeatureCard } from '../components/home/FeatureCard';
import { SuccessStoryCard } from '../components/home/SuccessStoryCard';

const features = [
  {
    icon: Users,
    title: 'Verified Profiles',
    description: 'All profiles are manually verified to ensure authenticity.'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Your privacy and security are our top priorities.'
  },
  {
    icon: Heart,
    title: 'Perfect Matches',
    description: 'Our advanced algorithm ensures compatible matches.'
  }
];

const successStories = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-1433c570f581?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    testimonial: 'HeartMatch helped us find true love. We couldn\'t be happier!',
    couple: 'Sarah & John'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    testimonial: 'We found each other through HeartMatch and it was destiny!',
    couple: 'Emily & Michael'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    testimonial: 'Thanks to HeartMatch, we\'re living our happily ever after.',
    couple: 'David & Lisa'
  }
];

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Find Your Perfect Match</h1>
            <p className="text-xl mb-8">Join thousands of happy couples who found their soulmate through HeartMatch.</p>
            <Link to="/signup">
              <Button size="lg" className="flex items-center">
                Start Your Journey <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose HeartMatch?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <SuccessStoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};