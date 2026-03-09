import React from 'react';

const LeftSidebar = () => {
  return (
    <aside className="sticky top-20 hidden h-fit w-64 flex-col gap-6 lg:flex">
      <div className="flex flex-col gap-2 rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-200 dark:border-slate-800">
        <h3 className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">Feed</h3>
        <a className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary" href="/">
          <span className="material-symbols-outlined">trending_up</span>
          <span className="text-sm font-semibold">Trending Now</span>
        </a>
        <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" href="/">
          <span className="material-symbols-outlined">subscriptions</span>
          <span className="text-sm font-medium">Following</span>
        </a>
        <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" href="/">
          <span className="material-symbols-outlined">bookmark</span>
          <span className="text-sm font-medium">Saved Posts</span>
        </a>
      </div>
      <div className="flex flex-col gap-2 rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-200 dark:border-slate-800">
        <h3 className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">Categories</h3>
        <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" href="/">
          <span className="material-symbols-outlined text-slate-400">memory</span>
          <span className="text-sm">Technology</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" href="/">
          <span className="material-symbols-outlined text-slate-400">palette</span>
          <span className="text-sm">Design &amp; Art</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" href="/">
          <span className="material-symbols-outlined text-slate-400">fitness_center</span>
          <span className="text-sm">Lifestyle</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" href="/">
          <span className="material-symbols-outlined text-slate-400">monitoring</span>
          <span className="text-sm">Business</span>
        </a>
      </div>
    </aside>
  );
};

export default LeftSidebar;
