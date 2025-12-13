import FixedUI from "@/components/FixedUI";
import TermsAndConditionHeader from "@/components/TermsAndConditionHeader";
import ShopTermsSection from "@/components/ShopTermsSection";
import Footer from "@/components/Footer";
import FirstSection from "@/components/FirstSection";

type Props = {
  params: {
    shop: string;
  };
};

export default async function ShopTermsPage({ params }: Props) {
  const { shop } = params;
  const res = await fetch(
    `https://api.skorpion.in/fetchShopDetails?shopName=${shop}`,
    { cache: "no-store" }
  );

  let data = null;

  try {
    data = await res.json();
  } catch (error) {
    console.error("Failed to parse shop data:", error);
    data = null;
  }

  return (
    <main>
      <FirstSection />
      <FixedUI />
      <TermsAndConditionHeader />
      <ShopTermsSection shopData={data} />
      <Footer />
    </main>
  );
}
