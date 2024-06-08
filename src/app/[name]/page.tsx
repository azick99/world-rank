import { getCountry } from '@/lib/getCountry'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
type Params = { params: { name: string } }

export const generateMetadata = async ({
  params: { name },
}: Params): Promise<Metadata> => {
  const country = await getCountry(name)

  if (!country)
    return {
      title: `Country not found | World ranking`,
      description: 'Single Country Page',
    }
  return {
    title: `${country[0].name.common} | World ranking`,
    description: 'Single Country Page',
  }
}

export default async function Country({ params }: Params) {
  const country = await getCountry(params.name)
  if (!country) return <div>Some thing went wrong!</div>
  const { flags, population, area, name, capital, subregion, languages } =
    country[0]

  let laguagesValue: string = ''

  for (const key in languages) {
    laguagesValue = languages[key]
  }

  return (
    <div className="w-full sm:w-[60dvw] h-auto mx-auto  bg-dark-clr -translate-y-14 sm:rounded-lg rounded-none border-light-black-clr border solid shadow-sm pb-8">
      <div className="text-light-gray-clr flex flex-col justify-center items-center ">
        <Image
          src={flags.svg}
          alt={flags.alt || 'country flag'}
          width={240}
          height={240}
          loading="eager"
          className="rounded-md object-cover -translate-y-12"
        />
        <div className="-translate-y-6 text-center">
          <h1>{name.common}</h1>
          <span>{name.official}</span>
        </div>
        <div className="flex gap-10">
          <div className="px-5 py-2 bg-gray-clr/20 rounded-lg divide-x divide-solid divide-dark-clr flex items-center">
            <span className="py-1 pr-5 text-sm">Population</span>
            <span className="py-1 pl-5">{population}</span>
          </div>
          <div className="px-5 py-2 bg-gray-clr/20 rounded-lg divide-x divide-solid divide-dark-clr flex items-center">
            <span className="py-1 pr-5 text-sm">Area (km²)</span>
            <span className="py-1 pl-5">{area}</span>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col divide-y divide-solid divide-gray-clr/40  text-sm">
        <div className="flex justify-between py-6 px-5 border-t border-solid border-gray-clr/40">
          <span>Capital</span>
          <span className="text-light-gray-clr">{capital}</span>
        </div>
        <div className="flex justify-between py-6 px-5">
          <span>Subregion</span>
          <span className="text-light-gray-clr">{subregion}</span>
        </div>
        <div className="flex justify-between py-6 px-5">
          <span>Language</span>
          <span className="text-light-gray-clr">{laguagesValue}</span>
        </div>
      </div>
    </div>
  )
}
