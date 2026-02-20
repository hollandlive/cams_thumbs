"use client";

import { Play, ExternalLink } from "lucide-react";

import type { Video } from "@/data/videos";

interface VideoCardProps {
  video: Video;
  onPlay: (video: Video) => void;
}

export function VideoCard({ video, onPlay }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${video.id}`;

  return (
  <div onClick={() => onPlay(video)} style={{ cursor: "pointer", marginBottom: "20px" }}>
    <img 
      src={thumbnailUrl}
      alt={video.title}
      style={{ width: "100%", maxWidth: "400px" }}
      onError={(e) => {
        (e.target as HTMLImageElement).src =
        `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
        }}
    />
    <h3>{video.title}</h3>
    <p>{video.channel}</p>
  </div>
);

}
