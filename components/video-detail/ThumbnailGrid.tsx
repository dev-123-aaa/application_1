"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { VideoStatus } from "@/lib/types";

interface ThumbnailGridProps {
  thumbnails?: string[];
  status: VideoStatus;
}

export function ThumbnailGrid({ thumbnails, status }: ThumbnailGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const hasThumbnails = thumbnails && thumbnails.length > 0;

  return (
    <>
      <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-6">
        <h3 className="mb-6 text-xs font-light uppercase tracking-widest text-gray-400">
          Thumbnail Suggestions
        </h3>

        {hasThumbnails ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {thumbnails.map((url, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(url)}
                className={cn(
                  "group relative aspect-video overflow-hidden rounded-lg border border-zinc-800/50 bg-zinc-950 transition-all duration-200",
                  "hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10",
                  "focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                )}
              >
                <Image
                  src={url}
                  alt={`Thumbnail suggestion ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-2 left-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Option {index + 1}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-zinc-800 bg-zinc-950/30 py-12 text-center">
            <div className="mb-3 rounded-full bg-zinc-800/50 p-3">
              <ImageIcon className="h-6 w-6 text-gray-500" />
            </div>
            <p className="text-sm text-gray-500">
              {status === "Failed"
                ? "Thumbnail generation failed"
                : "Thumbnails will appear here once generated"}
            </p>
            <p className="mt-1 text-xs text-gray-600">Current status: {status}</p>
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -right-2 -top-2 z-10 rounded-full bg-zinc-900 p-2 text-white transition-colors hover:bg-zinc-800"
            >
              <X className="h-5 w-5" />
            </button>
            <Image
              src={selectedImage}
              alt="Thumbnail preview"
              width={1280}
              height={720}
              className="rounded-lg"
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  );
}
