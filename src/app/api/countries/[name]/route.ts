export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const DATA_SOURCE_URL = 'https://restcountries.com/v3.1/name'

  const name = params.name
  try {
    const res = await fetch(`${DATA_SOURCE_URL}/${name}`)
    const country = await res.json()
    return Response.json({ country })
    
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
