import { Metadata, NextPage } from "next";
import { Locales } from "@/types";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";
import HowToHelp from "@/components/HowToHelp";
import ArticleItem from "@/components/ArticleItem/ArticleItem";

interface IDetailPageProps {
  params: {
    lang: Locales;
    details: string;
  };
}

export const generateMetadata = async ({
  params: { lang, details },
}: IDetailPageProps): Promise<Metadata> => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };
  const article = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=*&filters[slug][$eq]=${details}&locale=${lang}`,
    reqOptions,
  ).then((res) => res.json());

  return {
    title: article.data[0].attributes.title,
  };
};

const DetailsPage: NextPage<IDetailPageProps> = async ({
  params: { lang, details },
}) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  return (
    <section>
      <ArticleItem url={details} lang={lang} page="blog" />
      <HowToHelp data={t("howToHelp")} />
    </section>
  );
};

export default DetailsPage;
