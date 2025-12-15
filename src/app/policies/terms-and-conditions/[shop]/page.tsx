import FixedUI from "@/components/FixedUI";
import TermsAndConditionHeader from "@/components/TermsAndConditionHeader";
import ShopTermsSection from "@/components/ShopTermsSection";
import Footer from "@/components/Footer";
import FirstSection from "@/components/FirstSection";
import { getShopData } from "@/lib/shopData";

type Props = {
  params: Promise<{
    shop: string;
  }>;
};

export default async function ShopTermsPage(props: Props) {
  const { shop } = await props.params;
  
  let data = null;
  try {
    data = await getShopData(shop); 
  } catch (error) {
    console.error("Rendering with null data due to fetch error.");
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