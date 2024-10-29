import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover"
          alt="Bartending"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:w-2/3">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Master the Art of Mixology in Namibia
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Join Namibia's premier online bartending academy. Learn from experts, 
            master local ingredients, and elevate your mixology career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition font-semibold">
              Start Learning Now
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition backdrop-blur-sm font-semibold">
              View Courses
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-amber-500" />
              <span className="text-white">Professional Certification</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-amber-500" />
              <span className="text-white">Industry Recognition</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-amber-500" />
              <span className="text-white">Expert Instructors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;