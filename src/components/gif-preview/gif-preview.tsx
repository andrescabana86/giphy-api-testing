import React from 'react'
import { LikeButton } from '@components/like-button/like-button'
import { TGifPreviewProps } from './gif-preview.types'
import './gif-preview.sass'

export const GifPreview = React.memo((props: TGifPreviewProps) => {
  const { url, selected } = props
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

      <LikeButton active={selected} />
    </section>
  )
})
