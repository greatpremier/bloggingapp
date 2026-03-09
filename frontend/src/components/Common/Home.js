
import React from 'react';
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1">
            <LeftSidebar />
          </div>
          <div className="col-span-2">
            <MainContent />
          </div>
          <div className="col-span-1">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
