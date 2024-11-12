import { IPost } from "../types/Post";

export const Post: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/WigorCosta21.png",
      name: "Wigor",
      role: "Dev Fullstack",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "@WigorCosta21",
      },
    ],
    publishedAt: new Date("2024-11-10 22:12:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "@diegofernandes",
      },
    ],
    publishedAt: new Date("2024-11-10 22:12:00"),
  },
];
