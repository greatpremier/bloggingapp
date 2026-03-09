import React from 'react';
import PostCard from './PostCard';

const MainContent = () => {
  const posts = [
    {
      author: 'Alex Rivera',
      time: '2 hours ago',
      category: 'Technology',
      title: 'The Future of Decentralized Web and Web3',
      description: 'Exploring how Web3 is changing the internet landscape for creators and developers worldwide. We dive into dApps, governance, and the shift away from centralized data...',
      image: '/assets/example.jpg',
      likes: '1.2k',
      comments: '84',
    },
    {
      author: 'Sarah Chen',
      time: '5 hours ago',
      category: 'Lifestyle',
      title: 'Minimalist Living in a Digital Age',
      description: 'How to find balance and focus by reducing digital clutter and embracing essentialism. Learn the three key habits for digital detoxing without losing touch.',
      image: '/assets/example.jpg',
      likes: '856',
      comments: '42',
    },
  ];

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <textarea className="w-full p-2 border rounded-lg" placeholder="What's on your mind?"></textarea>
      </div>
      <div>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
