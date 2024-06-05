import Image from 'next/image'
import { getCountries } from '@/lib/getCountries'
import InputField from './search-components/InputField'
export default async function Search() {
  const countries = await getCountries()

  return (
<<<<<<< HEAD
    <div className="flex justify-between items-center w-full   mb-10  ">
      <span className="font-semibold ">Found {countries.length} countries</span>
=======
    <div className="flex justify-between items-center w-full mb-10  ">
      <h1 className="">Found 234 countries</h1>
>>>>>>> parent of d0fa0d6 (upldates and working with api)
      <div className="relative">
        <Image
          src="./Search.svg"
          alt="search"
          width={20}
          height={20}
          className="absolute top-2.5 left-2"
        />
        <InputField />
      </div>
    </div>
  )
}
