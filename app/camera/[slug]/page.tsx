import { cameras } from "@/data/cameras";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const camera = cameras.find((cam) => cam.slug === slug);

  if (!camera) {
    return {
      title: "Camera Not Found",
    };
  }

  return {
    title: `${camera.title} Live Webcam`,
    description: `Watch the live webcam from ${camera.title} in ${camera.city}.`,
    openGraph: {
      title: `${camera.title} Live Webcam`,
      description: `Watch the live webcam from ${camera.title} in ${camera.city}.`,
      images: [
        {
          url: camera.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

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
