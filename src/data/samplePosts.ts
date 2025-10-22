import { Post } from '../types'

export const SAMPLE_POSTS: Post[] = [
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
