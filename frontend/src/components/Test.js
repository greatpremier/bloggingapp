import React, { useState, useEffect } from 'react';

// --- Mock Data (Replace with actual API calls to Django) ---

const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    author: 'Jane Doe',
    date: '2025-06-20',
    excerpt: 'This post covers the basics of React, including components, props, and state...',
    content: 'React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data without reloading the page. The main features are virtual DOM, JSX, and component-based architecture. To get started, you typically use create-react-app or Vite. This post will walk you through setting up your first React component, understanding props for data flow, and managing component state effectively. We will also touch upon the lifecycle methods and hooks that enable more functional and concise component logic. Happy coding!',
    imageUrl: 'https://placehold.co/600x400/F0F0F0/000000?text=React+Basics'
  },
  {
    id: '2',
    title: 'Django REST Framework Essentials',
    author: 'John Smith',
    date: '2025-06-18',
    excerpt: 'Learn how to build powerful REST APIs with Django REST Framework...',
    content: 'Django REST Framework (DRF) is a powerful and flexible toolkit for building Web APIs in Django. Key features include serializers (for converting Django models into JSON/XML), class-based views, authentication policies, and a browsable API. This tutorial will guide you through setting up DRF, creating your first serializer, defining API views, and configuring URL patterns. Understanding how to handle authentication and permissions is crucial for secure and scalable API development. We will explore token-based authentication and basic permissions to protect your endpoints. Dive in and make your Django backend sing!',
    imageUrl: 'https://placehold.co/600x400/E0E0E0/000000?text=DRF+Essentials'
  },
  {
    id: '3',
    title: 'Styling React Apps with Tailwind CSS',
    author: 'Alice Johnson',
    date: '2025-06-15',
    excerpt: 'A practical guide to using Tailwind CSS for beautiful React UIs...',
    content: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. Instead of pre-designed components, it provides low-level utility classes that you can combine to create any design directly in your markup. This approach offers immense flexibility and reduces the need for custom CSS. In this post, we will set up Tailwind CSS in a React project, explore common utility classes for layout, typography, spacing, and colors, and demonstrate how to build responsive designs with Tailwind\'s breakpoint prefixes. Get ready to streamline your styling workflow!',
    imageUrl: 'https://placehold.co/600x400/D0D0D0/000000?text=Tailwind+CSS'
  },
];

// --- Custom Modal Component (replaces alert/confirm) ---
const Modal = ({ show, title, message, onConfirm, onCancel, type = 'info' }) => {
  if (!show) return null;

  const titleColor = type === 'error' ? 'text-red-700' : (type === 'success' ? 'text-green-700' : 'text-gray-900');
  const bgColor = type === 'error' ? 'bg-red-50' : (type === 'success' ? 'bg-green-50' : 'bg-white');
  const borderColor = type === 'error' ? 'border-red-400' : (type === 'success' ? 'border-green-400' : 'border-gray-200');

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`rounded-lg shadow-xl w-full max-w-md p-6 border ${bgColor} ${borderColor}`}>
        <h3 className={`text-xl font-bold mb-4 ${titleColor}`}>{title}</h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex justify-end space-x-3">
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              Cancel
            </button>
          )}
          {onConfirm && (
            <button
              onClick={onConfirm}
              className={`px-4 py-2 rounded-lg text-white font-semibold ${type === 'error' ? 'bg-red-600 hover:bg-red-700' : (type === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700')} transition-colors duration-200`}
            >
              OK
            </button>
          )}
           {!onConfirm && !onCancel && ( // For info/success messages that just need an OK
            <button
              onClick={() => { /* Close modal, maybe call a prop if needed */ }}
              className={`px-4 py-2 rounded-lg text-white font-semibold ${type === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} transition-colors duration-200`}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


// --- Components ---

const BlogPostCard = ({ post, onView }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found'; }} />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
      <p className="text-gray-600 text-sm mb-3">By {post.author} on {post.date}</p>
      <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
      <button
        onClick={() => onView(post.id)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
      >
        Read More
      </button>
    </div>
  </div>
);

const HomePage = ({ posts, onViewPost }) => (
  <div className="container mx-auto p-6">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Latest Blog Posts</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} onView={onViewPost} />
      ))}
    </div>
  </div>
);

const PostDetail = ({ post, onBack, onEdit }) => {
  if (!post) {
    return <div className="container mx-auto p-6 text-center text-gray-700">Post not found.</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Posts
        </button>
        <button
          onClick={() => onEdit(post.id)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-7.793 7.793-2.828-2.828 7.793-7.793zM6.364 12.071l-1.414 1.414L4 14.828V16h1.172l1.343-1.343 1.414-1.414-2.829-2.829z" />
          </svg>
          Edit Post
        </button>
      </div>
      <img src={post.imageUrl} alt={post.title} className="w-full h-80 object-cover rounded-lg mb-6" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x400/CCCCCC/333333?text=Image+Not+Found'; }} />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-600 text-lg mb-6">By {post.author} on {post.date}</p>
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {/* In a real app, 'content' would likely be rich text/markdown rendered here */}
        <p>{post.content}</p>
      </div>
      {/* Comments section would go here */}
      <div className="mt-10 pt-6 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Comments</h3>
        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        {/* Comment form would be here */}
      </div>
    </div>
  );
};

// Renamed from CreatePost to PostForm to handle both creation and editing
const PostForm = ({ currentPost, onSubmit, onBack }) => {
  const [title, setTitle] = useState(currentPost?.title || '');
  const [author, setAuthor] = useState(currentPost?.author || '');
  const [excerpt, setExcerpt] = useState(currentPost?.excerpt || '');
  const [content, setContent] = useState(currentPost?.content || '');
  const [imageUrl, setImageUrl] = useState(currentPost?.imageUrl || '');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '', type: 'info' });

  const isEditing = !!currentPost;

  useEffect(() => {
    // Reset form fields if currentPost changes (e.g., switching from edit to create)
    setTitle(currentPost?.title || '');
    setAuthor(currentPost?.author || '');
    setExcerpt(currentPost?.excerpt || '');
    setContent(currentPost?.content || '');
    setImageUrl(currentPost?.imageUrl || '');
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !content) {
      setModalContent({ title: 'Validation Error', message: 'Please fill in all required fields (Title, Author, Content).', type: 'error' });
      setShowModal(true);
      return;
    }

    const postData = {
      id: currentPost?.id || String(Date.now()), // Keep existing ID or generate new
      title,
      author,
      date: currentPost?.date || new Date().toISOString().slice(0, 10), // Keep existing date or current date
      excerpt: excerpt || content.substring(0, 150) + '...',
      content,
      imageUrl: imageUrl || 'https://placehold.co/600x400/D0D0D0/000000?text=Default+Image'
    };

    onSubmit(postData);
    setModalContent({ title: isEditing ? 'Post Updated!' : 'Post Created!', message: `Your blog post "${title}" has been successfully ${isEditing ? 'updated' : 'created'}.`, type: 'success' });
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    onBack(); // Go back to appropriate page after modal closes
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Cancel
      </button>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">{isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Your captivating blog post title"
            required
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
          <input
            type="text"
            id="author"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name or pseudonym"
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">Image URL (Optional)</label>
          <input
            type="url"
            id="imageUrl"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="e.g., https://example.com/image.jpg"
          />
          {imageUrl && (
            <div className="mt-4 rounded-lg overflow-hidden border border-gray-200">
              <img
                src={imageUrl}
                alt="Image Preview"
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Invalid+Image+URL'; }}
              />
            </div>
          )}
        </div>
        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">Excerpt (Optional)</label>
          <textarea
            id="excerpt"
            rows="3"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="A short summary for the blog post list"
          ></textarea>
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          {/* This textarea would be replaced by a rich text editor like React Quill */}
          <textarea
            id="content"
            rows="15"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm font-mono leading-relaxed transition-all duration-200"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your blog post here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-lg font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105"
        >
          {isEditing ? 'Update Post' : 'Create Post'}
        </button>
      </form>

      <Modal
        show={showModal}
        title={modalContent.title}
        message={modalContent.message}
        type={modalContent.type}
        onConfirm={handleModalClose}
        onCancel={modalContent.type === 'error' ? handleModalClose : null} // Allow cancel for errors, only confirm for success
      />
    </div>
  );
};


// --- Main App Component ---
export default function Test() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'postDetail', 'postForm'
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]); // State to hold all posts
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Simulate fetching posts on component mount
  useEffect(() => {
    // In a real application, you would make a fetch or axios call here:
    // fetch('http://your-django-backend/api/posts/')
    //   .then(response => response.json())
    //   .then(data => setPosts(data))
    //   .catch(error => console.error('Error fetching posts:', error));

    // For now, use mock data
    setPosts(mockPosts);
  }, []);

  const handleViewPost = (id) => {
    const post = posts.find((p) => p.id === id);
    setSelectedPost(post);
    setCurrentPage('postDetail');
  };

  const handlePostFormSubmit = (postData) => {
    if (postData.id && posts.find(p => p.id === postData.id)) {
      // Update existing post
      setPosts((prevPosts) =>
        prevPosts.map((p) => (p.id === postData.id ? postData : p))
      );
    } else {
      // Create new post
      setPosts((prevPosts) => [postData, ...prevPosts]);
    }
    // The PostForm will handle showing the success modal and navigating back
  };

  const handleEditPost = (id) => {
    const postToEdit = posts.find((p) => p.id === id);
    setSelectedPost(postToEdit);
    setCurrentPage('postForm');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedPost(null); // Clear selected post when going back to home
  };

  const handleBackToPostDetail = () => {
    // Only go back to post detail if a post was selected
    if (selectedPost) {
        setCurrentPage('postDetail');
    } else {
        setCurrentPage('home'); // Otherwise, go to home
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage posts={posts} onViewPost={handleViewPost} />;
      case 'postDetail':
        return <PostDetail post={selectedPost} onBack={handleBackToHome} onEdit={handleEditPost} />;
      case 'postForm':
        // Pass selectedPost for editing, or null for creating
        return <PostForm currentPost={selectedPost} onSubmit={handlePostFormSubmit} onBack={selectedPost ? handleBackToPostDetail : handleBackToHome} />;
      default:
        return <HomePage posts={posts} onViewPost={handleViewPost} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter text-gray-900 antialiased">
      {/* Tailwind CSS Script - ALWAYS include this at the top for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />

      {/* Header/Navigation */}
      <header className="bg-blue-600 shadow-md py-4">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-extrabold text-white">My Blog</h1>
          <div className="space-x-6">
            <button
              onClick={() => { setCurrentPage('home'); setSelectedPost(null); }}
              className={`text-white text-lg font-semibold hover:text-blue-200 transition-colors duration-200 ${currentPage === 'home' ? 'border-b-2 border-white' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => { setCurrentPage('postForm'); setSelectedPost(null); }} // Clear selected post for new creation
              className="bg-white text-blue-600 text-lg font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-200"
            >
              Create Post
            </button>
            <button
              onClick={() => setShowLoginModal(true)}
              className="text-white text-lg font-semibold hover:text-blue-200 transition-colors duration-200"
            >
              Login
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="py-10">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} My Blog App. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React and powered by Django.</p>
        </div>
      </footer>

      {/* Login Modal */}
      <Modal
        show={showLoginModal}
        title="Login / Register"
        message="This is a placeholder for login/registration functionality. You'll integrate this with your Django authentication system."
        type="info"
        onConfirm={() => setShowLoginModal(false)}
      />
    </div>
  );
}
