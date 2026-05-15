import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const partners = [
  {
    name: "Riddles For Kids",
    url: "https://riddlesforkids.app/parters",
    domain: "riddlesforkids.app",
    description:
      "A fun and educational platform packed with riddles designed for kids. Sharpen young minds with hundreds of brain-teasing puzzles perfect for all ages.",
    icon: "🧩",
    tag: "Educational",
  },
  {
    name: "Lyra Kids",
    url: "https://lyra.kids/resources",
    domain: "lyra.kids",
    description:
      "A curated resource hub for kids and parents — discover learning materials, activities, and creative content that make growing up joyful and enriching.",
    icon: "🌟",
    tag: "Resources",
  },
  {
    name: "Ragdoll Hit",
    url: "https://ragdollhit.co/partners",
    domain: "ragdollhit.co",
    description:
      "The home of hilarious ragdoll physics games. Enjoy chaotic, laugh-out-loud browser games that are easy to pick up and impossible to put down.",
    icon: "🎮",
    tag: "Games",
  },
];

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* 页面标题 */}
          <h1 className="text-4xl text-center font-bold mb-4">Our Partners</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            We're proud to collaborate with these amazing websites. Check them out!
          </p>

          {/* 合作伙伴卡片列表 */}
          <div className="grid gap-6 md:grid-cols-1">
            {partners.map((partner) => (
              <a
                key={partner.domain}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-card hover:border-primary/60 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 flex items-start gap-5">
                  {/* 图标 */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {partner.icon}
                  </div>

                  {/* 内容 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {partner.name}
                      </h2>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                        {partner.tag}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {partner.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                      {partner.domain}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* 底部说明 */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Interested in becoming a partner?{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary hover:underline font-medium"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartnersPage;
