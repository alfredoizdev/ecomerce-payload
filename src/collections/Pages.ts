import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'
import { TwoColumns } from '@/blocks/twoColunms'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: {
      autosave: true,
      schedulePublish: true,
      validate: true,
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [TwoColumns],
      required: true,
    },
    ...slugField(),
  ],
}
