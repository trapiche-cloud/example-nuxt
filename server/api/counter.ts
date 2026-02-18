let counter = 0

export default defineEventHandler(async (event) => {
  if (event.method === 'POST') {
    const body = await readBody(event)
    if (body?.action === 'increment') counter++
    else if (body?.action === 'decrement') counter--
  }
  return { count: counter }
})
