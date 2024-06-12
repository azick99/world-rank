'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Countries } from '@/lib/apiSchima'
import { Button } from './ui/button'
import { useState } from 'react'

export default function CountryTable({
  countriesResults,
}: {
  countriesResults: Countries
}) {
  const [addMore, setAddMore] = useState(10)
  const countries = countriesResults.countries.slice(0, addMore)

  return (
    <div className="basis-3/4">
      <div className="w-full grid grid-cols-9 grid-rows-2 gap-8 ">
        <div className="text-xs lg:col-span-1 col-span-2">Flag</div>
        <div className="col-span-2  text-xs">Name</div>
        <div className="col-span-2 text-xs">Population</div>
        <div className="col-span-2 text-xs">Area (km²)</div>
        <div className="col-span-2 text-xs lg:block hidden">Region</div>
        <div className="rounded  h-[1px] bg-gray-clr/40 col-span-9" />
      </div>
      <div
        className={`w-full grid grid-rows-${countries.length} gap-y-8 mt-3 `}
      >
        {countries.map((country) => {
          const { flags, population, area, region, name, cca3 } = country
          return (
            <Link
              key={cca3}
              href={`/${name.common}`}
              className="grid grid-cols-9 items-center gap-8 "
            >
              <Image
                src={flags.svg}
                alt={flags.alt || 'country flag'}
                width={80}
                height={90}
                loading="eager"
                className="rounded object-cover lg:col-span-1 col-span-2"
              />
              <div className="col-span-2 text-light-gray-clr text-base   ">
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
          onClick={() => setAddMore(addMore + 10)}
        >
          Add more
        </Button>
      </div>
    </div>
  )
}
