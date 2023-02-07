import {media} from 'sanity-plugin-media'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'keypointApp',

  projectId: 'b80jazms',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), media(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
