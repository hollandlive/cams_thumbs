import { cameras } from "@/data/cameras";
import { notFound } from "next/navigation";

export default async function CameraPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const camera = cameras.find((cam) => cam.slug === slug);

  if (!camera) {
    return notFound();
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{camera.title}</h1>
      <p>{camera.city}</p>

      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${camera.youtubeId}?autoplay=1&mute=1`}
        title={camera.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
