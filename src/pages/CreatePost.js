import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { PostForm } from "../components/PostForm";
export default function CreatePost() {
    const navigate = useNavigate();
    const handleSubmit = (formData) => {
        // Since we're using static data, just show success message
        alert("Đăng bài thành công!");
        navigate("/");
    };
    const handleCancel = () => navigate("/");
    return (_jsx(PostForm, { onSubmit: handleSubmit, onCancel: handleCancel, submitText: "\u0110\u0103ng b\u00E0i", title: "T\u1EA1o b\u00E0i vi\u1EBFt m\u1EDBi" }));
}
