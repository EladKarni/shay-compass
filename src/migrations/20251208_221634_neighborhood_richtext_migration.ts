import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  console.log('🔄 Starting NeighborhoodPage richText migration...')

  try {
    // Get current neighborhood page data
    const neighborhoodPage = await payload.findGlobal({
      slug: 'neighborhood-page',
    })

    console.log(`📊 Found neighborhood page with ${neighborhoodPage?.features?.length || 0} features`)

    // If no features, nothing to migrate
    if (!neighborhoodPage?.features || neighborhoodPage.features.length === 0) {
      console.log('✅ No features to migrate')
      return
    }

    // Transform each feature's description from plain text to Lexical richText
    const transformedFeatures = neighborhoodPage.features.map((feature: any, index: number) => {
      const description = feature.description

      // If already richText format (has root.children), skip transformation
      if (typeof description === 'object' && description?.root?.children) {
        console.log(`⏭️  Feature ${index + 1}: Already in richText format`)
        return feature
      }

      // Convert plain text string to Lexical format
      const plainText = typeof description === 'string' ? description : ''
      console.log(`🔄 Feature ${index + 1}: Converting "${plainText.substring(0, 50)}..." to richText`)

      const lexicalContent = {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: plainText,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      }

      return {
        ...feature,
        description: lexicalContent,
      }
    })

    // Update with transformed data
    await payload.updateGlobal({
      slug: 'neighborhood-page',
      data: {
        features: transformedFeatures,
      },
    })

    console.log('✅ Migration completed successfully!')
  } catch (error) {
    console.error('❌ Migration failed:', error)
    throw error
  }
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  console.log('🔄 Rolling back NeighborhoodPage richText migration...')

  try {
    // Get neighborhood page data
    const neighborhoodPage = await payload.findGlobal({
      slug: 'neighborhood-page',
    })

    if (!neighborhoodPage?.features || neighborhoodPage.features.length === 0) {
      console.log('✅ No features to rollback')
      return
    }

    // Convert richText back to plain text
    const plainTextFeatures = neighborhoodPage.features.map((feature: any, index: number) => {
      const description = feature.description

      // If already plain text, skip
      if (typeof description === 'string') {
        console.log(`⏭️  Feature ${index + 1}: Already plain text`)
        return feature
      }

      // Extract text from Lexical format
      let plainText = ''
      if (description?.root?.children) {
        plainText = description.root.children
          .map((child: any) =>
            child.children?.map((textNode: any) => textNode.text || '').join('') || ''
          )
          .join('\n')
      }

      console.log(`🔄 Feature ${index + 1}: Converting richText back to plain text`)

      return {
        ...feature,
        description: plainText,
      }
    })

    await payload.updateGlobal({
      slug: 'neighborhood-page',
      data: {
        features: plainTextFeatures,
      },
    })

    console.log('✅ Rollback completed successfully!')
  } catch (error) {
    console.error('❌ Rollback failed:', error)
    throw error
  }
}
