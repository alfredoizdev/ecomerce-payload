import RichTextParse from '@/components/RichTextParse'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { SerializedEditorState } from 'node_modules/lexical/LexicalEditorState'
import { SerializedLexicalNode } from 'node_modules/lexical/LexicalNode'

const TwoColunmsBlock = ({
  content,
  image,
  position,
}: {
  content: SerializedEditorState<SerializedLexicalNode>
  image: Media
  position: string
}) => {
  const isReverse = position === 'reverse' ? true : false
  return (
    <div className="flex flex-col md:flex-row items-center gap-3">
      {/* Contenedor de la imagen */}
      <div
        className={`w-full md:w-1/2 ${isReverse ? 'order-last md:order-last' : 'order-first md:order-first'}`}
      >
        <div className="relative w-full mx-auto h-96 md:h-96">
          {image && (
            <Image
              src={`${image?.url}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'contain' }}
              alt="image"
            />
          )}
        </div>
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
