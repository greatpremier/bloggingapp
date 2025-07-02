import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParagraph, faHeading, faImage } from '@fortawesome/free-solid-svg-icons';

// Block Types
const BLOCK_TYPES = {
  TEXT: 'text',
  IMAGE: 'image',
  HEADING: 'heading',
};

// Block Component
const Block = ({ block, index, moveBlock, updateBlock, deleteBlock }) => {
  const [, ref] = useDrag({
    type: 'block',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'block',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveBlock(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const handleChange = (e) => {
    updateBlock(index, { ...block, content: e.target.value });
  };

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="p-4 border rounded-lg mb-4 bg-white shadow"
    >
      {block.type === BLOCK_TYPES.TEXT && (
        <textarea
          value={block.content}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Write something..."
        />
      )}
      {block.type === BLOCK_TYPES.IMAGE && (
        <div>
          <input
            type="text"
            value={block.content}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter image URL..."
          />
          {block.content && (
            <img
              src={block.content}
              alt="Block"
              className="mt-2 max-w-full h-auto"
            />
          )}
        </div>
      )}
      {block.type === BLOCK_TYPES.HEADING && (
        <input
          type="text"
          value={block.content}
          onChange={handleChange}
          className="w-full p-2 border rounded text-xl font-bold"
          placeholder="Enter heading..."
        />
      )}
      <button
        onClick={() => deleteBlock(index)}
        className="mt-2 text-red-500 hover:underline"
      >
        Delete Block
      </button>
    </div>
  );
};

// Main Editor Component
const GutenbergEditor = () => {
  const [blocks, setBlocks] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(true); // State for collapsible panel

  const addBlock = (type) => {
    setBlocks([...blocks, { id: uuidv4(), type, content: '' }]);
  };

  const moveBlock = (fromIndex, toIndex) => {
    const updatedBlocks = [...blocks];
    const [movedBlock] = updatedBlocks.splice(fromIndex, 1);
    updatedBlocks.splice(toIndex, 0, movedBlock);
    setBlocks(updatedBlocks);
  };

  const updateBlock = (index, updatedBlock) => {
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = updatedBlock;
    setBlocks(updatedBlocks);
  };

  const deleteBlock = (index) => {
    const updatedBlocks = blocks.filter((_, i) => i !== index);
    setBlocks(updatedBlocks);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        {/* Collapsible Blocks Panel */}
        <div
          className={`transition-all duration-300 ${
            isPanelOpen ? 'w-64' : 'w-16'
          } bg-gray-200 h-screen p-4`}
        >
          <button
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className="mb-4 text-gray-700 hover:text-gray-900"
          >
            {isPanelOpen ? 'Collapse' : 'Expand'}
          </button>
          {isPanelOpen && (
            <div className="space-y-4">
              <button
                onClick={() => addBlock(BLOCK_TYPES.TEXT)}
                className="flex items-center gap-2 p-2 bg-white rounded shadow hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faParagraph} className="text-blue-500" />
                <span>Text Block</span>
              </button>
              <button
                onClick={() => addBlock(BLOCK_TYPES.HEADING)}
                className="flex items-center gap-2 p-2 bg-white rounded shadow hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faHeading} className="text-green-500" />
                <span>Heading Block</span>
              </button>
              <button
                onClick={() => addBlock(BLOCK_TYPES.IMAGE)}
                className="flex items-center gap-2 p-2 bg-white rounded shadow hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faImage} className="text-purple-500" />
                <span>Image Block</span>
              </button>
            </div>
          )}
        </div>

        {/* Editor Area */}
        <div className="flex-1 max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Gutenberg-like Editor</h1>
          {blocks.map((block, index) => (
            <Block
              key={block.id}
              block={block}
              index={index}
              moveBlock={moveBlock}
              updateBlock={updateBlock}
              deleteBlock={deleteBlock}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default GutenbergEditor;