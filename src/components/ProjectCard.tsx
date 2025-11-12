import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
}

export default function ProjectCard({ id, title, description }: ProjectCardProps) {
  return (
    <div className="group bg-white/90 backdrop-blur-sm border border-gray-300 hover:border-gray-500 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <figure className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="w-full h-full flex items-center justify-center text-base-content/40 font-medium">
          Project Image
        </div>
      </figure>

      <div className="p-6 bg-white/60 backdrop-blur-sm group-hover:bg-white/80 transition-colors duration-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <div className="flex justify-end">
          <Link href={`/projects/${id}`}>
            <button className="px-6 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-200">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
