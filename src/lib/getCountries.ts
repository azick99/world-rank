import { CoutriesResults } from './apiSchima'

export async function getCountries() {
  const res = await fetch('http://localhost:3000/api/countries')
  const data = await res.json()
  const parsedData = CoutriesResults.parse(data)
  if (!res.ok) throw new Error('failed to fetch')
  return parsedData.countries
}
