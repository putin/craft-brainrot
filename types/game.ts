export interface GameContent {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    cta: {
      text: string;
      href: string;
    };
  };
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  howToPlay: {
    title: string;
    description: string;
    sections: Array<{
      title: string;
      content: string[];
    }>;
  };
  faq: {
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  gameEmbed: {
    title: string;
    description: string;
    iframeSrc: string;
  };
} 