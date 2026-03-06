export interface Camera {
  id: number;
  city: string;
  title: string;
  slug: string;
  youtubeId: string;
  description: string;
}

export const cameras: Camera[] = [

  {
    id: 1,
    title: "Syntagma Square",
    city: "Athens",
    slug: "athens-syntagma",
    youtubeId: "lV5h9Ql_IcE",
    description: 
      "Watch the live webcam from Syntagma Square, the central square of Athens located in front of the Greek Parliament building",
  },
   {
  id: 2,
  title: "Monastiraki Square",
  city: "Athens",
  slug: "athens-monastiraki",
  youtubeId: "55XrMrE4t00",
  description:
    "Monastiraki Square is one of the busiest tourist areas in Athens, near the Acropolis."
},
    {
    id: 3,
    title: "Omonia",
    city: "Athens",
    slug: "athens-omonia",
    youtubeId: "faNqnWXKweM",
    description: "Watch the live webcam from Omonia Square, the central square of Athens located its the fird main Square in Athens together with Omonia and Monastiraki",
  },
   {
    id: 4,
    title: "Pedion Areos",
    city: "Athens",
    slug: "athens-pedion-areos",
    youtubeId: "RSH3Qn7QZ-I",
    description: "Watch the live webcam from Pedion Areos, one of the central parks of Athens near Omonia Square"
   },
   {
    id: 5,
    title: "Stavros Niarchos",
    city: "Athens",
    slug: "athens-stavros-niarchos",
    youtubeId: "pKy39XzTZ8o",
    description: "Watch the night fontain live webcam from Stavros Niarchos the cultural center in the SOuthern Athens",
  },
    {
    id: 6,
    title: "Tinos Island",
    city: "Tinos",
    slug: "tinos-port",
    youtubeId: "Exe8qPD7yGc",
    description: "Watch the live webcam from Tinos island, one of the famous Greek travel islands!",
  },
{
  id: 7,
  title: "Tinos Island",
  city: "Tinos",
  slug: "tinos-old-port",
  youtubeId: "8imxj_zp0fk",
  description: "Watch the live webcam from the Old Port of Tinos island, one of the famous Greek travel islands!",
},
{
  id: 8,
  title: "Kos Island",
  city: "Kos",
  slug: "kos-island-panorama",
  youtubeId: "Gzl2M_eGpfM",
  description: "Live webcam at the Kos Island, one of the main Greek Travel destinations for tourism in 2026",
},
{
  id: 9,
  title: "Thassos Island",
  city: "Thassos",
  slug: "thassos-island-greece",
  youtubeId: "Zksbxgm6VHA",
  description: "Live webcam at the Thassos Island, one of the popular touristic Greek islands and Travel  destinations in 2026",
},
{
  id: 10,
  title: "Athens Center Walk",
  city: "Athens",
  slug: "athens-center-walk",
  youtubeId: "9KBdwEpgTcU",
  description: "Watch the live walk from Athens, the center of the Greek capital.",
},
{
  id: 11,
  title: "Patras Center Walk",
  city: "Patras",
  slug: "patras-center-walk",
  youtubeId: "vDaqTgBYyfk",
  description: "Watch the live walk from Patras, the center of the 3rd biggest Greek city.",
},
{
  id: 12,
  title: "Patras Rio Bridge",
  city: "Patras",
  slug: "patras-rio-bridge",
  youtubeId: "tp6Oo0QR5_8",
  description: "Watch the live walk from Patras, the famous Greek Rio bridge.",
},
]