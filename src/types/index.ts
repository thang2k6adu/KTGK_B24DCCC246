export interface Post {
  id: string
  title: string
  author: string
  date: string
  content: string
  thumbnail: string
  category: string
}

export interface PostFormData {
  title: string
  author: string
  thumbnail: string
  content: string
  category: string
}

export interface PostCardProps {
  post: Post
  onDelete: () => void
}
