"use client";

import { useEffect, useState } from "react";
import { cameras } from "@/data/cameras";
import SearchBar from "@/components/SearchBar";
import CameraList from "@/components/CameraList";

export default function Page() {
  // Day 4 - Search & Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const filteredCameras = cameras.filter((camera) =>
    camera.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Day 5 - API Fetch (background)
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch("/api/tests")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setTests(data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <CameraList cameras={filteredCameras} />
    </div>
  );
}