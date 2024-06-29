import { Countries, CountriesResults } from './apiSchima'

const DATA_URL = process.env.SOURCE_URL as string

export async function getCountries(): Promise<Countries> {
  const res = await fetch(DATA_URL)
  const data:any = await res.json()
  const parsedData = CountriesResults.parse(data)

  return parsedData
}
