"use client";

import Image from "next/image";

import { videos } from "@/data/videos";
import { VideoCard } from "@/components/VideoCard";

// export default function Home() {
//   return (
//     <div>Hello</div>
//   );
// }

export default function Home() {
  return (
    <div>

{videos.map((video) => (
  <VideoCard
    key={video.id}
    video={video}
    onPlay={(v) => console.log(v)}
  />
))}
    </div>
  );
}
