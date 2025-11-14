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
      name: "image",
      type: "upload",
      label: "Image",
      relationTo: "media",
      required: false,
      admin: {
        description: "Main neighborhood image",
      },
    },
    {
      name: "imageAlt",
      type: "text",
      label: "Image Alt Text",
      required: true,
      defaultValue: "Neighborhood",
      admin: {
        description: "Alt text for the image",
      },
    },
    {
      name: "description",
      type: "richText",
      label: "Description",
      required: true,
      admin: {
        description: "Description text",
      },
    },
    {
      name: "learnMoreLink",
      type: "text",
      label: "Learn More Link",
      defaultValue: "/neighberhood",
      admin: {
        description: 'URL for the "Learn More" button',
      },
    },
  ],
};
