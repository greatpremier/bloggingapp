import React from 'react';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';

const UserHome = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
        <div className="relative flex min-h-screen w-full flex-col">
            <Header />
            <main className="mx-auto mt-6 flex w-full max-w-7xl flex-1 gap-6 px-4">
                <LeftSidebar />
                <MainContent />
                <RightSidebar />
            </main>
        </div>
    </div>
  );
};

export default UserHome;
