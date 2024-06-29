export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const DATA_SOURCE_URL = 'https://restcountries.com/v3.1/alpha'

  const code = params.code
  try {
    const res = await fetch(`${DATA_SOURCE_URL}/${code}`)
    const country = await res.json()
    return Response.json({ country })
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
