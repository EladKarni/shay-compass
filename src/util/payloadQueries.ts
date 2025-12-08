import { getPayload } from "./getPayload";

/**
 * Fetch all published projects
 */
export async function getAllProjects() {
  const payload = await getPayload();

  const { docs: projects } = await payload.find({
    collection: "projects",
    depth: 2, // Include related media
  });

  return projects;
}

/**
 * Fetch a single project by slug
 */
export async function getProjectBySlug(slug: string) {
  const payload = await getPayload();

  const { docs: projects } = await payload.find({
    collection: "projects",
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2, // Include related media
    limit: 1,
  });

  return projects[0] || null;
}

/**
 * Fetch all project slugs (for static generation)
 */
export async function getAllProjectSlugs() {
  const payload = await getPayload();

  const { docs: projects } = await payload.find({
    collection: "projects",
    depth: 0,
    limit: 1000,
  });

  return projects.map((project: any) => project.slug);
}

/**
 * Fetch Hero Section global
 */
export async function getHeroSection() {
  const payload = await getPayload();

  try {
    const heroSection = await payload.findGlobal({
      slug: "hero-section",
      depth: 2,
    });
    return heroSection;
  } catch (error) {
    console.error("Failed to fetch hero section:", error);
    return null;
  }
}

/**
 * Fetch Projects Section global
 */
export async function getProjectsSection() {
  const payload = await getPayload();

  try {
    const projectsSection = await payload.findGlobal({
      slug: "projects-section",
      depth: 0,
    });
    return projectsSection;
  } catch (error) {
    console.error("Failed to fetch projects section:", error);
    return null;
  }
}

/**
 * Fetch Team Section global
 */
export async function getTeamSection() {
  const payload = await getPayload();

  try {
    const teamSection = await payload.findGlobal({
      slug: "team-section",
      depth: 2,
    });
    return teamSection;
  } catch (error) {
    console.error("Failed to fetch team section:", error);
    return null;
  }
}

/**
 * Fetch Neighborhood Section global
 */
export async function getNeighborhoodSection() {
  const payload = await getPayload();

  try {
    const neighborhoodSection = await payload.findGlobal({
      slug: "neighborhood-section",
      depth: 2,
    });
    return neighborhoodSection;
  } catch (error) {
    console.error("Failed to fetch neighborhood section:", error);
    return null;
  }
}

/**
 * Fetch Contact Section global
 */
export async function getContactSection() {
  const payload = await getPayload();

  try {
    const contactSection = await payload.findGlobal({
      slug: "contact-section",
      depth: 0,
    });
    return contactSection;
  } catch (error) {
    console.error("Failed to fetch contact section:", error);
    return null;
  }
}

/**
 * Fetch Team Page global
 */
export async function getTeamPage() {
  const payload = await getPayload();

  try {
    const teamPage = await payload.findGlobal({
      slug: "team-page",
      depth: 2,
    });
    return teamPage;
  } catch (error) {
    console.error("Failed to fetch team page:", error);
    return null;
  }
}

/**
 * Fetch Neighborhood Page global
 */
export async function getNeighborhoodPage() {
  const payload = await getPayload();

  try {
    const neighborhoodPage = await payload.findGlobal({
      slug: "neighborhood-page",
      depth: 2,
    });
    return neighborhoodPage;
  } catch (error) {
    console.error("Failed to fetch neighborhood page:", error);
    return null;
  }
}
