// Assuming this is your existing code
import { Country, SingleCountryResults } from './apiSchima'

const DATA_URL = process.env.SOURCE_URL as string

export async function getCountry(code: string) {
  try {
    const res = await fetch(`${DATA_URL}/${code}`)
    const data = await res.json()
    const parsedData = SingleCountryResults.parse(data)

    return parsedData.country
  } catch (error) {
    console.error(error)
    // Handle the error appropriately in your application
  }
}
