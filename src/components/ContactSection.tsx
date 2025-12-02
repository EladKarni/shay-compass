"use client";
import PageSection from './PageSection';
import SectionHeading from './SectionHeading';
import { useRouter } from 'next/navigation';

interface ContactSectionProps {
  title: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
}

export default function ContactSection({
  title,
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  submitButtonText,
}: ContactSectionProps) {
  const router = useRouter();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const myForm = event.currentTarget;
    const formData = new FormData(myForm);

    const response = await fetch("/_forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...Object.fromEntries(formData),
      }).toString(),
    });

    if (!response.ok) {
      alert("There was a problem submitting the form. Please try again.");
      return;
    }
    router.push("/success");
  };

  return (
    <PageSection id="contact" maxWidth="max-w-7xl">
      <SectionHeading title={title} />
      <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-8">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="honeypot"
          className="space-y-6"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <input type="hidden" name="form-name" value="contact" />
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
              <span className="label-text text-gray-900 font-semibold">{nameLabel}</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder={namePlaceholder}
              className="input input-bordered w-full border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-200 rounded-lg bg-white/80 backdrop-blur-sm"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-900 font-semibold">{emailLabel}</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder={emailPlaceholder}
              className="input input-bordered w-full border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-200 rounded-lg bg-white/80 backdrop-blur-sm"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-900 font-semibold">{messageLabel}</span>
            </label>
            <textarea
              name="message"
              placeholder={messagePlaceholder}
              className="textarea textarea-bordered h-32 border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-200 rounded-lg bg-white/80 backdrop-blur-sm resize-none"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full bg-gray-900 border-gray-900 hover:bg-gray-800 hover:border-gray-800 rounded-lg py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-200">
            {submitButtonText}
          </button>
        </form>
      </div>
    </PageSection>
  );
}
