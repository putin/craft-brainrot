import { Metadata } from 'next';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Partners - ${siteConfig.name}`,
  description: `Our trusted partners and friends. Explore great websites and resources recommended by ${siteConfig.name}.`,
  alternates: {
    canonical: '/partners',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
