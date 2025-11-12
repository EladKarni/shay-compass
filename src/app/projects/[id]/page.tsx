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
    return slugs.map((slug) => ({
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
        className="relative h-[60vh] w-full bg-cover bg-center flex items-end"
        style={{
          backgroundImage: project.heroImage ? `url(${project.heroImage})` : 'linear-gradient(to bottom right, rgb(249, 250, 251), rgb(229, 231, 235))',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          <Link
            href="/#projects"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Developments
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl">
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
                  <div className="w-20 h-1 bg-gradient-to-r from-gray-800 via-gray-600 to-transparent rounded-full"></div>
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{project.fullDescription}</p>
              </div>
            )}

            {/* Property Highlights */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-12">
                <div className="flex flex-col items-start mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Property Highlights</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-gray-800 via-gray-600 to-transparent rounded-full"></div>
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

            {/* Amenities & Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-12">
                <div className="flex flex-col items-start mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Amenities & Features</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-gray-800 via-gray-600 to-transparent rounded-full"></div>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                      <svg
                        className="w-6 h-6 text-gray-900 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Property Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <PropertyImageGallery images={project.gallery} propertyName={project.title} />
            )}

            {/* CTA Buttons */}
            {project.links && (
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-300">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-200 text-center shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule Tour
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:shadow-lg transition-all duration-200 text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Brochure
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
