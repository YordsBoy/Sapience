// File: components/ui/button.js

import { cn } from "@/lib/utils";

export function Button({ className = "", children, variant = "default", ...props }) {
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100",
    subtle: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-800"
  };

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 focus:outline-none",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;