import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export function PostForm({ initialData, onSubmit, onCancel, submitText, title }) {
    const [formData, setFormData] = useState(initialData || {
        title: "",
        author: "",
        thumbnail: "",
        content: "",
        category: "Công nghệ",
    });
    const [errors, setErrors] = useState({});
    const categories = ["Công nghệ", "Du lịch", "Ẩm thực", "Đời sống", "Khác"];
    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) {
            newErrors.title = "Tiêu đề là bắt buộc";
        }
        else if (formData.title.trim().length < 10) {
            newErrors.title = "Tiêu đề phải có ít nhất 10 ký tự";
        }
        if (!formData.author.trim()) {
            newErrors.author = "Tác giả là bắt buộc";
        }
        else if (formData.author.trim().length < 3) {
            newErrors.author = "Tác giả phải có ít nhất 3 ký tự";
        }
        if (!formData.content.trim()) {
            newErrors.content = "Nội dung là bắt buộc";
        }
        else if (formData.content.trim().length < 50) {
            newErrors.content = "Nội dung phải có ít nhất 50 ký tự";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm())
            return;
        onSubmit(formData);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100", children: [_jsx("header", { className: "bg-white shadow-sm", children: _jsx("div", { className: "max-w-4xl mx-auto px-4 py-6", children: _jsx("button", { onClick: onCancel, className: "text-blue-600 hover:text-blue-700 font-medium", children: "\u2190 Quay l\u1EA1i" }) }) }), _jsx("main", { className: "max-w-4xl mx-auto px-4 py-12", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [_jsx("h1", { className: "text-3xl font-bold text-slate-900 mb-8", children: title }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsxs("label", { htmlFor: "title", className: "block text-sm font-semibold text-slate-700 mb-2", children: ["Ti\u00EAu \u0111\u1EC1 ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { type: "text", id: "title", name: "title", value: formData.title, onChange: handleChange, placeholder: "Nh\u1EADp ti\u00EAu \u0111\u1EC1 b\u00E0i vi\u1EBFt...", className: `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.title ? "border-red-500" : "border-slate-300"}` }), errors.title && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.title })] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "author", className: "block text-sm font-semibold text-slate-700 mb-2", children: ["T\u00E1c gi\u1EA3 ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { type: "text", id: "author", name: "author", value: formData.author, onChange: handleChange, placeholder: "Nh\u1EADp t\u00EAn t\u00E1c gi\u1EA3...", className: `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.author ? "border-red-500" : "border-slate-300"}` }), errors.author && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.author })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "thumbnail", className: "block text-sm font-semibold text-slate-700 mb-2", children: "URL \u1EA3nh thumbnail" }), _jsx("input", { type: "url", id: "thumbnail", name: "thumbnail", value: formData.thumbnail, onChange: handleChange, placeholder: "https://example.com/image.jpg", className: "w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" })] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "category", className: "block text-sm font-semibold text-slate-700 mb-2", children: ["Th\u1EC3 lo\u1EA1i ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("select", { id: "category", name: "category", value: formData.category, onChange: handleChange, className: "w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition", children: categories.map((cat) => (_jsx("option", { value: cat, children: cat }, cat))) })] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "content", className: "block text-sm font-semibold text-slate-700 mb-2", children: ["N\u1ED9i dung b\u00E0i vi\u1EBFt ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("textarea", { id: "content", name: "content", value: formData.content, onChange: handleChange, placeholder: "Nh\u1EADp n\u1ED9i dung b\u00E0i vi\u1EBFt...", rows: 10, className: `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none ${errors.content ? "border-red-500" : "border-slate-300"}` }), errors.content && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.content }), _jsxs("p", { className: "text-xs text-slate-500 mt-1", children: ["T\u1ED1i thi\u1EC3u 50 k\u00FD t\u1EF1 (", formData.content.length, "/50)"] })] }), _jsxs("div", { className: "flex gap-4 pt-6", children: [_jsx("button", { type: "submit", className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition", children: submitText }), _jsx("button", { type: "button", onClick: onCancel, className: "flex-1 bg-slate-300 hover:bg-slate-400 text-slate-900 font-semibold py-3 rounded-lg transition", children: "H\u1EE7y" })] })] })] }) })] }));
}
