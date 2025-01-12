import RichTextParse from '@/components/RichTextParse'
import { SerializedEditorState } from 'node_modules/lexical/LexicalEditorState'
import { SerializedLexicalNode } from 'node_modules/lexical/LexicalNode'

const RichTextBlock = ({ content }: { content: SerializedEditorState<SerializedLexicalNode> }) => {
  return (
    <>
      <RichTextParse data={content} />
    </>
  )
}

export default RichTextBlock
