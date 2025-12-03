"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { VideoAnalytics, formatNumber } from "@/lib/mock-analytics";

interface TopVideosChartProps {
  videos: VideoAnalytics[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: VideoAnalytics }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const video = payload[0].payload;
    return (
      <div className="max-w-xs rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 shadow-lg">
        <p className="text-sm font-medium text-white line-clamp-2">
          {video.title}
        </p>
        <p className="mt-1 text-xs text-cyan-400">
          {formatNumber(video.views)} views
        </p>
      </div>
    );
  }
  return null;
}

function truncateTitle(title: string, maxLength: number = 25): string {
  if (title.length <= maxLength) return title;
  return title.slice(0, maxLength) + "...";
}

export function TopVideosChart({ videos }: TopVideosChartProps) {
  const chartData = videos.map((video) => ({
    ...video,
    shortTitle: truncateTitle(video.title),
  }));

  return (
    <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-6">
      <h3 className="mb-6 text-xs font-light uppercase tracking-widest text-gray-400">
        Top Performing Videos
      </h3>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
          >
            <XAxis
              type="number"
              tickFormatter={(value) => formatNumber(value)}
              stroke="#6b7280"
              tick={{ fill: "#6b7280", fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: "#2a2a2a" }}
            />
            <YAxis
              type="category"
              dataKey="shortTitle"
              stroke="#6b7280"
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={140}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#1a1a1a" }} />
            <Bar dataKey="views" radius={[0, 4, 4, 0]} maxBarSize={32}>
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? "#ffd700" : "#00d4ff"}
                  fillOpacity={1 - index * 0.15}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
