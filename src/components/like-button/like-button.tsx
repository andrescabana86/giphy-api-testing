import React from 'react'
import { TLikeButtonProps } from '@components/like-button/like-button.type'
import './like-button.sass'

export const LikeButton = React.memo((props: TLikeButtonProps) => {
  const { active, text, onClick = undefined } = props
  return (
    <button
      className={`like-button${active ? ' like-button--active' : ''}`}
      data-testid="like-button"
      onClick={onClick}
    >
      {text?.length ? text : active ? 'Liked!' : 'Like'}
      <img
        alt="Like"
        className="like-button__icon"
        src={props.active ? 'static/icons/heart-red.svg' : 'static/icons/heart-empty-red.svg'}
      />
    </button>
  )
})
