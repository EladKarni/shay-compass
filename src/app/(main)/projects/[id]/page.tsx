import { notFound } from 'next/navigation';
import Link from 'next/link';
import PropertyImageGallery from '@/components/PropertyImageGallery';
import { getAllProjectSlugs, getProjectBySlug } from '@/util/payloadQueries';
import { transformPayloadProject } from '@/util/transformPayloadData';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllProjectSlugs();
    return slugs.map((slug: any) => ({
      id: slug,
    }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  let project = null;
  try {
    const payloadProject = await getProjectBySlug(id);
    if (payloadProject) {
      project = transformPayloadProject(payloadProject);
    }
  } catch (error) {
    console.error('Failed to fetch project:', error);
  }

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section with Property Image */}
      <section
        className="relative h-[30vh] w-full bg-gray-50 flex items-end pt-20"
      >
        {/* Content container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-4">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">{project.title}</h1>
          <p className="text-xl md:text-2xl text-black/90 font-light max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-50 py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Glass morphism content container */}
          <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            {/* Full Description */}
            {project.fullDescription && (
              <div className="mb-12">
                <div className="flex flex-col items-start mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Development Overview</h2>
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{project.fullDescription}</p>
              </div>
            )}

            {/* Property Highlights */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-12">
                <div className="flex flex-col items-start mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Property Highlights</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-900 font-semibold rounded-lg shadow-sm hover:shadow-md hover:border-gray-400 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Property Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <PropertyImageGallery images={project.gallery} propertyName={project.title} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
