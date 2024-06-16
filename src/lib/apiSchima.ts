import {
  object,
  string,
  z,
  array,
  optional,
  number,
  record,
  boolean,
} from 'zod'

const countryContent = {
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
      subregion: optional(string()),
      independent: optional(boolean()),
      unMember: boolean(),
    })
  ),
})

export const SingleCountryResults = object({
  country: array(
    object({
      ...countryContent,
      capital: array(string()),
      languages: record(string()),
      subregion: string(),
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
export type Country = z.infer<typeof CountriesResults>['countries']
