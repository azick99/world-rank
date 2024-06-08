import Image from 'next/image'
import { Input } from './ui/input'
import { Countries } from '@/lib/apiSchima'
import InputField from './search-components/InputField'
const Search = ({ countriesResults }: { countriesResults: Countries }) => {
  const countries = countriesResults.countries

  return (
    <div className="flex justify-between items-center w-full   mb-10  ">
      <span className="font-semibold ">Found {countries.length} countries</span>
      <div className="relative">
        <Image
          src="./Search.svg"
          alt="search"
          width={20}
          height={20}
          className="absolute top-2.5 left-2"
          loading="eager"
        />
        <InputField />
      </div>
    </div>
  )
}

export default Search
