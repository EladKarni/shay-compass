import { getPayload } from './getPayload'

/**
 * Fetch all published projects
 */
export async function getAllProjects() {
  const payload = await getPayload()

  const { docs: projects } = await payload.find({
    collection: 'projects',
    depth: 2, // Include related media
  })

  return projects
}

/**
 * Fetch a single project by slug
 */
export async function getProjectBySlug(slug: string) {
  const payload = await getPayload()

  const { docs: projects } = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2, // Include related media
    limit: 1,
  })

  return projects[0] || null
}

/**
 * Fetch all project slugs (for static generation)
 */
export async function getAllProjectSlugs() {
  const payload = await getPayload()

  const { docs: projects } = await payload.find({
    collection: 'projects',
    depth: 0,
    limit: 1000,
  })

  return projects.map((project: any) => project.slug)
}
