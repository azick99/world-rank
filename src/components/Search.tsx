import Image from 'next/image'
import { getCountries } from '@/lib/getCountries'
import InputField from './search-components/InputField'
export default async function Search() {
  const countries = await getCountries()

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
