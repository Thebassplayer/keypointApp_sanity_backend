// import {Code} from '@sanity/block-content-to-react'

export default {
  name: 'concepts',
  type: 'document',
  title: 'Concepts',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Id',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'Deprecated Explanation',
      type: 'text',
      title: 'Deprecated Explanation',
    },
    {
      name: 'example',
      type: 'text',
      title: 'Example',
    },
    {
      name: 'explanation',
      type: 'array',
      title: 'Explanation',
      of: [{type: 'block'}],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description: 'List of tags for this document',
      of: [{type: 'string'}],
      default: [''],
      options: {
        layout: 'tags',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      explanation: 'explanation',
    },
    prepare(selection) {
      const {title, explanation} = selection
      return {
        title: title,
        subtitle: explanation,
      }
    },
  },
}
