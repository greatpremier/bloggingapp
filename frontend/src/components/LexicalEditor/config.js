import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { MarkNode } from '@lexical/mark'; // For highlighting
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode'; // For horizontal rule

const editorConfig = {
  // The editor's theme (CSS classes) - crucial for styling
  theme: {
    // Example: classes for different element types
    paragraph: 'editor-paragraph',
    heading: {
      h1: 'editor-h1',
      h2: 'editor-h2',
      h3: 'editor-h3',
    },
    list: {
      ul: 'editor-ul',
      ol: 'editor-ol',
      listitem: 'editor-listitem',
    },
    quote: 'editor-quote',
    link: 'editor-link',
    text: {
      bold: 'editor-text-bold',
      italic: 'editor-text-italic',
      underline: 'editor-text-underline',
      strikethrough: 'editor-text-strikethrough',
      code: 'editor-text-code',
    },
    // Add more classes as needed for other node types or states
  },
  // Nodes that the editor should support
  nodes: [
    HeadingNode,
    QuoteNode,
    ListNode,
    ListItemNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    MarkNode,
    HorizontalRuleNode,
    // Add custom nodes here if you create them (e.g., ImageNode)
  ],
  // You can set initial editor state here, or do it via the editor's onUpdate listener
  editorState: null, // We'll manage this in the component
  // Error handler function for Lexical
  onError(error) {
    console.error('Lexical error:', error);
  },
};

export default editorConfig;