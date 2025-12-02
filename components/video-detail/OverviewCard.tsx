import { Video } from "@/lib/types";
import { Users, MapPin, Lightbulb, Smile, Layers } from "lucide-react";

interface OverviewCardProps {
  video: Video;
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-gray-500">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm text-white">{value}</p>
      </div>
    </div>
  );
}

export function OverviewCard({ video }: OverviewCardProps) {
  return (
    <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-6">
      <h3 className="mb-6 text-xs font-light uppercase tracking-widest text-gray-400">
        Overview
      </h3>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <InfoRow
          icon={<Users className="h-4 w-4" />}
          label="Main Characters"
          value={video.main_characters}
        />
        <InfoRow
          icon={<MapPin className="h-4 w-4" />}
          label="Primary Locations"
          value={video.primary_locations}
        />
        <InfoRow
          icon={<Lightbulb className="h-4 w-4" />}
          label="Central Theme"
          value={video.central_theme}
        />
        <InfoRow
          icon={<Smile className="h-4 w-4" />}
          label="Tone"
          value={video.tone}
        />
        <InfoRow
          icon={<Layers className="h-4 w-4" />}
          label="Total Sections"
          value={video.total_sections}
        />
      </div>
    </div>
  );
}
