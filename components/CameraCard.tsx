import Link from "next/link";
import { Camera } from "@/data/cameras";

type CameraCardProps = {
  camera: Camera;
};

export default function CameraCard({ camera }: CameraCardProps) {
  return (
    <Link href={`/camera/${camera.slug}`}>
      <div className="card">
        <img
          src={`https://img.youtube.com/vi/${camera.youtubeId}/maxresdefault.jpg`}
          alt={camera.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />

        <h3>{camera.title}</h3>
        <p>{camera.city}</p>
      </div>
    </Link>
  );
}
