"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVideos } from "@/lib/contexts/VideoContext";

export function Header() {
  const { openModal } = useVideos();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-extralight tracking-wide text-white">
            <span className="text-cyan-400">Cartoonolgy</span> Studio
          </h1>
        </div>

        <Button variant="outline" size="sm" className="gap-2" onClick={openModal}>
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">New Video</span>
        </Button>
      </div>
    </header>
  );
}
