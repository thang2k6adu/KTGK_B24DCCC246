import { useNavigate } from "react-router-dom"
import { PostForm } from "../components/PostForm"
import { PostFormData } from "../types"

export default function CreatePost() {
  const navigate = useNavigate()

  const handleSubmit = (formData: PostFormData) => {
    // Since we're using static data, just show success message
    alert("Đăng bài thành công!")
    navigate("/")
  }

  const handleCancel = () => navigate("/")

  return (
    <PostForm
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      submitText="Đăng bài"
      title="Tạo bài viết mới"
    />
  )
}
