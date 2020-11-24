import { TResult, TResultTrending } from '@api/types/giphy.types'

export type TGifListContainerProps<T> = {
  children(container: T): JSX.Element
}

export type TGifListContainerState = {
  favorites: (TResult | TResultTrending)[]
  list: (TResult | TResultTrending)[]
  loading: boolean
}
