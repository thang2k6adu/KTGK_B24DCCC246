import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PostDetail } from './pages/PostDetail';
import CreatePost from './pages/CreatePost'
import { EditPost } from './pages/EditPost';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/posts/edit/:id" element={<EditPost />} />
    </Routes>
  );
};

export default AppRoutes;