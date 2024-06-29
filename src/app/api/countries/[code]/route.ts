const DATA_SOURCE_URL = 'https://restcountries.com/v3.1/alpha'

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const code = params.code
  const country = await fetch(`${DATA_SOURCE_URL}/${code}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))

  return Response.json({ country })
}
