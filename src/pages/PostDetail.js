import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DeleteConfirmDialog } from "@/components/DeleteConfirmDialog";
import { ArrowLeft, Edit, Trash2, Calendar, User, Tag } from "lucide-react";
import { formatDate } from "../lib/utils";
import { SAMPLE_POSTS } from "../data/samplePosts";
export const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    // Load post data on component mount
    useEffect(() => {
        if (id) {
            const foundPost = SAMPLE_POSTS.find((p) => p.id === id);
            if (foundPost) {
                setPost(foundPost);
            }
            setLoading(false);
        }
    }, [id]);
    const handleDelete = () => {
        if (post) {
            // Since we're using static data, just show a message and navigate back
            alert("Xóa bài viết thành công!");
            navigate("/");
        }
    };
    const handleEdit = () => {
        if (post) {
            navigate(`/posts/edit/${post.id}`);
        }
    };
    if (loading) {
        return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" }), _jsx("p", { className: "text-slate-600", children: "\u0110ang t\u1EA3i..." })] }) }));
    }
    if (!post) {
        return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100", children: _jsx("div", { className: "max-w-4xl mx-auto px-4 py-12", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Kh\u00F4ng t\u00ECm th\u1EA5y b\u00E0i vi\u1EBFt" }), _jsx("p", { className: "text-slate-600 mb-6", children: "B\u00E0i vi\u1EBFt b\u1EA1n \u0111ang t\u00ECm ki\u1EBFm kh\u00F4ng t\u1ED3n t\u1EA1i ho\u1EB7c \u0111\u00E3 b\u1ECB x\u00F3a." }), _jsx(Link, { to: "/", children: _jsxs(Button, { className: "gap-2", children: [_jsx(ArrowLeft, { className: "w-4 h-4" }), "Quay l\u1EA1i trang ch\u1EE7"] }) })] }) }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100", children: [_jsx("header", { className: "bg-white shadow-sm", children: _jsx("div", { className: "max-w-4xl mx-auto px-4 py-6", children: _jsxs(Link, { to: "/", className: "text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2", children: [_jsx(ArrowLeft, { className: "w-4 h-4" }), "Quay l\u1EA1i"] }) }) }), _jsx("main", { className: "max-w-4xl mx-auto px-4 py-12", children: _jsxs(Card, { className: "overflow-hidden shadow-lg", children: [post.thumbnail && (_jsx("div", { className: "relative w-full h-64 md:h-80 bg-gray-100 overflow-hidden", children: _jsx("img", { src: post.thumbnail, alt: post.title, className: "w-full h-full object-cover" }) })), _jsxs(CardHeader, { className: "pb-4", children: [_jsx("h1", { className: "text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight", children: post.title }), _jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-slate-600 mb-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(User, { className: "w-4 h-4" }), _jsx("span", { className: "font-medium", children: "T\u00E1c gi\u1EA3:" }), _jsx("span", { children: post.author })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "w-4 h-4" }), _jsx("span", { className: "font-medium", children: "Ng\u00E0y \u0111\u0103ng:" }), _jsx("span", { children: formatDate(post.date) })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Tag, { className: "w-4 h-4" }), _jsx("span", { className: "font-medium", children: "Th\u1EC3 lo\u1EA1i:" }), _jsx("span", { className: "bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs", children: post.category })] })] })] }), _jsxs(CardContent, { className: "pt-0", children: [_jsx("div", { className: "prose prose-slate max-w-none", children: _jsx("div", { className: "text-slate-700 leading-relaxed whitespace-pre-wrap", children: post.content }) }), _jsxs("div", { className: "flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-200", children: [_jsxs(Button, { onClick: handleEdit, className: "gap-2", children: [_jsx(Edit, { className: "w-4 h-4" }), "Ch\u1EC9nh s\u1EEDa"] }), _jsxs(Button, { variant: "destructive", onClick: () => setDeleteDialogOpen(true), className: "gap-2", children: [_jsx(Trash2, { className: "w-4 h-4" }), "X\u00F3a b\u00E0i vi\u1EBFt"] })] })] })] }) }), _jsx(DeleteConfirmDialog, { open: deleteDialogOpen, onOpenChange: setDeleteDialogOpen, onConfirm: handleDelete, title: "X\u00F3a b\u00E0i vi\u1EBFt", description: "B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n x\u00F3a b\u00E0i vi\u1EBFt n\u00E0y? H\u00E0nh \u0111\u1ED9ng n\u00E0y kh\u00F4ng th\u1EC3 ho\u00E0n t\u00E1c." })] }));
};
