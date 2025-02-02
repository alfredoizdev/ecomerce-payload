import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import HeroBlock from './Hero/Component'
import TwoColunmsBlock from './twoColunms/Component'
import RichTextBlock from './RichText/Component'

const blockComponents = {
  hero: HeroBlock,
  twoColumns: TwoColunmsBlock,
  richText: RichTextBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-5" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
