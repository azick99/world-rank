// Assuming this is your existing code
import { SingleCountryResults } from './apiSchima'

export async function getCountry(name: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/countries/${name}`)
    const data = await res.json()
    const parsedData = SingleCountryResults.parse(data)

    return parsedData.country
  } catch (error) {
    console.error(error)
    return null // Handle the error appropriately in your application
  }
}
