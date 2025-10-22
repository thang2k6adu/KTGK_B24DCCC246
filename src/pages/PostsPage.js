import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { PostList } from "../components/PostList";
import { SAMPLE_POSTS } from "../data/samplePosts";
export function PostsPage() {
    const [posts, setPosts] = useState(SAMPLE_POSTS);
    const handleDelete = (postId) => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
    };
    return _jsx(PostList, { posts: posts, onDelete: handleDelete });
}
