import Search from '@/components/Search'
import { getCountries } from '@/lib/getCountries'
import Link from 'next/link'

export default async function Home() {
  const countries = await getCountries()
  return (
    <div className="px-0 sm:px-7">
      <div className="w-full h-32 bg-dark -translate-y-14 rounded-lg border-light-black border solid shadow-sm px-6 py-8">
        <Search />
      </div>
    </div>
  )
}
