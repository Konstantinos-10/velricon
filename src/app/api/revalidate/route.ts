import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  const secret = new URL(request.url).searchParams.get('secret')
  if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, message: 'Invalid secret' }, { status: 401 })
  }

  let payload: { slug?: { current?: string } | string } = {}
  try {
    payload = await request.json()
  } catch {
    payload = {}
  }

  const slug =
    typeof payload.slug === 'string'
      ? payload.slug
      : payload.slug?.current

  revalidatePath('/insights')
  if (slug) {
    revalidatePath(`/insights/${slug}`)
  }

  return NextResponse.json({ ok: true, revalidated: true, slug: slug || null })
}
