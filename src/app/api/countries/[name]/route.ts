import { NextRequest, NextResponse } from 'next/server'

const DATA_SOURCE_URL = 'https://restcountries.com/v3.1/name'
export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const name = params.name

  try {
    const res = await fetch(`${DATA_SOURCE_URL}/${name}`)
    if (!res.ok) {
      throw new Error('Failed to fetch country data')
    }

    const country = await res.json()
    return NextResponse.json({ country })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
