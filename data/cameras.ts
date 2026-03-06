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
    title: "Tinos Island",
    city: "Tinos",
    slug: "tinos-xxx-port",
    youtubeId: "Exe8qPD7yGc",
    description: "Watch the live webcam from Syntagma Square, the central square of Athens located in front of the Greek Parliament building",
  },
{
  id: 6,
  title: "Acropolis View",
  city: "Athens",
  slug: "athens-acropolis",
  youtubeId: "VdkSC_KLsnY",
  description: "Live view of the Acropolis hill and Parthenon in Athens, Greece.",
}
]