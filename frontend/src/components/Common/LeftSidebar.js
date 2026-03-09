import React from 'react';

const LeftSidebar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Feed</h2>
      <ul>
        <li className="mb-2"><a href="#" className="text-blue-500 font-bold">Trending Now</a></li>
        <li className="mb-2"><a href="#">Following</a></li>
        <li className="mb-2"><a href="#">Saved Posts</a></li>
      </ul>
      <h2 className="text-lg font-bold mt-6 mb-4">Categories</h2>
      <ul>
        <li className="mb-2"><a href="#">Technology</a></li>
        <li className="mb-2"><a href="#">Design & Art</a></li>
        <li className="mb-2"><a href="#">Lifestyle</a></li>
        <li className="mb-2"><a href="#">Business</a></li>
      </ul>
    </div>
  );
};

export default LeftSidebar;