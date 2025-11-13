import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const collection = searchParams.get('collection')
  const global = searchParams.get('global')

  // Enable Draft Mode for preview
  const draft = await draftMode()
  draft.enable()

  // Redirect to the appropriate page based on collection or global
  if (collection === 'projects' && slug) {
    redirect(`/projects/${slug}`)
  }

  if (global === 'team-page') {
    redirect('/team')
  }

  if (global === 'neighborhood-page') {
    redirect('/neighberhood')
  }

  // For homepage globals, redirect to home
  redirect('/')
}
