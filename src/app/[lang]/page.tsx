import { NextPage } from "next";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import { getAllTranslations, getTranslation } from "@/utils/dictionary";
import { Locales } from "@/types";

interface IHomePageProps {
  params: {
    lang: Locales;
  };
}

const HomePage: NextPage<IHomePageProps> = async ({ params: { lang } }) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  return <HeroComponent data={t("hero")} />;
};

export default HomePage;
