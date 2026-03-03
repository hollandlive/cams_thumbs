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
    youtubeId: "PUT_REAL_YOUTUBE_ID_HERE",
  },
  {
    id: 2,
    title: "Chania Beach",
    city: "Chania",
    image: "/pic2.jpg",
    slug: "chania-beach",
    youtubeId: "PUT_REAL_YOUTUBE_ID_HERE",
  },
    {
    id: 3,
    title: "Oia Beach",
    city: "Crete",
    image: "/pic3.jpg",
    slug: "mykonos-beach",
    youtubeId: "PUT_REAL_YOUTUBE_ID_HERE",
  },
    {
    id: 4,
    title: "Chania Beach",
    city: "Mykonos",
    image: "/pic4.jpg",
    slug: "crete-beach",
    youtubeId: "PUT_REAL_YOUTUBE_ID_HERE",
  },
];