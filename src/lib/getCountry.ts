import { SingleCountryResults } from './apiSchima'

export async function getCountry(name: string) {
  const res = await fetch(`http://localhost:3000/api/countries/${name}`)

  const data = await res.json()

  const parsedData = SingleCountryResults.parse(data) 

  return parsedData.country
}
