"use client";

import { StatsOverview } from "@/components/analytics/StatsOverview";
import { ViewsChart } from "@/components/analytics/ViewsChart";
import { TopVideosChart } from "@/components/analytics/TopVideosChart";
import { PerformanceTable } from "@/components/analytics/PerformanceTable";
import {
  channelStats,
  videoAnalytics,
  dailyViews,
  getTopVideos,
} from "@/lib/mock-analytics";

export default function AnalyticsPage() {
  const topVideos = getTopVideos(5);

  return (
    <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-extralight tracking-wide text-white">
          Analytics
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Channel performance and video metrics
        </p>
      </div>

      <div className="space-y-6">
        {/* Stats Overview */}
        <StatsOverview stats={channelStats} />

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <ViewsChart data={dailyViews} />
          <TopVideosChart videos={topVideos} />
        </div>

        {/* Performance Table */}
        <PerformanceTable videos={videoAnalytics} />
      </div>
    </main>
  );
}
