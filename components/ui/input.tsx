import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border bg-zinc-950/50 px-3 py-2 text-sm text-white placeholder:text-gray-500",
          "transition-all duration-200",
          "focus:outline-none focus:ring-1",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/30"
            : "border-zinc-800 focus:border-cyan-500 focus:ring-cyan-500/30",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
