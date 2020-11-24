import React, { useContext } from 'react'
import { GifPreview } from '@components/gif-preview/gif-preview'
import { FavoritesGifsContext } from '@containers/gif-list/gif-list'
import { TGifListProps } from './gif-list.types'
import './gif-list.sass'

export const GifList = React.memo((props: TGifListProps) => {
  const { list } = props
  const FavoritesContext = useContext(FavoritesGifsContext)
  const { favorites } = FavoritesContext
  return (
    <section className="gif-list" data-testid="gif-list">
      {list.map((gif) => (
        <GifPreview
          id={gif.id}
          key={gif.id}
          selected={!!favorites.find((favorite) => favorite.id === gif.id)}
          url={gif.url}
        />
      ))}
    </section>
  )
})
