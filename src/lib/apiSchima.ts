import { z } from 'zod'

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export const CoutriesResults = z.object({
  countries: z.array(z.object({ name: z.object({ common: z.string() }) })),
>>>>>>> parent of d0fa0d6 (upldates and working with api)
=======
export const CoutriesResults = z.object({
  countries: z.array(z.object({ name: z.object({ common: z.string() }) })),
>>>>>>> parent of d0fa0d6 (upldates and working with api)
})

export const SingleCountryResults = z.object({
  country: z.array(z.object({ name: z.object({ common: z.string() }) })),
})
export type SingleCountry = z.infer<typeof SingleCountryResults>
export type Countries = z.infer<typeof CoutriesResults>
