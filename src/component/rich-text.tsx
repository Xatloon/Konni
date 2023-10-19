import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from '@/component/toolbar'

export default function RichText({ onChange }: { onChange: (content: string) => void }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    editorProps: {
      attributes: {
        class: 'flex flex-col min-h-[250px] w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getText())
    },
  })

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  )
}
