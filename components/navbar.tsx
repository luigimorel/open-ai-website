
import { useRouter } from 'next/router'

const Navigation = () => {
  const router = useRouter()
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-teal-500">
      <div className="flex items-center font-semibold text-white">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            router.push('/')
          }}
          className="mr-4"
        >
          Home
        </a>
        <a
          href="/about"
          onClick={(e) => {
            e.preventDefault()
            router.push('/about')
          }}
          className="mr-4"
        >
          About
        </a>
      </div>
    </nav>
  )
}

export default Navigation