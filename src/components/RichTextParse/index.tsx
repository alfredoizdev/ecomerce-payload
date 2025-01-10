// import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
// import {
//   JSXConvertersFunction,
//   LinkJSXConverter,
//   RichText as RichTextWithoutBlocks,
// } from '@payloadcms/richtext-lexical/react'
// import { cn } from '@/utils/cn'
// import { DefaultNodeTypes, SerializedLinkNode } from '@payloadcms/richtext-lexical'

// type Props = {
//   data: SerializedEditorState
//   enableGutter?: boolean
//   enableProse?: boolean
// } & React.HTMLAttributes<HTMLDivElement>

// type NodeTypes = DefaultNodeTypes

// const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
//   const { value, relationTo } = linkNode.fields.doc!
//   if (typeof value !== 'object') {
//     throw new Error('Expected value to be an object')
//   }
//   const slug = value.slug
//   return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
// }

// const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
//   ...defaultConverters,
//   ...LinkJSXConverter({ internalDocToHref }),
// })

// export default function RichText(props: Props) {
//   const { className, enableProse = true, enableGutter = true, ...rest } = props
//   return (
//     <RichTextWithoutBlocks
//       converters={jsxConverters}
//       className={cn(
//         {
//           'container ': enableGutter,
//           'max-w-none': !enableGutter,
//           'mx-auto prose md:prose-md dark:prose-invert ': enableProse,
//         },
//         className,
//       )}
//       {...rest}
//     />
//   )
// }

import { RichText } from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

const RichTextParse = ({ data }: { data: SerializedEditorState }) => {
  return <RichText data={data} />
}

export default RichTextParse
