import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DeleteConfirmDialog } from "@/components/DeleteConfirmDialog"
import { ArrowLeft, Edit, Trash2, Calendar, User, Tag } from "lucide-react"
import { formatDate } from "../lib/utils"

interface Post {
  id: string
  title: string
  author: string
  date: string
  content: string
  thumbnail: string
  category: string
}

// Sample data - same as HomePage
const SAMPLE_POSTS: Post[] = [
  {
    id: "1",
    title: "Hướng dẫn React cơ bản cho người mới bắt đầu",
    author: "Nguyễn Văn A",
    date: "20/01/2025",
    content: "React là một thư viện JavaScript phổ biến để xây dựng giao diện người dùng. Trong bài viết này, chúng ta sẽ tìm hiểu các khái niệm cơ bản của React bao gồm components, props, state và lifecycle methods. React giúp chúng ta xây dựng các ứng dụng web hiện đại và có thể tái sử dụng dễ dàng. Chúng ta sẽ bắt đầu với việc cài đặt React và tạo component đầu tiên. Sau đó, chúng ta sẽ học cách quản lý state và props để tạo ra các ứng dụng tương tác. Cuối cùng, chúng ta sẽ tìm hiểu về lifecycle methods và cách sử dụng chúng một cách hiệu quả.",
    thumbnail: "https://hoseiki.vn/wp-content/uploads/2025/03/anh-anime-cute-28.jpg",
    category: "Công nghệ"
  },
  {
    id: "2",
    title: "Khám phá ẩm thực Việt Nam - Hành trình vị giác",
    author: "Trần Thị B",
    date: "18/01/2025",
    content: "Ẩm thực Việt Nam nổi tiếng với sự đa dạng và phong phú. Từ phở bò Hà Nội đến bún bò Huế, từ chả cá Lã Vọng đến bánh xèo miền Tây, mỗi vùng miền đều có những món ăn đặc trưng riêng. Hãy cùng khám phá những món ăn ngon nhất của đất nước hình chữ S. Chúng ta sẽ bắt đầu với miền Bắc với phở bò, bún chả và chả cá. Sau đó, chúng ta sẽ đến miền Trung với bún bò Huế và cơm hến. Cuối cùng, chúng ta sẽ khám phá miền Nam với bánh xèo, bánh khọt và các món ăn đường phố.",
    thumbnail: "https://hoseiki.vn/wp-content/uploads/2025/03/anh-anime-cute-28.jpg",
    category: "Ẩm thực"
  },
  {
    id: "3",
    title: "Du lịch Đà Nẵng - Thành phố đáng sống nhất Việt Nam",
    author: "Lê Văn C",
    date: "15/01/2025",
    content: "Đà Nẵng là một trong những thành phố đẹp nhất Việt Nam với bãi biển dài, núi non hùng vĩ và văn hóa đặc sắc. Trong bài viết này, chúng ta sẽ khám phá những địa điểm du lịch nổi tiếng nhất của Đà Nẵng. Từ bãi biển Mỹ Khê với cát trắng mịn màng đến cầu Vàng nổi tiếng thế giới, từ chợ Hàn với ẩm thực đa dạng đến Bà Nà Hills với khí hậu mát mẻ. Chúng ta cũng sẽ tìm hiểu về lịch sử và văn hóa của thành phố này, cũng như những món ăn đặc sản không thể bỏ qua khi đến Đà Nẵng.",
    thumbnail: "https://hoseiki.vn/wp-content/uploads/2025/03/anh-anime-cute-28.jpg",
    category: "Du lịch"
  },
  {
    id: "4",
    title: "Lối sống lành mạnh - Bí quyết sống hạnh phúc",
    author: "Phạm Thị D",
    date: "12/01/2025",
    content: "Lối sống lành mạnh là chìa khóa để có một cuộc sống hạnh phúc và viên mãn. Trong bài viết này, chúng ta sẽ tìm hiểu về những thói quen tốt giúp cải thiện sức khỏe thể chất và tinh thần. Từ việc tập thể dục đều đặn đến chế độ ăn uống cân bằng, từ việc ngủ đủ giấc đến quản lý stress hiệu quả. Chúng ta cũng sẽ học cách xây dựng các mối quan hệ tích cực và tìm kiếm niềm vui trong cuộc sống hàng ngày. Hãy cùng bắt đầu hành trình thay đổi lối sống để có một cuộc sống tốt đẹp hơn.",
    thumbnail: "https://hoseiki.vn/wp-content/uploads/2025/03/anh-anime-cute-28.jpg",
    category: "Đời sống"
  },
  {
    id: "5",
    title: "TypeScript - Tương lai của JavaScript",
    author: "Hoàng Văn E",
    date: "10/01/2025",
    content: "TypeScript là một superset của JavaScript được phát triển bởi Microsoft, mang lại tính năng type safety và khả năng phát triển ứng dụng quy mô lớn. Trong bài viết này, chúng ta sẽ tìm hiểu về những lợi ích của TypeScript và cách sử dụng nó trong các dự án thực tế. Từ việc cài đặt và cấu hình TypeScript đến việc sử dụng các tính năng nâng cao như generics, decorators và modules. Chúng ta cũng sẽ học cách tích hợp TypeScript với các framework phổ biến như React, Vue và Angular để xây dựng các ứng dụng web hiện đại và bảo trì dễ dàng.",
    thumbnail: "https://hoseiki.vn/wp-content/uploads/2025/03/anh-anime-cute-28.jpg",
    category: "Công nghệ"
  },
  {
    id: "6",
    title: "Nghệ thuật nấu ăn - Từ cơ bản đến nâng cao",
    author: "Võ Thị F",
    date: "08/01/2025",
    content: "Nấu ăn không chỉ là một kỹ năng cần thiết mà còn là một nghệ thuật đầy sáng tạo. Trong bài viết này, chúng ta sẽ khám phá những bí quyết nấu ăn từ cơ bản đến nâng cao. Từ việc lựa chọn nguyên liệu tươi ngon đến các kỹ thuật nấu nướng chuyên nghiệp, từ việc trình bày món ăn đẹp mắt đến việc kết hợp hương vị hài hòa. Chúng ta cũng sẽ học về các loại gia vị và cách sử dụng chúng để tạo ra những món ăn ngon miệng và bổ dưỡng. Hãy cùng bắt đầu hành trình trở thành một đầu bếp tài ba.",
    thumbnail: "https://hoseiki.vn/wp-content/uploads/2025/03/anh-anime-cute-28.jpg",
    category: "Ẩm thực"
  }
]

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