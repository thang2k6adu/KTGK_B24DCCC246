import { NavLink, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Plus, BookOpen } from "lucide-react"

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Blog Management</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Trang chủ
            </NavLink>
            
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Danh sách bài viết
            </NavLink>

            <Link to="/posts/create">
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Viết bài mới
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
