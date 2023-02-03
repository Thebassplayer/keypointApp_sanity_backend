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
      name: 'explanation',
      type: 'text',
      title: 'Explanation',
    },
    {
      name: 'example',
      type: 'text',
      title: 'Example',
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
