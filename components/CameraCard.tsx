"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Camera } from "@/data/cameras";

// import Image from "next/image";

type CameraCardProps = {
  camera: Camera;
};

export default function CameraCard({ camera }: CameraCardProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    async function fetchViews() {
      const res = await fetch(`/api/views?slug=${camera.slug}`);
      const data = await res.json();
      setViews(data.views);
    }

    fetchViews();
  }, [camera.slug]);

  return (
    <Link href={`/camera/${camera.slug}`}>
      <div className="card">
        {/* 
          to be uptadet later
          <Image
          src={`https://img.youtube.com/vi/${camera.youtubeId}/hqdefault.jpg`}
          alt={camera.title}
          width={480}
          height={360}
        /> */}

        <img
          src={`https://img.youtube.com/vi/${camera.youtubeId}/maxresdefault.jpg`}
          alt={`Camera view of ${camera.title}`}
          style={{ width: "100%", borderRadius: "8px" }}
        />

        <h3>{camera.title}</h3>
        <p>{camera.city}</p>
        {views !== null && <p>👁 {views} views</p>}
      </div>
    </Link>
  );
}
