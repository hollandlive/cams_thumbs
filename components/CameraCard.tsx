import { Camera } from "@/data/cameras";

import Link from "next/link";

type CameraCardProps = {
  camera: Camera;
};

export default function CameraCard({ camera }: CameraCardProps) {
  return (
    <Link href={`/camera/${camera.slug}`}>
      <div className="card">
        <img src={camera.image} alt={camera.title} />
        <h3>{camera.title}</h3>
        <p>{camera.city}</p>
      </div>
    </Link>
  );
}
