import CountryTable from '@/components/CountryTable'
import Filters from '@/components/Filters'
import Search from '@/components/Search'
import { getCountries } from '@/lib/getCountries'
import ReduxProvider from './redux/provider'

export default async function Home() {
  const countriesResults = await getCountries()
  return (
    <div className="px-0 sm:px-7">
      <div className="w-full h-auto bg-dark-clr -translate-y-14 sm:rounded-lg rounded-none border-light-black-clr border solid shadow-sm p-8 ">
        <ReduxProvider>
          <div className="flex justify-between items-center w-full mb-10 ">
            <Search />
          </div>
          <div className="flex sm:flex-row flex-col w-full gap-8">
            <Filters />
            <CountryTable countriesResults={countriesResults} />
          </div>
        </ReduxProvider>
      </div>
    </div>
  )
}
