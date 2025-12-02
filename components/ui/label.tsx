import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  error?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-light",
          error ? "text-red-400" : "text-gray-300",
          className
        )}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";

export { Label };
