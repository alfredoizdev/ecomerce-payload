import { getPageBySlugAction } from '@/actions/pages'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Page } from '@/payload-types'
import { notFound } from 'next/navigation'

type Params = {
  params: Promise<{ slug: string }>
}

const SlugPage = async ({ params }: Params) => {
  const { slug } = await params

  const page: Page = await getPageBySlugAction(slug)

  if (!page) {
    return notFound()
  }

  return (
    <div className="container">
      <RenderBlocks blocks={page.layout} />
    </div>
  )
}

export default SlugPage
