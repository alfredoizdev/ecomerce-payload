'use server'

import { payloadClient } from '@/lib/payload'
import { Header as HeaderType } from '@/payload-types'

export const getMenuItemsAction = async (): Promise<HeaderType> => {
  const payload = await payloadClient()

  const reponse = await payload.findGlobal({
    slug: 'header',
  })

  return reponse
}
