import { VideoList } from "@/components/dashboard/VideoList";
import { mockVideos } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-extralight tracking-wide text-white">
          Video Projects
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {mockVideos.length} projects in your production pipeline
        </p>
      </div>

      <VideoList videos={mockVideos} />
    </main>
  );
}
