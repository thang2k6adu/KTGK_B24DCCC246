import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, BookOpen } from "lucide-react";
export function Navbar() {
    return (_jsx("nav", { className: "bg-white shadow-sm border-b", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [_jsx(BookOpen, { className: "h-8 w-8 text-blue-600" }), _jsx("span", { className: "text-xl font-bold text-gray-900", children: "Blog Management" })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(NavLink, { to: "/", className: ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-100 text-blue-700"
                                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`, children: "Trang ch\u1EE7" }), _jsx(NavLink, { to: "/posts", className: ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-100 text-blue-700"
                                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`, children: "Danh s\u00E1ch b\u00E0i vi\u1EBFt" }), _jsx(Link, { to: "/posts/create", children: _jsxs(Button, { className: "gap-2", children: [_jsx(Plus, { className: "w-4 h-4" }), "Vi\u1EBFt b\u00E0i m\u1EDBi"] }) })] })] }) }) }));
}
