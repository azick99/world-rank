const DATA_SOURCE_URL = 'https://restcountries.com/v3.1/all'

export async function GET() {
  const countries = await fetch(DATA_SOURCE_URL)
    .then((res) => res.json())
    .catch((err) => console.log(err))

  return Response.json({ countries })
}
