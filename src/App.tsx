import React from 'react';
import { GraduationCap, Wine, Users, Calendar, Award, BookOpen } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Stats from './components/Stats';
import Footer from './components/Footer';
import CourseCatalog from './components/CourseCatalog';
import BookingSystem from './components/BookingSystem';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedCourses />
      <CourseCatalog />
      <BookingSystem />
      <Footer />
    </div>
  );
}

export default App;