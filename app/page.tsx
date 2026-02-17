import Image from "next/image";

import { videos } from "@/data/videos";

// export default function Home() {
//   return (
//     <div>Hello</div>
//   );
// }

export default function Home() {
  return (
    <div>
      {videos.map((video) => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <p>{video.channel}</p>
          <small>{video.views}</small>
        </div>
      ))}
    </div>
  );
}
