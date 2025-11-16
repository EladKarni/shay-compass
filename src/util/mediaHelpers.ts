/**
 * Utility functions for handling media URLs from Payload CMS
 */

import { Media, isMediaObject } from '@/types/payload';

/**
 * Extracts the URL from a media object or returns the string URL
 * @param media - Media object from Payload CMS or a string URL
 * @param fallback - Optional fallback URL if media is null/undefined
 * @returns The media URL or fallback
 */
export function getMediaUrl(
  media: Media | string | null | undefined,
  fallback?: string
): string | undefined {
  if (!media) {
    console.log('[Media Helper] No media provided, using fallback:', fallback);
    return fallback;
  }

  if (typeof media === 'string') {
    console.log('[Media Helper] Media is string URL:', media);
    return media;
  }

  // Prioritize URL property (from Vercel Blob or other cloud storage)
  if (isMediaObject(media) && media.url) {
    console.log('[Media Helper] Using media.url:', media.url);
    return media.url;
  }

  // Fallback to local path if no URL is available
  if (isMediaObject(media) && media.filename) {
    const localPath = `/media/${media.filename}`;
    console.log('[Media Helper] Using local path:', localPath);
    return localPath;
  }

  console.log('[Media Helper] Could not extract URL, using fallback:', fallback);
  return fallback;
}

/**
 * Gets a media URL with a default placeholder
 * @param media - Media object from Payload CMS or a string URL
 * @param width - Width for placeholder image
 * @param height - Height for placeholder image
 * @returns The media URL or a placeholder
 */
export function getMediaUrlWithPlaceholder(
  media: Media | string | null | undefined,
  width: number = 800,
  height: number = 600
): string {
  const url = getMediaUrl(media);
  if (url) return url;

  // Use a local placeholder instead of external service
  // For now, return a data URL for a gray placeholder
  return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='${width}' height='${height}' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%23666666' text-anchor='middle' dominant-baseline='middle'%3ENo Image%3C/text%3E%3C/svg%3E`;
}
