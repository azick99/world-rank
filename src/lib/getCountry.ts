// Assuming this is your existing code
import { SingleCountryResults } from './apiSchima'
import { DATA_URL } from './getCountries'

export async function getCountry(name: string) {
  try {
    const res = await fetch(`${DATA_URL}/${name}`)
    const data = await res.json()
    const parsedData = SingleCountryResults.parse(data)

    return parsedData.country
  } catch (error) {
    console.error(error)
    return null // Handle the error appropriately in your application
  }
}

