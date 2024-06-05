import Image from 'next/image'
import { getCountries } from '@/lib/getCountries'
import InputField from './search-components/InputField'
export default async function Search() {
  const countries = await getCountries()

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="flex justify-between items-center w-full   mb-10  ">
      <span className="font-semibold ">Found 234 countries</span>
      <div className="relative">
        <Image
          src="./Search.svg"
          alt="search"
          width={20}
          height={20}
          className="absolute top-2.5 left-2"
<<<<<<< HEAD
=======
        />
        <Input
          type="search"
          placeholder="Search by Name, Region, Subregion"
          className="border border-transparent bg-gray-clr/30 placeholder:text-gray-clr w-80 pl-10 focus:border focus:border-light-gray-clr focus:border-solid "
>>>>>>> parent of d0fa0d6 (upldates and working with api)
        />
        <InputField />
      </div>
    </div>
  )
}
