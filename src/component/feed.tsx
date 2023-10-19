import Snippet from '@/component/snippet'

const feeds = [{
  nickName: 'Nick',
  userId: 'NickTheDemo',
  avatar: '/avatar.jpeg',
  content: 'This is a demo.',
  image: '/demo.jpeg',
  date: '2021-10-01',
  snippetId: '1',
}, {
  nickName: 'Nick',
  userId: 'NickTheDemo',
  avatar: '/avatar.jpeg',
  content: 'This is a demo.',
  image: '/demo.jpeg',
  date: '2021-10-01',
  snippetId: '2',
}, {
  nickName: 'Nick',
  userId: 'NickTheDemo',
  avatar: '/avatar.jpeg',
  content: 'This is a demo.',
  image: '/demo.jpeg',
  date: '2021-10-01',
  snippetId: '2',
}]

export default function Feed() {
  return (
    <>
      { feeds.map(feed => (
        <Snippet {...feed} key={feed.snippetId} />
      )) }
    </>
  )
}
