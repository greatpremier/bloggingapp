import React from 'react';

const ArticleCard = ({ post }) => {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <div className="flex items-center gap-3 p-4">
        <div className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url('${post.authorImage}')` }}></div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{post.author}</span>
          <span className="text-xs text-slate-500">{post.time} • {post.category}</span>
        </div>
        <button className="ml-auto text-slate-400 hover:text-slate-600">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </div>
      <div className="px-4 pb-3">
        <h2 className="mb-2 text-xl font-bold leading-snug text-slate-900 dark:text-slate-100">{post.title}</h2>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">{post.description}</p>
      </div>
      <div className="aspect-video w-full bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url('${post.image}')` }}></div>
      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 p-2 px-4">
        <div className="flex gap-1">
          <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-lg">thumb_up</span> {post.likes}
          </button>
          <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-lg">chat_bubble</span> {post.comments}
          </button>
        </div>
        <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined text-lg">share</span> Share
        </button>
      </div>
    </article>
  );
};

export default ArticleCard;
