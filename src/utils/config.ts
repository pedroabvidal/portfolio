export const config = {
  portfolioRoot: "https://portfolio.pedroabvidal.com/",
  links: {
    sobre: "https://portfolio.pedroabvidal.com/sobre",
    foto: "https://portfolio.pedroabvidal.com/foto",
    texto: "https://portfolio.pedroabvidal.com/texto",
    video: "https://portfolio.pedroabvidal.com/video",
  },
  videoTiles: [
    {
      title: "campanhas",
      href: "https://portfolio.pedroabvidal.com/campanhas",
      image: "/public/campanhas.jpg",
    },
    {
      title: "projetos",
      href: "https://portfolio.pedroabvidal.com/projetos",
      image: "/public/projetos.png",
    },
    {
      title: "pesquisa",
      href: "https://portfolio.pedroabvidal.com/pesquisa",
      image: "/public/pesquisa.jpg",
    },
  ],
  backgroundImage: "/public/bg.jpg",
  name: "Pedro A. Vidal",
} as const;
