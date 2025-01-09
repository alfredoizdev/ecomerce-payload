import { getPageBySlugAction } from '@/actions/pages'
import { Page } from '@/payload-types'
import { notFound } from 'next/navigation'

type Params = {
  params: Promise<{ slug: string }>
}

const SlugPage = async ({ params }: Params) => {
  const { slug } = await params

  const page: Page = await getPageBySlugAction(slug)

  console.log(page)

  if (!page) {
    return notFound()
  }

  return (
    <div className="mx-auto max-w-2xl text-red-600">
      <h2>{page.title}</h2>
    </div>
  )
}

export default SlugPage
