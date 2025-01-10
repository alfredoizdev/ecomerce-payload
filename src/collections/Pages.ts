import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'
import { TwoColumns } from '@/blocks/twoColunms/config'
import { Hero } from '@/blocks/Hero/config'

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
      blocks: [TwoColumns, Hero],
      required: true,
    },
    ...slugField(),
  ],
}
