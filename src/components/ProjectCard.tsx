import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  heroImage: string;
  hasSold?: boolean;
}

export default function ProjectCard({ id, title, description, heroImage, hasSold }: ProjectCardProps) {
  const cardClassName = "group bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl overflow-hidden shadow-md transition-all duration-300 flex flex-col relative h-full";

  const inner = (
    <>
      <figure className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <Image
          src={heroImage}
          alt={title}
          fill
          className={`object-contain transition-transform duration-300 ${hasSold ? '' : 'group-hover:scale-105'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </figure>
      <div className="p-4 bg-white/60 backdrop-blur-sm flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        {!hasSold && (
          <div className="flex mt-auto">
            <button className="py-2.5 text-xl text-black italic rounded-lg hover:font-medium transition">
              View Property
            </button>
          </div>
        )}
      </div>
      {hasSold && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 bg-gray-900/35"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden"
          >
            <div className="w-[200%] -rotate-12 bg-[repeating-linear-gradient(45deg,_#fde68a_0_14px,_#1f2937_14px_28px)] backdrop-blur-sm border-y border-white/20 py-2 shadow-md flex items-center justify-center">
              <span className="text-yellow-50 font-semibold text-xl tracking-[0.4em] [text-shadow:_0_1px_2px_rgba(31,41,55,0.85)]">
                SOLD
              </span>
            </div>
          </div>
          <span className="sr-only">This property is sold.</span>
        </>
      )}
    </>
  );

  if (hasSold) {
    return (
      <div aria-disabled="true" className={`${cardClassName} cursor-not-allowed`}>
        {inner}
      </div>
    );
  }

  return (
    <Link href={`/projects/${id}`} className={`${cardClassName} hover:shadow-xl`}>
      {inner}
    </Link>
  );
}
