import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DeleteConfirmDialog } from "@/components/DeleteConfirmDialog"
import { ArrowLeft, Edit, Trash2, Calendar, User, Tag } from "lucide-react"
import { formatDate } from "../lib/utils"
import { Post } from "../types"
import { SAMPLE_POSTS } from "../data/samplePosts"

export const PostDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  // Load post data on component mount
  useEffect(() => {
    if (id) {
      const foundPost = SAMPLE_POSTS.find((p: Post) => p.id === id)
      
      if (foundPost) {
        setPost(foundPost)
      }
      setLoading(false)
    }
  }, [id])

  const handleDelete = () => {
    if (post) {
      // Since we're using static data, just show a message and navigate back
      alert("Xóa bài viết thành công!")
      navigate("/")
    }
  }

  const handleEdit = () => {
    if (post) {
      navigate(`/posts/edit/${post.id}`)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Đang tải...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Không tìm thấy bài viết</h1>
            <p className="text-slate-600 mb-6">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Link to="/">
              <Button className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Quay lại trang chủ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Quay lại
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Card className="overflow-hidden shadow-lg">
          {/* Thumbnail Image */}
          {post.thumbnail && (
            <div className="relative w-full h-64 md:h-80 bg-gray-100 overflow-hidden">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <CardHeader className="pb-4">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-medium">Tác giả:</span>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Ngày đăng:</span>
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span className="font-medium">Thể loại:</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  {post.category}
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            {/* Content */}
            <div className="prose prose-slate max-w-none">
              <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-200">
              <Button onClick={handleEdit} className="gap-2">
                <Edit className="w-4 h-4" />
                Chỉnh sửa
              </Button>
              <Button 
                variant="destructive" 
                onClick={() => setDeleteDialogOpen(true)}
                className="gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Xóa bài viết
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleDelete}
        title="Xóa bài viết"
        description="Bạn có chắc muốn xóa bài viết này? Hành động này không thể hoàn tác."
      />
    </div>
  )
}