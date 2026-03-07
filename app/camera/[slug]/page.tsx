import { cameras } from "@/data/cameras";
import { notFound } from "next/navigation";
import Link from "next/link";
import ViewCounter from "@/components/ViewCounter";

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
          url: `https://img.youtube.com/vi/${camera.youtubeId}/hqdefault.jpg`,
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

  const relatedCameras = cameras.filter(
    (cam) => cam.city === camera.city && cam.slug !== slug,
  );

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

      <ViewCounter slug={slug} />

      <p style={{ marginTop: "20px", maxWidth: "700px" }}>
        {camera.description}
      </p>

      {relatedCameras.length > 0 && (
        <>
          <h2 style={{ marginTop: "40px" }}>More webcams in {camera.city}</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            {relatedCameras.map((cam) => (
              <Link
                key={cam.slug}
                href={`/camera/${cam.slug}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div style={{ width: "200px" }}>
                  <img
                    src={`https://img.youtube.com/vi/${cam.youtubeId}/hqdefault.jpg`}
                    alt={cam.title}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                  <p>{cam.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
