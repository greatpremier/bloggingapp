import React from 'react';
import { Link } from 'react-router-dom';

const Feature = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Your Modern Blogging Platform</h1>
          <p className="text-lg text-gray-300 mb-8">Create, share, and grow your audience with our powerful and easy-to-use blogging tools.</p>
          <Link to="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">Get Started for Free</Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature 
              icon={<svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" /></svg>}
              title="Easy-to-Use Editor"
              description="Our intuitive editor makes it simple to create beautiful and engaging blog posts."
            />
            <Feature 
              icon={<svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Blazing Fast Performance"
              description="We optimize your blog for speed to ensure the best experience for your readers."
            />
            <Feature 
              icon={<svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              title="Audience Analytics"
              description="Track your blog's performance and get insights into your readership."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to start writing?</h2>
          <p className="text-lg text-gray-300 mb-8">Join our community of bloggers and share your voice with the world.</p>
          <Link to="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">Sign Up Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
