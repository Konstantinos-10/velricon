"use client"

/**
 * This route is responsible for building the built-in Sanity Studio.
 * https://www.sanity.io/docs/nextjs-app-router-live-preview
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
    return <NextStudio config={config} />
}
