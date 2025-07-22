export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  "craft-brainrot": {
    id: "craft-brainrot",
    title: "Craft Brainrot",
    description: "Welcome to the wonderful world of Craft Brainrot! This viral merge game has taken the internet by storm, combining Italian meme culture with addictive crafting gameplay.",
    image: "/assets/img/brainrot-craft.avif",
    url: "https://www.crazygames.com/game/craft-brainrot",
  },
};





