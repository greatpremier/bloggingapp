import React, { useState, useCallback } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html'; // For HTML conversion
import { $getSelection, $isRangeSelection, EditorState } from 'lexical';

import editorConfig from './config'; // Your editor configuration
import './styles.css'; // Your editor styles
import ToolbarPlugin from './plugins/ToolbarPlugin'; // Your custom toolbar

function MyLexicalEditor({ initialHtmlContent = '' }) {
  const [editorState, setEditorState] = useState(); // Holds the Lexical EditorState
  const [htmlContent, setHtmlContent] = useState(initialHtmlContent); // Holds the HTML string

  const initialConfig = {
    ...editorConfig,
    editorState: initialHtmlContent
      ? () => {
          // Function to initialize editor state from HTML
          const parser = new DOMParser();
          const dom = parser.parseFromString(initialHtmlContent, 'text/html');
          return $generateNodesFromDOM(editor, dom);
        }
      : undefined, // No initial state if no HTML provided
  };

  const handleEditorChange = useCallback((editorState, editor) => {
    // When the editor state changes, convert to HTML
    editorState.read(() => {
      const htmlString = $generateHtmlFromNodes(editor);
      setHtmlContent(htmlString);
    });
    setEditorState(editorState); // Store the current editor state if needed
  }, []);

  const handleSave = () => {
    console.log('Saved HTML content:', htmlContent);
    // Here you would typically send `htmlContent` to your backend
    alert('Content saved to console! Check your browser\'s developer tools.');
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <ToolbarPlugin /> {/* Your custom toolbar */}
        <RichTextPlugin /> {/* Main content editable area with placeholder */}
        <HistoryPlugin /> {/* Undo/Redo */}
        <ListPlugin /> {/* Lists (UL, OL) */}
        <LinkPlugin /> {/* Links */}

        {/* This plugin listens to editor state changes */}
        <OnChangePlugin onChange={handleEditorChange} />
      </div>
      <button onClick={handleSave} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        Save Blog Post
      </button>

      <h3 style={{ marginTop: '30px' }}>Preview HTML:</h3>
      <div
        style={{ border: '1px dashed #eee', padding: '10px', backgroundColor: '#f9f9f9' }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </LexicalComposer>
  );
}

export default MyLexicalEditor;