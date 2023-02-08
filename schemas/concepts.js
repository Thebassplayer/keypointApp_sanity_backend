import {defineType, defineField, defineArrayMember} from 'sanity'
import InlineCode from '../components/inlineCode.component'

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
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
            ],
          },
          styles: [{title: 'Code', value: 'code', component: InlineCode}],
        }),
        defineArrayMember({
          type: 'code',
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
      ],
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
      of: [{name: 'tag', type: 'string'}],
      default: [''],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      tag: 'tag',
    },
    prepare(selection) {
      const {title, tag} = selection
      return {
        title: title,
        subtitle: tag,
      }
    },
  },
})
