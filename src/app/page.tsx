import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { getAllProjects } from '@/util/payloadQueries';
import { transformPayloadProject } from '@/util/transformPayloadData';

export default async function Home() {
  // Fetch projects from Payload CMS
  let projects: any[] = [];

  try {
    const payloadProjects = await getAllProjects();
    projects = payloadProjects.map(transformPayloadProject);
  } catch (error) {
    console.error('Failed to fetch projects from CMS:', error);
    // Fallback to empty array if CMS is not set up yet
    projects = [];
  }

  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </main>
  );
}
