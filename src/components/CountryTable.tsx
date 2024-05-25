import { Suspense } from 'react'
import Image from 'next/image'
import { getCountries } from '@/lib/getCountries'
import Link from 'next/link'

export default async function CountryTable() {
  const country = await getCountries()
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
      <div className={`w-full grid grid-rows-${country.length} gap-y-8 mt-3 `}>
        <Suspense fallback={<div>Loading...</div>}>
          {country.map((country) => {
            const { flags, population, area, region, name } = country
            return (
              <Link
                key={name.common}
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
        </Suspense>
      </div>
    </div>
  )
}
