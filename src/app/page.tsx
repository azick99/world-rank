import CountryTable from '@/components/CountryTable'
import Filters from '@/components/Filters'
import Search from '@/components/Search'
import { RankingProvider } from '@/context/rankingContext'
import { getCountries } from '@/lib/getCountries'

export default async function Home() {
  const countries = await getCountries()
  return (
    <div className="px-0 sm:px-7">
      <div className="w-full h-auto bg-dark-clr -translate-y-14 sm:rounded-lg rounded-none border-light-black-clr border solid shadow-sm p-8 ">
        <RankingProvider>
          <Search />
          <div className="flex sm:flex-row flex-col w-full gap-8">
            <Filters />
            <CountryTable />
          </div>
        </RankingProvider>
      </div>
    </div>
  )
}
