export type TResult = {
  id: string
  title: string
  url: string
}

export type TResponse = {
  data: TGif[]
  meta: {
    msg: string
    response_id: string
    status: number
  }
  pagination: {
    count: number
    offset: number
    total_count: number
  }
}

export type TGif = {
  bitly_gif_url: string
  bitly_url: string
  content_url: string
  embed_url: string
  id: string
  images: { original: TOriginalImage }
  import_datetime: string
  is_sticker: number
  rating: string
  slug: string
  source: string
  source_post_url: string
  source_tld: string
  title: string
  trending_datetime: string
  type: string
  url: string
  user: TUser
  username: string
}

export type TOriginalImage = {
  frames: string
  hash: string
  height: string
  mp4: string
  mp4_size: string
  size: string
  url: string
  webp: string
  webp_size: string
  width: string
}

export type TUser = {
  avatar_url: string
  banner_image: string
  banner_url: string
  description: string
  display_name: string
  instagram_url: string
  is_verified: boolean
  profile_url: string
  username: string
  website_url: string
}
