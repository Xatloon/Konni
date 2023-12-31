import type { Metadata } from 'next'
import { Toaster } from '@/component/ui/toaster'
import ThemeProvider from '@/component/theme-provider'
import Dock from '@/component/dock'
import Header from '@/component/header'
import '@/style/globals.css'

export const metadata: Metadata = {
  title: '今日份の',
  description: '一个记录生活碎片的轻博客应用',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Dock />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
