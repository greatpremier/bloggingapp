import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS (snow theme)

function BlogPostEditor() {
    const [content, setContent] = useState(''); // State to hold the editor's content
  
    const handleChange = (value) => {
      setContent(value);
    };
  
    return (
      <div>
        <h2>Create New Blog Post</h2>
        <ReactQuill
          theme="snow" // Or "bubble" or a custom theme
          value={content}
          onChange={handleChange}
          modules={BlogPostEditor.modules}
          formats={BlogPostEditor.formats}
          placeholder="Start writing your blog post here..."
        />
        <button onClick={() => console.log('Saving content:', content)}>Save Post</button>
        {/* You can display the HTML content for testing */}
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }
  
  // Configure Quill modules (toolbar options)
  BlogPostEditor.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra cut/copy features
      matchVisual: false,
    }
  };
  
  // Configure Quill formats (what can be formatted)
  BlogPostEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];
  
  export default BlogPostEditor;