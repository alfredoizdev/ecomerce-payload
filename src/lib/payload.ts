'server only'

import { getPayload } from 'payload'
import config from '@payload-config'

export const payloadClient = async () => {
  const payload = await getPayload({ config })

  return payload
}
