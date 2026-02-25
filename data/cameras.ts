export interface Camera {
  id: number;
  city: string;
  title: string;
  image: string;
}

export const cameras: Camera[] = [
  { id: 1, city: "Athens", title: "Syntagma Square", image: "/pic1.jpg" },
  { id: 2, city: "Crete", title: "Chania Beach", image: "/pic2.jpg" },
  { id: 3, city: "Mykonos", title: "Oia Sunset", image: "/pic3.jpg" },
  { id: 4, city: "Santorini", title: "RDM Sunset", image: "/pic4.jpg" },
];