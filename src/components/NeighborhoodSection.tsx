import PageSection from './PageSection';
import SectionHeading from './SectionHeading';
import Button from '@/ui/button';
import Image from 'next/image';

interface NeighborhoodSectionProps {
  title?: string;
  image?: string;
  imageAlt?: string;
  description?: string;
  learnMoreLink?: string;
}

export default function NeighborhoodSection({
  title,
  image,
  imageAlt,
  description,
  learnMoreLink,
}: NeighborhoodSectionProps) {

  if (!title || !image || !imageAlt || !description || !learnMoreLink) {
    return null;
  }

  return (
    <PageSection id="neighborhood">
      <SectionHeading title={title} />
      <div className="max-w-3xl mx-auto">
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={400}
          className="rounded-lg filter mb-6"
        />
        <div className="text-lg md:text-xl text-base-content/80 space-y-6 leading-relaxed">
          <p className="mb-4">{description}</p>
          <Button href={learnMoreLink} variant="text" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </PageSection>
  );
}
