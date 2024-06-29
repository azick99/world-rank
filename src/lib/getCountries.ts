import { Countries, CountriesResults } from './apiSchima'

const DATA_URL = process.env.SOURCE_URL as string

export async function getCountries() {
  const data = await fetch(DATA_URL)
    .then((res) => res.json())
    .catch((err) => console.log(err))

  const parsedData = CountriesResults.parse(data)
  return parsedData
}
