import PageSection from './PageSection';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  return (
    <PageSection id="contact" maxWidth="max-w-3xl">
      <SectionHeading title="Get In Touch" />
      <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-8">
        <form className="space-y-6">
          <input
            type="text"
            name="honeypot"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-label="Don't fill this out"
          />

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-900 font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-200 rounded-lg bg-white/80 backdrop-blur-sm"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-900 font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="input input-bordered w-full border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-200 rounded-lg bg-white/80 backdrop-blur-sm"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-900 font-semibold">Message</span>
            </label>
            <textarea
              placeholder="Your message"
              className="textarea textarea-bordered h-32 border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-200 rounded-lg bg-white/80 backdrop-blur-sm resize-none"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full bg-gray-900 border-gray-900 hover:bg-gray-800 hover:border-gray-800 rounded-lg py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-200">
            Send Message
          </button>
        </form>
      </div>
    </PageSection>
  );
}
