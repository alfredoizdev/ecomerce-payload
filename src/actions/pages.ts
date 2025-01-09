'use server'

import { payloadClient } from '@/lib/payload'

export const getPageBySlugAction = async (slug: string) => {
  const payload = await payloadClient()

  const { docs } = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return docs[0]
}
