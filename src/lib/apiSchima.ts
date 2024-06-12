import { object, string, z, array, optional, number, record } from 'zod'

const countryContent = {
  // search: string(),
  name: object({ common: string(), official: string() }),
  cca3: string(),
  flags: object({
    png: string(),
    svg: string(),
    alt: optional(string()),
  }),
  area: number(),
  population: number(),
}

export const CountriesResults = object({
  countries: array(
    object({
      ...countryContent,
      region: string(),
    })
  ),
})

export const SingleCountryResults = object({
  country: array(
    object({
      ...countryContent,
      capital: array(string()),
      subregion: string(),
      languages: record(string()),
      currencies: record(
        object({
          name: string(),
        })
      ),
      continents: array(string()),
      borders: optional(array(string())),
    })
  ),
})

export type Countries = z.infer<typeof CountriesResults>

