import { NextPage } from "next";
import HeroSection from "@/components/HeroSection";
import NeedHelp from "@/components/NeedHelp";
import CoreValuesSection from "@/components/CoreValuesSection";
import { getAllTranslations, getTranslation } from "@/utils/dictionary";
import FAQSection from "@/components/FAQSection";
import { Locales } from "@/types";
import { HowToHelp } from "@/components";

interface IHomePageProps {
  params: {
    lang: Locales;
  };
}

const HomePage: NextPage<IHomePageProps> = async ({ params: { lang } }) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  return (
    <>
      <HeroSection data={t("hero")} />
      <NeedHelp data={t("needHelp")} />
      <HowToHelp data={t("howToHelp")} />
      <CoreValuesSection data={t("values")} />
      <FAQSection data={t("faqSection")} />
    </>
  );
};

export default HomePage;
