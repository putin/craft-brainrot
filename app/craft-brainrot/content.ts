import { GameContent } from '@/types/game'

export function getContent(): GameContent {
  return {
    meta: {
      title: 'Craft Brainrot - Play the Viral Merge Game Online',
      description: 'Welcome to the wonderful world of Craft Brainrot! This viral merge game has taken the internet by storm, combining Italian meme culture with addictive crafting gameplay.',
      keywords: 'Craft Brainrot, merge game, Italian meme, viral game, crafting, brainrot, online game, free game',
    },
    hero: {
      title: 'Craft Brainrot',
      subtitle: 'The Viral Merge Game That\'s Taking Over the Internet',
      description: 'Welcome to the wonderful world of Craft Brainrot! This viral merge game has taken the internet by storm, combining Italian meme culture with addictive crafting gameplay. Whether you\'re curious about this trending game or already diving into its chaotic fun, here\'s everything you need to know about Craft Brainrot.',
      image: '/assets/img/brainrot-craft.avif',
      cta: {
        text: 'Play Now',
        href: '/game/craft-brainrot/',
      },
    },
    features: [
      {
        title: 'Unique Meme Culture Integration',
        description: 'Craft Brainrot stands out by incorporating authentic Italian meme culture into its gameplay. Every character and item has been carefully designed to reflect the absurd humor that makes brainrot content so entertaining.',
        icon: '🎭',
      },
      {
        title: 'Endless Combination Possibilities',
        description: 'With hundreds of items to discover, Craft Brainrot offers virtually unlimited replay value. Each merge attempt can lead to surprising new discoveries, keeping players engaged for hours.',
        icon: '🔀',
      },
      {
        title: 'Cross-Platform Compatibility',
        description: 'Whether you\'re playing on mobile, tablet, or desktop, the game delivers a seamless experience across all devices. The intuitive touch controls make it perfect for gaming on the go.',
        icon: '📱',
      },
      {
        title: 'Vibrant Visual Design',
        description: 'The game features colorful, cartoon-style graphics that perfectly complement its humorous theme. Every character is instantly recognizable and bursting with personality.',
        icon: '🎨',
      },
      {
        title: 'Quick Play Sessions',
        description: 'The game is designed for both short casual sessions and extended gaming marathons. You can make meaningful progress in just a few minutes or lose yourself for hours exploring new combinations.',
        icon: '⚡',
      },
    ],
    howToPlay: {
      title: 'How to Play Craft Brainrot',
      description: 'Playing Craft Brainrot is simple to learn but endlessly entertaining. Here\'s how the game works and what you can expect:',
      sections: [
        {
          title: 'Basic Controls',
          content: [
            'Left Mouse Button: Click to interact with items and elements',
            'Click and Hold: Hold down to move items around the crafting area',
            'Touch Controls: On mobile devices, tap and hold to interact and move items',
          ],
        },
        {
          title: 'Getting Started',
          content: [
            'The core gameplay revolves around experimenting with different combinations of items from Italian meme culture.',
            'Players click on items to place them and try merging various elements together to discover new and often hilarious results.',
          ],
        },
        {
          title: 'Gameplay Mechanics',
          content: [
            'The game encourages creative experimentation as players combine different meme elements to unlock new characters and items.',
            'Each successful combination reveals something unexpected, keeping the gameplay fresh and entertaining.',
            'The simple click-and-merge mechanics make it accessible while the vast number of possible combinations provides depth for those who want to explore every possibility.',
          ],
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          question: 'Is Craft Brainrot free to play?',
          answer: 'Yes! Craft Brainrot is completely free to play with no hidden costs or mandatory purchases.',
        },
        {
          question: 'Can I play Craft Brainrot offline?',
          answer: 'Craft Brainrot requires an internet connection for the best experience, including saving progress and accessing the latest content updates.',
        },
        {
          question: 'What devices support Craft Brainrot?',
          answer: 'Craft Brainrot is compatible with virtually all modern devices, including smartphones, tablets, and computers with web browsers.',
        },
        {
          question: 'Are there any age restrictions for Craft Brainrot?',
          answer: 'Craft Brainrot is rated E for Everyone, making it suitable for players of all ages who enjoy puzzle and merge games.',
        },
      ],
    },
    gameEmbed: {
      title: 'Play Craft Brainrot Online',
      description: 'Ready to dive into the chaotic world of Craft Brainrot? Click the game below to start merging and discovering new combinations!',
      iframeSrc: '/game/craft-brainrot/',
    },
  }
} 