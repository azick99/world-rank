import CountryTable from '@/components/CountryTable'
import Filters from '@/components/Filters'
import Search from '@/components/Search'
import { getCountries } from '@/lib/getCountries'
import Image from 'next/image'
import ReduxProvider from './redux/provider'

export default async function Home() {
  const countriesResults = await getCountries()
  return (
    <div className="px-0 sm:px-7">
      <div className="w-full h-auto bg-dark-clr -translate-y-14 sm:rounded-lg rounded-none border-light-black-clr border solid shadow-sm p-8 ">
        <div className="flex justify-between items-center w-full   mb-10  ">
          <span className="font-semibold ">
            Found {countriesResults.countries.length} countries
          </span>
          <div className="relative">
            <Image
              src="./Search.svg"
              alt="search"
              width={20}
              height={20}
              className="absolute top-2.5 left-2"
              loading="eager"
            />
            <Search />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col w-full gap-8">
          <ReduxProvider>
            <Filters />
            <CountryTable countriesResults={countriesResults} />
          </ReduxProvider>
        </div>
      </div>
    </div>
  )
}
