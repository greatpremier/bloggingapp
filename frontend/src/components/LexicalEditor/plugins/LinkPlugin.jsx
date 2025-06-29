// src/components/LexicalEditor/plugins/LinkPlugin.jsx
import { LinkPlugin as LexicalLinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { AutoLinkPlugin as LexicalAutoLinkPlugin } from '@lexical/react/LexicalAutoLinkPlugin'; // Optional: auto-detect links
import React from 'react';

// Regex for auto-linking URLs (example)
const URL_REGEX =
  /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

function LinkPlugin() {
  return (
    <>
      <LexicalLinkPlugin />
      <LexicalAutoLinkPlugin matchers={[[URL_REGEX, (text) => text]]} />
    </>
  );
}

export default LinkPlugin;