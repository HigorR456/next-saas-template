import AccountTemplate from "@/templates/account";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SessionType } from "@/types";
import { createCustomerIfNull, generateCustomerPortalLink, hasSubscription } from "@/lib/stripe";

export default async function Account() {
  const session: SessionType | null = await getSession();

  if (!session) {
    return redirect("/")
  }

  const user = await createCustomerIfNull(session);
  const stripe_url = await generateCustomerPortalLink("" + user?.stripe_customer_id);

  const subscription = await hasSubscription(session);

  return (
    <AccountTemplate
      page="HomePage"
      accountData={{
        stripe_url,
        subscription,
    }}
    />
  )
}

