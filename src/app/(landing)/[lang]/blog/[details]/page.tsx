import { NextPage } from "next";
import { Locales } from "@/types";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";
import HowToHelp from "@/components/HowToHelp";
import Header from "@/components/Header";
import ArticleItem from "../components/ArticleItem/ArticleItem";

interface IDetailPageProps {
  params: {
    lang: Locales;
  };
}

const DetailsPage: NextPage<IDetailPageProps> = async ({
  params: { lang },
}) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  return (
    <section>
      <Header
        data={{
          mainPage: "",
          blog: "",
          news: "",
        }}
        lang="en-US"
      />
      <ArticleItem data={t("details")} />
      <HowToHelp data={t("howToHelp")} />
    </section>
  );
};

export default DetailsPage;
