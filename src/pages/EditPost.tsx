import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { PostForm } from "../components/PostForm"
import { PostFormData, Post } from "../types"
import { SAMPLE_POSTS } from "../data/samplePosts"

export const EditPost = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  // Load post data on component mount
  useEffect(() => {
    if (id) {
      const foundPost = SAMPLE_POSTS.find((p: Post) => p.id === id)
      
      if (foundPost) {
        setPost(foundPost)
      } else {
        // Post not found, redirect to home
        navigate("/")
      }
      setLoading(false)
    }
  }, [id, navigate])

  const handleSubmit = (formData: PostFormData) => {
    // Since we're using static data, just show success message
    alert("Cập nhật thành công!")
    navigate(`/posts/${id}`)
  }

  const handleCancel = () => {
    if (id) {
      navigate(`/posts/${id}`)
    } else {
      navigate("/")
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Không tìm thấy bài viết</h1>
          <p className="text-slate-600 mb-6">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    )
  }

  const initialData: PostFormData = {
    title: post.title,
    author: post.author,
    thumbnail: post.thumbnail,
    content: post.content,
    category: post.category,
  }

  return (
    <PostForm
      initialData={initialData}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      submitText="Cập nhật"
      title="Chỉnh sửa bài viết"
    />
  )
}