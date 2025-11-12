import PageSection from './PageSection';
import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <PageSection id="about">
      <SectionHeading title="About Us" />
      <div className="max-w-3xl mx-auto">
        <div className="text-lg md:text-xl text-base-content/80 space-y-6 leading-relaxed">
          <p>
            We are a team of passionate innovators dedicated to transforming ideas into
            exceptional digital experiences. Our commitment to excellence drives us to
            deliver solutions that not only meet but exceed expectations.
          </p>
          <p>
            With expertise spanning modern web technologies, design principles, and
            user experience optimization, we craft products that make a lasting impact.
          </p>
        </div>
      </div>
    </PageSection>
  );
}
