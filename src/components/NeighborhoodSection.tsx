import PageSection from './PageSection';
import SectionHeading from './SectionHeading';
import Button from '@/ui/button';
import NeighborhoodFeature from './NeighborhoodFeature';

export interface NeighborhoodFeatureData {
  title?: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface NeighborhoodSectionProps {
  title?: string;
  features?: NeighborhoodFeatureData[];
  ctaText?: string;
  ctaButtonText?: string;
  learnMoreLink?: string;
}

export default function NeighborhoodSection({
  title,
  features,
  ctaText,
  ctaButtonText,
  learnMoreLink,
}: NeighborhoodSectionProps) {

  if (!title || !features || features.length === 0 || !ctaText || !ctaButtonText || !learnMoreLink) {
    return null;
  }

  return (
    <PageSection id="neighborhood">
      <SectionHeading title={title} />
      {features.map((feature, index) => (
        <NeighborhoodFeature
          key={index}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          imageAlt={feature.imageAlt}
          imagePosition={index % 2 === 0 ? 'right' : 'left'}
        />
      ))}
      <div className='w-1/2 mt-12 flex flex-col items-center rounded-lg mx-auto'>
        <p>{ctaText}</p>
        <Button href={learnMoreLink} variant="primary" className="mt-8">
          {ctaButtonText}
        </Button>
      </div>
    </PageSection>
  );
}
