"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { VideoAnalytics, formatNumber, formatDate } from "@/lib/mock-analytics";
import { cn } from "@/lib/utils";

interface PerformanceTableProps {
  videos: VideoAnalytics[];
}

type SortField = "title" | "published_at" | "views" | "likes" | "ctr" | "avg_view_duration";
type SortDirection = "asc" | "desc";

export function PerformanceTable({ videos }: PerformanceTableProps) {
  const [sortField, setSortField] = useState<SortField>("views");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedVideos = [...videos].sort((a, b) => {
    let comparison = 0;

    switch (sortField) {
      case "title":
        comparison = a.title.localeCompare(b.title);
        break;
      case "published_at":
        comparison = new Date(a.published_at).getTime() - new Date(b.published_at).getTime();
        break;
      case "views":
        comparison = a.views - b.views;
        break;
      case "likes":
        comparison = a.likes - b.likes;
        break;
      case "ctr":
        comparison = a.ctr - b.ctr;
        break;
      case "avg_view_duration":
        // Parse duration string to seconds for comparison
        const parseTime = (time: string) => {
          const [mins, secs] = time.split(":").map(Number);
          return mins * 60 + secs;
        };
        comparison = parseTime(a.avg_view_duration) - parseTime(b.avg_view_duration);
        break;
    }

    return sortDirection === "asc" ? comparison : -comparison;
  });

  const SortableHeader = ({
    field,
    children,
    className,
  }: {
    field: SortField;
    children: React.ReactNode;
    className?: string;
  }) => (
    <TableHead
      className={cn("cursor-pointer select-none hover:text-white", className)}
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-1">
        {children}
        {sortField === field ? (
          sortDirection === "asc" ? (
            <ArrowUp className="h-3 w-3" />
          ) : (
            <ArrowDown className="h-3 w-3" />
          )
        ) : (
          <ArrowUpDown className="h-3 w-3 opacity-50" />
        )}
      </div>
    </TableHead>
  );

  return (
    <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/50">
      <div className="p-6 pb-4">
        <h3 className="text-xs font-light uppercase tracking-widest text-gray-400">
          Video Performance
        </h3>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-zinc-800/50 hover:bg-transparent">
            <TableHead className="w-[80px]">Thumbnail</TableHead>
            <SortableHeader field="title">Title</SortableHeader>
            <SortableHeader field="published_at" className="hidden sm:table-cell">
              Published
            </SortableHeader>
            <SortableHeader field="views">Views</SortableHeader>
            <SortableHeader field="likes" className="hidden md:table-cell">
              Likes
            </SortableHeader>
            <SortableHeader field="ctr" className="hidden lg:table-cell">
              CTR
            </SortableHeader>
            <SortableHeader field="avg_view_duration" className="hidden lg:table-cell">
              Avg. Duration
            </SortableHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedVideos.map((video) => (
            <TableRow key={video.video_id}>
              <TableCell>
                <div className="relative h-[45px] w-[80px] overflow-hidden rounded">
                  <Image
                    src={video.thumbnail_url}
                    alt={video.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </TableCell>
              <TableCell>
                <p className="font-medium text-white line-clamp-2 max-w-[200px] sm:max-w-[300px]">
                  {video.title}
                </p>
              </TableCell>
              <TableCell className="hidden sm:table-cell text-gray-400">
                {formatDate(video.published_at)}
              </TableCell>
              <TableCell className="text-white">
                {formatNumber(video.views)}
              </TableCell>
              <TableCell className="hidden md:table-cell text-gray-400">
                {formatNumber(video.likes)}
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <span
                  className={cn(
                    video.ctr >= 5
                      ? "text-emerald-400"
                      : video.ctr >= 3
                      ? "text-yellow-400"
                      : "text-gray-400"
                  )}
                >
                  {video.ctr.toFixed(1)}%
                </span>
              </TableCell>
              <TableCell className="hidden lg:table-cell text-gray-400">
                {video.avg_view_duration}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
