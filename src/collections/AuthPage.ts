import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'
import colorField from '@/fields/color-picker/config'

export const AuthPage: CollectionConfig = {
  slug: 'AuthPages',
  admin: {
    useAsTitle: 'title',
    description:
      "Note: Pages with the type 'Login' or 'Register' will be automatically used as the login and registration pages, respectively.",
  },
  labels: {
    singular: 'Auth Page',
    plural: 'Auth Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    colorField,
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        components: {
          Cell: '@/fields/image-cell/Cell#Cell',
        },
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'Login',
      unique: true,
      options: [
        {
          label: 'Login',
          value: 'Login',
        },
        {
          label: 'Register',
          value: 'Register',
        },
      ],
    },
    ...slugField('type'),
  ],
}
