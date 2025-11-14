import { Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import HashScrollHandler from '@/components/HashScrollHandler';
import {
  getAllProjects,
  getHeroSection,
  getTeamSection,
  getNeighborhoodSection,
  getContactSection
} from '@/util/payloadQueries';
import { transformPayloadProject } from '@/util/transformPayloadData';
import NeighborhoodSection from '@/components/NeighborhoodSection';
import { getMediaUrl } from '@/util/mediaHelpers';
import { extractTextFromRichText } from '@/util/richTextHelpers';
import type { Company } from '@/types/payload';

export default async function Home() {
  // Fetch all data in parallel
  const [
    payloadProjects,
    heroData,
    teamData,
    neighborhoodData,
    contactData,
  ] = await Promise.all([
    getAllProjects().catch(() => []),
    getHeroSection().catch(() => null),
    getTeamSection().catch(() => null),
    getNeighborhoodSection().catch(() => null),
    getContactSection().catch(() => null),
  ]);

  // Transform projects with null check
  const projects = Array.isArray(payloadProjects)
    ? payloadProjects.map(transformPayloadProject)
    : [];

  return (
    <main className="relative">
      <Suspense fallback={null}>
        <HashScrollHandler />
      </Suspense>

      <HeroSection
        title={heroData?.title}
        subtitle={heroData?.subtitle}
        backgroundImage={getMediaUrl(heroData?.backgroundImage)}
        backgroundPosition={heroData?.backgroundPosition}
      />

      <ProjectsSection projects={projects} />

      <NeighborhoodSection
        title={neighborhoodData?.title}
        image={getMediaUrl(neighborhoodData?.image)}
        imageAlt={neighborhoodData?.imageAlt}
        description={extractTextFromRichText(neighborhoodData?.description)}
        learnMoreLink={neighborhoodData?.learnMoreLink}
      />

      <TeamSection
        title={teamData?.title}
        description={extractTextFromRichText(teamData?.description)}
        companies={teamData?.companies?.map((c: Company) => ({
          logo: getMediaUrl(c.logo) || '',
          name: c.name,
          alt: c.alt || c.name,
          link: c.link,
        }))}
        learnMoreLink={teamData?.learnMoreLink}
      />

      <ContactSection
        title={contactData?.title}
        nameLabel={contactData?.nameLabel}
        namePlaceholder={contactData?.namePlaceholder}
        emailLabel={contactData?.emailLabel}
        emailPlaceholder={contactData?.emailPlaceholder}
        messageLabel={contactData?.messageLabel}
        messagePlaceholder={contactData?.messagePlaceholder}
        submitButtonText={contactData?.submitButtonText}
      />
    </main>
  );
}
