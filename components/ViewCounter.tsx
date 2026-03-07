"use client";

import { useEffect, useState } from "react";

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    async function trackView() {
      await fetch("/api/views", {
        method: "POST",
        body: JSON.stringify({ slug }),
      });

      const res = await fetch(`/api/views?slug=${slug}`);
      const data = await res.json();

      setViews(data.views);
    }

    trackView();
  }, [slug]);

  if (views === null) return null;

  return <p>👁 {views} views</p>;
}
