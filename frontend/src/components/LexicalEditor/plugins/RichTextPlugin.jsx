// src/components/LexicalEditor/plugins/RichTextPlugin.jsx
import { RichTextPlugin as LexicalRichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { Placeholder } from '@lexical/react/LexicalPlaceholder';
import React from 'react';

function RichTextPlugin() {
  return (
    <LexicalRichTextPlugin
      contentEditable={<ContentEditable className="editor-content" />}
      placeholder={<Placeholder className="editor-placeholder">Enter your blog post content...</Placeholder>}
    />
  );
}

export default RichTextPlugin;