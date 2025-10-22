import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PostForm } from "../components/PostForm";
import { SAMPLE_POSTS } from "../data/samplePosts";
export const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    // Load post data on component mount
    useEffect(() => {
        if (id) {
            const foundPost = SAMPLE_POSTS.find((p) => p.id === id);
            if (foundPost) {
                setPost(foundPost);
            }
            else {
                // Post not found, redirect to home
                navigate("/");
            }
            setLoading(false);
        }
    }, [id, navigate]);
    const handleSubmit = (formData) => {
        // Since we're using static data, just show success message
        alert("Cập nhật thành công!");
        navigate(`/posts/${id}`);
    };
    const handleCancel = () => {
        if (id) {
            navigate(`/posts/${id}`);
        }
        else {
            navigate("/");
        }
    };
    if (loading) {
        return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" }), _jsx("p", { className: "text-slate-600", children: "\u0110ang t\u1EA3i..." })] }) }));
    }
    if (!post) {
        return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Kh\u00F4ng t\u00ECm th\u1EA5y b\u00E0i vi\u1EBFt" }), _jsx("p", { className: "text-slate-600 mb-6", children: "B\u00E0i vi\u1EBFt b\u1EA1n \u0111ang t\u00ECm ki\u1EBFm kh\u00F4ng t\u1ED3n t\u1EA1i ho\u1EB7c \u0111\u00E3 b\u1ECB x\u00F3a." }), _jsx("button", { onClick: () => navigate("/"), className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg", children: "Quay l\u1EA1i trang ch\u1EE7" })] }) }));
    }
    const initialData = {
        title: post.title,
        author: post.author,
        thumbnail: post.thumbnail,
        content: post.content,
        category: post.category,
    };
    return (_jsx(PostForm, { initialData: initialData, onSubmit: handleSubmit, onCancel: handleCancel, submitText: "C\u1EADp nh\u1EADt", title: "Ch\u1EC9nh s\u1EEDa b\u00E0i vi\u1EBFt" }));
};
