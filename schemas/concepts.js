import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'concepts',
  type: 'document',
  title: 'Concepts',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Id',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'explanation',
      title: 'Explanation',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'codeField',
      type: 'code',
      title: 'Code',
      options: {
        language: 'javascript',
        languageAlternatives: [
          {title: 'Javascript', value: 'javascript'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
        ],
        withFilename: true,
      },
    }),
    defineField({
      name: 'example',
      type: 'text',
      title: 'Example',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description: 'List of tags for this document',
      of: [{type: 'string'}],
      default: [''],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
      }
    },
  },
})
