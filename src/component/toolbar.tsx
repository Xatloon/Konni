import type { Editor } from '@tiptap/react'
import { Button } from './ui/button'
import { Toggle } from '@/component/ui/toggle'

export default function Toolbar({ editor }: { editor: Editor | null }) {
  if (!editor)
    return null

  return (
    <div className="flex justify-between">
      <div className="divide-x rounded-lg border w-fit">
        <Toggle className="rounded-none">
          <span className="i-tabler-photo"></span>
        </Toggle>
        <Toggle className="rounded-none">
          <span className="i-tabler-map-pin"></span>
        </Toggle>
        <Toggle className="rounded-none">
          <span className="i-tabler-hash"></span>
        </Toggle>
        <Toggle className="rounded-none">
          <span className="i-tabler-at"></span>
        </Toggle>
        <Toggle className="rounded-none">
          <span className="i-tabler-mood-smile"></span>
        </Toggle>
      </div>
      <Button type="submit">发布</Button>
    </div>
  )
}
