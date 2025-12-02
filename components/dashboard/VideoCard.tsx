"use client";

import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { Video } from "@/lib/types";
import { StatusBadge } from "./StatusBadge";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  video: Video;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatDuration(hours: number, minutes: number): string {
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link
      href={`/video/${video.project_id}`}
      className={cn(
        "group block w-full rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-4 transition-all duration-200",
        "hover:border-cyan-500/30 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-cyan-500/5"
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="truncate text-sm font-normal text-white group-hover:text-cyan-50">
            {video.title}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap sm:gap-4">
          <StatusBadge status={video.status} />

          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Clock className="h-3.5 w-3.5" />
            <span>{formatDuration(video.duration_hours, video.duration_minutes)}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Calendar className="h-3.5 w-3.5" />
            <span>{formatDate(video.created_at)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
