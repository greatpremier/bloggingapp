import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center mb-4">
        <img src="/assets/example.jpg" alt={post.author} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="font-bold">{post.author}</p>
          <p className="text-sm text-gray-500">{post.time} · {post.category}</p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.description}</p>
      {post.image && <img src={post.image} alt={post.title} className="rounded-lg mb-4" />} 
      <div className="flex justify-between text-gray-500">
        <div>
          <span>{post.likes} Likes</span>
          <span className="ml-4">{post.comments} Comments</span>
        </div>
        <button>Share</button>
      </div>
    </div>
  );
};

export default PostCard;
