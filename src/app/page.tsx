import CountryTable from '@/components/CountryTable'
import Filters from '@/components/Filters'
import Search from '@/components/Search'
import { RankingProvider } from '@/context/rankingContext'
import { getCountries } from '@/lib/getCountries'
import Link from 'next/link'

export default async function Home() {
  const countries = await getCountries()
  return (
    <div className="px-0 sm:px-7">
      <div className="w-full h-auto bg-dark-clr -translate-y-14 rounded-lg border-light-black-clr border solid shadow-sm px-6 py-8">
        <RankingProvider>
          <Search />
          <div className="flex w-full gap-5">
            <Filters />
            <CountryTable />
          </div>
        </RankingProvider>
      </div>
    </div>
  )
}
