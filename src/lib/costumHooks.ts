import { useSearchParams } from 'next/navigation'
import { Countries, Country } from './apiSchima'
import { statusArray } from '@/components/filter-components/Status'

export const useCountries = (
  countriesResults?: Countries,
  addMore?: number
) => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')?.toLowerCase() || ''
  const sortedBy = searchParams.get('sortedBy')

  // Sort the list of countries based on the sortedBy parameter
  let countries: Country | undefined = countriesResults?.countries
    ?.sort((a, b) => {
      switch (sortedBy) {
        case 'name':
          return a.name.common.localeCompare(b.name.common)
        case 'area':
          return b.area - a.area
        default:
          return b.population - a.population
      }
    })
    .slice(0, addMore)

  // Filter the list of countries based on the search query
  if (search && countries) {
    countries = countries.filter((country) => {
      const name = country.name.common.toLowerCase()
      const region = country.region.toLowerCase()
      const subregion = country.subregion?.toLowerCase() || ''

      return (
        !search ||
        name.includes(search) ||
        region.includes(search) ||
        subregion.includes(search)
      )
    })
  }

  return countries
}
