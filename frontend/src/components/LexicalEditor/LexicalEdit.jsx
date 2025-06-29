import React from 'react';
import MyLexicalEditor from './'; // Adjust path as needed

function LexicalEdit() {
  const existingBlogPostContent = `
    <h1>My Awesome Blog Post</h1>
    <p>This is some <strong>existing</strong> content from the database.</p>
    <p>It even has a <em>list</em>:</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <p>And a <a href="https://example.com">link</a>.</p>
  `;

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h1>My Blogging App with Lexical</h1>
      {/* For creating a new post, pass no initialHtmlContent or an empty string */}
      {/* <MyLexicalEditor /> */}

      {/* For editing an existing post, pass the HTML content */}
      {/*<MyLexicalEditor initialHtmlContent={existingBlogPostContent} />*/}
    </div>
  );
}

export default LexicalEdit;