export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  iframeUrl?: string; // 可直接 iframe 嵌入的地址（可选）
}

export const games: Record<string, Game> = {
  "craft-brainrot": {
    id: "craft-brainrot",
    title: "Craft Brainrot",
    description: "Welcome to the wonderful world of Craft Brainrot! This viral merge game has taken the internet by storm, combining Italian meme culture with addictive crafting gameplay.",
    image: "https://craft-brainrot.com/covers/1757839314934.webp",
    url: "https://craft-brainrot.com/",
    iframeUrl: "https://g.igroutka.ru/games/1316/LTQwlYiRXCv54unq/07592a73-552b-44c3-a16b-805a1603a6e3/index.html",
  },
  "merge-brainrot": {
    id: "merge-brainrot",
    title: "Merge Brainrot",
    description: "Drop, merge, and evolve the most cursed Italian Brainrot memes! Keep merging identical memes to unlock stranger and more chaotic evolutions.",
    image: "https://craft-brainrot.com/covers/1757843344751.webp",
    url: "https://craft-brainrot.com/games/Merge-Brainrot",
  },
  "brainrot-merge-drop-puzzles": {
    id: "brainrot-merge-drop-puzzles",
    title: "Brainrot Merge Drop Puzzles",
    description: "Drag, drop and merge iconic Brainrot memes in this hilarious puzzle game! Merge identical memes to unlock new, funnier, and weirder Brainrot forms.",
    image: "https://craft-brainrot.com/covers/1757843451042.webp",
    url: "https://craft-brainrot.com/games/Brainrot-Merge-Drop-Puzzles",
  },
  "merge-brainrot-2": {
    id: "merge-brainrot-2",
    title: "Merge Brainrot 2",
    description: "The sequel to the viral Brainrot merge madness is here! More memes, more chaos, more unexpected combinations to discover.",
    image: "https://craft-brainrot.com/covers/1757843504808.webp",
    url: "https://craft-brainrot.com/games/Merge-Brainrot-2",
  },
  "brainrot-boing-boing-merge": {
    id: "brainrot-boing-boing-merge",
    title: "Brainrot Boing Boing Merge",
    description: "A bouncy twist on Brainrot merging! Watch your favorite meme characters boing around as you merge them into wild new creations.",
    image: "https://craft-brainrot.com/covers/1757843574313.webp",
    url: "https://craft-brainrot.com/games/Brainrot-Boing-Boing-Merge",
  },
  "labuba-merge": {
    id: "labuba-merge",
    title: "Labuba Merge",
    description: "Merge the legendary Labuba character with other Brainrot icons in this addictive casual puzzle game.",
    image: "https://craft-brainrot.com/covers/1757843641597.webp",
    url: "https://craft-brainrot.com/games/Labuba-Merge",
  },
  "italian-brainrot-find-the-stars": {
    id: "italian-brainrot-find-the-stars",
    title: "Italian Brainrot Find the Stars",
    description: "A hidden object game with a Brainrot twist! Find all 12 hidden stars in each image across 12 levels before time runs out.",
    image: "https://craft-brainrot.com/covers/1757842252849.webp",
    url: "https://craft-brainrot.com/games/Italian-Brainrot-Find-the-Stars",
  },
  "italian-brainrot-survival-arena": {
    id: "italian-brainrot-survival-arena",
    title: "Italian Brainrot Survival Arena",
    description: "Survive the chaos in the Italian Brainrot arena! Face wave after wave of meme enemies and prove your skills.",
    image: "https://craft-brainrot.com/covers/1757842391472.webp",
    url: "https://craft-brainrot.com/games/Italian-Brainrot-Survival-Arena",
  },
  "brainrot-merge": {
    id: "brainrot-merge",
    title: "Brainrot Merge",
    description: "The original Brainrot Merge experience! Combine your favorite Italian meme characters into increasingly bizarre creations.",
    image: "https://craft-brainrot.com/covers/1757842524463.webp",
    url: "https://craft-brainrot.com/games/Brainrot-Merge",
  },
  "italian-brainrot-challenge": {
    id: "italian-brainrot-challenge",
    title: "Italian Brainrot Challenge",
    description: "Take on the ultimate Italian Brainrot challenge! Test your knowledge and reflexes with these meme-inspired puzzles.",
    image: "https://craft-brainrot.com/covers/1757842594775.webp",
    url: "https://craft-brainrot.com/games/Italian-Brainrot-Challenge",
  },
  "guess-the-italian-brainrot-animals": {
    id: "guess-the-italian-brainrot-animals",
    title: "Guess The Italian Brainrot Animals",
    description: "Can you identify all the wild Italian Brainrot animals? Test your meme knowledge in this fun guessing game!",
    image: "https://craft-brainrot.com/covers/1757842734057.webp",
    url: "https://craft-brainrot.com/games/Guess-The-Italian-Brainrot-Animals",
  },
  "brainrot-hole": {
    id: "brainrot-hole",
    title: "Brainrot Hole",
    description: "Control a mysterious hole that swallows everything! Guide it across levels, devour objects, and defeat Brainrot enemies in this addictive casual game.",
    image: "https://craft-brainrot.com/covers/1759145201820.webp",
    url: "https://craft-brainrot.com/games/Brainrot-Hole",
  },
  "italian-brainrot-puzzle": {
    id: "italian-brainrot-puzzle",
    title: "Italian Brainrot Puzzle",
    description: "Solve fun and challenging puzzles featuring your favorite Italian Brainrot meme characters!",
    image: "https://craft-brainrot.com/covers/1759145297262.webp",
    url: "https://craft-brainrot.com/games/Italian-Brainrot-Puzzle",
  },
  "sprunki-phase-brainrot": {
    id: "sprunki-phase-brainrot",
    title: "Sprunki Phase Brainrot",
    description: "The Sprunki universe meets Italian Brainrot in this wild crossover game! Create chaotic music and meme mashups.",
    image: "https://craft-brainrot.com/covers/1759145375357.webp",
    url: "https://craft-brainrot.com/games/Sprunki-Phase-Brainrot",
  },
  "italian-brainrot-baby-clicker": {
    id: "italian-brainrot-baby-clicker",
    title: "Italian Brainrot Baby Clicker",
    description: "Click to unleash the baby Brainrot chaos! An addictive clicker game featuring the cutest and most cursed Italian meme babies.",
    image: "https://craft-brainrot.com/covers/1760789572245.webp",
    url: "https://craft-brainrot.com/games/Italian-Brainrot-Baby-Clicker",
  },
  "brainrot-click-to-hatch": {
    id: "brainrot-click-to-hatch",
    title: "Brainrot Click to Hatch",
    description: "Click to hatch mysterious Brainrot eggs and discover what bizarre meme creature comes out! Collect them all!",
    image: "https://craft-brainrot.com/covers/1760789754668.webp",
    url: "https://craft-brainrot.com/games/Brainrot-Click-to-Hatch",
  },
};

// 游戏列表（有序展示）
export const gameList: Game[] = Object.values(games);