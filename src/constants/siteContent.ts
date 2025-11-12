/**
 * Site-wide content and copy used throughout the application
 */

export const SITE_CONTENT = {
  HERO: {
    TITLE: 'Welcome to Shay Compass',
    SUBTITLE: 'Turning Concepts into Reality',
    BACKGROUND_IMAGE: '/background-pgh.webp',
    BACKGROUND_POSITION: '65% center',
  },

  SECTIONS: {
    ABOUT: {
      ID: 'about',
      TITLE: 'About Us',
    },
    PROJECTS: {
      ID: 'projects',
      TITLE: 'Our Projects',
    },
    CONTACT: {
      ID: 'contact',
      TITLE: 'Get In Touch',
    },
  },

  CONTACT_FORM: {
    NAME: {
      LABEL: 'Name',
      PLACEHOLDER: 'Your name',
    },
    EMAIL: {
      LABEL: 'Email',
      PLACEHOLDER: 'your@email.com',
    },
    MESSAGE: {
      LABEL: 'Message',
      PLACEHOLDER: 'Your message',
    },
    SUBMIT_BUTTON: 'Send Message',
    HONEYPOT_LABEL: "Don't fill this out",
  },

  ARIA_LABELS: {
    HAMBURGER_MENU: 'Hambuger Nav Menu',
    MOBILE_MENU_CLOSE: 'Close mobile menu',
  },
} as const;
