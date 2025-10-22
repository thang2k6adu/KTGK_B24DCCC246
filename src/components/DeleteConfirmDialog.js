"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, } from "@/components/ui/alert-dialog";
export function DeleteConfirmDialog({ open, onOpenChange, onConfirm, title, description }) {
    return (_jsx(AlertDialog, { open: open, onOpenChange: onOpenChange, children: _jsxs(AlertDialogContent, { children: [_jsxs(AlertDialogHeader, { children: [_jsx(AlertDialogTitle, { children: title }), _jsx(AlertDialogDescription, { children: description })] }), _jsxs("div", { className: "flex gap-3 justify-end", children: [_jsx(AlertDialogCancel, { children: "H\u1EE7y" }), _jsx(AlertDialogAction, { onClick: onConfirm, className: "bg-destructive text-destructive-foreground hover:bg-destructive/90", children: "X\u00F3a" })] })] }) }));
}
