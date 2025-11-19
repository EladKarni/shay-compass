import PageSection from '@/components/PageSection';
import SectionHeading from '@/components/SectionHeading';
import PageHero from '@/components/PageHero';
import FeatureSection from '@/components/FeatureSection';
import Button from '@/ui/button';
import { getNeighborhoodPage } from '@/util/payloadQueries';
import { getMediaUrlWithPlaceholder } from '@/util/mediaHelpers';
import type { NeighborhoodFeature } from '@/types/payload';

export default async function NeighberhoodPage() {
    const pageData = await getNeighborhoodPage().catch(() => null);

    const heroTitle = pageData?.heroTitle || "Discover Your Neighborhood";
    const heroSubtitle = pageData?.heroSubtitle || "Explore the vibrant community, exceptional amenities, and local attractions that make this location truly special.";
    const features: NeighborhoodFeature[] = pageData?.features || [];
    const ctaTitle = pageData?.ctaTitle || "Ready to Make This Your Home?";
    const ctaDescription = pageData?.ctaDescription || "Discover how our developments integrate seamlessly with this exceptional neighborhood. Contact us today to learn more about available properties and upcoming projects.";
    const ctaButtonText = pageData?.ctaButtonText || "Get In Touch";
    const ctaButtonLink = pageData?.ctaButtonLink || "/#contact";

    return (
        <main className="relative">
            <PageHero
                title={heroTitle}
                subtitle={heroSubtitle}
            />

            {/* Neighborhood Features Sections */}
            {features.map((feature, index) => {
                const isEvenIndex = index % 2 === 0;
                return (
                    <PageSection
                        key={feature.title}
                        id={`neighborhood-${index + 1}`}
                        backgroundColor={isEvenIndex ? 'base-200' : 'base-100'}
                    >
                        <FeatureSection
                            title={feature.title}
                            description={feature.description}
                            image={getMediaUrlWithPlaceholder(feature.image, 800, 500)}
                            imageAlt={feature.imageAlt}
                            imageOnRight={!isEvenIndex}
                        />
                    </PageSection>
                );
            })}

            {/* Call to Action Section */}
            <PageSection id="neighborhood-contact" backgroundColor="base-200">
                <div className="max-w-3xl mx-auto text-center">
                    <SectionHeading title={ctaTitle} />
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                        {ctaDescription}
                    </p>
                    <Button href={ctaButtonLink} variant="primary" size="lg">
                        {ctaButtonText}
                    </Button>
                </div>
            </PageSection>
        </main>
    );
}
