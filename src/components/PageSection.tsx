interface PageSectionProps {
  id: string;
  children: React.ReactNode;
  backgroundColor?: 'base-100' | 'base-200';
  maxWidth?: string;
}

export default function PageSection({
  id,
  children,
  backgroundColor = 'base-100',
  maxWidth = 'max-w-5xl'
}: PageSectionProps) {
  const bgClass = backgroundColor === 'base-200' ? 'bg-gray-50' : 'bg-white';

  return (
    <section id={id} className={`${bgClass} py-24 md:py-32 px-6`}>
      <div className={`${maxWidth} mx-auto`}>
        {children}
      </div>
    </section>
  );
}
