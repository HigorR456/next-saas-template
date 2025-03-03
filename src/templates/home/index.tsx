"use client"
import SignIn from "@/components/auth/google-sign-in";
import Layout from "@/layout";
import * as Style from "@/templates/home/styles"
import { SessionType } from "@/types";
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";

type HomeTemplateProps = {
  page: string
  session: SessionType | null
}

export default function HomeTemplate({ session, page }: HomeTemplateProps) {
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
      <Style.GridDotsBackground>
        <Style.Wrapper>
          <div>
            <Style.Intro>
              <h1>{t('title')}</h1>
              <p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></p>
            </Style.Intro>
          </div>
        </Style.Wrapper>
      </Style.GridDotsBackground>

      <Style.SolidBackground>
        <Style.PricingWrap>
          <Style.PlanBox>
            <h2>Starter Plan</h2>
            <p>All the basics of a starter plan.</p>
            <p><span>$0.10</span><span>/month</span></p>
            {session ? (
              <a href="/account?plan=starter">Subscribe</a>
            ): (
              <SignIn showGoogleIcon={false} callbackUrl="/account">Subscribe</SignIn>
            )}
          </Style.PlanBox>

          <Style.PlanBox>
            <h2>Premium Plan</h2>
            <p>All you expect of a premium plan.</p>
            <p><span>$2.99</span><span>/month</span></p>
            {session ? (
              <a href="/account?plan=premium">Subscribe</a>
            ): (
              <SignIn showGoogleIcon={false} callbackUrl="/account">Subscribe</SignIn>
            )}
          </Style.PlanBox>

          <Style.PlanBox>
            <h2>Advanced Plan</h2>
            <p>Bonus features inlcuded.</p>
            <p><span>---</span><span>/----</span></p>
            {session ? (
              <a href="/">Whishlist</a>
            ): (
              <SignIn showGoogleIcon={false} callbackUrl="/account">Whishlist</SignIn>
            )}
          </Style.PlanBox>
        </Style.PricingWrap>
      </Style.SolidBackground>

      <Style.GridDotsBackground>
        <Style.Wrapper>
          <Style.Intro>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Style.Intro>
        </Style.Wrapper>
      </Style.GridDotsBackground>
    </Layout>
  );
}