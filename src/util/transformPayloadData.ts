import type { Project } from '@/types/projectType'
import { getMediaUrl } from '@/util/mediaHelpers'

/**
 * Transform Payload project data to match frontend Project interface
 * This bridges the gap between CMS data structure and frontend expectations
 */
export function transformPayloadProject(payloadProject: any): Project {
  return {
    id: payloadProject.slug || payloadProject.id,
    title: payloadProject.title || '',
    description: payloadProject.description || '',
    heroImage: getMediaUrl(payloadProject.heroImage) || '',
    hasSold: Boolean(payloadProject.hasSold),
    fullDescription: payloadProject.fullDescription,
    technologies: payloadProject.technologies?.map((t: any) => t.technology || t) || [],
    features: payloadProject.features?.map((f: any) => f.feature || f) || [],
    gallery: payloadProject.gallery?.map((g: any) => getMediaUrl(g.image || g) || '') || [],
    links: {
      demo: payloadProject.ctaLink || '#',
      github: '#',
    },
  }
}
