import { AppLayout } from '@/components/Layouts'
import Nav from '@/components/nav'

export const Home = () => {
  return (
    <AppLayout>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
      </div>
    </AppLayout>
  )
}

export default Home
