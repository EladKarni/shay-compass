import Image from 'next/image';
import PageSection from './PageSection';
import SectionHeading from './SectionHeading';
import Button from '@/ui/button';

interface Company {
  logo: string;
  name: string;
  alt: string;
  link?: string;
}

interface TeamSectionProps {
  title?: string;
  description?: string;
  companies?: Company[];
  learnMoreLink?: string;
}

export default function TeamSection({
  title = 'Meet the Team',
  description = '',
  companies = [],
  learnMoreLink = '/team',
}: TeamSectionProps) {
  if (!title || !description || !learnMoreLink) {
    return null;
  }

  return (
    <PageSection id="team">
      <SectionHeading title={title} />
      <div className="max-w-7xl mx-auto">
        <div className="text-lg md:text-xl text-base-content/80 space-y-6 leading-relaxed text-center">
          <p>{description}</p>

          <div className="flex flex-col md:flex-row gap-12 mt-6 justify-between">
            <Button href={learnMoreLink} variant="text" size="lg" className='mx-auto'>
              Meet Us
            </Button>

            {companies.length > 0 && (
              <div className='flex gap-12 flex-wrap justify-center'>
                {companies.map((company) => {
                  const logoImg = (
                    <Image
                      src={company.logo}
                      alt={company.alt || `${company.name} logo`}
                      width={64}
                      height={64}
                      className="w-24 h-24 object-contain rounded-full bg-slate-100 p-2 transition-transform hover:scale-110 border border-gray-200 shadow-sm"
                    />
                  );

                  return company.link ? (
                    <a
                      key={company.name}
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                      title={company.name}
                      aria-label={`Visit ${company.name} website`}
                    >
                      {logoImg}
                    </a>
                  ) : (
                    <div key={company.name} title={company.name}>
                      {logoImg}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
