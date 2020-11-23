import { TResponse } from '@api/types/giphy.type'
import { searchSerializer } from './search.serializer'

export const searchGiphy = (query: string) =>
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&limit=20&q=${query}`)
    .then((response) => response.json())
    .then((response: TResponse) => searchSerializer(response))
