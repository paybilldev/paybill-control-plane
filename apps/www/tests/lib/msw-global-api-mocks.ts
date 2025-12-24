import { HttpResponse, http } from 'msw'

export const GlobalAPIMocks = [
  http.get(`${process.env.NEXT_PUBLIC_API_URL}/msw/test`, () => {
    return HttpResponse.json({ message: 'Hello from MSW!' })
  }),
]
