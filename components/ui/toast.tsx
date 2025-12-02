"use client";

import { useEffect, useState } from "react";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

export function Toast({
  message,
  type = "success",
  duration = 3000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 200); // Wait for fade out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg transition-all duration-200",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        type === "success" &&
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        type === "error" && "border-red-500/30 bg-red-500/10 text-red-400",
        type === "info" && "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
      )}
    >
      {type === "success" && <Check className="h-4 w-4" />}
      <span className="text-sm">{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 200);
        }}
        className="ml-2 rounded p-1 transition-colors hover:bg-white/10"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

// Hook for managing toasts
export function useToast() {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "success"
  ) => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  return { toast, showToast, hideToast };
}
