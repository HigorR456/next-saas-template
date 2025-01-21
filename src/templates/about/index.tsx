"use client"
import Layout from "@/layout";
import * as Style from "@/templates/about/styles"
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";
import 'react-loading-skeleton/dist/skeleton.css';

type AboutTemplateProps = {
  page: string
}

export default function AboutTemplate({ page }: AboutTemplateProps) {
  const head = useTranslations(page);
  const t = useTranslations(page);
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
        <div style={{ minHeight: "100vh" }}>
          <Style.Intro dangerouslySetInnerHTML={{__html: t.raw('intro')}} />
        </div>
      </Style.Wrapper>
    </Layout>
  );
}