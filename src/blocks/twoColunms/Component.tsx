import RichTextParse from '@/components/RichTextParse'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { SerializedEditorState } from 'node_modules/lexical/LexicalEditorState'
import { SerializedLexicalNode } from 'node_modules/lexical/LexicalNode'

const TwoColunmsBlock = ({
  content,
  image,
}: {
  content: SerializedEditorState<SerializedLexicalNode>
  image: Media
}) => {
  const isReverse = 'reverse'

  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* Contenedor de la imagen */}
      <div
        className={`w-full md:w-1/2 ${isReverse ? 'order-last md:order-last' : 'order-first md:order-first'}`}
      >
        {image && <Image src={`${image?.url}`} width={300} height={300} alt="column content" />}
      </div>

      {/* Contenedor del texto */}
      <div
        className={`w-full md:w-1/2 ${isReverse ? 'order-first md:order-first' : 'order-last md:order-last'}`}
      >
        <RichTextParse data={content} />
      </div>
    </div>
  )
}

export default TwoColunmsBlock
