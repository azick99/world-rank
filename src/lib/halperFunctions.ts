import { Country } from './apiSchima'
type SearchCountries = {
  name: string
  region: string
  subregion: string
}
export const searchCountries = (
  countries: SearchCountries,
  searchedBy: keyof SearchCountries,
  search: string
) => countries[searchedBy].toLowerCase().includes(search.toLowerCase())
