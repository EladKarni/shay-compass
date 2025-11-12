import type { Project } from '@/types/projectType'

/**
 * Transform Payload project data to match frontend Project interface
 * This bridges the gap between CMS data structure and frontend expectations
 */
export function transformPayloadProject(payloadProject: any): Project {
  // Helper to get media URL
  const getMediaUrl = (media: any): string => {
    if (typeof media === 'string') return media
    if (media?.url) return media.url
    return ''
  }

  return {
    id: payloadProject.slug || payloadProject.id,
    title: payloadProject.title || '',
    description: payloadProject.description || '',
    heroImage: getMediaUrl(payloadProject.heroImage),
    fullDescription:
      typeof payloadProject.fullDescription === 'string'
        ? payloadProject.fullDescription
        : extractTextFromRichText(payloadProject.fullDescription),
    technologies: payloadProject.technologies?.map((t: any) => t.technology || t) || [],
    features: payloadProject.features?.map((f: any) => f.feature || f) || [],
    gallery: payloadProject.gallery?.map((g: any) => getMediaUrl(g.image || g)) || [],
    links: {
      demo: payloadProject.ctaLink || '#',
      github: '#',
    },
  }
}

/**
 * Extract plain text from Lexical rich text format
 * This is a simplified version - you might want to enhance this based on your needs
 */
function extractTextFromRichText(richText: any): string {
  if (!richText) return ''
  if (typeof richText === 'string') return richText

  // Handle Lexical format
  if (richText.root && richText.root.children) {
    return richText.root.children
      .map((node: any) => extractTextFromNode(node))
      .join('\n')
  }

  return ''
}

function extractTextFromNode(node: any): string {
  if (node.text) return node.text
  if (node.children) {
    return node.children.map((child: any) => extractTextFromNode(child)).join('')
  }
  return ''
}
