import { Users, Eye, Video, TrendingUp } from "lucide-react";
import { ChannelStats, formatNumber } from "@/lib/mock-analytics";
import { cn } from "@/lib/utils";

interface StatsOverviewProps {
  stats: ChannelStats;
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change?: {
    value: string;
    positive: boolean;
  };
}

function StatCard({ icon, label, value, change }: StatCardProps) {
  return (
    <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-zinc-800/50 p-2 text-gray-400">
          {icon}
        </div>
        <span className="text-xs font-light uppercase tracking-widest text-gray-400">
          {label}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-3xl font-light tracking-tight text-white">{value}</p>
        {change && (
          <p
            className={cn(
              "mt-1 text-sm",
              change.positive ? "text-cyan-400" : "text-red-400"
            )}
          >
            {change.positive ? "+" : ""}
            {change.value} this month
          </p>
        )}
      </div>
    </div>
  );
}

export function StatsOverview({ stats }: StatsOverviewProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        icon={<Users className="h-5 w-5" />}
        label="Subscribers"
        value={formatNumber(stats.total_subscribers)}
        change={{
          value: formatNumber(stats.subscriber_growth_30_days),
          positive: true,
        }}
      />
      <StatCard
        icon={<Eye className="h-5 w-5" />}
        label="Total Views"
        value={formatNumber(stats.total_views)}
      />
      <StatCard
        icon={<Video className="h-5 w-5" />}
        label="Total Videos"
        value={stats.total_videos.toString()}
      />
      <StatCard
        icon={<TrendingUp className="h-5 w-5" />}
        label="Views (30 Days)"
        value={formatNumber(stats.views_last_30_days)}
      />
    </div>
  );
}
