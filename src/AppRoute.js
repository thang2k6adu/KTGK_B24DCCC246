import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PostsPage } from './pages/PostsPage';
import { PostDetail } from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import { EditPost } from './pages/EditPost';
const AppRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/posts", element: _jsx(PostsPage, {}) }), _jsx(Route, { path: "/posts/:id", element: _jsx(PostDetail, {}) }), _jsx(Route, { path: "/posts/create", element: _jsx(CreatePost, {}) }), _jsx(Route, { path: "/posts/edit/:id", element: _jsx(EditPost, {}) })] }));
};
export default AppRoutes;
