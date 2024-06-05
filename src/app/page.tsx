import CountryTable from '@/components/CountryTable'
import Filters from '@/components/Filters'
import Search from '@/components/Search'
import { getCountries } from '@/lib/getCountries'
<<<<<<< HEAD
import ReduxProvider from './redux/provider'
=======
import Link from 'next/link'
>>>>>>> parent of d0fa0d6 (upldates and working with api)

export default async function Home() {

  return (
    <div className="px-0 sm:px-7">
<<<<<<< HEAD
      <div className="w-full h-auto bg-dark-clr -translate-y-14 sm:rounded-lg rounded-none border-light-black-clr border solid shadow-sm p-8 ">
        <ReduxProvider>
=======
      <div className="w-full h-auto bg-dark-clr -translate-y-14 rounded-lg border-light-black-clr border solid shadow-sm px-6 py-8">
        <RankingProvider>
>>>>>>> parent of d0fa0d6 (upldates and working with api)
          <Search />
          <div className="flex w-full gap-5">
            <Filters />
            <CountryTable />
          </div>
        </ReduxProvider>
      </div>
    </div>
  )
}
