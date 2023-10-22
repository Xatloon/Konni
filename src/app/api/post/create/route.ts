export async function GET() {
  return new Response(JSON.stringify({ konni: 'Work in Progress' }), {
    headers: { 'content-type': 'application/json' },
  })
}
