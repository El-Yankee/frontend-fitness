import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-[#FFF1E6] text-gray-800 min-h-screen">{children}</div>
  );
}
// This component serves as a layout wrapper for the application, providing a consistent background and text color.
// It can be used to wrap other components or pages, ensuring they inherit the same styling.
