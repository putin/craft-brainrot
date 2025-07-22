import { Metadata } from 'next'
import { getContent } from './content'
import { GamePageTemplate } from '@/components/templates/GamePageTemplate'

export async function generateMetadata(): Promise<Metadata> {
  const content = getContent()
  
  return {
    title: content.meta.title,
    description: content.meta.description,
    keywords: content.meta.keywords,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      type: 'website',
    },
  }
}

export default function CraftBrainrotPage() {
  const content = getContent()
  
  // 转换为GamePageTemplate期望的格式
  const gameConfig = {
    metadata: {
      title: content.meta.title,
      description: content.meta.description,
      url: '/craft-brainrot',
    },
    content: {
      gameSection: {
        title: content.hero.title,
        game: {
          url: 'https://www.crazygames.com/game/craft-brainrot',
          title: 'craft-brainrot',
          externalUrl: 'https://www.crazygames.com/game/craft-brainrot'
        }
      },
      features: {
        title: "Game Features",
        items: content.features
      },
      whatIs: {
        title: content.hero.title,
        description: content.hero.description,
        logo: {
          src: content.hero.image,
          alt: content.hero.title
        }
      },
      howToPlay: {
        title: content.howToPlay.title,
        description: content.howToPlay.description,
        image: content.howToPlay.sections[0]?.content?.[0] || '',
        imageAlt: content.howToPlay.title
      },
      faq: {
        title: content.faq.title,
        items: content.faq.questions
      }
    }
  }
  
  return <GamePageTemplate gameConfig={gameConfig} />
} 