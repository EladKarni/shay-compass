import Image from 'next/image';
import { RichTextRenderer } from '@/components/RichTextRenderer';
import { LexicalRichText } from '@/types/payload';

interface FeatureSectionProps {
    title: string;
    description: LexicalRichText | string; // Support both rich text and plain text
    image: string;
    imageAlt: string;
    imageOnRight?: boolean;
}

/**
 * Reusable feature section with image and content
 * Used for displaying neighborhood features, service highlights, etc.
 */
export default function FeatureSection({
    title,
    description,
    image,
    imageAlt,
}: FeatureSectionProps) {

    return (
        <div className="flex flex-col gap-12 items-center">
            {/* Image */}
            <div className="flex-1 relative w-full h-64">
                <Image
                    src={image}
                    alt={imageAlt}
                    width={800}
                    height={500}
                    className="rounded-lg shadow-lg w-full h-auto object-contain"
                />
            </div>

            {/* Content */}
            <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {title}
                </h2>
                {typeof description === 'string' ? (
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        {description}
                    </p>
                ) : (
                    <RichTextRenderer content={description as any} />
                )}
            </div>
        </div>
    );
}
