import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockVideos } from "@/lib/mock-data";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { notFound } from "next/navigation";

interface VideoDetailPageProps {
  params: { id: string };
}

export default function VideoDetailPage({ params }: VideoDetailPageProps) {
  const video = mockVideos.find((v) => v.project_id === params.id);

  if (!video) {
    notFound();
  }

  return (
    <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4 -ml-2 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-light tracking-wide text-white">
              {video.title}
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Project ID: {video.project_id}
            </p>
          </div>
          <StatusBadge status={video.status} />
        </div>
      </div>

      <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-8">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 h-16 w-16 rounded-full bg-zinc-800/50 flex items-center justify-center">
            <span className="text-2xl">🎬</span>
          </div>
          <h3 className="mb-2 text-lg font-light text-white">
            Video Details Coming Soon
          </h3>
          <p className="max-w-md text-sm text-gray-500">
            This is a placeholder for the video detail view. Full production
            pipeline controls, section management, and progress tracking will
            be added in future updates.
          </p>
        </div>
      </div>
    </main>
  );
}
