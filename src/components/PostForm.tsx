import { useState } from "react"
import { PostFormData } from "../types"

interface PostFormProps {
  initialData?: PostFormData
  onSubmit: (data: PostFormData) => void
  onCancel: () => void
  submitText: string
  title: string
}

export function PostForm({ initialData, onSubmit, onCancel, submitText, title }: PostFormProps) {
  const [formData, setFormData] = useState<PostFormData>(
    initialData || {
      title: "",
      author: "",
      thumbnail: "",
      content: "",
      category: "Công nghệ",
    }
  )
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const categories = ["Công nghệ", "Du lịch", "Ẩm thực", "Đời sống", "Khác"]

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.title.trim()) {
      newErrors.title = "Tiêu đề là bắt buộc"
    } else if (formData.title.trim().length < 10) {
      newErrors.title = "Tiêu đề phải có ít nhất 10 ký tự"
    }

    if (!formData.author.trim()) {
      newErrors.author = "Tác giả là bắt buộc"
    } else if (formData.author.trim().length < 3) {
      newErrors.author = "Tác giả phải có ít nhất 3 ký tự"
    }

    if (!formData.content.trim()) {
      newErrors.content = "Nội dung là bắt buộc"
    } else if (formData.content.trim().length < 50) {
      newErrors.content = "Nội dung phải có ít nhất 50 ký tự"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    onSubmit(formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={onCancel}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Quay lại
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">{title}</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-2">
                Tiêu đề <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Nhập tiêu đề bài viết..."
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors.title ? "border-red-500" : "border-slate-300"
                }`}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* Author */}
            <div>
              <label htmlFor="author" className="block text-sm font-semibold text-slate-700 mb-2">
                Tác giả <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Nhập tên tác giả..."
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors.author ? "border-red-500" : "border-slate-300"
                }`}
              />
              {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
            </div>

            {/* Thumbnail */}
            <div>
              <label htmlFor="thumbnail" className="block text-sm font-semibold text-slate-700 mb-2">
                URL ảnh thumbnail
              </label>
              <input
                type="url"
                id="thumbnail"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-2">
                Thể loại <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-semibold text-slate-700 mb-2">
                Nội dung bài viết <span className="text-red-500">*</span>
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Nhập nội dung bài viết..."
                rows={10}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none ${
                  errors.content ? "border-red-500" : "border-slate-300"
                }`}
              />
              {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
              <p className="text-xs text-slate-500 mt-1">Tối thiểu 50 ký tự ({formData.content.length}/50)</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
              >
                {submitText}
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 bg-slate-300 hover:bg-slate-400 text-slate-900 font-semibold py-3 rounded-lg transition"
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
