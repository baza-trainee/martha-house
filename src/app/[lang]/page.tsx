import { NextPage } from "next";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
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
      <HeroComponent data={t("hero")} />
      <NeedHelp data={t("needHelp")} />
    </>
  );
};

export default HomePage;
