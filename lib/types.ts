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
};
