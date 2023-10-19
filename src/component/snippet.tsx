import Image from 'next/image'
import Avatar from '@/asset/image/avatar.jpeg'

interface SnippetProps {
  nickName: string
  userId: string
  avatar?: string
  content: string
  image?: string
  date: string
  snippetId: string
}

export default function Snippet({
  nickName,
  userId,
  avatar,
  content,
  image,
  date,
}: SnippetProps) {
  return (
    <section className="flex flex-col gap-2 px-4 py-6">
      <div className="flex gap-2 items-center">
        <div className="flex-shrink-0">
          { avatar ? <Image className="rounded-full w-11 h-11" src={avatar} width={40} height={40} alt="avatar" /> : <Image src={Avatar} alt="avatar" /> }
        </div>
        <div>
          <p className="font-bold">{ nickName }</p>
          <p className="text-sm">{ `@${userId} · ${date}` }</p>
        </div>
      </div>
      <div>
        <p>{ content }</p>
        {image ? <Image className="rounded-lg border mt-2" src={image} width={1080} height={720} alt="demo" /> : null}
      </div>
    </section>
  )
}
