"use client"
import SignIn from "@/components/sign-in";
import Layout from "@/layout";
import * as Style from "@/templates/home/styles"
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";

type HomeTemplateProps = {
  page: string
}

export default function HomeTemplate({ page }: HomeTemplateProps) {
  const head = useTranslations(page);
  const t = useTranslations("Common");
  const pathName = usePathname();

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "Product",
    name: head('head.name'),
    description: head('head.description'),
    category: "Productivity",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "152854",
      worstRating: "2",
      bestRating: "5"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "http://schema.org/InStock",
      url: head('head.url')
    }
  };

  return (
    <Layout
      pathName={pathName}
      title={head('head.title')}
      description={head('head.description')}
      imageUrl={head('head.imageUrl')}
      jsonLd={jsonLd}
    >
      <Style.Wrapper>
        <div style={{ minHeight: "100vh", marginBottom: "8rem" }}>
          <Style.Intro>
            <h2>{t('title')}</h2>
            <p>{t('description')}</p>
          </Style.Intro>

          <SignIn></SignIn>
        </div>
      </Style.Wrapper>
    </Layout>
  );
}