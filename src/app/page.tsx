import Feed from '@/component/feed'
import ShortForm from '@/component/short-form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/ui/tabs'

export default function Home() {
  return (
    <div className="flex">
      <aside className="hidden sm:block sm:w-1/12 lg:w-1/4 mx-auto border-r">
        <div className="h-screen sticky top-0">
          <div className="flex flex-col py-4 gap-6 items-center justify-center text-xl">
            <div className="flex gap-2 items-center justify-center">
              <span className="i-tabler-home"></span>
              <span className="hidden lg:block">首页</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="i-tabler-user-check"></span>
              <span className="hidden lg:block">关注</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="i-tabler-users"></span>
              <span className="hidden lg:block">粉丝</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="i-tabler-bell"></span>
              <span className="hidden lg:block">通知</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="i-tabler-user"></span>
              <span className="hidden lg:block">我的</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="i-tabler-flame"></span>
              <span className="hidden lg:block">热门</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="i-tabler-world"></span>
              <span className="hidden lg:block">发现</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="i-tabler-settings"></span>
              <span className="hidden lg:block">设置</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="i-tabler-info-circle"></span>
              <span className="hidden lg:block">关于</span>
            </div>
          </div>
        </div>
      </aside>
      <main className="mb-16 w-full sm:w-11/12 lg:w-1/2 mx-auto">
        <Tabs defaultValue="timeline" className="sm:hidden flex flex-col items-center pt-6">
          <TabsList>
            <TabsTrigger value="timeline">时间线</TabsTrigger>
            <TabsTrigger value="follow">关注</TabsTrigger>
            <TabsTrigger value="hot">热门</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full divide-y" value="timeline">
            <ShortForm />
            <Feed />
          </TabsContent>
          <TabsContent className="w-full" value="follow">
            <Feed />
          </TabsContent>
          <TabsContent className="w-full" value="hot">
            <Feed />
          </TabsContent>
        </Tabs>
        <div className="hidden sm:block divide-y">
          <ShortForm />
          <Feed />
        </div>
      </main>
      <aside className="hidden lg:block lg:w-1/4 mx-auto border-l">
        <div className="h-screen sticky top-0">
          WIP
        </div>
      </aside>
    </div>
  )
}
