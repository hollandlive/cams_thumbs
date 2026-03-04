import { cameras } from "@/data/cameras";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function CameraPage({ params }: Props) {
  const camera = cameras.find((cam) => cam.slug === params.slug);

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
        src={`https://www.youtube.com/embed/${camera.youtubeId}`}
        title={camera.title}
        allowFullScreen
      />
    </div>
  );
}
