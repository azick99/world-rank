import { getCountry } from '@/lib/getCountry'
import { Metadata } from 'next'
import React from 'react'
type Params = { params: { name: string } }

export const generateMetadata = async ({
  params: { name },
}: Params): Promise<Metadata> => {
  const country = await getCountry(name)

  return {
    title: `${country[0].name.common} | World ranking`,
    description: 'Single Country Page',
  }
}

export default async function Country({ params }: Params) {
  const country = await getCountry(params.name)

  return (
    <div className="w-full sm:w-[60%] h-auto mx-auto  bg-dark-clr -translate-y-14 sm:rounded-lg rounded-none border-light-black-clr border solid shadow-sm p-8 ">
      {country.map((c) => (
        <div key={c.name.common} className="text-white">
          
          <h1>{c.name.common}</h1>
        </div>
      ))}
    </div>
  )
}
