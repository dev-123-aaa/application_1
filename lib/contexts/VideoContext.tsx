"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Video } from "@/lib/types";
import { mockVideos } from "@/lib/mock-data";

interface VideoContextValue {
  videos: Video[];
  addVideo: (video: Video) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const VideoContext = createContext<VideoContextValue | undefined>(undefined);

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [videos, setVideos] = useState<Video[]>(mockVideos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addVideo = useCallback((video: Video) => {
    setVideos((prev) => [video, ...prev]);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <VideoContext.Provider
      value={{
        videos,
        addVideo,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export function useVideos() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideos must be used within a VideoProvider");
  }
  return context;
}
