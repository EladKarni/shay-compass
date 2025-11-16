import HeroNavigation from './HeroNavigation';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  backgroundPosition = '50% center',
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center bg-fixed flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <HeroNavigation />
    </section>
  );
}
