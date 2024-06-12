// Assuming this is your existing code
import { SingleCountryResults } from './apiSchima'

const DATA_URL = process.env.SOURCE_URL as string

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

