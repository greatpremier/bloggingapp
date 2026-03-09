import React from 'react';

const RightSidebar = () => {
  return (
    <aside className="sticky top-20 hidden h-fit w-80 flex-col gap-6 xl:flex">
      {/* Who to follow */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
        <h3 className="mb-4 text-base font-bold text-slate-900 dark:text-slate-100">Who to follow</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAd4wID3pEU63w7Uvm9-tqYg81oXsOZXNJMb6jVFCDEE09Vi5ipSwzDsJv_oHxjhgQHGpSnmaxDZfd5rlMnptfe_hmVzZEZk4bAea7JeVaTx6Vs2BufZ0w2U-PvHX4kn7gbF75V2QppUegfUQ_zLGrpvGlCSWnFHVLixXmdcIGcJFjbitATq5eFH_g-YY2omTkWWDqV440PONt9LXnbQeSgPZDehb0GYhUrTZYLBLdLBFiLWsKqtRtR3hv5OETKQJWRl-Ezq1dblA0')" }}></div>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Jordan Smith</span>
              <span className="text-xs text-slate-500">Tech Lead at FinFlow</span>
            </div>
            <button className="ml-auto rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white dark:bg-slate-100 dark:text-slate-900">Follow</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWSZzH5aRgTEDB35bm4yle75HNWpkIRLv3-JTxrhvIBAywyUdVxvhzmINlBo844rqSur_yq9u9wrmtvNfTMiMw29WhJK9Q9WMhb8SQwn8bvHkHbpcDu6sqIxwi-X46kPBi0p-yj4y-DjGnG0PKm3HtQytJC93LyMTo8aGNud9VgMobPCpPZxxqjmeSCtmZySv1VuNPmgoWcz1O0K8TQSUXLnTRMo0chYr6rfssgyGQFSUngELhGWSQ95oBlVmE_Qv7zmXxwwY57Ms')" }}></div>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Elena Rossi</span>
              <span className="text-xs text-slate-500">Product Designer</span>
            </div>
            <button className="ml-auto rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white dark:bg-slate-100 dark:text-slate-900">Follow</button>
          </div>
        </div>
        <button className="mt-4 w-full text-sm font-medium text-primary hover:underline">Show more</button>
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
        <h3 className="mb-4 text-base font-bold text-slate-900 dark:text-slate-100">Recent Activity</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-sm">favorite</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              <span className="font-bold text-slate-900 dark:text-slate-100">Mark Thompson</span> liked your article "Design Principles 101"
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-sm">comment</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              <span className="font-bold text-slate-900 dark:text-slate-100">Lisa Wong</span> commented on your post
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-sm">person_add</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              <span className="font-bold text-slate-900 dark:text-slate-100">David G.</span> started following you
            </p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="px-2">
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500">
          <a className="hover:underline" href="#">Privacy Policy</a>
          <a className="hover:underline" href="#">Terms of Service</a>
          <a className="hover:underline" href="#">Cookie Policy</a>
          <a className="hover:underline" href="#">Help Center</a>
          <span>© 2024 BlogPulse Inc.</span>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
