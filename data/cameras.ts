export interface Camera {
  id: number;
  city: string;
  title: string;
  image: string;
    slug: string;
  youtubeId: string;
}

export const cameras: Camera[] = [

  {
    id: 1,
    title: "Syntagma Square",
    city: "Athens",
    image: "/pic1.jpg",
    slug: "athens-syntagma",
    youtubeId: "lV5h9Ql_IcE",
  },
  {
    id: 2,
    title: "Chania Beach",
    city: "Chania",
    image: "/pic2.jpg",
    slug: "chania-xxx-beach",
    youtubeId: "Gd9d4q6WvUY",
  },
    {
    id: 3,
    title: "Oia Beach",
    city: "Crete",
    image: "/pic3.jpg",
    slug: "mykonos-beach",
    youtubeId: "gsViKzj7nuQ",
  },
    {
    id: 4,
    title: "Tinos Island",
    city: "Tinos",
    image: "/pic4.jpg",
    slug: "tinos-xxx-port",
    youtubeId: "Exe8qPD7yGc",
  },
];