import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  heroImage: string;
}

export default function ProjectCard({ id, title, description, heroImage }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className="group bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative h-full">
      <figure className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </figure>
      <div className="p-4 bg-white/60 backdrop-blur-sm group-hover:bg-white/80 transition-colors duration-300 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <div className="flex mt-auto">
          <button className="py-2.5 text-xl text-black italic rounded-lg hover:font-medium transition">
            View Project
          </button>
        </div>
      </div>
    </Link>
  );
}
