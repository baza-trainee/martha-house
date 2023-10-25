import { NextPage } from "next";
import { Locales } from "@/types";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";

interface IProps {
  params: {
    lang: Locales;
  };
}

const BlogPage: NextPage<IProps> = ({ params: { lang } }) => {
  const language = getAllTranslations(lang);
  const t = getTranslation(language);

  return <h1>{t("blog.title")}</h1>;
};

export default BlogPage;
