// components/MarkdownRenderer.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // ✅ import this

const MarkdownComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">
      {children}
    </h3>
  ),
  p: ({ children }: any) => (
    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
      {children}
    </p>
  ),
  ul: ({ children }: any) => (
    <ul className="list-none mb-6 space-y-2">{children}</ul>
  ),
  li: ({ children }: any) => (
    <li className="text-lg text-gray-700 flex items-start">
      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-3 flex-shrink-0"></span>
      <span>{children}</span>
    </li>
  ),
  table: ({ children }: any) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="bg-gray-50">{children}</thead>
  ),
  th: ({ children }: any) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
      {children}
    </td>
  ),
  strong: ({ children }: any) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  em: ({ children }: any) => (
    <em className="italic text-gray-800">{children}</em>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-blue-600 pl-6 my-6 italic text-gray-700 bg-gray-50 py-4 rounded-r-lg">
      {children}
    </blockquote>
  ),
  code: ({ children }: any) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
      {children}
    </code>
  ),
};

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // ✅ enable GFM
        components={MarkdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
