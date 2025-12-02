"use client";

import { Check, X, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  VideoStatus,
  PIPELINE_STAGES,
  getStageFromStatus,
  isStageComplete,
} from "@/lib/types";

interface PipelineStatusProps {
  status: VideoStatus;
}

export function PipelineStatus({ status }: PipelineStatusProps) {
  const currentStageIndex = getStageFromStatus(status);
  const isFailed = status === "Failed";

  return (
    <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-6">
      <h3 className="mb-6 text-xs font-light uppercase tracking-widest text-gray-400">
        Pipeline Status
      </h3>

      {/* Desktop: Horizontal stepper */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-0 right-0 top-4 h-0.5 bg-zinc-800" />

          <div className="relative flex justify-between">
            {PIPELINE_STAGES.map((stage, index) => {
              const isComplete = isStageComplete(status, index);
              const isCurrent = index === currentStageIndex && !isFailed;
              const isFutureOrFailed = index > currentStageIndex || isFailed;

              return (
                <div
                  key={stage}
                  className="flex flex-col items-center"
                  style={{ width: `${100 / PIPELINE_STAGES.length}%` }}
                >
                  <div
                    className={cn(
                      "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all",
                      isComplete &&
                        "border-emerald-500 bg-emerald-500/20 text-emerald-400",
                      isCurrent &&
                        "border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20",
                      isFutureOrFailed &&
                        !isFailed &&
                        "border-zinc-700 bg-zinc-900 text-zinc-600",
                      isFailed &&
                        index === 0 &&
                        "border-red-500 bg-red-500/20 text-red-400"
                    )}
                  >
                    {isComplete ? (
                      <Check className="h-4 w-4" />
                    ) : isFailed && index === 0 ? (
                      <X className="h-4 w-4" />
                    ) : isCurrent ? (
                      <Circle className="h-3 w-3 fill-current" />
                    ) : (
                      <Circle className="h-3 w-3" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "mt-2 text-center text-xs",
                      isComplete && "text-emerald-400",
                      isCurrent && "font-medium text-cyan-400",
                      isFutureOrFailed && !isFailed && "text-zinc-600",
                      isFailed && index === 0 && "text-red-400"
                    )}
                  >
                    {stage}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical stepper */}
      <div className="md:hidden">
        <div className="relative">
          {PIPELINE_STAGES.map((stage, index) => {
            const isComplete = isStageComplete(status, index);
            const isCurrent = index === currentStageIndex && !isFailed;
            const isFutureOrFailed = index > currentStageIndex || isFailed;
            const isLast = index === PIPELINE_STAGES.length - 1;

            return (
              <div key={stage} className="relative flex items-start pb-6">
                {/* Vertical line */}
                {!isLast && (
                  <div
                    className={cn(
                      "absolute left-4 top-8 h-full w-0.5 -translate-x-1/2",
                      isComplete ? "bg-emerald-500/50" : "bg-zinc-800"
                    )}
                  />
                )}

                {/* Icon */}
                <div
                  className={cn(
                    "relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all",
                    isComplete &&
                      "border-emerald-500 bg-emerald-500/20 text-emerald-400",
                    isCurrent &&
                      "border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20",
                    isFutureOrFailed &&
                      !isFailed &&
                      "border-zinc-700 bg-zinc-900 text-zinc-600",
                    isFailed &&
                      index === 0 &&
                      "border-red-500 bg-red-500/20 text-red-400"
                  )}
                >
                  {isComplete ? (
                    <Check className="h-4 w-4" />
                  ) : isFailed && index === 0 ? (
                    <X className="h-4 w-4" />
                  ) : isCurrent ? (
                    <Circle className="h-3 w-3 fill-current" />
                  ) : (
                    <Circle className="h-3 w-3" />
                  )}
                </div>

                {/* Label */}
                <span
                  className={cn(
                    "ml-3 pt-1 text-sm",
                    isComplete && "text-emerald-400",
                    isCurrent && "font-medium text-cyan-400",
                    isFutureOrFailed && !isFailed && "text-zinc-600",
                    isFailed && index === 0 && "text-red-400"
                  )}
                >
                  {stage}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
