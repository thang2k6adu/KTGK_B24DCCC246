import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PostCard } from "@/components/PostCard"
import { DeleteConfirmDialog } from "@/components/DeleteConfirmDialog"
import { Plus, Search } from "../components/icons/lucide-react"
import { Post } from "../types"

interface PostListProps {
  posts: Post[]
  onDelete: (postId: string) => void
}

export function PostList({ posts, onDelete }: PostListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [postToDelete, setPostToDelete] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [posts, searchQuery])

  const handleDeleteClick = (postId: string) => {
    setPostToDelete(postId)
    setDeleteDialogOpen(true)
  }

  const handleConfirmDelete = () => {
    if (postToDelete) {
      onDelete(postToDelete)
      setDeleteDialogOpen(false)
      setPostToDelete(null)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Bài Viết</h1>
            <p className="text-muted-foreground">
              Tổng số: <span className="font-semibold text-foreground">{filteredPosts.length}</span> bài viết
            </p>
          </div>
          <Link to="/posts/create">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Viết bài mới
            </Button>
          </Link>
        </div>

        {/* Search Filter */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm theo tiêu đề..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} onDelete={() => handleDeleteClick(post.id)} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">Không tìm thấy bài viết nào</p>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleConfirmDelete}
        title="Xóa bài viết"
        description="Bạn có chắc muốn xóa bài viết này? Hành động này không thể hoàn tác."
      />
    </div>
  )
}
