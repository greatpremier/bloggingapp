
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-lg bg-primary p-1.5 text-white">
            <span className="material-symbols-outlined">auto_stories</span>
          </div>
          <h2 className="hidden text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:block">BlogPulse</h2>
        </div>
        <div className="flex flex-1 max-w-md items-center">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full rounded-full border-none bg-slate-100 dark:bg-slate-800 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50" placeholder="Search articles, authors, topics..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            <a className="flex items-center gap-1 text-sm font-semibold text-primary" href="#">
              <span className="material-symbols-outlined">home</span> Home
            </a>
            <a className="flex items-center gap-1 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary" href="#">
              <span className="material-symbols-outlined">add_circle</span> Create
            </a>
          </nav>
          <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-800 pl-4">
            <button className="relative rounded-full p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="h-9 w-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9GoUP3AVY95yR66ff2YPzTwYraK2dkQcPC1FKJnES2EkmyINE_P4Aygmo9SZOb7aXpVFs9IIPmLDsCzzr9s-zVfWiGGNvhqQzmcLN16-MCLjplEyTI4UFHpWWocjQ1LtXP371KZt92eT07JRqpgGr4LIpLQXk-5Z37zYeLYfwmemXWKjLu9BoVKIYti6_0uNHpy1EvJLA5YdqFaUmUKAxEUUbKE_T7RYPqBQEd99nMO2m8Vp0HZPDHT8GPmRgcajaFOuICP2OUec')" }}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
