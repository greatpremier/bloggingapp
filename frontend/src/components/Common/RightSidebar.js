import React from 'react';

const RightSidebar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Who to follow</h2>
      <ul>
        <li className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src="/assets/example.jpg" alt="Jordan Smith" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-bold">Jordan Smith</p>
              <p className="text-sm text-gray-500">Tech Lead at FinFlow</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-full">Follow</button>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/assets/example.jpg" alt="Elena Rossi" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-bold">Elena Rossi</p>
              <p className="text-sm text-gray-500">Product Designer</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-full">Follow</button>
        </li>
      </ul>
      <a href="/" className="text-blue-500 mt-4 inline-block">Show more</a>

      <h2 className="text-lg font-bold mt-6 mb-4">Recent Activity</h2>
      <ul>
        <li className="mb-3">
          <p><span className="font-bold">Mark Thompson</span> liked your article "Design Principles 101"</p>
        </li>
        <li className="mb-3">
          <p><span className="font-bold">Lisa Wong</span> commented on your post</p>
        </li>
        <li>
          <p><span className="font-bold">David G.</span> started following you</p>
        </li>
      </ul>
    </div>
  );
};

export default RightSidebar;