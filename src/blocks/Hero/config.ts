import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Hero',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'textarea',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
