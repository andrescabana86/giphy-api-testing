import { TResponse } from '@api/types/giphy.types'
import { trendingSerializer } from './trending.serializer'

export const getTrending = () =>
  fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=10`)
    .then((response) => response.json())
    .then((response: TResponse) => trendingSerializer(response))
