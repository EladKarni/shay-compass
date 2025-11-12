import config from '@payload-config'
import { getPayload as getPayloadInstance } from 'payload'

let cachedPayload: any = null

/**
 * Get a cached Payload instance for server-side operations
 * This avoids creating multiple connections to the database
 */
export const getPayload = async () => {
  if (!cachedPayload) {
    cachedPayload = await getPayloadInstance({ config })
  }
  return cachedPayload
}
