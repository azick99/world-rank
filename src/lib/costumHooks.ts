import { useSearchParams } from 'next/navigation'
import { Countries, Country } from './apiSchima'
import { useEffect } from 'react'
import { setFoundCountries } from '@/app/redux/features/countrySlice'
import { useAppDispatch, useAppSelector } from '@/app/redux/helper/reduxHooks'
export const useCountries = (countriesResults?: Countries) => {
  
  const searchParams = useSearchParams()
  const search = searchParams.get('search')?.toLowerCase() || ''
  const sortedBy = searchParams.get('sortedBy')
  const statusArray = useAppSelector((state) => state.countries.statusArray)
  const regions = useAppSelector((state) => state.countries.regions)
  
  const dispatch = useAppDispatch()

  // Sort the list of countries based on the sortedBy parameter
  let countries: Country | undefined = countriesResults?.countries?.sort(
    (a, b) => {
      switch (sortedBy) {
        case 'name':
          return a.name.common.localeCompare(b.name.common)
        case 'area':
          return b.area - a.area
        default:
          return b.population - a.population
      }
    }
  )

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
    dispatch(setFoundCountries(filteredByRegionCountries?.length || 0))
  }, [filteredByRegionCountries, dispatch])

  return countries
}
