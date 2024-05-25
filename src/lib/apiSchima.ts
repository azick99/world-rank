import { object, string, z, array, optional, number, record } from 'zod'

const countryContent = {
  name: object({ common: string(), official: string() }),
  flags: object({
    png: string(),
    svg: string(),
    alt: optional(string()),
  }),
  area: number(),
  population: number(),
}

export const CoutriesResults = object({
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

export type Countries = z.infer<typeof CoutriesResults>
