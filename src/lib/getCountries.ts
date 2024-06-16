import { Countries, CountriesResults, Country } from './apiSchima'

const DATA_URL = process.env.SOURCE_URL as string
export async function getCountries() {
  const res = await fetch(DATA_URL)
  const data = await res.json()
  const parsedData = CountriesResults.parse(data)

  return parsedData
}
