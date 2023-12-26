import { NextPage } from "next";
import { Locales } from "@/types";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";
import HowToHelp from "@/components/HowToHelp";
import NewsItem from "../components/NewsItem/NewsItem";

interface IDetailPageProps {
  params: {
    lang: Locales;
    details: string;
  };
}

const DetailsPage: NextPage<IDetailPageProps> = async ({
  params: { lang, details },
}) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  return (
    <section>
      <NewsItem url={details} lang={lang} />
      <HowToHelp data={t("howToHelp")} />
    </section>
  );
};

export default DetailsPage;
