import Login from './login'
import ThemeToggle from './theme-toggle'

export default function Header() {
  return (
    <header className="p-4 flex md:w-1/2 mx-auto">
      <div className="basis-1/2 flex items-center justify-start">
        <Login />
      </div>
      <div className="flex-shrink-0 flex items-center">
        <span className="i-fluent-emoji-sunflower text-3xl" />
      </div>
      <div className="basis-1/2 flex items-center justify-end">
        <ThemeToggle />
      </div>
    </header>
  )
}
