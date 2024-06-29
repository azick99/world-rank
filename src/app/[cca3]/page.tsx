import CountryRawValue from '@/components/single-country/CountryRawValue'
import { getCountries } from '@/lib/getCountries'
import { getCountry } from '@/lib/getCountry'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

type Params = { params: { cca3: string } }

export const generateMetadata = async ({
  params: { cca3 },
}: Params): Promise<Metadata> => {
  const country = await getCountry(cca3)

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
  const country = await getCountry(params.cca3)
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

  const neighbouringCountries = countries?.countries.filter((country) => {
    return borders?.includes(country.cca3)
  })

  return (
    <div className="w-full sm:w-[60dvw] h-auto mx-auto  bg-dark-clr -translate-y-14 sm:rounded-lg rounded-none border-light-black-clr border solid shadow-sm pb-8">
      <div className="text-light-gray-clr flex flex-col justify-center items-center ">
        <Link href="/">
          <figure className="flex flex-col justify-center items-center">
            <div className="-translate-y-12 w-[264px] h-48 relative">
              <Image
                src={flags.svg}
                alt={flags.alt || 'country flag'}
                fill
                loading="eager"
                className="rounded-md object-cover"
              />
            </div>

            <figcaption className="-translate-y-6 text-center">
              <h1>{name.common}</h1>
              <span>{name.official}</span>
            </figcaption>
          </figure>
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
            {neighbouringCountries?.length === 0 ? (
              <span className="text-light-gray-clr text-lg">
                Located in ocean, no neighoburing countries
              </span>
            ) : (
              neighbouringCountries?.map((country) => (
                <Link href={`/${country.cca3}`} key={country.cca3}>
                  <figure className="flex flex-col gap-2">
                    <div className="w-24 h-[70px]  relative">
                      <Image
                        src={country.flags.svg}
                        alt={country.flags.alt || 'country flag'}
                        fill
                        loading="eager"
                        className="rounded object-cover"
                      />
                    </div>
                    <figcaption className="text-light-gray-clr">
                      {country.name.common}
                    </figcaption>
                  </figure>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
