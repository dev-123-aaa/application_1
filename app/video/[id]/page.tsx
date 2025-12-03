"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockVideos } from "@/lib/mock-data";
import { VideoHeader } from "@/components/video-detail/VideoHeader";
import { OverviewCard } from "@/components/video-detail/OverviewCard";
import { ScriptSection } from "@/components/video-detail/ScriptSection";
import { ThumbnailGrid } from "@/components/video-detail/ThumbnailGrid";
import { PipelineStatus } from "@/components/video-detail/PipelineStatus";
import { Toast } from "@/components/ui/toast";

interface VideoDetailPageProps {
  params: { id: string };
}

export default function VideoDetailPage({ params }: VideoDetailPageProps) {
  const { id } = params;
  const video = mockVideos.find((v) => v.project_id === id);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  // Video not found state
  if (!video) {
    return (
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-8 -ml-2 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>

        <div className="flex flex-col items-center justify-center rounded-lg border border-zinc-800/50 bg-zinc-900/50 py-16 text-center">
          <div className="mb-4 text-6xl">🔍</div>
          <h2 className="mb-2 text-xl font-light text-white">Video Not Found</h2>
          <p className="mb-6 text-sm text-gray-500">
            The video you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link href="/">
            <Button variant="outline">Return to Dashboard</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header with back button, title, and metadata */}
      <VideoHeader video={video} />

      {/* Content sections */}
      <div className="space-y-6">
        {/* Overview Card - Video metadata */}
        <OverviewCard video={video} />

        {/* Script Section with copy functionality */}
        <ScriptSection
          script={video.script}
          status={video.status}
          onCopySuccess={() => showToast("Script copied to clipboard")}
        />

        {/* Thumbnail Suggestions Grid */}
        <ThumbnailGrid
          thumbnails={video.thumbnail_suggestions}
          status={video.status}
        />

        {/* Pipeline Status Stepper */}
        <PipelineStatus status={video.status} />
      </div>

      {/* Toast notification */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </main>
  );
}
