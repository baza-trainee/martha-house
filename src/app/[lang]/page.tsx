import { NextPage } from "next";
import HeroSection from "@/components/HeroSection/HeroSection";
import { getAllTranslations, getTranslation } from "@/utils/dictionary";
import { Locales } from "@/types";
import NeedHelp from "@/components/NeedHelp/NeedHelp";

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
    </>
  );
};

export default HomePage;
