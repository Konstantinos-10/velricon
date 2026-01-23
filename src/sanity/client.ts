import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, sanityConfigured, useCdn } from './env'

export const client = sanityConfigured
    ? createClient({
          projectId,
          dataset,
          apiVersion,
          useCdn,
          perspective: 'published',
      })
    : null
