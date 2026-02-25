"use client";

import { useState } from "react";
import { cameras } from "@/data/cameras";
import CameraCard from "@/components/CameraCard";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCameras = cameras.filter((camera) =>
    camera.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by city..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredCameras.map((camera) => (
        <CameraCard key={camera.id} camera={camera} />
      ))}
    </div>
  );
}








// import Image from "next/image";

// import { videos } from "@/data/videos";
// import { VideoCard } from "@/components/VideoCard";

// import { cameras } from "@/data/cameras";

// export default function Home() {
//   return (
//     <div>

// {videos.map((camera) => (
//   <VideoCard
//     key={camera.id}
//     video={camera}
//     onPlay={(v) => console.log(v)}
//   />
// ))}
//     </div>
//   );
// }










// export default function Home() {
//   return (
//     <div>

// {videos.map((video) => (
//   <VideoCard
//     key={video.id}
//     video={video}
//     onPlay={(v) => console.log(v)}
//   />
// ))}
//     </div>
//   );
// }
