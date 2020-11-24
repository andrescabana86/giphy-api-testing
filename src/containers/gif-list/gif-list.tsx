import React, { createContext, PureComponent } from 'react'
import { getTrending } from '@api/trending/trending'
import { searchGiphy } from '@api/search/search'
import { TResult, TResultTrending } from '@api/types/giphy.types'
import { TGifListContainerProps, TGifListContainerState } from './gif-list.types'

export const FavoritesGifsContext = createContext<{
  favorites: (TResult | TResultTrending)[]
  saveFavorite?(id: string): void
  removeFavorite?(id: string): void
}>({ favorites: [] })

export class GifListContainer extends PureComponent<
  TGifListContainerProps<GifListContainer>,
  TGifListContainerState
> {
  state: TGifListContainerState = {
    favorites: [],
    list: [],
    loading: true,
  }

  componentDidMount() {
    this.getTrendingList()
  }

  onSearch = (query: string) => {
    this.setState({ loading: true })
    searchGiphy(query).then((results) => {
      this.setState({ loading: false, list: results })
    })
  }

  getTrendingList = () => {
    this.setState({ loading: true })
    getTrending().then((results) => {
      this.setState({ list: results, loading: false })
    })
  }

  onClear = () => {
    this.getTrendingList()
  }

  saveFavorite = (id: string) => {
    const { list, favorites } = this.state
    const favorite = list.find((item) => item.id === id)
    if (favorite) {
      this.setState({
        favorites: [...favorites, favorite],
      })
    }
  }

  removeFavorite = (id: string) => {
    const { favorites } = this.state
    const updatedList = favorites.filter((item) => item.id !== id)
    this.setState({
      favorites: [...updatedList],
    })
  }

  render() {
    const { favorites } = this.state

    return (
      <FavoritesGifsContext.Provider
        value={{ favorites, saveFavorite: this.saveFavorite, removeFavorite: this.removeFavorite }}
      >
        {this.props.children(this)}
      </FavoritesGifsContext.Provider>
    )
  }
}
