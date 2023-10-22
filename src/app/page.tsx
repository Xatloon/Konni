import Header from '@/component/header'
import Feed from '@/component/feed'
import ShortForm from '@/component/short-form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/ui/tabs'

export default function Home() {
  return (
    <>
      <aside className="hidden sm:block sm:w-1/12 lg:w-1/4 mx-auto">
        <div className="h-screen sticky top-0">
          WIP
        </div>
      </aside>
      <main className="divide-y mb-16 w-full sm:w-11/12 lg:w-1/2 mx-auto">
        <Header />
        <Tabs defaultValue="timeline" className="flex flex-col items-center pt-6">
          <TabsList>
            <TabsTrigger value="timeline">时间线</TabsTrigger>
            <TabsTrigger value="follow">关注</TabsTrigger>
            <TabsTrigger value="hot">热门</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full" value="timeline">
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
      </main>
      <aside className="hidden lg:block lg:w-1/4 mx-auto">
        <div className="h-screen sticky top-0">
          WIP
        </div>
      </aside>
    </>
  )
}
