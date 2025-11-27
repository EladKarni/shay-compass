import React, { JSX } from 'react'
import {
  SerializedEditorState,
  SerializedLexicalNode,
} from 'lexical'

interface RichTextRendererProps {
  content: SerializedEditorState | null | undefined
  className?: string
}

export function RichTextRenderer({ content, className = '' }: RichTextRendererProps) {
  if (!content || !content.root) {
    return null
  }

  const renderNode = (node: SerializedLexicalNode): React.ReactNode => {
    const nodeType = node.type

    if (nodeType === 'paragraph') {
      const paragraphNode = node as any
      return (
        <p className="mb-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          {paragraphNode.children?.map((child: SerializedLexicalNode, index: number) => (
            <React.Fragment key={index}>{renderNode(child)}</React.Fragment>
          ))}
        </p>
      )
    }

    if (nodeType === 'text') {
      const textNode = node as any
      let text = textNode.text || ''

      // Apply text formatting
      if (textNode.format) {
        const isBold = textNode.format & 1
        const isItalic = textNode.format & 2
        const isUnderline = textNode.format & 8

        if (isBold) {
          text = <strong key={Math.random()}>{text}</strong>
        }
        if (isItalic) {
          text = <em key={Math.random()}>{text}</em>
        }
        if (isUnderline) {
          text = <u key={Math.random()}>{text}</u>
        }
      }

      return text
    }

    if (nodeType === 'heading') {
      const headingNode = node as any
      const tag = headingNode.tag || 'h2'
      const HeadingTag = tag as keyof JSX.IntrinsicElements
      const headingClasses = {
        h1: 'text-4xl font-bold mb-6 mt-8 text-gray-900',
        h2: 'text-3xl font-bold mb-4 mt-6 text-gray-900',
        h3: 'text-2xl font-semibold mb-3 mt-5 text-gray-800',
        h4: 'text-xl font-semibold mb-2 mt-4 text-gray-800',
        h5: 'text-lg font-semibold mb-2 mt-3 text-gray-700',
        h6: 'text-base font-semibold mb-2 mt-2 text-gray-700',
      }

      return (
        <HeadingTag className={headingClasses[tag as keyof typeof headingClasses] || headingClasses.h2}>
          {headingNode.children?.map((child: SerializedLexicalNode, index: number) => (
            <React.Fragment key={index}>{renderNode(child)}</React.Fragment>
          ))}
        </HeadingTag>
      )
    }

    if (nodeType === 'list') {
      const listNode = node as any
      const ListTag = listNode.listType === 'number' ? 'ol' : 'ul'
      const listClass = listNode.listType === 'number'
        ? 'list-decimal list-inside mb-4 text-lg text-gray-700'
        : 'list-disc list-inside mb-4 text-lg text-gray-700'

      return (
        <ListTag className={listClass}>
          {listNode.children?.map((child: SerializedLexicalNode, index: number) => (
            <React.Fragment key={index}>{renderNode(child)}</React.Fragment>
          ))}
        </ListTag>
      )
    }

    if (nodeType === 'listitem') {
      const listItemNode = node as any
      return (
        <li className="mb-2">
          {listItemNode.children?.map((child: SerializedLexicalNode, index: number) => (
            <React.Fragment key={index}>{renderNode(child)}</React.Fragment>
          ))}
        </li>
      )
    }

    if (nodeType === 'link' || nodeType === 'autolink') {
      const linkNode = node as any
      // Payload's link nodes may have url in different locations
      const url = linkNode.url || linkNode.fields?.url || linkNode.fields?.linkType === 'custom' ? linkNode.fields?.url : '#'
      return (
        <a
          href={url}
          className="text-blue-600 hover:text-blue-800 underline"
          target="_blank"
          rel={linkNode.rel || (linkNode.fields?.newTab ? 'noopener noreferrer' : undefined)}
        >
          {linkNode.children?.map((child: SerializedLexicalNode, index: number) => (
            <React.Fragment key={index}>{renderNode(child)}</React.Fragment>
          ))}
        </a>
      )
    }

    if (nodeType === 'linebreak') {
      return <br />
    }

    // Default: try to render children if they exist
    const defaultNode = node as any
    if (defaultNode.children) {
      return defaultNode.children.map((child: SerializedLexicalNode, index: number) => (
        <React.Fragment key={index}>{renderNode(child)}</React.Fragment>
      ))
    }

    return null
  }

  return (
    <div className={className}>
      {content.root.children?.map((child: SerializedLexicalNode, index: number) => (
        <React.Fragment key={index}>{renderNode(child)}</React.Fragment>
      ))}
    </div>
  )
}
