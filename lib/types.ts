export type VideoStatus =
  | "Outline in progress"
  | "Outline done"
  | "Sections in creation"
  | "Sections done"
  | "Script Assembly"
  | "Voiceover in progress"
  | "Voiceover done"
  | "Images generating"
  | "Video assembly"
  | "Thumbnail creation"
  | "Upload pending"
  | "Published"
  | "Failed";

export type Video = {
  project_id: string;
  title: string;
  status: VideoStatus;
  created_at: string;
  total_sections: number;
  duration_hours: number;
  duration_minutes: number;
  main_characters: string;
  primary_locations: string;
  central_theme: string;
  tone: string;
  script?: string;
  thumbnail_suggestions?: string[];
};

// Pipeline stages in order
export const PIPELINE_STAGES = [
  "Outline",
  "Sections",
  "Script Assembly",
  "Voiceover",
  "Images",
  "Video Assembly",
  "Thumbnail",
  "Upload",
  "Published",
] as const;

export type PipelineStage = (typeof PIPELINE_STAGES)[number];

// Map status to pipeline stage index
export function getStageFromStatus(status: VideoStatus): number {
  const statusToStage: Record<VideoStatus, number> = {
    "Outline in progress": 0,
    "Outline done": 0,
    "Sections in creation": 1,
    "Sections done": 1,
    "Script Assembly": 2,
    "Voiceover in progress": 3,
    "Voiceover done": 3,
    "Images generating": 4,
    "Video assembly": 5,
    "Thumbnail creation": 6,
    "Upload pending": 7,
    "Published": 8,
    "Failed": -1,
  };
  return statusToStage[status];
}

// Check if a stage is complete based on current status
export function isStageComplete(status: VideoStatus, stageIndex: number): boolean {
  const currentStage = getStageFromStatus(status);
  if (status === "Failed") return false;

  // Check if status indicates the stage is done (not in progress)
  const doneStatuses: VideoStatus[] = [
    "Outline done",
    "Sections done",
    "Voiceover done",
    "Published",
  ];

  if (stageIndex < currentStage) return true;
  if (stageIndex === currentStage && doneStatuses.includes(status)) return true;

  return false;
}

// Check if script should be available based on status
export function hasScriptReady(status: VideoStatus): boolean {
  const postScriptStatuses: VideoStatus[] = [
    "Voiceover in progress",
    "Voiceover done",
    "Images generating",
    "Video assembly",
    "Thumbnail creation",
    "Upload pending",
    "Published",
  ];
  return postScriptStatuses.includes(status);
}
