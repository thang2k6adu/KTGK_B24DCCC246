import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Trash2, ArrowRight, Edit } from "lucide-react"
import { formatDate } from "../lib/utils"
import { PostCardProps } from "../types"

export function PostCard({ post, onDelete }: PostCardProps) {
  const truncatedDescription =
    post.content.length > 100 ? post.content.substring(0, 100) + "..." : post.content

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Thumbnail Image */}
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
        <img
          src={post.thumbnail || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardContent className="pt-4 flex-grow">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>

        {/* Meta Information */}
        <div className="space-y-1 mb-3 text-sm text-gray-500">
          <p>
            <span className="font-medium">Tác giả:</span> {post.author}
          </p>
          <p>
            <span className="font-medium">Ngày đăng:</span> {formatDate(post.date)}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">{truncatedDescription}</p>
      </CardContent>

      {/* Action Buttons */}
      <CardFooter className="gap-2 pt-4">
        <Link to={`/posts/${post.id}`} className="flex-1">
          <Button variant="default" className="w-full gap-2">
            Đọc thêm
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <Link to={`/posts/edit/${post.id}`}>
          <Button variant="outline" size="icon" title="Chỉnh sửa bài viết">
            <Edit className="w-4 h-4" />
          </Button>
        </Link>
        <Button variant="destructive" size="icon" onClick={onDelete} title="Xóa bài viết">
          <Trash2 className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
