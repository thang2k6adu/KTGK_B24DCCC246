import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PostCard } from "@/components/PostCard";
import { DeleteConfirmDialog } from "@/components/DeleteConfirmDialog";
import { Plus, Search } from "../components/icons/lucide-react";
export function PostList({ posts, onDelete }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);
    const filteredPosts = useMemo(() => {
        return posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [posts, searchQuery]);
    const handleDeleteClick = (postId) => {
        setPostToDelete(postId);
        setDeleteDialogOpen(true);
    };
    const handleConfirmDelete = () => {
        if (postToDelete) {
            onDelete(postToDelete);
            setDeleteDialogOpen(false);
            setPostToDelete(null);
        }
    };
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-4xl font-bold text-foreground mb-2", children: "B\u00E0i Vi\u1EBFt" }), _jsxs("p", { className: "text-muted-foreground", children: ["T\u1ED5ng s\u1ED1: ", _jsx("span", { className: "font-semibold text-foreground", children: filteredPosts.length }), " b\u00E0i vi\u1EBFt"] })] }), _jsx(Link, { to: "/posts/create", children: _jsxs(Button, { className: "gap-2", children: [_jsx(Plus, { className: "w-4 h-4" }), "Vi\u1EBFt b\u00E0i m\u1EDBi"] }) })] }), _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" }), _jsx(Input, { placeholder: "T\u00ECm ki\u1EBFm theo ti\u00EAu \u0111\u1EC1...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-10" })] })] }), filteredPosts.length > 0 ? (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredPosts.map((post) => (_jsx(PostCard, { post: post, onDelete: () => handleDeleteClick(post.id) }, post.id))) })) : (_jsx("div", { className: "text-center py-12", children: _jsx("p", { className: "text-muted-foreground text-lg", children: "Kh\u00F4ng t\u00ECm th\u1EA5y b\u00E0i vi\u1EBFt n\u00E0o" }) })), _jsx(DeleteConfirmDialog, { open: deleteDialogOpen, onOpenChange: setDeleteDialogOpen, onConfirm: handleConfirmDelete, title: "X\u00F3a b\u00E0i vi\u1EBFt", description: "B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n x\u00F3a b\u00E0i vi\u1EBFt n\u00E0y? H\u00E0nh \u0111\u1ED9ng n\u00E0y kh\u00F4ng th\u1EC3 ho\u00E0n t\u00E1c." })] }));
}
