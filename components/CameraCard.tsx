import { Camera } from "@/data/cameras";

export default function CameraCard({ camera }: { camera: Camera }) {
  return (
    <div>
      <img src={camera.image} width="300" />
      <h3>{camera.title}</h3>
      <p>{camera.city}</p>
    </div>
  );
}