import { TResponse, TResult } from '@api/types/giphy.type'

export const trendingSerializer = (response: TResponse): TResult[] => {
  return response.data.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.images.original.url,
  }))
}
