import CountryRawValue from '@/components/single-country/CountryRawValue'
import { getCountries } from '@/lib/getCountries'
import { getCountry } from '@/lib/getCountry'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
  const countries = await getCountries()

  if (!country) return <div>Some thing went wrong!</div>

  const {
    flags,
    population,
    area,
    name,
    capital,
    subregion,
    languages,
    currencies,
    continents,
    borders,
  } = country[0]

  const currency = Object.values(currencies)[0].name

  const neighbouringCountries = countries.countries.filter((country) => {
    return borders?.includes(country.cca3)
  })

  return (
    <div className="w-full sm:w-[60dvw] h-auto mx-auto  bg-dark-clr -translate-y-14 sm:rounded-lg rounded-none border-light-black-clr border solid shadow-sm pb-8">
      <div className="text-light-gray-clr flex flex-col justify-center items-center ">
        <Link href="/" className="flex flex-col justify-center items-center">
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
        </Link>
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
      <div className="mt-12 flex flex-col divide-y divide-solid divide-gray-clr/40 text-sm">
        <CountryRawValue title="Capital" content={capital?.join(', ')} />
        <CountryRawValue title="Subregion" content={subregion} />
        <CountryRawValue
          title="Language"
          content={Object.values(languages).join(', ')}
        />
        <CountryRawValue title="Currencies" content={currency} />
        <CountryRawValue title="Continents" content={continents.join(', ')} />
        {/* Countries with flags */}
        <div className="flex flex-col py-6 px-5 gap-5">
          <span>Neighbouring Countries</span>
          <div className="flex gap-5 flex-wrap">
            {neighbouringCountries.length === 0 ? (
              <span className='text-light-gray-clr text-lg'>Located in ocean, no neighoburing countries</span>
            ) : (
              neighbouringCountries.map((country) => (
                <Link
                  href={`/${country.name.common}`}
                  className="flex flex-col gap-3"
                  key={country.cca3}
                >
                  <Image
                    src={country.flags.svg}
                    alt={country.flags.alt || 'country flag'}
                    width={100}
                    height={100}
                    loading="eager"
                    className="rounded object-cover"
                  />
                  <span className="text-light-gray-clr">
                    {country.name.common}
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
