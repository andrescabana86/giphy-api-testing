import React, { useCallback, useContext } from 'react'
import { LikeButton } from '@components/like-button/like-button'
import { FavoritesGifsContext } from '@containers/gif-list/gif-list'
import { TGifPreviewProps } from './gif-preview.types'
import './gif-preview.sass'

export const GifPreview = React.memo((props: TGifPreviewProps) => {
  const { id, url, selected } = props
  const FavoritesContext = useContext(FavoritesGifsContext)
  const { saveFavorite, removeFavorite } = FavoritesContext

  const onClick = useCallback(() => {
    if (selected) {
      removeFavorite && removeFavorite(id)
    } else {
      saveFavorite && saveFavorite(id)
    }
  }, [selected])

  return (
    <section className="gif-preview" data-testid="gif-preview">
      <picture className="gif-preview__image">
        <img
          alt="Like"
          className="gif-preview__image-src"
          data-testid="gif-preview__image-src"
          src={url}
        />
      </picture>

      <LikeButton active={selected} onClick={onClick} />
    </section>
  )
})
