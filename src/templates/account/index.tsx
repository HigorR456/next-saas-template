"use client"
import Layout from "@/layout";
import * as Style from "./styles"
import { useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { PlanEnum } from "@/types";
import { useEffect, useState } from "react";
import LoadingDots from "@/components/loadingDots";
import Select from 'react-select';
import axios from 'axios';
import { prices } from "@/lib/stripe";

type AccountTemplateProps = {
  page: string;
  accountData: {
    stripe_url: string | null;
    subscription: string | null;
  };
}

export default function AccountTemplate({ page, accountData }: AccountTemplateProps) {
  const head = useTranslations(page);
  const router = useRouter();
  const t = useTranslations("Common");
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const planParam = searchParams?.get('plan');
  const [plan, setPlan] = useState<PlanEnum>(planParam as PlanEnum);
  const [loading, setLoading] = useState<boolean>(false);
  const currentSubscription = Object.keys(prices).find((key) => prices[key as PlanEnum] = accountData.subscription?.toString());

  useEffect(() => {
    if (plan === PlanEnum.starter) {
      setPlan(PlanEnum.starter)
    }
    
    if (plan === PlanEnum.premium) {
      setPlan(PlanEnum.premium)
    }
  }, [])
  
  const { data: session } = useSession();

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

  async function handleUpgrade() {

  }

  async function handleSubscribe() {
    setLoading(true);

    try {
      const res = await axios.post("/api/stripe/createCheckoutLink", { session, plan });
      router.push(res.data.url);

      setLoading(false);
    } catch(error) {
      console.error(error);
      setLoading(false);
    }
  }

  const planOptions = [
    { value: "starter", label: 'Starter' },
    { value: "premium", label: 'Premium' }
  ];

  return (
    <Layout
      pathName={pathName}
      title={head('head.title')}
      description={head('head.description')}
      imageUrl={head('head.imageUrl')}
      jsonLd={jsonLd}
    >
      <Style.Wrapper>
        <Style.AccountWrap>
          <h1>Account</h1>
          <p>Welcome back, {session?.user?.name}</p>

          <Style.BillingWrap>
            <h2>Your plan</h2>
            {accountData.subscription ? (
              <>
                <p>You are currently subscribed to <b>{currentSubscription}</b> plan.</p>
                <form onSubmit={(event) => {
                  event.preventDefault();
                  handleUpgrade();
                }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h3>Upgrade your plan</h3>
                    <Select
                      aria-label="Choose your plan" 
                      placeholder="Choose your plan"
                      required
                      isOptionDisabled={(option) => option.value === currentSubscription}
                      options={planOptions}
                      onChange={(e) => {
                        setPlan(e?.value as PlanEnum);
                      }}
                    />
                  </div>
                  <Style.Button type="submit" disabled={loading}>{loading ? <LoadingDots size={3} /> : "Upgrade now"}</Style.Button>
                </form>
              </>
            ) : (
              <>
                <p>You are not currently subscribed to any plan.</p>
                <form onSubmit={(event) => {
                  event.preventDefault();
                  handleSubscribe();
                }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h3>Choose your plan</h3>
                    <Select
                      aria-label="Choose your plan" 
                      placeholder="Choose your plan"
                      defaultValue={planOptions[planOptions.findIndex(option => option.value === plan)]}
                      required
                      options={planOptions}
                      onChange={(e) => {
                        setPlan(e?.value as PlanEnum);
                      }}
                    />
                  </div>
                  <Style.Button type="submit" disabled={loading}>{loading ? <LoadingDots size={3} /> : "Subscribe now"}</Style.Button>
                </form>
              </>
            )}
            {accountData.stripe_url && (
              <Style.HighlightBox>
                <h3>Manage your subscription on Stripe.</h3>
                <Style.Button>Open customer portal</Style.Button>
              </Style.HighlightBox>
            )}
          </Style.BillingWrap>
        </Style.AccountWrap>
      </Style.Wrapper>
    </Layout>
  );
}