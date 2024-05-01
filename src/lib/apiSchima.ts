import { z } from 'zod'

export const CoutriesResults = z.object({
  countries: z.array(z.object({ name: z.object({ common: z.string() }) })),
})

export const SingleCountryResults = z.object({
  country: z.array(z.object({ name: z.object({ common: z.string() }) })),
})

export type Countries = z.infer<typeof CoutriesResults>
