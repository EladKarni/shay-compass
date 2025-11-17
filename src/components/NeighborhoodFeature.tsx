import Image from 'next/image';

interface NeighborhoodFeatureProps {
  title?: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

export default function NeighborhoodFeature({
  title,
  description,
  image,
  imageAlt,
  imagePosition,
}: NeighborhoodFeatureProps) {
  const flexDirection = imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <div className={`hero-content w-full p-0 gap-8 flex-col ${flexDirection} justify-between`}>
      <Image
        src={image}
        alt={imageAlt}
        width={300}
        height={300}
        className="lg:max-w-lg rounded-md"
      />
      <div>
        {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
        <p className="py-6 text-xl">{description}</p>
      </div>
    </div>
  );
}
