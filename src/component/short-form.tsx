'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/component/ui/button'
import { useToast } from '@/util/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/component/ui/form'
import RichText from '@/component/rich-text'

export function ShortForm() {
  const shortSchema = z.object({
    content: z.string().min(1, {
      message: 'Short 最少包含 1 个字。',
    }).max(800, {
      message: 'Short 最多包含 400 个字。',
    }),
  })

  const form = useForm<z.infer<typeof shortSchema>>({
    resolver: zodResolver(shortSchema),
    mode: 'onChange',
    defaultValues: {
      content: '',
    },
  })

  const { toast } = useToast()

  function onSubmit() {
    toast({
      title: 'Short 发布成功！🎉',
      description: '今日份的朋友们与你共享这一美妙时刻～',
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-2">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RichText onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
