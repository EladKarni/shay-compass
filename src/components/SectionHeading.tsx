interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 tracking-tight mb-4">
        {title}
      </h2>
      {/* Subtle decorative line with gradient */}
      <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded-full"></div>
    </div>
  );
}
