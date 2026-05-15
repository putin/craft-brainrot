import { siteConfig } from "./site";

export const content = {
  header: {
    title: siteConfig.name,
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Start Play", href: "#game-section" },
        { text: "Features", href: "#features" },
        { text: "What Is", href: "#what-is" },
        { text: "How to Play", href: "#how-to-play" },
        { text: "FAQ", href: "#faq" },
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: `Play ${siteConfig.name} - a free viral merge game right in your browser. No downloads required.`,
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Telegram", href: "https://t.me/s/free_unblocked_games" },
        { text: "CAL", href: "https://cal.com/vincent-ai" },
        { text: "Patreon", href: "https://www.patreon.com/posts/play-free-crazy-130738673" },
        { text: "Linktr", href: "https://linktr.ee/vincent20250520" },
        { text: "Creem", href: "https://www.creem.io/bip/vincent-ai" },
        { text: "GetAllMyLinks", href: "https://getallmylinks.com/vincent" },
        { text: "AllMyLinks", href: "https://allmylinks.com/vincent04065" },
        { text: "Pinterest | Craft Brainrot", href: "https://www.pinterest.com/pin/581245895696208484/" },
        { text: "Pinterest | Doodle Baseball", href: "https://www.pinterest.com/pin/581245895696901681/" },
        { text: "Github | Craft Brainrot", href: "https://github.com/WeiWenxing/crazycattle3d/blob/main/README_EN.md" },
      ]
    },
    games: {  // 添加 games section
      title: "Games",
      links: [
        { text: "Craft Brainrot", href: "https://www.crazygames.com/game/craft-brainrot" },
      ]
    },
    social: {
      title: "Share",
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=${encodeURIComponent(siteConfig.name)}&u=${encodeURIComponent(siteConfig.url)}`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteConfig.name)}&url=${encodeURIComponent(siteConfig.url)}&hashtags=${siteConfig.social.twitter},Games`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Partners", href: "/partners" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: "© {year} Craft Brainrot. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate Craft Brainrot",
    votes: "votes",
    initialRating: 4.8,
    initialVotes: 146
  },
  gameSection: {
    title: "Craft Brainrot",
    game: {
      url: 'https://g.igroutka.ru/games/1316/LTQwlYiRXCv54unq/07592a73-552b-44c3-a16b-805a1603a6e3/index.html',
      title: "craft-brainrot",
      externalUrl: 'https://craft-brainrot.com/'
    }
  },

  howToPlay: {
    title: "How to Play Craft Brainrot Online Free - Game Controls & Guide",
    description: "Playing Craft Brainrot online is easy: Use your mouse to click and interact with items, hold down to move items around the crafting area when you play this free browser game. On mobile devices, tap and hold to interact and move items. The game encourages creative experimentation as you combine different meme elements to unlock new characters and items.\n\n" +
      "Success in Craft Brainrot depends on mastering the merge mechanics in this online game. Experiment with different combinations to discover new items, start with basic items and work your way up to more complex merges. Pay attention to the Italian meme culture theme for hints, and don't be afraid to try unexpected combinations.\n\n" +
      "Win more Craft Brainrot discoveries by taking your time to explore all possibilities. Each successful combination reveals something unexpected, keeping the gameplay fresh and entertaining. The simple click-and-merge mechanics make it accessible while the vast number of possible combinations provides depth for those who want to explore every possibility.",
    image: "/assets/img/brainrot-craft.avif",
    imageAlt: "Craft Brainrot Game Guide - Play Online, Controls, Merging, and Strategy Tutorial"
  },
  whatIs: {
    title: "Everything about Craft Brainrot - Play Game Online Free",
    description: "Craft Brainrot is a viral merge game that has taken the internet by storm, combining authentic Italian meme culture with addictive crafting gameplay. You can play this game anytime. Unlike traditional merge games, we focus on creative experimentation and meme culture integration rather than simple item collection.\n\n" +
      "Master the art of merging items from Italian meme culture across hundreds of possible combinations in this exciting online game. Each successful merge reveals something unexpected, keeping the gameplay fresh and entertaining. The game features simple click-and-merge mechanics that make it accessible while the vast number of possible combinations provides depth.\n\n" +
      "While the game is designed to be accessible to players of all skill levels, mastering our unique merge system delivers a deeply satisfying experience. Play this free online game directly in your browser - no downloads needed, just pure addictive merging fun that keeps you coming back for more.",
    logo: {
      src: "/assets/img/brainrot-craft.avif",
      alt: "Craft Brainrot - Free Online Game Logo"
    }
  },
  faq: {
    title: "Frequently Asked Questions - Craft Brainrot Online Game",
    items: [
      {
        value: "where-to-play-original",
        question: "Where can I find and play Craft Brainrot online?",
        answer: "Craft Brainrot can be played directly on our website. You can also play Craft Brainrot on CrazyGames and various other free online games websites that host web-based versions. This allows you to play the game directly in your browser on Windows, Mac, Linux, and other web-supported environments."
      },
      {
        value: "play-on-mobile",
        question: "Can I play Craft Brainrot online on my mobile device?",
        answer: "Yes, since Craft Brainrot is available in web-based environments (as a browser game), you can often play this free online game on mobile devices (phones and tablets) that support modern web browsers. The game features touch controls for mobile devices."
      },
      {
        value: "creator-info",
        question: "Who is the creator of the Craft Brainrot game?",
        answer: "Craft Brainrot is a viral merge game that has taken the internet by storm. Many players enjoy playing this free online game for its unique combination of Italian meme culture with addictive crafting gameplay!"
      },
      {
        value: "game-rating",
        question: "What is the rating for the Craft Brainrot online game?",
        answer: "Craft Brainrot is rated E for Everyone, making it suitable for players of all ages who enjoy puzzle and merge games. It's widely regarded as a fun, addictive, and engaging free online merge game."
      },
      {
        value: "new-player-difficulty",
        question: "How difficult is the Craft Brainrot online game for new players?",
        answer: "Craft Brainrot is designed to be accessible to players of all skill levels. The simple click-and-merge mechanics make it easy to learn, while the vast number of possible combinations provides depth for those who want to explore every possibility."
      },
      {
        value: "technical-requirements-online",
        question: "What are the technical requirements to play Craft Brainrot online smoothly?",
        answer: "To best play Craft Brainrot online for free, we recommend using a modern browser (Chrome, Firefox, Safari, or Edge) and a stable internet connection. The game is optimized to run smoothly on most devices, including smartphones, tablets, and computers with web browsers."
      },
      {
        value: "available-game-modes",
        question: "What game modes are available when you play Craft Brainrot online?",
        answer: "Craft Brainrot features an exciting merge mode where you combine different items from Italian meme culture to discover new characters and items. Each successful combination reveals something unexpected, keeping the gameplay fresh and entertaining."
      },
      {
        value: "comfort-settings-online-game",
        question: "How can I adjust Craft Brainrot for a more comfortable online gaming experience?",
        answer: "Craft Brainrot includes simple controls that work well across all devices. You can adjust your browser settings for optimal performance. The game also features visual indicators and intuitive controls for better user experience."
      },
      {
        value: "winning-tactics-game",
        question: "What tactics help secure victories when I play the Craft Brainrot game?",
        answer: "Mastering Craft Brainrot requires understanding of merge mechanics and creative experimentation. Start by experimenting with different combinations to discover new items, pay attention to the Italian meme culture theme for hints, and don't be afraid to try unexpected combinations."
      }
    ]
  },
  features: {
    title: "Revolutionary Features of Craft Brainrot - Play Free Online Game",
    items: [
      {
        title: "Unique Meme Culture Integration",
        description: "Craft Brainrot stands out by incorporating authentic Italian meme culture into its gameplay. Every character and item has been carefully designed to reflect the absurd humor that makes brainrot content so entertaining. The game creates a unique gaming experience through creative experimentation and meme culture integration."
      },
      {
        title: "Endless Combination Possibilities",
        description: "With hundreds of items to discover, Craft Brainrot offers virtually unlimited replay value. Each merge attempt can lead to surprising new discoveries, keeping players engaged for hours. The game features simple click-and-merge mechanics that make it accessible while the vast number of possible combinations provides depth."
      },
      {
        title: "Cross-Platform Compatibility",
        description: "Whether you're playing on mobile, tablet, or desktop, the game delivers a seamless experience across all devices. The intuitive touch controls make it perfect for gaming on the go. The game requires no downloads and runs directly in modern web browsers."
      },
      {
        title: "Vibrant Visual Design",
        description: "The game features colorful, cartoon-style graphics that perfectly complement its humorous theme. Every character is instantly recognizable and bursting with personality. The visual design enhances the overall gaming experience and makes the game appealing to players of all ages."
      }
    ]
  }
} as const;


