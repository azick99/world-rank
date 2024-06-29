export async function GET() {
  const DATA_SOURCE_URL = 'https://restcountries.com/v3.1/all'
  try {
    const res = await fetch(DATA_SOURCE_URL, {next:{revalidate:10000}})
    const countries = await res.json()

    return Response.json({ countries, })
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
