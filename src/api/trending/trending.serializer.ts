import { TResponse, TResultTrending } from '@api/types/giphy.types'

export const trendingSerializer = (response: TResponse): TResultTrending[] => {
  return response.data.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.images.original.url,
    user: {
      avatar: item.user?.avatar_url || '',
      name: item.user?.display_name || '',
      verified: item.user?.is_verified || false,
    },
  }))
}
