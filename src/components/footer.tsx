import { Logo } from "@/ui/icons/logo";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-base-100 to-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="mb-4 hover:opacity-80 transition-opacity"
              aria-label="Navigate to Shay Compass Home Page"
            >
              <Logo fill="currentColor" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-base-content/70 text-center">
              Building Communities, Creating Value
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-base-content mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-sm items-center">
              <Link href="/#projects" className="text-base-content/70 hover:text-base-content transition-colors">
                Projects
              </Link>
              <Link href="/neighberhood" className="text-base-content/70 hover:text-base-content transition-colors">
                Neighborhood
              </Link>
              <Link href="/team" className="text-base-content/70 hover:text-base-content transition-colors">
                The Team
              </Link>
              <Link href="/#contact" className="text-base-content/70 hover:text-base-content transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-base-content mb-4">Get In Touch</h3>
            <div className="flex flex-col gap-2 text-sm text-base-content/70 items-center">
              <a href="/#contact" className="hover:text-base-content transition-colors">
                Contact Form
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-base-300">
          <p className="text-center text-sm text-base-content/60">
            &copy; {currentYear} Shay Compass Development Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
