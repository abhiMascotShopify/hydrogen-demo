import {shopifyAssets} from 'sanity-plugin-shopify-assets'
import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {shopifyDocumentActions} from './plugins/shopifyDocumentActions'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {SHOPIFY_STORE_ID} from './constants'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'Shopify - 15f63f',

  projectId: 'qs0n38yc',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    shopifyDocumentActions(),
    shopifyAssets({
      shopifyDomain: SHOPIFY_STORE_ID,
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
