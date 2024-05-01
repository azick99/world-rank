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
    <div>
      <h1>
        {country.map((c) => (
          <div key={c.name.common} className="text-white">
            {c.name.common}
          </div>
        ))}
      </h1>
    </div>
  )
}
