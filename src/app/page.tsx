import CountryTable from '@/components/CountryTable'
import Filters from '@/components/Filters'
import Search from '@/components/Search'
import { getCountries } from '@/lib/getCountries'
import ReduxProvider from './redux/provider'
import { Suspense } from 'react'

export default async function Home() {
  const countriesResults = await getCountries()
  if (!countriesResults) return <div>Some thing went wrong!</div>
  return (
    <div className="px-0 sm:px-7">
      <div className="w-full h-auto bg-dark-clr -translate-y-14 sm:rounded-lg rounded-none border-light-black-clr border solid shadow-sm p-8 ">
        <ReduxProvider>
          <div className="flex justify-between items-center w-full mb-10 ">
            <Search />
          </div>
          <div className="flex sm:flex-row flex-col w-full gap-8">
            <Filters />
            <Suspense fallback={<div>Loading...</div>}>
              <CountryTable countriesResults={countriesResults} />
            </Suspense>
          </div>
        </ReduxProvider>
      </div>
    </div>
  )
}
