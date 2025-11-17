import type { GlobalConfig } from "payload";

export const NeighborhoodSection: GlobalConfig = {
  slug: "neighborhood-section",
  label: "Neighborhood",
  admin: {
    description: "Manage the Neighborhood section on the homepage",
    livePreview: {
      url: () => {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
        return `${baseUrl}/api/preview?global=neighborhood-section`
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      defaultValue: "Neighborhood",
      admin: {
        description: "Section heading",
      },
    },
    {
      name: "features",
      type: "array",
      label: "Neighborhood Features",
      minRows: 1,
      maxRows: 20,
      fields: [
        {
          name: "title",
          type: "text",
          label: "Feature Title",
          required: false,
          admin: {
            description: "Optional title for this feature",
          },
        },
        {
          name: "description",
          type: "richText",
          label: "Description",
          required: true,
          admin: {
            description: "Description text for this feature",
          },
        },
        {
          name: "image",
          type: "upload",
          label: "Feature Image",
          relationTo: "media",
          required: true,
          admin: {
            description: "Upload or select an image for this feature",
          },
        },
        {
          name: "imageAlt",
          type: "text",
          label: "Image Alt Text",
          required: true,
          admin: {
            description: "Alternative text for accessibility",
          },
        },
      ],
    },
    {
      name: "ctaText",
      type: "richText",
      label: "Call to Action Text",
      required: true,
      admin: {
        description: "Text displayed in the call to action section at the bottom",
      },
    },
    {
      name: "ctaButtonText",
      type: "text",
      label: "CTA Button Text",
      required: true,
      defaultValue: "Explore The Vision",
      admin: {
        description: "Text displayed on the call to action button",
      },
    },
    {
      name: "learnMoreLink",
      type: "text",
      label: "Learn More Link",
      required: true,
      defaultValue: "/neighborhood",
      admin: {
        description: 'URL for the "Learn More" button',
      },
    },
  ],
};
