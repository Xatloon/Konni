'use client'

import Image from 'next/image'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Avatar from '@/asset/image/avatar.jpeg'
import { useToast } from '@/util/use-toast'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/component/ui/dialog'

import { Button } from '@/component/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/component/ui/form'

import { Input } from '@/component/ui/input'

export default function Login() {
  const loginSchema = z.object({
    email: z.string()
      .min(1, { message: '邮箱不能为空' })
      .email('请输入正确的邮箱'),
  })

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  })

  const { toast } = useToast()

  function onSubmit() {
    toast({
      title: '邮件发送成功🎉',
      description: '请检查你的邮箱，点击邮件中的链接完成登录。',
    })
  }

  return (
    <Dialog>
      <DialogTrigger><Image className="rounded-full" src={Avatar} alt="avatar" width={30} height={30} /></DialogTrigger>
      <DialogContent className="w-11/12 rounded-lg">
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center p-4 rounded-full bg-slate-500/30 w-fit">
              <span className="i-fluent-emoji-sunflower text-6xl"></span>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">今日份の</h1>
              <h2 className="text-sm text-gray-500">记录今天，发现明天</h2>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="输入邮箱" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">登录 / 注册</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
