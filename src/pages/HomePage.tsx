import { useState } from "react"
import { PostList } from "../components/PostList"
import { Post } from "../types"
import { SAMPLE_POSTS } from "../data/samplePosts"

export function HomePage() {
  const [posts, setPosts] = useState<Post[]>(SAMPLE_POSTS)

  const handleDelete = (postId: string) => {
    const updatedPosts = posts.filter((post) => post.id !== postId)
    setPosts(updatedPosts)
  }

  return <PostList posts={posts} onDelete={handleDelete} />
}
