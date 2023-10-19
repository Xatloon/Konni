export default function Dock() {
  return (
    <nav className="flex px-4 pt-4 pb-6 fixed bottom-0 w-full bg-slate-50/70 dark:bg-slate-950/70 backdrop-blur">
      <div className="flex-grow text-center">
        <span className="i-tabler-home text-2xl" />
      </div>
      <div className="flex-grow text-center">
        <span className="i-tabler-search text-2xl" />
      </div>
      <div className="flex-grow text-center">
        <span className="i-tabler-bell text-2xl" />
      </div>
    </nav>
  )
}
