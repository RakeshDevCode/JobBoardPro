import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For Job Seekers */}
          <div className="bg-white rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Job Seekers</h3>
            <p className="text-gray-600 mb-6">
              Discover your next career opportunity with our advanced job matching and application tracking
            </p>
            <Link
              to="/register"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Find Jobs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* For Employers */}
          <div className="bg-white rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Employers</h3>
            <p className="text-gray-600 mb-6">
              Find the perfect candidates with our advanced filtering and applicant management system
            </p>
            <Link
              to="/register"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Post Jobs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center mt-12">
          <p className="text-blue-100 mb-4">Already have an account?</p>
          <Link
            to="/login"
            className="text-white hover:text-blue-200 font-semibold underline"
          >
            Sign in here
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;