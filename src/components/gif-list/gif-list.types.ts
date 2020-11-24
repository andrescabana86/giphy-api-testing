import { TResult, TResultTrending } from '@api/types/giphy.types'

export type TGifListProps = {
  list: (TResult | TResultTrending)[]
  loading: boolean
}
