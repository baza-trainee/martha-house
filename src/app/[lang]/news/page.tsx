import { NextPage } from "next";
import { Locales } from "@/types";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";

interface IProps {
  params: {
    lang: Locales;
  };
}

const NewsPage: NextPage<IProps> = ({ params: { lang } }) => {
  const language = getAllTranslations(lang);
  const t = getTranslation(language);

  return (
    <main>
      <h1>{t("news.title")}</h1>
    </main>
  );
};

export default NewsPage;
