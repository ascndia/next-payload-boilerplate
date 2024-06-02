import { CollectionConfig } from "payload/types";

const Project: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "showing", "featured", "created_date"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "Creation Date",
      name: "createdDate",
      type: "date",
    },
    {
      name: "showing",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "description",
      type: "richText",
      required: false,
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
    {
      name: "liveDemo",
      type: "text",
      required: false,
    },
    {
      name: "sourceCode",
      type: "text",
      required: false,
    },
    {
      name: "type",
      type: "select",
      hasMany: true,
      options: [
        {
          label: "Front End",
          value: "front-end",
        },
        {
          label: "BackEnd",
          value: "backend",
        },
        {
          label: "Full Stack",
          value: "full-stack",
        },
        {
          label: "Web Application",
          value: "web-app",
        },
        {
          label: "Website",
          value: "website",
        },
        {
          label: "Mobile App",
          value: "mobile",
        },
      ],
    },
    {
      name: "technology",
      hasMany: true,
      type: "select",
      required: false,
      options: [
        {
          label: "HTML",
          value: "html",
        },
        {
          label: "CSS",
          value: "css",
        },
        {
          label: "Javascript",
          value: "javascript",
        },
        {
          label: "Typescript",
          value: "typescript",
        },
        {
          label: "Python",
          value: "python",
        },
        {
          label: "PHP",
          value: "php",
        },
        {
          label: "React",
          value: "react",
        },
        {
          label: "Tailwind",
          value: "tailwind",
        },
      ],
    },
    {
      name: "feature",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "richText",
          required: true,
        },
      ],
    },
    {
      name: "keypoint",
      type: "array",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "media",
      type: "array",
      fields: [
        {
          name: "media",
          type: "upload",
          relationTo: "media",
          filterOptions: {
            mimeType: { contains: "image" },
          },
          required: true,
        },
      ],
    },
  ],
};

export default Project;
