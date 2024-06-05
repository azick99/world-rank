import Image from 'next/image'
import { Input } from './ui/input'
const Search = () => {
  return (
    <div className="flex justify-between items-center w-full   mb-10  ">
      <span className="font-semibold ">Found 234 countries</span>
      <div className="relative">
        <Image
          src="./Search.svg"
          alt="search"
          width={20}
          height={20}
          className="absolute top-2.5 left-2"
          loading="eager"
        />
        <Input
          type="search"
          placeholder="Search by Name, Region, Subregion"
          className="border border-transparent bg-gray-clr/30 placeholder:text-gray-clr w-80 pl-10 focus:border focus:border-light-gray-clr focus:border-solid "
        />
      </div>
    </div>
  )
}

export default Search
