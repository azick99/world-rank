'use client' // This line enables the 'use client' directive

import Image from 'next/image'
import Link from 'next/link'
import { Countries } from '@/lib/apiSchima'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
import { useCountries } from '@/lib/costumHooks'
import { useAppDispatch, useAppSelector } from '@/app/redux/helper/reduxHooks'
import { setFoundCountries } from '@/app/redux/features/countrySlice'

export default function CountryTable({
  countriesResults,
}: {
  countriesResults: Countries
}) {
  const [addMore, setAddMore] = useState(10)
  const statusArray = useAppSelector((state) => state.countries.statusArray)
  const regions = useAppSelector((state) => state.countries.regions)
  // used Costum hooks to simplify the task
  const countries = useCountries(countriesResults)
  const dispatch = useAppDispatch()
  // indpendent or unMember filter
  // Filter countries based on statusArray
  const filteredByStatusCountries = countries?.filter((country) => {
    // Combine checks for independent and unMember using logical OR
    return (
      statusArray.find((status) => status.checked === country.independent) ||
      statusArray.find((status) => status.checked === country.unMember)
    )
  })

  // Filter countries based on regions
  const filteredByRegionCountries = filteredByStatusCountries?.filter(
    (country) => {
      return regions.some((region) => {
        if (region === country.region) {
          return true
        }

        return false
      })
    }
  )

  useEffect(() => {
    dispatch(setFoundCountries(filteredByRegionCountries?.length))
  }, [filteredByRegionCountries, dispatch])

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
        className={`w-full grid grid-rows-${filteredByRegionCountries?.length} gap-y-8 mt-3 `}
      >
        {filteredByRegionCountries?.length === 0
          ? 'No countries were Found'
          : filteredByRegionCountries?.slice(0, addMore).map((country) => {
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
