import { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TwoColumns: Block = {
  slug: 'twoColumns',
  labels: {
    singular: 'Two Columns',
    plural: 'Two Columns',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
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
