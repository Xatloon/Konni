import Image from 'next/image'
import Feed from '@/component/feed'
import { ShortForm } from '@/component/short-form'

export default function Home() {
  return (
    <>
      <aside></aside>
      <main className="min-h-screen divide-y mb-16">
        <nav className="flex">
          <div className="basis-1/3 text-center pb-4">时间线</div>
          <div className="basis-1/3 text-center pb-4">关注</div>
          <div className="basis-1/3 text-center pb-4">热门</div>
        </nav>
        <ShortForm />
        <Feed />
      </main>
      <aside></aside>
    </>
  )
}
