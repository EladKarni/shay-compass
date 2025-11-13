import type { GlobalConfig } from "payload";

export const TeamPage: GlobalConfig = {
  slug: "team-page",
  label: "Team Page",
  admin: {
    description: "Manage the Team page content and partner companies",
    livePreview: {
      url: () => {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
        return `${baseUrl}/api/preview?global=team-page`
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
      label: "Page Title",
      required: true,
      defaultValue: "Our Team Partners",
      admin: {
        description: "Main heading for the team page",
      },
    },
    {
      name: "companies",
      type: "array",
      label: "Partner Companies",
      minRows: 1,
      maxRows: 20,
      fields: [
        {
          name: "name",
          type: "text",
          label: "Company Name",
          required: true,
        },
        {
          name: "logo",
          type: "upload",
          label: "Company Logo",
          relationTo: "media",
          required: true,
          admin: {
            description: "Upload or select the company logo",
          },
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
          required: true,
          admin: {
            description: "Brief description of the company",
          },
        },
        {
          name: "link",
          type: "text",
          label: "Company Website Link",
          required: false,
          admin: {
            description: "Optional URL to company website or page",
          },
        },
      ],
    },
  ],
};
