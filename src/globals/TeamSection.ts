import type { GlobalConfig } from "payload";

export const TeamSection: GlobalConfig = {
  slug: "team-section",
  label: "Team Section",
  admin: {
    description: "Manage the Team section content on the homepage",
    livePreview: {
      url: () => {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
        return `${baseUrl}/api/preview?global=team-section`
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
      defaultValue: "Meet the Team",
      admin: {
        description: "Section heading",
      },
    },
    {
      name: "description",
      type: "richText",
      label: "Description",
      required: true,
      admin: {
        description: "Main description text",
      },
    },
    {
      name: "companies",
      type: "array",
      label: "Team Companies",
      minRows: 0,
      maxRows: 10,
      fields: [
        {
          name: "logo",
          type: "upload",
          label: "Logo",
          relationTo: "media",
          required: true,
        },
        {
          name: "name",
          type: "text",
          label: "Company Name",
          required: true,
        },
        {
          name: "alt",
          type: "text",
          label: "Alt Text",
          required: true,
          admin: {
            description: "Alt text for accessibility",
          },
        },
        {
          name: "link",
          type: "text",
          label: "Company Link",
          required: false,
          admin: {
            description: "Optional URL to company website or page",
          },
        },
      ],
    },
    {
      name: "learnMoreLink",
      type: "text",
      label: "Learn More Link",
      defaultValue: "/team",
      admin: {
        description: 'URL for the "Learn More" button',
      },
    },
  ],
};
