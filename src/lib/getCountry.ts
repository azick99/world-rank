// Assuming this is your existing code
import { Country, SingleCountryResults } from './apiSchima'

const DATA_URL = process.env.SOURCE_URL as string

export async function getCountry(code: string) {
  const data = await fetch(`${DATA_URL}/${code}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
  const parsedData = SingleCountryResults.parse(data)

  return parsedData.country
}
