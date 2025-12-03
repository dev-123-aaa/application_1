export type ChannelStats = {
  total_subscribers: number;
  total_views: number;
  total_videos: number;
  views_last_30_days: number;
  subscriber_growth_30_days: number;
};

export type VideoAnalytics = {
  video_id: string;
  title: string;
  published_at: string;
  views: number;
  likes: number;
  comments: number;
  watch_time_hours: number;
  ctr: number;
  avg_view_duration: string;
  thumbnail_url: string;
};

export type DailyViews = {
  date: string;
  views: number;
};

export const channelStats: ChannelStats = {
  total_subscribers: 47823,
  total_views: 2847291,
  total_videos: 12,
  views_last_30_days: 342156,
  subscriber_growth_30_days: 3241,
};

export const videoAnalytics: VideoAnalytics[] = [
  {
    video_id: "vid_001",
    title: "Why Squidward Is Actually The Main Character",
    published_at: "2024-11-15T10:30:00Z",
    views: 847293,
    likes: 42365,
    comments: 3892,
    watch_time_hours: 28456,
    ctr: 8.7,
    avg_view_duration: "6:42",
    thumbnail_url: "https://placehold.co/320x180/1a1a1a/00d4ff?text=Squidward",
  },
  {
    video_id: "vid_007",
    title: "SpongeBob Characters Ranked by Intelligence",
    published_at: "2024-10-28T14:00:00Z",
    views: 623481,
    likes: 31245,
    comments: 2847,
    watch_time_hours: 19823,
    ctr: 7.2,
    avg_view_duration: "5:18",
    thumbnail_url: "https://placehold.co/320x180/1a1a1a/ffd700?text=Rankings",
  },
  {
    video_id: "vid_008",
    title: "The Hidden Message in Every Krusty Krab Episode",
    published_at: "2024-10-15T09:00:00Z",
    views: 512847,
    likes: 28934,
    comments: 2156,
    watch_time_hours: 15623,
    ctr: 6.8,
    avg_view_duration: "4:56",
    thumbnail_url: "https://placehold.co/320x180/1a1a1a/00d4ff?text=Krusty+Krab",
  },
  {
    video_id: "vid_009",
    title: "Why Gary Is The Smartest Character",
    published_at: "2024-09-22T16:30:00Z",
    views: 298456,
    likes: 15678,
    comments: 1423,
    watch_time_hours: 8934,
    ctr: 5.9,
    avg_view_duration: "4:12",
    thumbnail_url: "https://placehold.co/320x180/1a1a1a/22c55e?text=Gary",
  },
  {
    video_id: "vid_010",
    title: "Plankton's Plans That Actually Made Sense",
    published_at: "2024-09-10T11:00:00Z",
    views: 187234,
    likes: 9856,
    comments: 892,
    watch_time_hours: 5234,
    ctr: 5.4,
    avg_view_duration: "3:48",
    thumbnail_url: "https://placehold.co/320x180/1a1a1a/ff4444?text=Plankton",
  },
  {
    video_id: "vid_011",
    title: "The Economics of Bikini Bottom Explained",
    published_at: "2024-08-28T13:00:00Z",
    views: 156782,
    likes: 8234,
    comments: 756,
    watch_time_hours: 4567,
    ctr: 4.8,
    avg_view_duration: "5:34",
    thumbnail_url: "https://placehold.co/320x180/1a1a1a/ffd700?text=Economics",
  },
  {
    video_id: "vid_012",
    title: "Every SpongeBob Movie Ranked",
    published_at: "2024-08-15T10:00:00Z",
    views: 98234,
    likes: 5432,
    comments: 534,
    watch_time_hours: 2845,
    ctr: 4.2,
    avg_view_duration: "7:23",
    thumbnail_url: "https://placehold.co/320x180/1a1a1a/00d4ff?text=Movies",
  },
  {
    video_id: "vid_013",
    title: "Sandy Cheeks: Texas Legend",
    published_at: "2024-08-01T15:00:00Z",
    views: 67891,
    likes: 3567,
    comments: 423,
    watch_time_hours: 1923,
    ctr: 3.9,
    avg_view_duration: "4:45",
    thumbnail_url: "https://placehold.co/320x180/1a1a1a/ffd700?text=Sandy",
  },
  {
    video_id: "vid_014",
    title: "Top 10 Most Emotional Episodes",
    published_at: "2024-07-20T12:00:00Z",
    views: 45623,
    likes: 2891,
    comments: 345,
    watch_time_hours: 1456,
    ctr: 3.5,
    avg_view_duration: "6:12",
    thumbnail_url: "https://placehold.co/320x180/1a1a1a/00d4ff?text=Emotional",
  },
  {
    video_id: "vid_015",
    title: "Mrs. Puff's Criminal Record Analysis",
    published_at: "2024-07-05T09:30:00Z",
    views: 34567,
    likes: 1892,
    comments: 234,
    watch_time_hours: 987,
    ctr: 3.2,
    avg_view_duration: "3:56",
    thumbnail_url: "https://placehold.co/320x180/1a1a1a/ff4444?text=Mrs+Puff",
  },
  {
    video_id: "vid_016",
    title: "The Jellyfish Fields Mystery",
    published_at: "2024-06-22T14:00:00Z",
    views: 23456,
    likes: 1234,
    comments: 178,
    watch_time_hours: 678,
    ctr: 2.9,
    avg_view_duration: "4:23",
    thumbnail_url: "https://placehold.co/320x180/1a1a1a/ffd700?text=Jellyfish",
  },
  {
    video_id: "vid_017",
    title: "Welcome to My Channel - Introduction",
    published_at: "2024-06-01T10:00:00Z",
    views: 12345,
    likes: 892,
    comments: 156,
    watch_time_hours: 345,
    ctr: 2.4,
    avg_view_duration: "2:34",
    thumbnail_url: "https://placehold.co/320x180/1a1a1a/00d4ff?text=Welcome",
  },
];

// Generate 30 days of view data
function generateDailyViews(): DailyViews[] {
  const data: DailyViews[] = [];
  const today = new Date();

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    // Generate realistic-looking view counts with some variation
    const baseViews = 8000 + Math.random() * 4000;
    const weekendBoost = date.getDay() === 0 || date.getDay() === 6 ? 1.3 : 1;
    const trend = 1 + (29 - i) * 0.01; // Slight upward trend
    const views = Math.round(baseViews * weekendBoost * trend);

    data.push({
      date: date.toISOString().split("T")[0],
      views,
    });
  }

  return data;
}

export const dailyViews: DailyViews[] = generateDailyViews();

// Helper function to format large numbers
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

// Helper function to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Get top videos by views
export function getTopVideos(count: number = 5): VideoAnalytics[] {
  return [...videoAnalytics]
    .sort((a, b) => b.views - a.views)
    .slice(0, count);
}
