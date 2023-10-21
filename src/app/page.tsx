import Header from '@/component/header'
import Feed from '@/component/feed'
import ShortForm from '@/component/short-form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/ui/tabs'

export default function Home() {
  return (
    <>
      <aside className="hidden sm:block"></aside>
      <main className="min-h-screen divide-y mb-16">
        <Header />
        <Tabs defaultValue="timeline" className="flex flex-col justify-center items-center py-4">
          <TabsList>
            <TabsTrigger value="timeline">时间线</TabsTrigger>
            <TabsTrigger value="follow">关注</TabsTrigger>
            <TabsTrigger value="hot">热门</TabsTrigger>
          </TabsList>
          <TabsContent value="timeline">
            <ShortForm />
            <Feed />
          </TabsContent>
          <TabsContent value="follow">
            <Feed />
          </TabsContent>
          <TabsContent value="hot">
            <Feed />
          </TabsContent>
        </Tabs>
      </main>
      <aside className="hidden md:block"></aside>
    </>
  )
}
