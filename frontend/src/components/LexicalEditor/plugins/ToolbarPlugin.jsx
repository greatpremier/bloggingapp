import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  $createParagraphNode,
} from 'lexical';
import { $set  } from 'lexical'; // Note: $set requires a function to modify state
import { $isListNode, INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, REMOVE_LIST_COMMAND } from '@lexical/list';
import { $queryNodesOfType, $getNearestNodeOfType } from '@lexical/utils';
import { TOGGLE_LINK_COMMAND } from '@lexical/link';
import { INSERT_IMAGE_COMMAND } from './ImagePlugin'; // We'll create this later if we add an image plugin

//Helper imports from lexical/link and lexical/rich-text needed for ToolbarPlugin
import { $isLinkNode } from '@lexical/link';
import { $createHeadingNode, $isHeadingNode } from '@lexical/rich-text';
import { $isParagraphNode } from 'lexical'; // Also need paragraph node check

// Helper to get selected node type (e.g., 'paragraph', 'h1', 'listitem')
function getSelectedNode(selection) {
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  return selection.anchor.getCommonAncestor();
}

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = useState(editor);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [blockType, setBlockType] = useState('paragraph'); // 'paragraph', 'h1', 'h2', 'ul', 'ol' etc.

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : anchorNode.getAncestor(editor.getRootElement().dataset.editorKey) || anchorNode;
      const elementDOM = editor.getElementByKey(element.getKey());

      if (elementDOM) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const listType = parentList ? parentList.getTag() : 'paragraph'; // ul or ol
          setBlockType(listType);
        } else if ($isHeadingNode(element)) {
          setBlockType(element.getTag()); // h1, h2, etc.
        } else if ($isParagraphNode(element)) {
            setBlockType('paragraph');
        } else {
            setBlockType('paragraph'); // Default to paragraph if not recognized
        }
      }

      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));

      // Check for link format
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      setIsLink($isLinkNode(parent) || $isLinkNode(node));
    }
  }, [editor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        setActiveEditor(newEditor);
        return false;
      },
      0
    );
  }, [editor]);

  useEffect(() => {
    // Register listener for editor updates
    return activeEditor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
      });
    });
  }, [activeEditor, updateToolbar]);

  const formatText = useCallback((format) => {
    activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  }, [activeEditor]);

  const formatBlock = useCallback((type) => {
    if (blockType !== type) {
      activeEditor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const nodes = selection.getNodes();
          nodes.forEach((node) => {
            if ($isListNode(node)) {
              node.replace($createParagraphNode());
            } else if ($isHeadingNode(node)) {
                node.replace($createParagraphNode());
            }
          });
          const transformedNodes = nodes.map(node => {
            if (type === 'h1' && !$isHeadingNode(node)) {
              const heading = $createHeadingNode('h1');
              heading.append(...node.getChildren());
              return heading;
            }
            if (type === 'h2' && !$isHeadingNode(node)) {
              const heading = $createHeadingNode('h2');
              heading.append(...node.getChildren());
              return heading;
            }
            if (type === 'paragraph' && ($isHeadingNode(node) || $isListNode(node))) {
              const paragraph = $createParagraphNode();
              paragraph.append(...node.getChildren());
              return paragraph;
            }
            return node;
          });

          $setSelection(selection); // Restore selection after modification
        }
      });
      if (type === 'ul') {
          activeEditor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND);
      } else if (type === 'ol') {
          activeEditor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND);
      } else if (blockType === 'ul' || blockType === 'ol') {
          activeEditor.dispatchCommand(REMOVE_LIST_COMMAND);
      }
    }
  }, [activeEditor, blockType]);


  const insertLink = useCallback(() => {
    if (isLink) {
        activeEditor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    } else {
        const url = prompt('Enter the URL:'); // Or use a proper modal
        if (url) {
            activeEditor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
        }
    }
  }, [activeEditor, isLink]);

  return (
    <div className="editor-toolbar">
      {/* Block Type Selector */}
      <select className="toolbar-select" value={blockType} onChange={(e) => formatBlock(e.target.value)}>
        <option value="paragraph">Paragraph</option>
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="ul">Unordered List</option>
        <option value="ol">Ordered List</option>
      </select>

      {/* Text Formatting Buttons */}
      <button
        onClick={() => formatText('bold')}
        className={`toolbar-button ${isBold ? 'active' : ''}`}
        aria-label="Format Bold"
      >
        <strong>B</strong>
      </button>
      <button
        onClick={() => formatText('italic')}
        className={`toolbar-button ${isItalic ? 'active' : ''}`}
        aria-label="Format Italic"
      >
        <i>I</i>
      </button>
      <button
        onClick={() => formatText('underline')}
        className={`toolbar-button ${isUnderline ? 'active' : ''}`}
        aria-label="Format Underline"
      >
        <u>U</u>
      </button>
      <button
        onClick={() => formatText('strikethrough')}
        className={`toolbar-button ${isStrikethrough ? 'active' : ''}`}
        aria-label="Format Strikethrough"
      >
        <s>S</s>
      </button>
      <button
        onClick={insertLink}
        className={`toolbar-button ${isLink ? 'active' : ''}`}
        aria-label="Insert Link"
      >
        🔗
      </button>
    </div>
  );
}

export default ToolbarPlugin;