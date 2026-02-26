import { Camera } from "@/data/cameras";
import CameraCard from "./CameraCard";

type CameraListProps = {
  cameras: Camera[];
};

export default function CameraList({ cameras }: CameraListProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      }}
    >
      {cameras.map((camera) => (
        <CameraCard key={camera.id} camera={camera} />
      ))}
    </div>
  );
}