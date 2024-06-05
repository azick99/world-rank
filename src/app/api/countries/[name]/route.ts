import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  const name = await params.name
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  const country = await res.json()
<<<<<<< HEAD

=======
>>>>>>> parent of d0fa0d6 (upldates and working with api)
  return NextResponse.json({ country })
}
