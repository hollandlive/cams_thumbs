import { Camera } from "@/data/cameras";

type CameraCardProps = {
  camera: Camera;
};

export default function CameraCard({ camera }: CameraCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <img
        src={camera.image}
        alt={camera.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      <div style={{ padding: "10px" }}>
        <h3>{camera.title}</h3>
        <p>{camera.city}</p>
      </div>
    </div>
  );
}