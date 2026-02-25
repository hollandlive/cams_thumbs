"use client";

const cameras = [
//   { id: 1, city: "Athens", title: "Syntagma Square", image: "/pic1.jpg" },
//   { id: 2, city: "Crete", title: "Chania Beach", image: "/pic2.jpg" },
//   { id: 3, city: "Mykonos", title: "Oia Sunset", image: "/pic3.jpg"  },
//   { id: 3, city: "Santorini", title: "RDM Sunset", image: "/pic4.jpg"  },
// ];

const [searchTerm, setSearchTerm] = useState("");

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by city..."
    />
  );
}

const filteredCameras = cameras.filter((camera) =>
  camera.city.toLowerCase().includes(searchTerm.toLowerCase())
);

function CameraList({ cameras }) {
  return (
    <div>
      {cameras.map((camera) => (
        <CameraCard key={camera.id} camera={camera} />
      ))}
    </div>
  );
}

function CameraCard({ camera }) {
  return (
    <div>
      <img src={camera.image} width="300" />
      <h3>{camera.title}</h3>
      <p>{camera.city}</p>
    </div>
  );
}