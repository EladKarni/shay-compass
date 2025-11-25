interface PageHeroProps {
    title: string;
    subtitle: string;
    minHeight?: string;
}

/**
 * Reusable hero section for internal pages
 * Displays a title and subtitle with consistent styling
 */
export default function PageHero({
    title,
    subtitle,
    minHeight = 'h-[25vh]',
}: PageHeroProps) {
    return (
      <section>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-24">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-black/90 font-light max-w-3xl">
            {subtitle}
          </p>
        </div>
      </section>
    );
}
