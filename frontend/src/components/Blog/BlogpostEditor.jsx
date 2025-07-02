import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS (snow theme)

function BlogPostEditor() {
  const [content, setContent] = useState(''); // State to hold the editor's content
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const [saveMessage, setSaveMessage] = useState(''); // State for save feedback

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSave = () => {
    console.log('Saving content:', content);
    setSaveMessage('Post saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000); // Clear message after 3 seconds
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`max-w-4xl mx-auto p-6 rounded-lg shadow-lg ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } transition-colors duration-300`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Create New Blog Post</h2>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        modules={BlogPostEditor.modules}
        formats={BlogPostEditor.formats}
        placeholder="Start writing your blog post here..."
        className={`mb-6 ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}
      />
      <button
        onClick={handleSave}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Save Post
      </button>
      {saveMessage && (
        <p className="mt-4 text-green-500 font-semibold">{saveMessage}</p>
      )}
      <h3 className="mt-8 text-xl font-semibold">Preview:</h3>
      <div
        className={`mt-4 p-4 border rounded-lg ${
          isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
        }`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

// Configure Quill modules (toolbar options)
BlogPostEditor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

// Configure Quill formats (what can be formatted)
BlogPostEditor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

export default BlogPostEditor;