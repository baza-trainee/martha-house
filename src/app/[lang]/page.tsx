import { NextPage } from "next";
import HeroSection from "@/components/HeroSection";
import NeedHelp from "@/components/NeedHelp";
import CoreValuesSection from "@/components/CoreValuesSection";
import { getAllTranslations, getTranslation } from "@/utils/dictionary";
import { Locales } from "@/types";
import { HowToHelp } from "@/components";
import History from "@/components/CreationHistory/History";

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
      <History data={t("history")} />
      <CoreValuesSection data={t("values")} />
      <HowToHelp data={t("howToHelp")} />
    </>
  );
};

export default HomePage;
