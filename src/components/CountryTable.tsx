'use client' // This line enables the 'use client' directive

import Image from 'next/image'
import Link from 'next/link'
import { Countries } from '@/lib/apiSchima'
import { Button } from './ui/button'
import { useState } from 'react'
import { useCountries } from '@/lib/costumHooks'

export default function CountryTable({
  countriesResults,
}: {
  countriesResults: Countries | undefined
}) {
  const [addMore, setAddMore] = useState(10)
  // used Costum hooks to handle main functionality
  const countries = useCountries(countriesResults)
  
  if (!countries) {
    return <div>No countries were Found</div>
  }
  return (
    <div className="basis-3/4">
      <div className="w-full grid grid-cols-9 grid-rows-2 gap-6 ">
        <div className="text-xs lg:col-span-1 col-span-2">Flag</div>
        <div className="col-span-2  text-xs sm:pl-3 pl-0">Name</div>
        <div className="col-span-2 text-xs">Population</div>
        <div className="col-span-2 text-xs">Area (km²)</div>
        <div className="col-span-2 text-xs lg:block hidden">Region</div>
        <div className="rounded  h-[1px] bg-gray-clr/40 col-span-9" />
      </div>
      <div
        className={`w-full grid grid-rows-${countries?.length} gap-y-8 mt-3 `}
      >
        {countries?.length === 0
          ? 'No countries were Found'
          : countries?.slice(0, addMore).map((country) => {
              const { flags, population, area, region, name, cca3 } = country
              return (
                <Link
                  key={cca3}
                  href={`/${cca3}`}
                  className="grid grid-cols-9 items-center sm:gap-5 gap-8 "
                >
                  <div className="relative lg:col-span-1 col-span-2 w-16 h-12 ">
                    <Image
                      src={flags.svg}
                      alt={flags.alt || 'country flag'}
                      fill
                      loading="eager"
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="col-span-2 text-light-gray-clr text-base sm:pl-4 p-0">
                    {name.common}
                  </div>
                  <div className="col-span-2 text-light-gray-clr text-base ">
                    {population}
                  </div>
                  <div className="col-span-2 text-light-gray-clr text-base ">
                    {area}
                  </div>
                  <div className="col-span-2 text-light-gray-clr text-base lg:block hidden">
                    {region}
                  </div>
                </Link>
              )
            })}
      </div>
      <div className="w-full p-4 flex justify-center">
        <Button
          className="mx-auto px-20 bg-gray-clr/10"
          onClick={() => setAddMore((prev) => prev + 10)}
        >
          Add more
        </Button>
      </div>
    </div>
  )
}
