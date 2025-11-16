/**
 * Shared TypeScript types for Payload CMS data structures
 */

/**
 * Media object from Payload CMS
 */
export interface Media {
  id: number | string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number | null;
  height: number | null;
  url?: string;
  thumbnailURL?: string | null;
  sizes?: {
    thumbnail?: MediaSize;
    card?: MediaSize;
    tablet?: MediaSize;
  };
}

export interface MediaSize {
  url: string | null;
  width: number | null;
  height: number | null;
  mimeType: string | null;
  filesize: number | null;
  filename: string | null;
}

/**
 * Lexical richText format from Payload CMS
 */
export interface LexicalRichText {
  root: {
    type: string;
    children: LexicalNode[];
  };
}

export interface LexicalNode {
  type: string;
  text?: string;
  children?: LexicalTextChild[];
}

export interface LexicalTextChild {
  type: string;
  text: string;
}

/**
 * Company data structure
 */
export interface Company {
  name: string;
  logo: Media | string;
  alt?: string;
  link?: string;
}

/**
 * Feature data structure for neighborhood page
 */
export interface NeighborhoodFeature {
  title: string;
  description: string;
  image: Media | string;
  imageAlt: string;
}

/**
 * Team Page global data structure
 */
export interface TeamPageData {
  title: string;
  companies: Company[];
}

/**
 * Neighborhood Page global data structure
 */
export interface NeighborhoodPageData {
  heroTitle: string;
  heroSubtitle: string;
  features: NeighborhoodFeature[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}

/**
 * Team Section global data structure
 */
export interface TeamSectionData {
  title: string;
  description: LexicalRichText | string;
  companies: Company[];
  learnMoreLink: string;
}

/**
 * Type guard to check if value is a Media object
 */
export function isMediaObject(value: unknown): value is Media {
  return (
    typeof value === 'object' &&
    value !== null &&
    'filename' in value &&
    typeof (value as Media).filename === 'string'
  );
}

/**
 * Type guard to check if value is LexicalRichText
 */
export function isLexicalRichText(value: unknown): value is LexicalRichText {
  return (
    typeof value === 'object' &&
    value !== null &&
    'root' in value &&
    typeof (value as LexicalRichText).root === 'object'
  );
}
