import type { CollectionConfig } from 'payload'
import {
  defaultEditorFeatures,
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Service',
    plural: 'Services',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['number', 'title'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'modalContent',
      label: 'Modal content',
      type: 'richText',
      editor: lexicalEditor({
        features: () => [...defaultEditorFeatures, FixedToolbarFeature()],
      }),
      required: true,
    },
  ],
}
