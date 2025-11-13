import type { GlobalConfig } from "payload";

export const NeighborhoodPage: GlobalConfig = {
  slug: "neighborhood-page",
  label: "Neighborhood Page",
  admin: {
    description: "Manage the Neighborhood page content and features",
    livePreview: {
      url: () => {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
        return `${baseUrl}/api/preview?global=neighborhood-page`
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "heroTitle",
      type: "text",
      label: "Hero Title",
      required: true,
      defaultValue: "Discover Your Neighborhood",
      admin: {
        description: "Main heading for the page hero section",
      },
    },
    {
      name: "heroSubtitle",
      type: "text",
      label: "Hero Subtitle",
      required: true,
      defaultValue:
        "Explore the vibrant community, exceptional amenities, and local attractions that make this location truly special.",
      admin: {
        description: "Subtitle text for the hero section",
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
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
          required: true,
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
      name: "ctaTitle",
      type: "text",
      label: "Call to Action Title",
      required: true,
      defaultValue: "Ready to Make This Your Home?",
      admin: {
        description: "Title for the call to action section at the bottom",
      },
    },
    {
      name: "ctaDescription",
      type: "textarea",
      label: "Call to Action Description",
      required: true,
      defaultValue:
        "Discover how our developments integrate seamlessly with this exceptional neighborhood. Contact us today to learn more about available properties and upcoming projects.",
      admin: {
        description: "Description text for the call to action section",
      },
    },
    {
      name: "ctaButtonText",
      type: "text",
      label: "CTA Button Text",
      required: true,
      defaultValue: "Get In Touch",
      admin: {
        description: "Text displayed on the call to action button",
      },
    },
    {
      name: "ctaButtonLink",
      type: "text",
      label: "CTA Button Link",
      required: true,
      defaultValue: "/#contact",
      admin: {
        description: "URL or anchor link for the CTA button",
      },
    },
  ],
};
