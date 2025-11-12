import PageSection from './PageSection';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import type { Project } from '@/types/projectType';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <PageSection id="projects" backgroundColor="base-200" maxWidth="max-w-7xl">
      <SectionHeading title="Featured Developments" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </PageSection>
  );
}
