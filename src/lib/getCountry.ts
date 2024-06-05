import { SingleCountryResults } from "./apiSchima"

export async function getCountry(name: string) {
    const res = await fetch(`http://localhost:3000/api/countries/${name}`)
    const data = await res.json()
    const parsedData = SingleCountryResults.parse(data)
    if (!res.ok) throw new Error('failed to fetch')
    return parsedData.country
  }
  