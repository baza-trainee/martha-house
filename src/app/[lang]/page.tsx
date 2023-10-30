import { NextPage } from "next";
import HeroSection from "@/components/HeroSection";
import NeedHelp from "@/components/NeedHelp";
import CoreValuesSection from "@/components/CoreValuesSection";
import { getAllTranslations, getTranslation } from "@/utils/dictionary";
import { Locales } from "@/types";
import HowToHelp from "@/components/HowToHelp/index";
import Support from "@/components/SupportProject/Support";
import Help from "@/components/Help/Help";
import History from "@/components/CreationHistory/History";
import { AboutComponent } from "@/components/About/AboutComponent";

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
      <Support data={t("support")} />
      <AboutComponent data={t("about")} />
      <Help data={t("help")} />
      <History data={t("history")} />
      <CoreValuesSection data={t("values")} />
      <HowToHelp data={t("howToHelp")} />
    </>
  );
};

export default HomePage;
