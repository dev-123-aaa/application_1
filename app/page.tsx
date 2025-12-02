"use client";

import { VideoList } from "@/components/dashboard/VideoList";
import { useVideos } from "@/lib/contexts/VideoContext";

export default function DashboardPage() {
  const { videos } = useVideos();

  return (
    <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-extralight tracking-wide text-white">
          Video Projects
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {videos.length} project{videos.length !== 1 ? "s" : ""} in your production pipeline
        </p>
      </div>

      <VideoList videos={videos} />
    </main>
  );
}
