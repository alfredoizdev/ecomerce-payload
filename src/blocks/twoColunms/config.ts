import { Block } from 'payload'

export const TwoColumns: Block = {
  slug: 'twoColumns',
  labels: {
    singular: 'Two Columns',
    plural: 'Two Columns',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'position',
      type: 'select',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Reverse',
          value: 'reverse',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
