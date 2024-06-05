import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  const name = params.name
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const country = await res.json()

  return NextResponse.json({ country })
}
