import { Countries } from '@/lib/apiSchima'
import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = 'https://restcountries.com/v3.1/all'
export async function GET() {
  const res = await fetch(DATA_SOURCE_URL)
  const countries: Countries = await res.json()

  return NextResponse.json({ countries })
}
